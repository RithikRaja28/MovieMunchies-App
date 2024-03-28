const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  MONGO_URL: `mongodb+srv://rithikraja28rr:${process.env.MONGO_PASSWORD}@admin.gqu1c.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Admin`,
};
