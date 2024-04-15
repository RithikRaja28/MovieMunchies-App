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
  const { email, password, username } = req.body;
  AdminModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password && user.username === username) {
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

app.get("/", (req, res) => {
  res.json("Server Working !!");
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
