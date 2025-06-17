// const express = require('express').Router();
const route  = require("express").Router();
const UserModule = require('./module');

// Register User 
route.post('/register',async (req,res)=>{

    const newUser = new UserModule({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile
    })
    try {
        const SaveData = await newUser.save();
        res.send(SaveData);
    } catch (error) {
        console.log(`Registration Failed...${error}`);
        
    }
})

// Show Data of Users 
route.get('/showdata', async (req,res)=>{
    try {
        const showData = await UserModule.find();
        res.send(showData)
    } catch (error) {
        console.log(`Show Data Failed...${error}`);
    }
})

// Delete User Data 
route.delete('/delete', async (req,res)=>{

    let id = req.query.id;
    try {
        const deleteData = await UserModule.findByIdAndDelete(id);
        // res.send(deleteData);
        res.send("Data Deleted Successfully..!");
    } catch (error) {
        console.log('Delete data Failed.',error);
          
    }
})


module.exports = route;



