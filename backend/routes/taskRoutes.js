const express = require("express");
const router = express.Router();

const { createTask, getTasks, deleteTask } = require("../controllers/taskController");

// Create Task
router.post("/tasks", createTask);

// Get All Tasks
router.get("/tasks", getTasks);

// Delete Tasks
router.delete("/tasks/:id", deleteTask);

module.exports = router;