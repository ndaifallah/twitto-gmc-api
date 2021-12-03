var jwt = require("jsonwebtoken");

const Login = async (req, resp) => {
  console.log(req.body);
  // Verifaction de l'identité de la personne
  let token_data = {
    ...req.body,
  };
	let token = jwt.sign(token_data, "Hello world");
	Message.find({}, (err, messages) => {
		if (!err) {
			
    resp.status(200).json({
    status: "succeded",
    token: token,
     })
		} else {
			resp.status(300);
			resp.send("NOT OK");
		}

  
  
};
module.exports = Login;
