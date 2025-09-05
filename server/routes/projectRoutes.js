import express from 'express';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

const router = express.Router();

// Public routes
// Get all projects
router.get('/', getProjects);

// Get a single project by ID
router.get('/:id', getProjectById);

// Create a new project
router.post('/', createProject);

// Update a project
router.put('/:id', updateProject);

// Delete a project
router.delete('/:id', deleteProject);

export default router;