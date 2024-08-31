const express = require("express");

const dotenv = require("dotenv");

const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload")
const cors = require('cors');
const errorMiddleware =  require("./middleware/error");


//config 

dotenv.config();

app.use(express.json());

app.use(cookieParser()); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

const corsOptions = {
    credentials: true,
    origin: [process.env.FRONTEND_URL] 
};

app.use(cors(corsOptions));

// Route imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");



app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);



// middleware for errors
app.use(errorMiddleware);



module.exports = app;