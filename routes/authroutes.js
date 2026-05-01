const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Welcome to Student Exam Portal");
});
router.post("/login", (req, res) => {
  const { username, role } = req.body;

  if (!username || !role) {
    return res.send("Please provide username and role");
  }
  req.session.user = { username, role };
  res.cookie("role", role);

  res.send(`Logged in as ${username} with role ${role}`);
});
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("role");
    res.send("Logged out successfully");
  });
});

module.exports = router;