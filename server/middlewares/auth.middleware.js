const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(400).json({ msg: "user not verified" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(400).json({ msg: "user not found" });

    req.user = user;  // attach user to req object for downstream use
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = verifyToken;
