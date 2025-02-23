const Applicants = require("../models/Applicants");

// Create a new applicant
exports.createApplicant = async (req, res) => {
  try {
    const { name, instagram, youtube } = req.body;
    const newApplicant = new Applicants({ name, instagram, youtube });
    await newApplicant.save();
    res.status(201).json(newApplicant);
  } catch (err) {
    res.status(400).json({ error: "Error adding applicant" });
  }
};

// Get all applicants
exports.getApplicants = async (req, res) => {
  try {
    const applicantsList = await Applicants.find();
    res.status(200).json(applicantsList);
  } catch (err) {
    res.status(400).json({ error: "Error fetching applicants" });
  }
};

// Update an applicant
exports.updateApplicant = async (req, res) => {
  try {
    const { name, instagram, youtube } = req.body;
    const updatedApplicant = await Applicants.findByIdAndUpdate(
      req.params.id,
      { name, instagram, youtube },
      { new: true }
    );
    res.status(200).json(updatedApplicant);
  } catch (err) {
    res.status(400).json({ error: "Error updating applicant" });
  }
};

// Delete an applicant
exports.deleteApplicant = async (req, res) => {
  try {
    await Applicants.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Applicant deleted" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting applicant" });
  }
};
