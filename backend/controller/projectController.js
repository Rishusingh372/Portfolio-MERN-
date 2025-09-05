import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Project } from "../models/projectSchema.js";
import ErrorHandler from "../middlewares/error.js";
import cloudinary from "cloudinary";

export const addProject = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Project banner image required!", 400));
  }

  const { projectBanner } = req.files;
  const {
    title,
    description,
    gitRepoLink,
    projectLink,
    technologies,
    stack,
    deployed,
  } = req.body;

  if (
    !title ||
    !description ||
    !gitRepoLink ||
    !projectLink ||
    !technologies ||
    !stack ||
    !deployed
  ) {
    return next(new ErrorHandler("All fields are required!", 400));
  }

  const cloudinaryResIcon = await cloudinary.uploader.upload(
    projectBanner.tempFilePath,
    { folder: "PortfolioProjects" }
  );

  if (!cloudinaryResIcon || cloudinaryResIcon.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResIcon.error || "Unknown Cloudinary Error!"
    );
    return next(
      new ErrorHandler("Failed to upload project banner to cloudinary!", 500)
    );
  }

  const project = await Project.create({
    title,
    description,
    gitRepoLink,
    projectLink,
    technologies,
    stack,
    deployed,
    projectBanner: {
      public_id: cloudinaryResIcon.public_id,
      url: cloudinaryResIcon.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "New Project added!",
    project,
  });
});

export const updateProject = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let project = await Project.findById(id);

  if (!project) {
    return next(new ErrorHandler("Project not found!", 400));
  }

  const newProjectData = {
    title: req.body.title,
    description: req.body.description,
    gitRepoLink: req.body.gitRepoLink,
    projectLink: req.body.projectLink,
    technologies: req.body.technologies,
    stack: req.body.stack,
    deployed: req.body.deployed,
  };

  let notUpdatable = Object.values(newProjectData).filter(
    (value) => value !== undefined
  ).length;

  if (req.files && req.files.projectBanner) {
    notUpdatable = 1;
    const projectBanner = req.files.projectBanner;
    const projectBannerId = project.projectBanner.public_id;
    await cloudinary.uploader.destroy(projectBannerId);
    const cloudinaryResProjectBanner = await cloudinary.uploader.upload(
      projectBanner.tempFilePath,
      { folder: "PortfolioProjects" }
    );

    newProjectData.projectBanner = {
      public_id: cloudinaryResProjectBanner.public_id,
      url: cloudinaryResProjectBanner.secure_url,
    };
  }

  if (!notUpdatable) {
    return next(new ErrorHandler("Nothing to update!", 500));
  }

  project = await Project.findByIdAndUpdate(id, newProjectData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Project updated!",
    project,
  });
});

export const deleteProject = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id);

  if (!project) {
    return next(new ErrorHandler("Project not found!", 400));
  }

  const skillIconID = project.projectBanner.public_id;
  await cloudinary.uploader.destroy(skillIconID);
  await Project.deleteOne();

  res.status(200).json({
    success: true,
    message: "Project deleted successfully!",
  });
});

export const getAllProjects = catchAsyncErrors(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).json({
    success: true,
    projects,
  });
});

export const getSingleProject = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id);

  if (!project) {
    return next(new ErrorHandler("Project not found!", 400));
  }

  res.status(200).json({
    success: true,
    project,
  });
});
