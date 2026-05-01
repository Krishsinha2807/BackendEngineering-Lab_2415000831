const express = require("express");
const router = express.Router();
const { isLoggedIn, isAdmin } = require("../middleware/auth");
router.get("/dashboard", isLoggedIn, (req, res) => {
  const { username, role } = req.session.user;
  res.send(`Welcome ${username}, you are logged in as ${role}`);
});
router.get("/admin", isLoggedIn, isAdmin, (req, res) => {
  res.send("Welcome to Admin Panel");
});

module.exports = router;