const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let items = ["Buy food", "Cook food", "Eat food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    kindOfDay: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  console.log("[items]", items);
  console.log("[itemsLength]", items.length);
  res.redirect("/");
});

app.listen(port, function () {
  console.log("Server has started on port 3000!");
});

// Через switch
// app.get("/", function (req, res) {
//   let today = new Date();
//   let currentDay = today.getDay();
//   let day = "";
//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       console.log("Error: current day is equal to:", currentDay);
//   }
//   res.render("list", { kindOfDay: day });
// });

// Через if
// app.get("/", function (req, res) {
//   let today = new Date();
//   let currentDay = today.getDay();
//   console.log("[currentDay]", currentDay);
//   let day = "";
//   if (currentDay === 0) {
//     day = "Sunday";
//   } else if (currentDay === 1) {
//     day = "Monday";
//   } else if (currentDay === 2) {
//     day = "Tuesday";
//   } else if (currentDay === 3) {
//     day = "Wednesday";
//   } else if (currentDay === 4) {
//     day = "Thursday";
//   } else if (currentDay === 5) {
//     day = "Friday";
//   } else {
//     day = "Saturday";
//   }
//   res.render("list", { kindOfDay: day });
// });
