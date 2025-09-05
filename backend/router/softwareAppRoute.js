import express from "express";
import {
  addApp,
  deleteApp,
  getAllApps,
} from "../controller/softwareAppController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addApp);
router.delete("/delete/:id", isAuthenticated, deleteApp);
router.get("/getAll", getAllApps);

export default router;
