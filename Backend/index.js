const express = require("express");
const cors = require("cors"); 
const { connectToMongoDB } = require("./configs/mongoDB.configs");
const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

app.get("/", (req, res) => {
    console.log("Hello!");
});

// auth route
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);
// survey route
const surveyRoutes = require("./routes/survey.routes");
const { authMiddleware } = require("./middlewares/auth.middlewares");
app.use("/survey", authMiddleware, surveyRoutes);


app.listen(8000, () => {
    console.log("Server listening on PORT:", 8000);
    connectToMongoDB();
});
