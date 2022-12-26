const User = require("../users/userModel");

exports.validateEmail = async (req, res, next) => {
  try {
    const userObj = await User.findOne({ username: req.body.username });
    console.log("User found is:", userObj);
    if (userObj && req.body.email === userObj.email) {
      console.log("the email is corect");
      next();
    } else {
      throw Error("incorect username or password");
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: error.message });
  }
};
