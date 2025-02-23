require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
require("./config/passportSetup");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("EMotorad Server !");
});

app.use("/auth", authRoutes);

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`server running on https://localhost:${port}`);
});
