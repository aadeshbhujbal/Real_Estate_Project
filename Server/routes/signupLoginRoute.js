const express = require("express");
const signupModel = require("../models/signupSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  signupModel
    .find({ email: req.body.email })
    .then((data) => {
      if (!data.length) {
        res.status(400).send("User doesn't exists!");
      } else {
        bcrypt
          .compare(req.body.password, data[0].password)
          .then(function (result) {
            if (result) {
              const authToken = jwt.sign(data[0].email, process.env.SECRET_KEY);
              res.status(200).send({ authToken });
            } else {
              res.status(400).send("Incorrect password");
            }
          });
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/signup", (req, res) => {
  signupModel.find({ email: req.body.email }).then((data) => {
    if (data.length) {
      res.status(400).send("User already exists!");
    } else {
      const newUser = new signupModel({ ...req.body });
      bcrypt
        .hash(req.body.password, saltRounds)
        .then(function (hash) {
          // Store hash in your password DB.
          newUser.password = hash;
          newUser.cpassword = hash;
          newUser
            .save()
            .then((data) => {
              res.status(200).send(data);
            })
            .catch((err) => {
              res.status(403).send(err);
            });
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    }
  });
});

module.exports = router;
