import Project from "../models/Project.js";
import User from "../models/User.js";


export const createProject = async (req, res) => {
  try {
    const { name, description, members } = req.body;

    const project = await Project.create({
      name,
      description,
      createdBy: req.user._id,
      members: members || [],
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const addMembers = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { members } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Resolve each entry: if it looks like an email, find the user by email
    const resolvedIds = [];
    for (const entry of members) {
      if (entry.includes && entry.includes("@")) {
        const foundUser = await User.findOne({ email: entry });
        if (!foundUser) {
          return res.status(404).json({ message: `No user found with email: ${entry}` });
        }
        resolvedIds.push(foundUser._id);
      } else {
        resolvedIds.push(entry);
      }
    }

    // Avoid duplicate members
    const existingIds = project.members.map((m) => m.toString());
    const newIds = resolvedIds.filter((id) => !existingIds.includes(id.toString()));
    project.members.push(...newIds);

    await project.save();

    // Return with populated member names
    const populated = await Project.findById(projectId).populate("members", "name email");
    res.json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      $or: [
        { createdBy: req.user._id },
        { members: req.user._id },
      ],
    }).populate("members", "name email");

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};