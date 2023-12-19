const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ status: "error", message: "Invalid username/password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ status: "error", message: "Invalid username/password" });
    }

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON();

    const token = jwt.sign(
      { ...userDetails },
      process.env.JWT_SECRET,
      { expiresIn: "2 days" }
    );

    res.status(200).json({
      status: "success",
      user: userDetails,
      token,
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

const register = async (req, res) => {
  const { username, email, password, first_name, last_name, profile_pic, role } = req.body;

  if (!username || !email || !password || !first_name || !last_name ) {
    return res.status(400).json({ status: "error", message: "All fields are required" });
  }

  try {
    const userRole = role || "user";
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      first_name,
      last_name,
      profile_pic,
      role: userRole,
    });

    await user.save();

    res.status(200).json({ status: "success", user });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

module.exports = {
  login,
  register,
};
