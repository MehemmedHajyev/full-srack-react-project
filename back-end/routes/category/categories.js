const express = require("express");
const router = express.Router();

const Catagory = require("../../models/Catagory.js");

// Read All(katagori)

router.get("/", async (req, res) => {
  res.send("katagori getirildi !");
});

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCatagory = new Catagory({ name, img });

    await newCatagory.save();

    res.status(201).send(newCatagory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ eror: "Server eror." });
  }
});

// belirtilen katagorie getirme
router.get("/catagoryId", async (req, res) => {
  console.log(req.params.catagoryId);

  res.status(200).json(req.params.catagoryId)
});

module.exports = router;

