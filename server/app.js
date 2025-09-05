import dotenv from 'dotenv';
dotenv.config();
// app.js
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.send('👍 API up and running'));

// Test route for auth
app.post('/api/test-auth', (req, res) => {
  console.log('Test auth route hit');
  console.log('Request body:', req.body);
  res.json({ success: true, message: 'Test auth route working' });
});

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

export default app;
