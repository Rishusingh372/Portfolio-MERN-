import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Skill } from "../models/skillSchema.js";
import ErrorHandler from "../middlewares/error.js";
import cloudinary from "cloudinary";

export const addSkill = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Skill icon required!", 400));
  }

  const { svg } = req.files;
  const { title, proficiency } = req.body;

  if (!title || !proficiency) {
    return next(new ErrorHandler("title and proficiency required!", 400));
  }

  const cloudinaryResIcon = await cloudinary.uploader.upload(svg.tempFilePath, {
    folder: "PortfolioSkills",
  });

  if (!cloudinaryResIcon || cloudinaryResIcon.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResIcon.error || "Unknown Cloudinary Error!"
    );
    return next(
      new ErrorHandler("Failed to upload skill icon to cloudinary!", 500)
    );
  }

  const skill = await Skill.create({
    title,
    proficiency,
    svg: {
      public_id: cloudinaryResIcon.public_id,
      url: cloudinaryResIcon.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "New skill added!",
    skill,
  });
});

export const updateSkill = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let skill = await Skill.findById(id);

  if (!skill) {
    return next(new ErrorHandler("Skill not found!", 400));
  }

  const { proficiency } = req.body;

  if (!proficiency) {
    return next(new ErrorHandler("No proficiency to update!", 400));
  }

  skill = await Skill.findByIdAndUpdate(
    id,
    { proficiency },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Skill updated!",
    skill,
  });
});

export const deleteSkill = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const skill = await Skill.findById(id);

  if (!skill) {
    return next(new ErrorHandler("Skill not found!", 400));
  }

  const skillIconID = skill.svg.public_id;
  await cloudinary.uploader.destroy(skillIconID);
  await skill.deleteOne();

  res.status(200).json({
    success: true,
    message: "Skill deleted successfully!",
  });
});

export const getAllSkills = catchAsyncErrors(async (req, res, next) => {
  const skills = await Skill.find();

  res.status(200).json({
    success: true,
    skills,
  });
});
