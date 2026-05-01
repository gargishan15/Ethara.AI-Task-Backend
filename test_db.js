import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Task from "./models/Task.js";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const users = await User.find({});
  console.log("Users:", users.map(u => ({ id: u._id, email: u.email, role: u.role })));
  process.exit(0);
};

run();
