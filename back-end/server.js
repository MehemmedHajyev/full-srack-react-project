const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {}
};

app.get("/", (req, res) => {
  res.send("Hello Express .js");
});

app.get("/api", (req, res) => {
  res.send("this is Api rout");
});

app.listen(5000, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});
