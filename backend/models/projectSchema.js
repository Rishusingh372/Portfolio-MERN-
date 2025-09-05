import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title Required!"] },
  description: { type: String, required: [true, "Description Required!"] },
  gitRepoLink: { type: String, required: [true, "Github repo link Required!"] },
  projectLink: { type: String, required: [true, "Project link Required!"] },
  technologies: {
    type: String,
    required: [true, "Technologies used Required!"],
  },
  stack: { type: String, required: [true, "Tech stack name Required!"] },
  deployed: { type: String, required: [true, "Deployed or not Required!"] },
  projectBanner: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

export const Project = mongoose.model("Project", projectSchema);
