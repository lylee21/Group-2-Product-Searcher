
const express = require ("express");
const { Product }= require ("../models/index");

const router = express.Router();

//router.get("/", async (req, res) => await product.controller.getVehicle(req,res));
router.get("/", (req, res) => {
    return res.send("You have called a general route");
});

router.get("/api/products", async(req, res,) => {
       const products = await Product.findAll()
       console.log(products)
       return products
});

module.exports = router;

