const User = require("./userModel");

// create a user
exports.createUser = async (req, res) => {
  console.log("New user created:", req.body);
  try {
    await User.create(req.body);
    res.status(201).send({
      message: `User with username ${req.body.username} has been successfully created `,
    });
  } catch (error) {
    console.log(error);
    // send internal error status and the error message
    res.status(500).send({ error: error.message });
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
