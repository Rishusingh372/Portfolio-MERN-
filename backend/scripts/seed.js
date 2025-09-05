import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../models/userSchema.js";

dotenv.config({ path: "backend/config/config.env" });

const seedDatabase = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    console.log("DB_NAME:", process.env.DB_NAME);
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log("Connected to DB");

    const defaultUser = {
      _id: "66f10026b24a1c4032f406c4", // Hardcoded ID from userController
      fullName: "Default User",
      email: "default@example.com",
      phone: "1234567890",
      aboutMe: "This is the default user for the portfolio.",
      password: "defaultpassword", // Will be hashed by pre-save hook
      avatar: {
        public_id: "default_avatar",
        url: "https://via.placeholder.com/150", // Placeholder URL
      },
      resume: {
        public_id: "default_resume",
        url: "https://via.placeholder.com/150", // Placeholder URL
      },
      portfolioURL: "http://localhost:3000",
    };

    // Check if user already exists
    const existingUser = await User.findById(defaultUser._id);
    if (existingUser) {
      console.log("Default user already exists");
      return;
    }

    // Create the user
    const user = new User(defaultUser);
    await user.save();
    console.log("Default user seeded successfully");

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
