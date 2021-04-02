const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

// @desc GET all products from DB
// @route GET /api/products
//@access public
router.get("/", getAllProducts);

// @desc GET all product by id from DB
// @route GET /api/products/:id
//@access public
router.get("/:id", getProductById);

module.exports = router;
