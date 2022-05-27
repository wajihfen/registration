const mongoose = require("mongoose");

const users = mongoose.Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Users", users);
