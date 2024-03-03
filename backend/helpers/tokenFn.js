const verify = require('jsonwebtoken/verify.js');
const sign = require('jsonwebtoken/sign.js');

function userTokenStatus(token, llave){
    try {
        const decoded = verify(token, llave);
        decoded === true ? true : false;
    } catch(err) {
        return false;
    }
}

function adminTokenStatus(token, llave){
  try {
      const decoded = verify(token, llave);
      if(decoded){
        if(decoded.data.tipo == 'admin'){
          return true;
        }else{
          return false;
        }        
      }
  } catch(err) {
        return false;
  }
}

function administrativeTokenStatus(token, llave){
  try {
      const decoded = verify(token, llave);
      if(decoded){
        if(decoded.data.tipo == 'administrativo'){
          return true;
        }else{
          return false;
        }        
      }
  } catch(err) {
        return false;
  }
}

function createToken(data, llave){
    try {
        if(data){

            sign(
                {
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
                  data: {
                    mail: data.mail,
                  },
                },
                llave
              );
            
        }else{
            throw new Error("Sin datos");
        }        
    } catch(err) {
          return false;
    }
}

module.exports = {
  userTokenStatus,
  adminTokenStatus,
  administrativeTokenStatus,
  createToken
}