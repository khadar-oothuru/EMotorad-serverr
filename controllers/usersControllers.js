const Users = require("../models/Users");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, instagram, youtube } = req.body;
    const newUser = new Users({ name, instagram, youtube });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Error adding user" });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: "Error fetching users" });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const { name, instagram, youtube } = req.body;
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      { name, instagram, youtube },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: "Error updating user" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting user" });
  }
};
