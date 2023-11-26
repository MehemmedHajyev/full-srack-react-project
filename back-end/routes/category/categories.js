const express = require("express");
const router = express.Router();

const Catagory =require("../../models/Catagory.js")

// Read All(katagori)

router.get("/", async (req, res) => {
  res.send("katagori getirildi !");
});

router.post("/", async (req, res) => {
  try {
    const {name,img} = req.body;

    const newCatagory =new Catagory({name,img})

    await newCatagory.save()

  
    res.status(201).send(newCatagory)
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
