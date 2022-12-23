require("./db/connection");
const userRouter = require("./users/userRoutes");
// require express library
const express = require("express");

// call express Application
const app = express();

const port = process.env.PORT || 5001;
app.use(express.json());
app.use(userRouter);
// dfine a port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
