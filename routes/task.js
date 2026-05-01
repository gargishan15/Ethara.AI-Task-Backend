import express from "express";
import protect from "../middlewares/auth.js";
import authorizeRoles from "../middlewares/role.js";
import { createTask, getTasks, updateTaskStatus, getDashboard } from "../controllers/task.js";

const router = express.Router();

// Admin only
router.post("/", protect, authorizeRoles("admin"), createTask);

// All users
router.get("/", protect, getTasks);

// Update task
router.put("/:taskId", protect, updateTaskStatus);

// Dashboard
router.get("/dashboard", protect, getDashboard);

export default router;