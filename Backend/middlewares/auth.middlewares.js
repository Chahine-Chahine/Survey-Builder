const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
require('dotenv').config();


const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    res.status(403).send("Forbidden");
  } else {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email }).select(
      "-password"
    );
    req.user = user;
    next();
  }
};

module.exports = {
  authMiddleware,
};
