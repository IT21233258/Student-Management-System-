//create varables and import pacages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//import .env
require("dotenv").config();

//initialize port number
const PORT = process.env.PORT || 8060;

//use dependancies
app.use(cors());
//get json using bodyparser
app.use(bodyParser.json());

//connect mongo db options
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
})

const db = mongoose.connection;

//open connection
//normal funtion also can use
/*
db.once('open',()=>{

    console.log("Mongodb Connection Success");

})
*///

//connect model student js
const studentRouter = require("./routes/students.js");
//
app.use("/student", studentRouter);



app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})