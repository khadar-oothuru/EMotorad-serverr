const express = require("express");
const passport = require("passport");
const { register, login, googleAuthSuccess } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), googleAuthSuccess);

module.exports = router;
