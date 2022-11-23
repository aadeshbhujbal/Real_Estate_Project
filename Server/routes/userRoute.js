const express = require("express");
const userModel = require("../models/userSchema");
const router = express.Router();
const jwt = require("jsonwebtoken");
const signupModel = require("../models/signupSchema");

router.post("/addproperty", async (req, res) => {
  try {
    const users = new userModel(req.body);
    const createUser = await users.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send("Error in Creating User: " + e.message);
    console.log(e);
  }
});

router.get("/property", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const verifyToken = jwt.verify(token, process.env.SC_KEY);
    console.log(verifyToken);
    if (verifyToken) {
      const userDetails = await signupModel.find({ email: verifyToken });
      if (userDetails.length) {
        const propertyData = await userModel.find();
        res.status(200).send({ property: propertyData, userData: userDetails });
        console.log(userDetails);
      } else {
        res.status(409).send("Unauthorized user");
      }
    } else {
      res.status(409).send("Unauthorized user");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
    console.log(err);
  }
});


module.exports = router;
