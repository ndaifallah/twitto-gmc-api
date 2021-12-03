let jwt = require("jsonwebtoken");
let Account = require("../models/users");

const Login = async (req, resp) => {
  console.log(req.body);
  let user = req.query.username || "";
  let password = req.query.password || "";
  // Verifaction de l'identité de la personne
  let token_data = {
    ...req.body,
  };
  Account.find(
    user == "" && password == "" ? {} : { user_name: user, password: password },
    (err, messages) => {
      if (!err) {
        let token = jwt.sign(token_data, "Hello world");
        resp.status(200).json({
          status: "succeded",
          token: token,
        });
      } else {
        resp.status(300);
        resp.send("NOT OK");
      }
    }
  );
};

module.exports = Login;
