import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { SoftwareApp } from "../models/softwareAppSchema.js";
import ErrorHandler from "../middlewares/error.js";
import cloudinary from "cloudinary";

export const addApp = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Software app icon required!", 400));
  }

  const { svg } = req.files;
  const { name } = req.body;

  if (!name) {
    return next(new ErrorHandler("Software name required!", 400));
  }

  const cloudinaryResIcon = await cloudinary.uploader.upload(svg.tempFilePath, {
    folder: "PortfolioApps",
  });

  if (!cloudinaryResIcon || cloudinaryResIcon.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResIcon.error || "Unknown Cloudinary Error!"
    );
    return next(
      new ErrorHandler("Failed to upload software icon to cloudinary!", 500)
    );
  }

  const softwareApp = await SoftwareApp.create({
    name,
    svg: {
      public_id: cloudinaryResIcon.public_id,
      url: cloudinaryResIcon.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "New software app added!",
    softwareApp,
  });
});

export const deleteApp = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const softwareApp = await SoftwareApp.findById(id);

  if (!softwareApp) {
    return next(new ErrorHandler("Software not found!", 400));
  }

  const softwareAppIconID = softwareApp.svg.public_id;
  await cloudinary.uploader.destroy(softwareAppIconID);
  await softwareApp.deleteOne();

  res.status(200).json({
    success: true,
    message: "Software deleted successfully!",
  });
});

export const getAllApps = catchAsyncErrors(async (req, res, next) => {
  const softwares = await SoftwareApp.find();

  res.status(200).json({
    success: true,
    softwares,
  });
});
