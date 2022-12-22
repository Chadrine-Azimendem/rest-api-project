const User = require("./userModel");

// create a user
exports.createUser = async (req, res) => {
  console.log(req);
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({
      message: `User with username ${req.body.username} has been successfully created `,
    });
  } catch (error) {
    console.log(error);
    // send internal error status and the error message
    res.status(500).send({ error: error.message });
  }
};
