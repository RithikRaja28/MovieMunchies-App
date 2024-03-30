const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const AdminModel = require("./models/Admin.js");
const app = express();
app.use(express.json());

// Configure CORS
app.use(
  cors({
    origin: ["https://movie-munchies.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/MM-login", (req, res) => {
  const { email, password } = req.body;
  AdminModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({ success: true, message: "Login Successful - Valid user" });
        } else {
          res.json({ success: false, message: "Invalid email or password" });
        }
      } else {
        res.json({ success: false, message: "No User Found" });
      }
    })
    .catch((err) => {
      console.error("Error during login:", err);
      res
        .status(500)
        .json({ success: false, message: "An error occurred during login" });
    });
});

app.get("/adminData", (req, res) => {
  // Assuming you have a model named OrderModel to handle orders
  AdminModel.find({}, "email password")
    .then(admins => {
      // For simplicity, assuming you have an array of orders in each admin document
      const promises = admins.map(admin =>
        OrderModel.countDocuments({ adminId: admin._id })
          .then(count => ({ email: admin.email, password: admin.password, ordersMade: count }))
      );
      
      Promise.all(promises)
        .then(adminsWithOrders => {
          res.json(adminsWithOrders);
        })
        .catch(err => {
          console.error("Error fetching admin data:", err);
          res.status(500).json({ success: false, message: "An error occurred" });
        });
    })
    .catch(err => {
      console.error("Error fetching admins:", err);
      res.status(500).json({ success: false, message: "An error occurred" });
    });
});



app.post("/", (req, res) => {
  AdminModel.create(req.body)
    .then((admin) => {
      console.log("Admin Created: ", admin);
      res.json(admin);
    })
    .catch((err) => {
      console.error("Error creating admin: ", err);
      res.status(500).json(err);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
