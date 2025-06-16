// const express = require('express').Router();
const route  = require("express").Router();
const UserModule = require('./module');

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
        console.log(`Registration Faile...${error}`);
        
    }
})
module.exports = route;



