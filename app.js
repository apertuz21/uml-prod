require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.port;

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log("Listening at port: " + port);
});
