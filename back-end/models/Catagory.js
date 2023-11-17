const mongoose = require("mongoose");

const CatagorySchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    img: { type: String, require: true },
  },

  { timestamps: true }
);

const Catagory = mongoose.model("Catagory", CatagorySchema);
module.exports = Catagory;
