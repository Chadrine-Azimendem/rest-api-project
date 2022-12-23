// import password-validator library
const passwordValidator = require("password-validator");
// Create a schema forthe password
const passwordSchema = new passwordValidator();
// make schema with rules that the password should follow
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
  .oneOf(["Passw0rd£", "Password123$"]); // Blacklist these values

console.log("passwordSchema:", passwordSchema);

// verify password mtches the passwordSchema

module.exports = async (req, res, next) => {
  try {
    if (await passwordSchema.validate(req.body.password)) {
      next();
    } else {
      throw new Error(
        `Password invalid: ${passwordSchema.validate(`${req.body.password}`, {
          list: true,
        })}`
      );
    }
  } catch (error) {
    // console.log(error);
    res.status(500).send({ error: error.message });
  }
};
