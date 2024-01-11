// importing essentials
// require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require('body-parser');


// Setting up PORT
const PORT = process.env.PORT || 3000;

// initializing express
const app = express();

// Middlewares
app.use((req,res,next)=>{
    console.log("Hello from Middleware");
    next();
});

// using express inbuilt body-parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));


// Using routes
app.use("/", routes);


// function to listen to the port and start the server
const start = () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server is up and running on port : ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}

// starting the API
start();