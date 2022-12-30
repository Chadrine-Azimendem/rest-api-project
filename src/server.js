require("./db/connection");
// require express library
const express = require("express");
const userRouter = require("./users/userRoutes");
// import cookie-parser library
const cookieParser = require("cookie-parser");
// import errorHandler module
const errorHandler = require("./middleware/errorHandlers");
// call express Application
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hi from Node js");
// });

// dfine a port
const port = process.env.PORT || 5001;

// tell the server to use json format data only
app.use(express.json());
// tell the server to use the routes
app.use(userRouter);
// tell the server to use the cookieParser
app.use(cookieParser);
// tell the server to use the errorHandler module
app.use(errorHandler);
// tell the server to listen to predefined port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
