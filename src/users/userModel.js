// require the mongoose library
const mongoose = require("mongoose");
//
const Schema = mongoose.Schema;

const passwordSchema = require("../utils/validations");

// console.log(passwordSchema.validate("validPASS123")); //=>false
// console.log(passwordSchema.validate("validPASS123£")); //=>true
// console.log(passwordSchema.validate("validP ASS123£")); //=>false

const userModel = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Email required"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    require: true,
    validate: {
      validator: () => {
        passwordSchema.validate(this.password);
      },
      message:
        "invalid password: password must have min 8 and max 20 length, one uppercase, one lowercase, one number and one symbol",
    },
  },
});

const User = mongoose.model("user", userModel);

// export User
module.exports = User;
