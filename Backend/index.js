const express = require("express");
const cors = require("cors"); // Import the cors middleware
const { connectToMongoDB } = require("./configs/mongoDB.configs");
const app = express();

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

require("dotenv").config();

app.get("/", (req, res) => {
    console.log("Hello!");
});

// auth route
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// to do routes
// const todoRoutes = require("./routes/todo.routes");
// const { authMiddleware } = require("./middlewares/auth.middleware");
// app.use("/todo", authMiddleware, todoRoutes);

app.listen(8000, () => {
    console.log("Server listening on PORT:", 8000);
    connectToMongoDB();
});
