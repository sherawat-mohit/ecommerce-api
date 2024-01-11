// Define Product Schemas
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    variants: [variantSchema]
});