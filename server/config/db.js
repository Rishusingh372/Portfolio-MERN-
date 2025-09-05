/* eslint-env node */
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI ||
  'mongodb+srv://hasib22134:SJ00SNgs2aTnFWNG@cluster0.jhf2kpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
