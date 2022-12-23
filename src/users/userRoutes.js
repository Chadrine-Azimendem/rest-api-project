// specify the endpoints here
const { Router } = require("express");
const {
  createUser,
  readUsers,
  deleteUser,
  updateUser,
} = require("./userControllers");

const password = require("../middleware/password");

const userRouter = Router();
userRouter.post("/createAUser", password, createUser);
userRouter.get("/readData", readUsers);
userRouter.delete("/deleteData", deleteUser);
userRouter.put("/updateUser", updateUser);

module.exports = userRouter;
