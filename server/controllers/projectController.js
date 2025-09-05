/* eslint-env node */
import Project from '../models/Project.js';

/**
 * GET /api/projects
 * Returns all projects, sorted by creation date descending
 */
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET /api/projects/:id
 * Returns a single project by ID
 */
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

/**
 * POST /api/projects
 * Creates a new project
 */
export const createProject = async (req, res) => {
  const { title, description, imageUrl, projectUrl } = req.body;
  try {
    const newProj = new Project({ title, description, imageUrl, projectUrl });
    const saved = await newProj.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

/**
 * PUT /api/projects/:id
 * Updates an existing project
 */
export const updateProject = async (req, res) => {
  try {
    console.log('Update project route hit');
    console.log('Project ID:', req.params.id);
    console.log('Request body:', req.body);

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      console.log('Project not found');
      return res.status(404).json({ message: 'Project not found' });
    }

    console.log('Project updated successfully');
    res.json(updated);
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(400).json({ message: err.message });
  }
};

/**
 * DELETE /api/projects/:id
 * Deletes a project
 */
export const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
