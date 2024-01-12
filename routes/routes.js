const express = require("express");
const ProductController = require("../controllers/product-controller");

const Router = express.Router();

// setting routes
Router.get('/', ProductController.products);
Router.post('/create', ProductController.createProduct);
Router.delete('/product/:productId', ProductController.deleteProduct);
Router.post('/update/:productId', ProductController.updateProduct);


// exporting
module.exports = Router;