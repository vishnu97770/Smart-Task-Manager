const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const task = await Task.create({ title });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete Task
const deleteTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    }   catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask, getTasks, deleteTask };