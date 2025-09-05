import express from "express";
import {
  register,
  login,
  logout,
  getUser,
  updateProfile,
  updatePassword,
  getUserForPortfolio,
  forgotPassword,
  resetPassword,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/profile", isAuthenticated, getUser);
router.get("/profile/portfolio", getUserForPortfolio);
router.put("/update/profile", isAuthenticated, updateProfile);
router.put("/update/password", isAuthenticated, updatePassword);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);

export default router;
