const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
});

const AdminModel = mongoose.model("admin", AdminSchema);

module.exports = AdminModel;
