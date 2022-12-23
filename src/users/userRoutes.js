// specify the endpoints here
const { Router } = require("express");
const { createUser } = require("./userControllers");

const password = require("../middleware/password");

const userRouter = Router();
userRouter.post("/createAUser", password, createUser);

module.exports = userRouter;
