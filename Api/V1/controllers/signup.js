var Account = require("../models/users");

let SignUp = async (req, res) => {
	console.log(Account);
	let user_name = req.body.user_name;

	Account.find({ user_name: user_name }, async (err, results) => {
		if (err == null && results.length > 0) {
			res.status(300);
			res.send("Not ok").json({ status: "This Account was already created" });
		} else {
			try {
				let doc = new Account({
					user_name: user_name,
					password: password,
				});
				await doc.save();
				res.status(200);
				res.send("ok").json({ status: "User signed up succefully" });
			} catch (err) {
				res
					.status(300)
					.send("not ok")
					.json({ status: "Could not create account" });
			}
		}
	});
};
module.exports = SignUp;
