import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  projectUrl: String,
}, { timestamps: true });

export default mongoose.model('Project', ProjectSchema);