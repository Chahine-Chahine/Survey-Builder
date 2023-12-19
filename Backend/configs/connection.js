const mongoose = require("mongoose");

// Connect to the database "Mongodb"
const connectToMongoDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/surveydb");
    const connection = mongoose.connection;
    connection.on("error", (error) => {
        console.log("failed to connect to mongodb: ", error);
    });
    //open the connection once and remains
    connection.once("open", ()=>{
        console.log("Connected to MongoDb...");
    });

};

module.exports = {connectToMongoDB};