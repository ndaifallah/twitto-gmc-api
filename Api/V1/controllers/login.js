let jwt = require("jsonwebtoken");
let Account = require("../models/users");

const Login = async (req, resp) => {
  console.log(req.body);
  let user = req.body.user_name || "";
  let password = req.body.password || "";
  // Verifaction de l'identité de la personne
  let token_data = undefined;
  Account.find({ user_name: user, password: password }, (err, accounts) => {
    // console.log(messages);
    if (err == null && accounts.length > 0) {
      let account = accounts[0];
      console.log(account);

      token_data = {
        user_id: account._id,
        user_name: account.user_name,
      };

      let token = jwt.sign(token_data, "Hello world");

      resp.status(200).json({
        status: "succeded",
        token: token,
      });
    } else {
      resp
        .status(300)
        .json({ status: "Token creation denied! try again in a bit " });
    }
  });
};

module.exports = Login;
