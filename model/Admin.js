const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  wallet: {
    required : true,
    type: String,
  },
  Name: {
    required: true,
    type: String
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
