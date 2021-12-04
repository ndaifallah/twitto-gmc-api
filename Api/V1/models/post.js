var mongoose = require("mongoose");
var User = require("./users");

const Post = mongoose.model("post", {
	user: {
		type: mongoose.Types.ObjectId,
		ref: User,
	},
	user_name: String,
	text: String,
	date: Date,
});

module.exports = Post;
