const Product = require("../models/product");


// Sending all the products data
module.exports.products = async (req,res) =>{
	try {
		const {name,description,price,variants,sort,select} = req.query;
		const queryObj = {};
		let apiData = Product.find(queryObj);
		
		if(name){
			queryObj.name = {$regex : name, $options:"i"};
		}

		// implementing sort fuctionality
		if(sort){
			let sortFix = sort.split(",").join(" ");;
			apiData = apiData.sort(sortFix);
		}
		
		// implementing select functionality
		if(select){
			let selectFix = select.split(",").join(" ");
			apiData = apiData.select(selectFix);
		}
		
		// getting data
		const ProductData = await apiData;
		res.status(200).json(ProductData);
	  } catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	  }
}


// Adding/Creating a new Product in our DB
module.exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      variants: req.body.variants,
    });

    await newProduct.save();
    res.send("New Product Added Successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// Deleting a Product from the DB
module.exports.deleteProduct = async (req, res) => {
	try {
	  const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
  
	  if (!deletedProduct) {
		return res.status(404).json({ message: 'Product not found' });
	  }
  
	  res.json({ message: 'Product deleted successfully', deletedProduct });
	} catch (error) {
	  res.status(400).json({ error: error.message });
	}
  };


// Updating a Product using its id
module.exports.updateProduct = async (req, res) => {
	try {
	  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
  
	  if (!updatedProduct) {
		return res.status(404).json({ message: 'Product not found' });
	  }
  
	  res.json({ message: 'Product updated successfully', updatedProduct });
	} catch (error) {
	  res.status(400).json({ error: error.message });
	}
  };


// Update a variant within a product
module.exports.updateVariant = async (req, res) => {
  try {
    const productId = req.params.productId;
    const variantId = req.params.variantId;

    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find the variant by ID within the product
    const variantToUpdate = product.variants.id(variantId);

    if (!variantToUpdate) {
      return res.status(404).json({ message: 'Variant not found within the product' });
    }

    // Update the variant properties
    variantToUpdate.name = req.body.name || variantToUpdate.name;
    variantToUpdate.sku = req.body.sku || variantToUpdate.sku;
    variantToUpdate.additionalCost = req.body.additionalCost || variantToUpdate.additionalCost;
    variantToUpdate.stockCount = req.body.stockCount || variantToUpdate.stockCount;

    // Save the updated product
    const updatedProduct = await product.save();

    res.json({ message: 'Variant updated successfully', updatedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
