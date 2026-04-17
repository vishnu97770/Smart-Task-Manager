const mongoose = require("mongoose");                                   //import mongoose , used to connect Node.js with MongoDB , it also helps to create schemas & models.
const connectDB = async () => {                                         // creating an  async functio called connectDB , reason of async - Database connections takes time and we use async/await to handle it properly. 
    try {   
        console.log("Trying to connect to MongoDB...")                                                            // used for error handling , if something fails it goes to catch.
        const conn = await mongoose.connect(process.env.MONGO_URI);     // connecting to MDB, and our database URL from .env , await waits until connection is successful , conn stores connection details
        console.log(`MongoDB Connected: ${conn.connection.host}`);      // it shows the database host 
    } catch (error) {                                                   // if connection fails this block runs
        console.error("MongoDB Connection Failed:");
        console.error(error.message);
        console.error(error);                                           // prints the error in terminal
        process.exit(1);                                                // stops the server immediately
    }
};
module.exports = connectDB;                                             // closing functon, makes this function usable in other files              