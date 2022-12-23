let passwordValidator = require("password-validator");

// Create a schema
let passwordSchema = new passwordValidator();

// Add properties to it
passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(20) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .symbols() // Must have symbols
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

// console.log(passwordSchema.validate("validPASS123")); //=>false
// console.log(passwordSchema.validate("validPASS123£")); //=>true
// console.log(passwordSchema.validate("validP ASS123£")); //=>false

module.exports = passwordSchema;
