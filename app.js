const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();
  if (currentDay === 6 || currentDay === 0) {
    res.write("It's weekend!");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(port, function () {
  console.log("Server has started on port 3000!");
});
