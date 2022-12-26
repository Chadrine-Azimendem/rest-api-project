// specify the endpoints here
const { Router } = require("express");
const {
  createUser,
  readUsers,
  deleteUser,
  updateUser,
  userLogin,
} = require("./userControllers");

const { hashPassword, matchePasswds } = require("../middleware/passwordVal");
const password = require("../middleware/password");
const { validateEmail } = require("../middleware/emailVal");

const userRouter = Router();
userRouter.post("/createAUser", password, hashPassword, createUser);
userRouter.post("/userLogin", validateEmail, matchePasswds, userLogin);
userRouter.get("/readData", readUsers);
userRouter.delete("/deleteData", deleteUser);
userRouter.put("/updateUser", updateUser);

module.exports = userRouter;
