const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var weight = Number(req.body.wt);
    var height = Number(req.body.ht);
    var bmi = weight / (height * height);
    res.send("Your Body Mass Index is: " + bmi);
});

app.listen(3000, function() {
    console.log("Server has started on port 3000");
});