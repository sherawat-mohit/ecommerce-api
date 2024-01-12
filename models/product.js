const mongoose = require("mongoose");
const variantSchema = require("./varient");

// Define Product Schemas
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    variants: [variantSchema]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;