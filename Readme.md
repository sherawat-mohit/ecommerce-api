# ECommerce API

## 1. About ECommerce API

ECommerce API is designed to manage products and their variants. It provides endpoints to create, retrieve, update, and delete products. Each product can have multiple variants, each with its own name, SKU, additional cost, and stock count. This API can sort products on different basis and select which information to show for each product.

## 2. Steps to Set up this API
Follow these steps to set up and run the API on your local machine:

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running


### Setup Instructions
1. Clone this repository to your local machine.

   ```bash
   gh repo clone sherawat-mohit/ecommerce-api
   ```

2. Navigate to the project directory.

   ```bash
   cd ecommerce-api
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Start the MongoDB server.

5. Start the API server.
   ```bash
   npm start
   ```

6. The API should now be running at `http://localhost:3000`.


## Steps to Use this API with Postman

1. **Create a Product:**
   - **Endpoint:** `POST /products`
   - **Request Body:**
     ```json
     {
       "name": "Laptop",
       "description": "Powerful laptop for professional use",
       "price": 1200,
       "variants": [
         {
           "name": "16GB RAM",
           "sku": "LT-001",
           "additionalCost": 100,
           "stockCount": 50
         },
         {
           "name": "32GB RAM",
           "sku": "LT-002",
           "additionalCost": 200,
           "stockCount": 25
         }
       ]
     }
     ```

2. **Retrieve Products:**
   - **Endpoint:** `GET /products`

3. **Update a Variant:**
   - **Endpoint:** `PUT /products/:productId/variants/:variantId`
   - **Request Body:**
     ```json
     {
       "name": "New Variant Name",
       "additionalCost": 150
     }
     ```

4. **Delete a Product:**
   - **Endpoint:** `DELETE /products/:productId`

5. **Add a Variant to a Product:**
   - **Endpoint:** `POST /products/:productId/variants`
   - **Request Body:**
     ```json
     {
       "name": "Wireless Charging",
       "sku": "BS-003",
       "additionalCost": 25,
       "stockCount": 15
     }
     ```

6. **Update a Variant within a Product:**
   - **Endpoint:** `PUT /products/:productId/variants/:variantId`
   - **Request Body:**
     ```json
     {
       "name": "Updated Variant Name",
       "additionalCost": 200
     }
     ```

7. **Delete a Variant within a Product:**
   - **Endpoint:** `DELETE /products/:productId/variants/:variantId`



### Select and Sort Functionality for Retrieving Products

- **Endpoint:** `GET /products`
- **Query Parameters:**
  - `name`: Filter products by name (case-insensitive).
  - `sort`: Sort products. Example: `sort=price,-name` (ascending price, descending name).
  - `select`: Select specific fields to retrieve. Example: `select=name,price`.


## 4. Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Body-parser
