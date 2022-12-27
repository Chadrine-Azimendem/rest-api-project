const jwt = require("jsonwebtoken");
const User = require("../users/userModel");

exports.tokenCheck = async (req, res, next) => {
  try {
    //get the token
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("token:", token);

    const decodedToken = await jwt.verify(token, process.env.SECRET);
    console.log("The decoded token is:", decodedToken);

    // find the user with id decodedToken._id in the users database
    const user = await User.findById(decodedToken._id);

    console.log("the matching user is:", user);

    if (user) {
      next();
    } else {
      throw new Error("user is not authorised");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
