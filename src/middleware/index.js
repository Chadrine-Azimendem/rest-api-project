// import bcrypt
const bcrypt = require("bcrypt");

const User = require("../users/userModel");

// hash user password with salting of 12 saltRounds
exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    next();
  } catch (error) {
    console.log(error);
    res.status(412).send({ error: error.message });
  }
};
