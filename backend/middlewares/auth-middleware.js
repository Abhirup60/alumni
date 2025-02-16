const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized HTTP, token not provided" });
  }
  
  console.log("token from auth-middleware", token);

  // trim the token
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("trimmed token: ", jwtToken);

  try {
    const isverified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("isvrified: ", isverified);

    const userData = await User.findOne({ email: isverified.email }).select({ password: 0 });
    console.log(userData);

    req.user = userData;

    // req.token = token;
    // req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized. Invalid token" });
  }
};

module.exports = authMiddleware;
