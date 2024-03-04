const express = require('express')
const jwt = require('jsonwebtoken');
const session_router = express.Router()
session_router.route('/').get((req,res)=>{
    console.log(req.cookies.token)
    const token = req.cookies.token;
    try {
        const mail = jwt.verify(token, process.env.SIGN);
        req.body.mail = mail;
        res.send({msg:'ok'})
    } catch (error) {
        res.clearCookie('token');
        res.status(403).send({msg:'not authorized'});
    }
});


module.exports = session_router;