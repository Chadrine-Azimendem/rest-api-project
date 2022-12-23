require("./db/connection");
// require express library
const express = require("express");
const userRouter = require("./users/userRoutes");

// call express Application
const app = express();

const port = process.env.PORT || 5001;

// tell the server to use json format data only
app.use(express.json());
app.use(userRouter);
// dfine a port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
