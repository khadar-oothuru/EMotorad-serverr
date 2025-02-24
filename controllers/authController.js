const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Email/Password Register
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Email/Password Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found. Please register first." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// // Google OAuth Success
// exports.googleAuthSuccess = (req, res) => {
//   try {
//     if (!req.user) {
//       return res.status(401).json({ error: "Authentication failed" });
//     }

//     const token = generateToken(req.user);
//     res.redirect(`http://localhost:5173?token=${token}`);
//   } catch (error) {
//     console.error("Google OAuth error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


exports.googleAuthSuccess = (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const token = generateToken(req.user);

    // Get redirect URL from query parameter or default to localhost
    const redirectUrl = "https://emotorad.vercel.app" 
    

    res.redirect(`${redirectUrl}?token=${token}`);
  } catch (error) {
    console.error("Google OAuth error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

