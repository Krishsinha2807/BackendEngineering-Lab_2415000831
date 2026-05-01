const express = require("express");
const cookieParser = require("cookie-parser");
const sessionMiddleware = require("./config/session");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(sessionMiddleware);
app.use("/", authRoutes);
app.use("/", userRoutes);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});