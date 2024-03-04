const { userTokenStatus } = require("../helpers/index.js");
const verify = require('jsonwebtoken/verify.js');

function sessionMiddleware(req, res, next){
  const token = req.cookies.token;
  try {
      const decoded = verify(token, process.env.SIGN);
      const data = decoded.data;
      if(decoded){
        req.body.mail = data.mail;
        next();
      }else{
        throw new Error("token invalido");
      }
  } catch (err) {
      res.status(500).json({ msg: "error interno / token invalido: " + err});
  }
    /*try {
        const decoded = verify(req.headers["x-token"], process.env.SIGN);
        const data = decoded.data;
        
        if(decoded){
          req.body.mail = data.mail;
          next();
        }else{
          throw new Error("token invalido");
        }
    } catch (err) {
        res.status(500).json({ msg: "error interno / token invalido: " + err});
    }*/
};
module.exports = {
    sessionMiddleware
}