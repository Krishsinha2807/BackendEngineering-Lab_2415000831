
const isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    return res.send("Access denied. Please login first.");
  }
  next();
};
const isAdmin = (req, res, next) => {
  if (req.session.user.role !== "admin") {
    return res.send("Access denied. Admins only.");
  }
  next();
};

module.exports = { isLoggedIn, isAdmin };