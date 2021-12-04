var Account = require("../models/users");

let SignUp = async (req, res) => {
  console.log(Account);
  let user_name = req.body.user_name;
  let password = req.body.password;
  Account.find(
    { user_name: user_name, password: password },
    async (err, results) => {
      if (err == null && results.length > 0) {
        res.status(300);
        res.send("Account already created");
      } else {
        try {
          let doc = new Account({
            user_name: user_name,
            password: password,
          });
          await doc.save();
          res.status(200);
          res.send("ok");
        } catch (err) {
          res.status(300).send("heyy");
        }
      }
    }
  );
};
module.exports = SignUp;
