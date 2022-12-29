// require the mongoose library
const mongoose = require("mongoose");
//
const Schema = mongoose.Schema;

const userModel = new Schema({
  username: {
    type: String,
    require: true,
    unique: [true, "username required"],
  },
  email: {
    type: String,
    require: [true, "Email required"],
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    require: [true, "please enter a password "],
  },

  role: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("webpage_user", userModel);

// export User
module.exports = User;
