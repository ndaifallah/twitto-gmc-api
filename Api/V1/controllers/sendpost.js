var Post = require("../models/post");

let SendPost = async (req, res) => {
  console.log(Post);
  let user_name = req.body.name;
  let text = req.body.text;
  let doc = new Post({
    user_name: user_name,
    text: text,
    date: new Date(),
  });
  await doc.save();
  res.status(200);
  res.send("ok");
};
module.exports = SendPost;
