// specify the endpoints here
const { Router } = require("express");
const { createUser } = require("./userControllers");

const userRouter = Router();
userRouter.post("/createAUser", createUser);
