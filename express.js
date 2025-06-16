const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./route');

// Middleware 
app.use(express.json());
app.use('/user',router)

mongoose.connect("mongodb+srv://lalitpatilitp:lalitpatilitp11@firstcluster0.lm4pq.mongodb.net/?retryWrites=true&w=majority&appName=FirstCluster0")
.then(()=>{
    console.log("------- DB_Connection Successfull.....!");
    
})
.catch((err)=>{
    console.log(`There is some issue with DB-Connection ${err}`);
    
})
app.listen(6000);