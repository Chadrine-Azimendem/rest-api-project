const User = require("./userModel");
const jwt = require("jsonwebtoken");

// test
exports.greetings = (req, res) => {
  res.json({ greetting: "Our controller is working propperly" });
};

// create a user
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

exports.updateUser = async (req, res) => {
  try {
    // define the filter
    const filter = { username: req.body.username };
    const update = { [req.body.field]: req.body.to };
    // await User.updateOne(
    //   filter,
    //   //use the key that we pass in the body of the request so we can dynamically update any key in our
    //   //database. the value is what we want to update it too
    //   update
    // );
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

exports.userLogin = async (req, res) => {
  console.log("middlewares passed and controller has been called");
  try {
    // check if the user's username exist in the database
    const user = await User.findOne({ username: req.body.username });
    console.log(`Success! ${user.username} exists in the database`);

    //generate a jwt token for the user
    const token = await jwt.sign({ _id: user._id }, process.env.SECRET);
    console.log(token);
    res
      .status(202)
      .send({ message: `${user.username} exists in the database`, token });
  } catch (error) {
    console.log(error);
    console.log("username not found");
    res.status(501).send({ error: error.message });
  }
};
