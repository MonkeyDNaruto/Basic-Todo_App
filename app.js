const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to database
const connectDB=require("./utils/connectDB")
connectDB();

//app.get("/",(req,res)=>{
//    res.status(200).json({
//        success:true,
//        data:null,
//    })
//})

// Middlewares...
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));


// Server Configuration
app.listen(3000, (req, res) => {
    console.log("Server is listing on port: 3000...");
});

process.on("unhandledRejection",(err)=>{
    console.log(`server error:${err.message}`)
})