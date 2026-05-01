import Task from "../models/Task.js";
import Project from "../models/Project.js";

// ✅ Create Task (Admin)
export const createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      project: projectId,
      assignedTo,
      dueDate,
      createdBy: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Tasks (for logged-in user)
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      $or: [
        { assignedTo: req.user._id },
        { createdBy: req.user._id },
      ],
    })
      .populate("assignedTo", "name email")
      .populate("project", "name");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Task Status
export const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findById(req.params.taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Dashboard
export const getDashboard = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user._id });

    const total = tasks.length;
    const completed = tasks.filter(t => t.status === "completed").length;
    const pending = tasks.filter(t => t.status !== "completed").length;

    const overdue = tasks.filter(
      t => t.dueDate && t.dueDate < new Date() && t.status !== "completed"
    ).length;

    res.json({
      total,
      completed,
      pending,
      overdue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};