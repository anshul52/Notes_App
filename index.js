const express = require("express");
const port = 3000;
require("dotenv").config();
const app = express();
const logger = require("morgan");
const dbConnect = require("./config/db.js");
const routes = require("./routes");
dbConnect();

app.use(logger("dev"));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`server is running on the port ${port} `);
});
