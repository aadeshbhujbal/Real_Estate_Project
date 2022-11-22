const mongoose = require("mongoose");
const validator = require("validator");
const sequencing = require("../config/sequencing");

const signupSchema = new mongoose.Schema({
  _id: Number,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  cpassword: {
    type: String,
    required: true,
    min: 6,
  },
});

signupSchema.pre("save");

const signupModal = mongoose.model("signup", signupSchema);

module.exports = signupModal;
