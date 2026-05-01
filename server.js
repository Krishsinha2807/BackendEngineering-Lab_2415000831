const express = require("express");
const cookieParser = require("cookie-parser");
const sessionMiddleware = require("./config/session");
const authroutes = require("./routes/authroutes");
const userroutes = require("./routes/userroutes");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(sessionMiddleware);
app.use("/", authroutes);
app.use("/", userroutes);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
