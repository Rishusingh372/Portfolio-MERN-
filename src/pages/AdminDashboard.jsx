// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject, updateProject, deleteProject } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    projectUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const loadProjects = async () => {
    try {
      setLoading(true);
      const res = await fetchProjects();
      setProjects(res.data);
      setError(null);
    } catch (err) {
      console.error('Failed to load projects:', err);
      setError('Failed to load projects. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (editMode && currentProjectId) {
        // Update existing project
        await updateProject(currentProjectId, formData);
      } else {
        // Create new project
        await createProject(formData);
      }

      // Reset form and state
      setFormData({ title: '', description: '', imageUrl: '', projectUrl: '' });
      setEditMode(false);
      setCurrentProjectId(null);
      loadProjects();
      setError(null);
    } catch (err) {
      console.error(`Failed to ${editMode ? 'update' : 'add'} project:`, err);
      setError(`Failed to ${editMode ? 'update' : 'add'} project. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl || '',
      projectUrl: project.projectUrl || ''
    });
    setEditMode(true);
    setCurrentProjectId(project._id);

    // Scroll to form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCancel = () => {
    setFormData({ title: '', description: '', imageUrl: '', projectUrl: '' });
    setEditMode(false);
    setCurrentProjectId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      setLoading(true);
      await deleteProject(id);

      // If deleting the project being edited, reset the form
      if (id === currentProjectId) {
        handleCancel();
      }

      loadProjects();
      setError(null);
    } catch (err) {
      console.error('Delete failed:', err);
      setError('Failed to delete project. Please try again.');
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      {error && (
        <div className="bg-red-900 text-white p-4 rounded mb-4">
          {error}
        </div>
      )}

      {/* Add/Edit Project Form */}
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editMode ? 'Edit Project' : 'Add New Project'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="p-2 rounded bg-gray-700 text-white"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            className="p-2 rounded bg-gray-700 text-white"
            type="text"
            name="projectUrl"
            placeholder="Project URL"
            value={formData.projectUrl}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            className="p-2 rounded bg-gray-700 text-white"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            disabled={loading}
          />
          <textarea
            className="p-2 rounded bg-gray-700 text-white col-span-full"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            disabled={loading}
            rows="4"
          />
        </div>
        <div className="flex mt-4 gap-2">
          <button
            type="submit"
            className={`px-4 py-2 rounded ${
              loading
                ? 'bg-gray-500 cursor-not-allowed'
                : editMode
                  ? 'bg-green-600 hover:bg-green-500'
                  : 'bg-indigo-600 hover:bg-indigo-500'
            }`}
            disabled={loading}
          >
            {loading
              ? (editMode ? 'Updating...' : 'Adding...')
              : (editMode ? 'Update Project' : 'Add Project')
            }
          </button>

          {editMode && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              disabled={loading}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Project List */}
      <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
      {loading && projects.length === 0 ? (
        <div className="text-center p-8">Loading projects...</div>
      ) : (
        <div className="grid gap-4">
          {projects.length === 0 ? (
            <div className="text-center p-4 bg-gray-800 rounded">No projects found. Add your first project above.</div>
          ) : (
            projects.map((project) => (
              <div key={project._id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.imageUrl && (
                    <div className="sm:w-1/4">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  )}
                  <div className={project.imageUrl ? "sm:w-3/4" : "w-full"}>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400 my-2">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-sm"
                      >
                        View Project
                      </a>
                      <button
                        onClick={() => handleEdit(project)}
                        className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-sm"
                        disabled={loading}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded text-sm"
                        disabled={loading}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;


