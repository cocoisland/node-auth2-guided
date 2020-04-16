const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require("../config/secrets.js");

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  //const token = req.headers.authorization 
  const { token } = req.cookies
  if (!token){
    return res.status(401).json({message: 'No authorization'})
  }

  jwt.verify(token, secrets.jwtSecret,(err,decoded)=> {
    if(err){
      return res.status(401).json({message: 'Invalid signature'})
    }
    req.token= decoded
    console.log("decoded token="+decoded)
    next()
  })
  /* const { username, password } = req.headers;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Ran into an unexpected error' });
      });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  } */
};
