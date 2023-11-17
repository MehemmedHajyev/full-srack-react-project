const express = require("express");

const router = express.Router();

// Read All(katagori)

router.get("/", async (req, res) => {
  res.send("katagori getirildi !");
});

module.exports = router;
