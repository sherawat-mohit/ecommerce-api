const Product = require("../models/product");


// Sending all the products data
module.exports.products = async (req,res) =>{
	try {
		const products = await Product.find({});
		res.json(products);
	  } catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	  }
}



// Adding/Creating a new Product in our DB
module.exports.createProduct = async (req,res) =>{
    try {
		const product = new Product(req.body);
		const savedProduct = await product.save();
		res.json(savedProduct);
	  } catch (error) {
		res.status(400).json({ error: error.message });
	  }
}



// Delete a Product for Database
module.exports.deleteProduct = async (req,res) =>{
    try {
		const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
		res.json(deletedProduct);
	  } catch (error) {
		res.status(400).json({ error: error.message });
	  }
}



// Updating a Product using its id
module.exports.updateProduct = async (req,res) =>{
    try {
		const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
		res.json(updatedProduct);
	  } catch (error) {
		res.status(400).json({ error: error.message });
	  }
}