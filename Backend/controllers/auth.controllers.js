const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const aragona = require("argon2");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log('Found user:', user);
    if (!user) {
      console.log('User not found'); 
      return res.status(400).json({ status: "error", message: "Invalid username/password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(password);
    console.log(user.password);
    console.log('Password comparison result:', isValidPassword);
    if (!isValidPassword) {
      return res.status(400).json({ status: "error", message: "Invalid password" });
    }

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON();

    const token = jwt.sign(
      { ...userDetails, role: user.role }, 
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

  if (!username || !email || !password || !first_name || !last_name) {
    return res.status(400).json({ status: "error", message: "All fields are required" });
  }

  try {
    const userRole = role || "user";
    const user = new User({
      username,
      email,
      password,
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
