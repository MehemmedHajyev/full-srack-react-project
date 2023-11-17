const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const mainRoute = require("./routes/index");
const port = 5000;
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {}
};

app.use("/api", mainRoute);

app.listen(5000, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});
