import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { v2 as cloudinary } from "cloudinary";
import { generateToken } from "../utils/jwtToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";
import resetPassHtml from "../emailTemplate/resetPassword.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Avatar and Resume Required!", 400));
  }

  const { avatar, resume } = req.files;

  const cloudinaryResAvatar = await cloudinary.uploader.upload(
    avatar.tempFilePath,
    { folder: "PortfolioAvatar" }
  );
  // .then((res) => console.log(res))
  // .catch((err) => console.error(err));

  if (!cloudinaryResAvatar || cloudinaryResAvatar.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResAvatar.error || "Unknown Cloudinary Error!"
    );

    return next(
      new ErrorHandler("Failed to upload avatar to cloudinary!", 500)
    );
  }

  const cloudinaryResResume = await cloudinary.uploader.upload(
    resume.tempFilePath,
    { folder: "PortfolioResume" }
  );

  if (!cloudinaryResResume || cloudinaryResResume.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResResume.error || "Unknown Cloudinary Error!"
    );

    return next(
      new ErrorHandler("Failed to upload resume to cloudinary!", 500)
    );
  }

  const {
    fullName,
    email,
    phone,
    aboutMe,
    password,
    portfolioURL,
    linkedInURL,
    githubURL,
    instaURL,
    fbURL,
    hackerRankURL,
  } = req.body;

  const user = await User.create({
    fullName,
    email: email.toLowerCase(),
    phone,
    aboutMe,
    password,
    portfolioURL,
    linkedInURL,
    githubURL,
    instaURL,
    fbURL,
    hackerRankURL,
    avatar: {
      public_id: cloudinaryResAvatar.public_id,
      url: cloudinaryResAvatar.secure_url,
    },
    resume: {
      public_id: cloudinaryResResume.public_id,
      url: cloudinaryResResume.secure_url,
    },
  });

  // test it properly
  generateToken(user, "User Registered!", 201, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Email and Password are required!"));
  }

  const user = await User.findOne({ email: email.toLowerCase() }).select(
    "+password"
  );

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password!"));
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email or Password!"));
  }

  generateToken(user, "Logged In!", 200, res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie(process.env.COOKIE_NAME, "", {
      maxAge: 0,
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged out!",
    });
});

export const getUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    fullName: req.body.fullName,
    email: req.body.email.toLowerCase(),
    phone: req.body.phone,
    aboutMe: req.body.aboutMe,
    portfolioURL: req.body.portfolioURL,
    linkedInURL: req.body.linkedInURL,
    githubURL: req.body.githubURL,
    instaURL: req.body.instaURL,
    fbURL: req.body.fbURL,
    hackerRankURL: req.body.hackerRankURL,
  };

  let notUpdatable = Object.values(newUserData).filter(
    (value) => value !== undefined
  ).length;

  if (req.files && req.files.avatar) {
    notUpdatable = 1;
    const avatar = req.files.avatar;
    const user = await User.findById(req.user.id);
    const profileImgId = user.avatar.public_id;
    await cloudinary.uploader.destroy(profileImgId);
    const cloudinaryResAvatar = await cloudinary.uploader.upload(
      avatar.tempFilePath,
      { folder: "PortfolioAvatar" }
    );
    newUserData.avatar = {
      public_id: cloudinaryResAvatar.public_id,
      url: cloudinaryResAvatar.secure_url,
    };
  }

  if (req.files && req.files.resume) {
    notUpdatable = 1;
    const resume = req.files.resume;
    const user = await User.findById(req.user.id);
    const resumeImgId = user.resume.public_id;
    await cloudinary.uploader.destroy(resumeImgId);
    const cloudinaryResResume = await cloudinary.uploader.upload(
      resume.tempFilePath,
      { folder: "PortfolioResume" }
    );
    newUserData.resume = {
      public_id: cloudinaryResResume.public_id,
      url: cloudinaryResResume.secure_url,
    };
  }

  if (!notUpdatable) {
    return next(new ErrorHandler("Nothing to update!", 500));
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Profile Updated!",
    user,
  });
});

export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return next(new ErrorHandler("Please fill all the fields!", 400));
  }

  if (newPassword !== confirmPassword) {
    return next(
      new ErrorHandler("New Password and Confirm Password do not match!", 400)
    );
  }

  const user = await User.findById(req.user.id).select("+password");
  const isPasswordMatch = await user.comparePassword(currentPassword);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Incorrect password!", 400));
  }

  if (currentPassword === newPassword) {
    return next(new ErrorHandler("New password is same as old password!", 500));
  }

  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password Updated!",
  });
});

export const getUserForPortfolio = catchAsyncErrors(async (req, res, next) => {
  // default user
  const id = "66f10026b24a1c4032f406c4";
  const user = await User.findById(id);
  res.status(200).json({
    success: true,
    user,
  });
});

export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  if (!req.body.email) {
    return next(new ErrorHandler("Email required!", 400));
  }

  const user = await User.findOne({ email: req.body.email.toLowerCase() });

  if (!user) {
    return next(new ErrorHandler("User not found!", 400));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPassUrl = `${process.env.DASHBOARD_URL}/password/reset/${resetToken}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Personal Portfolio Dashboard Recovery Password",
      message: resetPassHtml(resetPassUrl),
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully!`,
    });
  } catch (error) {
    user.resetPassExpire = undefined;
    user.resetPassToken = undefined;
    await user.save();
    return next(new ErrorHandler(error.message, 500));
  }
});

export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  if (!req.body.password || !req.body.confirmPassword) {
    return next(
      new ErrorHandler("Password and Confirm Password required!", 400)
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHandler("Password and Confirm Password do not match!", 400)
    );
  }

  const { token } = req.params;

  const resetPassToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPassToken,
    resetPassExpire: { $gt: Date.now() },
  }).select("+password");

  if (!user) {
    return next(
      new ErrorHandler("Reset Password token has been expired!", 400)
    );
  }

  const isPasswordMatch = await user.comparePassword(req.body.password);

  if (isPasswordMatch) {
    return next(new ErrorHandler("New password is same as old password!", 500));
  }

  user.password = req.body.password;
  user.resetPassExpire = undefined;
  user.resetPassToken = undefined;

  await user.save();
  return res.status(200).json({
    success: true,
    message: "Password Reset Successfully!",
  });
  // generateToken(user, "Password Reset Successfully!", 200, res);
});
