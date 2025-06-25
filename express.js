const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./route');
const env = require('dotenv');
env.config();

// Middleware 
app.use(express.json());
app.use('/user',router)

mongoose.connect(process.env.DB_Connection)
.then(()=>{
    console.log("------- DB_Connection Successfull.....!");
    
})
.catch((err)=>{
    console.log(`There is some issue with DB-Connection ${err}`);
    
})
app.listen(6000);