const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/MyUser");
const auth = require("../middelware/authmiddelware");
require("dotenv").config();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, course, contact } = req.body;

    if (!name || !email || !password || !course || !contact) {
      return res.json({ message: "All fields are required" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      course,
      contact,
    });

    await newUser.save();
    res.json({ message: "Register successful" });

  } catch (error) {
    console.error(error);
    res.json({ message: "Registration failed" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Password not matched" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login successful", token });

  } catch (error) {
    console.error(error);
    res.json({ message: "Login failed" });
  }
});

module.exports = router;

// Protected route to get all users
router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.json({ message: "Failed to fetch users" });
  }
});
