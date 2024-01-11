const mongoose = require("mongoose");

// Define Product Schemas
const variantSchema = new mongoose.Schema({
    name: String,
    sku: String,
    additionalCost: Number,
    stockCount: Number
  });

module.exports = variantSchema;