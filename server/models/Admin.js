const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
   email:String,
   password:String
})

const AdminModel = mongoose.model("admin",AdminSchema)

module.exports = AdminModel;