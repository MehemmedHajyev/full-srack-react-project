const express = require("express");

const router = express.Router();


// Read All()



router.get("/" async(req,res)=>{
    res.send('product getirilmese')
})