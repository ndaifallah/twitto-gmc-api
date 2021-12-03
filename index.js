var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var app = express();
var Post = require("./Api/V1/models/post");
var Account = require("./Api/V1/models/users");
var Getposts = require("./Api/V1/controllers/getposts");
var SendPost = require("./Api/V1/controllers/sendpost");
var Login = require("./Api/V1/controllers/login");

app.use(bodyParser());
app.use(cors());

app.get("/getallposts", Getposts);
app.post("/sendposts", SendPost);
app.post("/login", Login);
mongoose
  .connect(
    "mongodb+srv://hello:world@cluster0.foo8h.mongodb.net/twitter?retryWrites=true&w=majority"
  )
  .then((db) => {
    console.log("Database connected");
  })
  .catch((err) => {});

app.listen(780);
