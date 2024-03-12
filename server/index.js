const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AdminModel = require("./models/Admin.js");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/admin");

app.post("/MM-login", (req, res) => {
  const { email, password } = req.body;
  AdminModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({success:true,message:"Login Successful - Valid user"});
      } else {
        res.json({success:false,message:"Invalid email or password"});
      }
    } else {
      res.json({success:false,message:"No User Found"});
    }
  });
});

app.post("/",(req,res)=>{
    AdminModel.create(req.body).then((admin) =>{console.log("Admin Created: ", admin);
     res.json(admin)})
    .catch((err)=>{
        console.log("Error creating admin: ", err);
        res.json(err)
    })
})

app.listen(3001, () => {
  console.log("Server is running");
});
