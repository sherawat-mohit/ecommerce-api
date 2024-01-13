// importing essentials
require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require('body-parser');
const connectDB = require("./config/connectDB");


// Setting up PORT
const PORT = process.env.PORT || 3000;

// initializing express
const app = express();

// parsing json
app.use(bodyParser.json());


// Using routes
app.use("/", routes);


// function to listen to the port and start the server
const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        console.log("connected to the database");
        app.listen(PORT, () => {
            console.log(`Server is up and running on port : ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}

// starting the API
start();