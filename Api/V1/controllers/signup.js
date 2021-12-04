var Account = require("../models/users");

let SignUp = async (req, res) => {
  console.log(Account);
  let user_name = req.body.user_name;
  let password = req.body.password;
  Account.find({ user_name: user_name }, async (err, results) => {
    if (err == null && results.length > 0) {
      res.status(300).json({ status: "This Account was already created" });
    } else {
      try {
        let doc = new Account({
          user_name: user_name,
          password: password,
        });
        await doc.save();
        res.status(200).json({ status: "User signed up succefully" });
      } catch (err) {
        res.status(300).json({ status: "Could not create account" });
      }
    }
  });
};
module.exports = SignUp;
