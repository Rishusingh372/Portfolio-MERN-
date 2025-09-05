import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import User from './models/User.js';
import connectDB from './config/db.js';

// Default admin credentials
const adminUser = {
  username: 'admin',
  password: 'admin123',
  isAdmin: true
};

// Connect to database and create admin user
const createAdmin = async () => {
  try {
    await connectDB();
    
    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: adminUser.username });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
    } else {
      // Create new admin user
      const user = new User(adminUser);
      await user.save();
      console.log('Admin user created successfully');
      console.log('Username:', adminUser.username);
      console.log('Password:', adminUser.password);
    }
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdmin();
