const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = async() => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("mongodb connected with server");
    }
     catch (error) {
        throw error
    }
    
}


module.exports = connectDatabase;