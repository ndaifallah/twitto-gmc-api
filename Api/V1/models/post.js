var mongoose = require("mongoose");

const Post = mongoose.model("post", {
  user_name: String,
  text: String,
  date: Date,
});

module.exports = Post;
