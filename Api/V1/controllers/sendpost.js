var Post = require("../models/post");
var jwt = require("jsonwebtoken");

let SendPost = async (req, res) => {
	let token = req.header("AuthToken");
	let text = req.body.text;

	try {
		if (!token || token == "") {
			return res.status(300).json({ error: "Oups" });
		}
		let user_info = jwt.verify(token, "Hello world");

		// let user_name = req.body.name;
		let doc = new Post({
			user: user_info.user_id,
			text: text,
			date: new Date(),
		});
		await doc.save();
		res.status(200);
		res.send("ok");
	} catch (err) {
		console.log(err);
		res.status(300).json({ status: "Auth not autorized" });
	}
};
module.exports = SendPost;
