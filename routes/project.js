import express from "express";
import protect from "../middlewares/auth.js";
import authorizeRoles from "../middlewares/role.js";
import { createProject, addMembers, getProjects } from "../controllers/project.js";
import Project from "../models/Project.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("admin"), createProject);
router.put("/:projectId/members", protect, authorizeRoles("admin"), addMembers);
router.get("/", protect, getProjects);

export default router;


