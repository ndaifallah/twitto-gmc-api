var Post = require("../models/post");

let SendPost = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(300).send("Auth not authorized");
  }
};
module.exports = SendPost;
