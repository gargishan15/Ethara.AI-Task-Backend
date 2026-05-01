import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  try {
    const adminId = "69f3668cce639fc853482cfa"; // ishan@test.com
    const token = jwt.sign({ id: adminId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    console.log("Token:", token);

    const taskRes = await axios.post(
      "http://localhost:5000/api/tasks",
      {
        title: "Test Task",
        description: "Test Desc",
        projectId: "69f3adcf9149e20ff2162545", // any dummy or existing
        assignedTo: "", // empty string
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log("Task created:", taskRes.data);
  } catch (error) {
    console.error("API Error:", error.response ? error.response.status : error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  }
};

run();
