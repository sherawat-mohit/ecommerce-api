const express = require("express");
const ProductController = require("../controllers/product-controller");

const Router = express.Router();

// setting routes

// Getting all Products
Router.get('/', ProductController.products);

// Add/Create a new Product
Router.post('/create', ProductController.createProduct);

// Delete a Product
Router.delete('/delete/:productId', ProductController.deleteProduct);

// Update a Product
Router.put('/products/:productId', ProductController.updateProduct);

// Add a variant to a product
Router.post('/products/:productId/variants', ProductController.addVariant);

// Delete a variant within a product
Router.delete('/products/:productId/variants/:variantId', ProductController.deleteVariant);

// Update a variant within a product
Router.put('/products/:productId/variants/:variantId', ProductController.updateVariant);



// exporting
module.exports = Router;