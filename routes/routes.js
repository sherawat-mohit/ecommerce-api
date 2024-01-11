const express = require("express");
const ProductController = require("../controllers/product-controller");

const Router = express.Router();

// setting routes
Router.get('/', ProductController.products);


// exporting
module.exports = Router;