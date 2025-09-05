import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import Project from './models/Project.js';
import connectDB from './config/db.js';

// Sample projects data
const projectsData = [
  {
    title: "Centralized Health Management System",
    description: "A comprehensive healthcare management system that centralizes patient records, appointment scheduling, and medical history tracking. Built with modern web technologies to improve healthcare service delivery.",
    imageUrl: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?ga=GA1.1.1892419892.1733752133&semt=ais_hybrid&w=740",
    projectUrl: "https://github.com/ga1ib/Centralized-Health-Management-System"
  },
  {
    title: "Daak Ticket",
    description: "An efficient ticket management system for handling customer support requests and tracking issue resolution. Features include ticket categorization, priority assignment, and status tracking.",
    imageUrl: "../src/assets/Images/daakticket.png",
    projectUrl: "https://github.com/ga1ib/Daak_Ticket"
  },
  {
    title: "Portfolio Website",
    description: "A dynamic portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Features responsive design, project showcase, and contact form functionality.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    projectUrl: "https://github.com/ga1ib/portfolio-mern"
  }
];

// Connect to database
const seedDB = async () => {
  try {
    await connectDB();
    
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');
    
    // Insert new projects
    const createdProjects = await Project.insertMany(projectsData);
    console.log(`Added ${createdProjects.length} projects to the database`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
