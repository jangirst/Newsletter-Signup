//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  console.log(req.body);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  res.sendFile(__dirname + "/success.html");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
