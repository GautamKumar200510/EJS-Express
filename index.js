// const express = require("express");
// const path = require("path");

// const app = express();

// const port = 8080;

// // Set EJS as view engine
// app.set("view engine", "ejs");

// // Set views directory
// app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//     res.render("home");
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });

// INSTGRAM

const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;

    const instaData = require("./data.json");

    console.log(username);
    console.log(instaData[username]);

    const data = instaData[username];

    res.render("instagram", { data });
});

// app.get("/ig/:username", (req, res) => {
//     const { username } = req.params;

//     const followers = [
//         "Rahul",
//         "Priya",
//         "Rohit",
//         "Anjali",
//         "Aman"
//     ];

//     res.render("instagram", { username, followers });
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// ROLLDICE

// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 8080;

// // Set EJS
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Roll Dice Route
// app.get("/rolldice", (req, res) => {
//     let diceVal = Math.floor(Math.random() * 6) + 1;

//     res.render("rolldice", { diceVal });
// });

// // Start Server
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });
