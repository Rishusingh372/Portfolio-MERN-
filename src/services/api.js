import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// Set auth token for any request
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

// Auth endpoints
export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const getCurrentUser = () => api.get('/auth/me');

// Projects endpoints
export const fetchProjects = () => api.get('/projects');
export const fetchProjectById = (id) => api.get(`/projects/${id}`);
export const createProject = (projectData) => api.post('/projects', projectData);

export const updateProject = (id, projectData) => {
  // Use axios instance with configured baseURL
  return api.put(`/projects/${id}`, projectData);
};

export const deleteProject = (id) => {
  // Use axios instance with configured baseURL
  return api.delete(`/projects/${id}`);
};

// Contact endpoints
export const submitContactForm = (contactData) => api.post('/contact', contactData);

export { setAuthToken };