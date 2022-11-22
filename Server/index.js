const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 5000;
const cors = require("cors");

require("dotenv").config();

const DB = process.env.MONGO_DB;

mongoose.connect(
  DB,
  () => {
    console.log("Successfully connected to database!");
  },
  (err) => {
    console.log(err);
  }
);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening to server at port 5000");
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Realestate Backend server ");
});
