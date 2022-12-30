const User = require("./userModel");
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");
const ErrorResponse = require("../utils/errorResponse");

// test
exports.greetings = (req, res) => {
  res.json({ greetting: "Our controller is working propperly" });
};

// create a users account
exports.createAccount = async (req, res) => {
  console.log("New user created:", req.body);
  try {
    await User.create(req.body);
    res.status(201).send({
      message: `User with username ${req.body.username} has been successfully created `,
    });
  } catch (error) {
    console.log(error);
    // send internal error status and the error message
    res.status(400).send({ success: false, error: error.message });
  }
};

// list all users in the database
exports.readUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users: users });
  } catch (error) {
    console.log(error);
    // send internal error status and the error message
    res.status(500).send({ error: error.message });
  }
};

// update any field of the users data
exports.updateUser = async (req, res) => {
  try {
    // define the filter
    const filter = { username: req.body.username };
    // define the field the is been updated
    const update = { [req.body.field]: req.body.to };

    let updatedUser = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    // log updated values in the console
    console.log(updatedUser);
    res.status(200).send({
      message: `the ${req.body.field} has been updated to ${req.body.to}`,
    });
  } catch (error) {
    console.log(error);
    // send internal error status and the error message
    res.status(500).send({ error: error.message });
  }
};

// delete user controller
exports.deleteUser = async (req, res) => {
  try {
    const filter = { username: req.body.username };
    const deletedUser = await User.deleteOne(filter);
    // test
    console.log("user deleted", deletedUser);
    res
      .status(200)
      .send({ outcome: `user ${req.body.username} successfully deleted` });
  } catch (error) {
    console.log(error);
    // send internal error status and the error message
    res.status(501).send({ error: error.message });
  }
};

// login controller
exports.userLogin = async (req, res, next) => {
  try {
    // check if the user's username exist in the database
    const user = await User.findOne({ username: req.body.username });
    console.log(`Success! ${user.username} exists in the database`);

    //generate a jwt token when the user is logged in
    const token = await jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: 3600,
    });
    console.log(token);
    // save token in a cookie
    res.cookie("token", token, { httpOnly: true });
    res.status(202).send({ success: true, token: token });
  } catch (error) {
    console.log(error);
    next(new ErrorResponse("username not found", 501));
  }
};

// user logout not working yet fix it
exports.userLogout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res
      .status(200)
      .send({ success: true, message: "user logged out successfully" });
  } catch (error) {
    console.log(error);
    next(new ErrorResponse(error.message, 501));
  }
};

// read single user with custom error handling

exports.readOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    next(new ErrorResponse(`User with id: ${req.params.id} not found`, 404));
  }
};
