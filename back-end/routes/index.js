
const express = require("express");
const router = express.Router();

// Diğer rota dosyalarını içe aktarıyoruz
const productRoute = require("./ProductsApi/products"); 
const categoryRoute = require("./category/category");

// Her rotayı ilgili yol altında kullanıyoruz
router.use("/category", categoryRoute); 
router.use("/products", productRoute);

module.exports = router;
