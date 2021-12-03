var Post = require("../models/post");

let Getposts = async (req, res) => {
  let user = req.query.user_name || "";
  console.log(user);
  Post.find(user == "" ? {} : { user_name: user }, (err, text) => {
    if (!err) {
      res.status(200);
      res.json(text);
    } else {
      res.status(300);
      res.send("NOT OK");
    }
  });
};
module.exports = Getposts;
