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
    res.status(400).send("Error in Creating User");
    console.log(e);
  }
});

router.get("/property", async (req, res) => {
  // console.log("get route of property")
  try {
    const token = req.headers.authorization;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken);
    if (verifyToken) {
      const userDetail = await signupModel.find({ email: verifyToken });

      if (userDetail.length) {
        const propertyData = await userModel.find();
        res.status(200).send({ property: propertyData, userData: userDetail });
        console.log(userDetail);
      } else {
        res.status(409).send("Unauthorized user");
      }
      // console.log(userDetail)
    } else {
      res.status(409).send("Unauthorized user");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
