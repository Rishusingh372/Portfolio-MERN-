import express from "express";
import {
  addTimeline,
  deleteTimeline,
  getAllTimelines,
} from "../controller/timelineController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addTimeline);
router.delete("/delete/:id", isAuthenticated, deleteTimeline);
router.get("/getAll", getAllTimelines);

export default router;
