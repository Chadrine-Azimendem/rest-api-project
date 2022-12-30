// specify the endpoints here
const { Router } = require("express");
const {
  createAccount,
  readUsers,
  deleteUser,
  updateUser,
  userLogin,
  greetings,
  userLogout,
  readOneUser,
} = require("./userControllers");

const { hashPassword, matchePasswds } = require("../middleware/passwordVal");
const password = require("../middleware/password");
const { validateEmail } = require("../middleware/emailVal");
const { tokenCheck } = require("../middleware/token");

const userRouter = Router();
userRouter.post("/createAccount", password, hashPassword, createAccount);
userRouter.post("/userLogin", validateEmail, matchePasswds, userLogin);
userRouter.get("/readData", tokenCheck, readUsers);
userRouter.delete("/deleteData", tokenCheck, deleteUser);
userRouter.put("/updateUser", tokenCheck, updateUser);
// userRouter.get("/readUsers", tokenCheck, readUsers) // protected endpoint
userRouter.get("/logout", userLogout);
userRouter.get("/greet", greetings);
userRouter.get("/user/:id", readOneUser);

module.exports = userRouter;
