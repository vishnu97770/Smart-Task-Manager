const Task = require("../models/Task");     // This gives youu access to database operations

//Create Task
const createTask = async (req, res) => {     // req-> data coming from frontend, res-> response sent back to frontend , async-> Database operations take time - we use await.
    try {
        const { title } = req.body;          // extracts title from request body.
        const task = await Task.create({ title });    // Creates a new task in MongoDB, Uses your Task model , await waits until data is saved.
        res.status(201).json(task);                   // Sends response to client , 201 means created successfully , .json(task) - sends created task data.
    } catch (error) {                         
        res.status(500).json({ message: error.message });  //sends error response , 500 -> server error, error.message -> actual issue.
    }
};
module.exports = { createTask };  // Exports function so it can be used in routes.