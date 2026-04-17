const express = require("express");   // import express.js , which is a backend framework for Node.js, it helps to create servers, APIs, routes easily.
const cors = require("cors");         // cors (middleware) , it allows frontend to talk to our backend.
require("dotenv").config();           // loads the enovironment variables from .env file ,ex:- PORT DB URL, API keys.

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

// Creating the Server
const app = express();                // creates an express application , the main control.

//connectDB
connectDB();

//Middleware setup
app.use(cors());
app.use(express.json());              // converts incoming JSON to JavaScript object,  required when sending data from frontend (POST, PUT)
app.use("/api", taskRoutes);
//Test Route
app.get("/",(req, res) => {           // , / = homepage route, req = request from client, res = response send back.
    res.send("API is running...");    // when user opens the localhost then he will able to see this...
});

// Setting Port
const PORT = process.env.PORT || 5000;  // 1st tries .env file,  if not found then it will uses 5000.

//Starting the Server
app.listen(PORT, () => {                              // server begins listening for requests.
    console.log(`Server running on port ${PORT}`)     // confirms server is working.
});