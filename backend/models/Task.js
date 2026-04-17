const mongoose = require("mongoose");        // Acts as bridge between Node.js and MongoDB
const taskSchema = new mongoose.Schema({     // Created Schema - it's a blueprint of our data , which defines our field database document will have like - { What does a Task look loke? }
    title: { 
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });  // It will add automatic fields, createdAt -> when task was created and updatedAt -> when task was last updated

module.exports = mongoose.model("Task", taskSchema);    // Create and exports a Model - "Task" -> model name , taskSchema -> structure