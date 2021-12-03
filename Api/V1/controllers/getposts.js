var Post = require("../models/post");

let Getposts = async (req, res) => {
	let user = req.query.user_name || "";
	// Get the token from header
	let token = req.header("AuthToken");
	if (!token || token.length == 0) {
		console.log("Token not sent yet", token);
		resp.status(403).send("You're not authorized, login first");
	} else {
		try {
			let decoded_token = jwt.verify(token, "Hello world");
			console.log(decoded_token);

			Post.find(user == "" ? {} : { user_name: user }, (err, text) => {
				if (!err) {
					res.status(200);
					res.json(text);
				} else {
					res.status(300);
					res.send("NOT OK");
				}
			});
		} catch (err) {
			console.log("Token invalid");
			resp.status(403).send("You're not authorized, login first");
		}
	}
	console.log(user);
};
module.exports = Getposts;
