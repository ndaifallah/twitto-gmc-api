var jwt = require("jsonwebtoken");

const Login = async (req, resp) => {
  console.log(req.body);
  // Verifaction de l'identité de la personne
  let token_data = {
    ...req.body,
  };
  let token = jwt.sign(token_data, "Hello world");
  resp.status(200).json({
    status: "succeded",
    token: token,
  });
};
module.exports = Login;
