// specify the endpoints here
const { Router } = require("express");
const {
  createUser,
  readUsers,
  deleteUser,
  updateUser,
} = require("./userControllers");

const { hashPassword } = require("../middleware/index");

const password = require("../middleware/password");

const userRouter = Router();
userRouter.post("/createAUser", password, hashPassword, createUser);
userRouter.get("/readData", readUsers);
userRouter.delete("/deleteData", deleteUser);
userRouter.put("/updateUser", updateUser);

module.exports = userRouter;
