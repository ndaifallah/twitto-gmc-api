var Post = require("../models/post");
let jwt = require("jsonwebtoken");

let Getposts = async (req, res) => {
	let user = req.body.user_name || "";
	let id = req.body._id || "";
	// Get the token from header
	let token = req.header("AuthToken");
	console.log(token);
	if (!token || token.length == 0) {
		console.log("Token not sent yet", token);
		resp.status(403).send("User not founds");
	} else {
		try {
			let decoded_token = jwt.verify(token, "Hello world");
			console.log(decoded_token);

			Post.find({ user_name: "" })
				.populate("user")
				.exec((err, text) => {
					console.log(text);
					if (err == null) {
						res.status(200);
						res.json(text);
					} else {
						res.status(300);
						res.send("NOT OK");
					}
				});
		} catch (err) {
			console.log("Token invalid", err);
			res.status(403).send("You're not authorized, login first");
		}
	}
	console.log(user);
};
module.exports = Getposts;
