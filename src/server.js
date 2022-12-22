require("./db/connection");

// require express library
const express = require("express");

// call express Application
const app = express();

// dfine a port
const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
