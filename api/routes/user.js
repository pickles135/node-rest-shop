const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.email, 10, (err, hash) => {
      if (err) {
        error: err
      } else {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
        });
      }
  });
});

module.exports = router;