var mongoose = require("mongoose");

const Account = mongoose.model("account", {
	user_name: String,
	password: String,
	email: String,
});
module.exports = Account;
