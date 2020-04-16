const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const restrictedRole = require('../auth/restricted-role')

router.get('/', restricted, restrictedRole('normal'), (req, res) => {
//router.get('/', restricted, restrictedRole('admin'), (req, res) => {
//router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
