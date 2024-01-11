const mongoose = require("mongoose");

// connecting to Student Database
const connectDB = (uri) =>{
    return mongoose.connect(uri);
}

module.exports = connectDB;