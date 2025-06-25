// const express = require('express').Router();
const route  = require("express").Router();
const UserModule = require('./module');
const {registerValidation,loginValidation} = require('./validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User 
route.post('/register',async (req,res)=>{

    // Register Validation 
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Email Validation 
    const emailExist = await UserModule.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send("Email is Already Present..!");

    // Passowrd Validation 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);

    const newUser = new UserModule({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword,
        mobile:req.body.mobile,
        // role:req.body.role || 'student'
    })
    try {
        const SaveData = await newUser.save();
        res.send(SaveData);
    } catch (error) {
        console.log(`Registration Failed...${error}`);
        
    }
})

// Login User 
route.post('/login',async (req,res)=>{

    // Login Validation 
    const{error} = loginValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    // Email Validation 
    const userExist = await UserModule.findOne({email:req.body.email});
    if(!userExist) return res.status(404).send("-----Email not Found..!-----");

    // Password Validation
    const isPass = await bcrypt.compare(req.body.password,userExist.password);
    if(!isPass) return res.status(404).send("-----Password is Invalid..!-----");

    const token = jwt.sign({_id:userExist._id,
                         name:userExist.name,
                         email:userExist.email,
                        password:userExist.password},
                        process.env.Token_Secret);
    res.header('auth-token',token).send(token);

    res.send("Login Successfull..!");
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

// Update Data 
route.put('/update', async (req,res) => {
    let _id = req.body._id;
    try {
        const updateData = await UserModule.findByIdAndUpdate(_id,req.body);
        res.send(updateData)
        // console.log(updateData);
        
    } catch (error) {
        console.log("Update Data Failed",error);
        
    }
})

// Show One User 
route.get('/showOne', async (req,res)=>{
    let id  = req.query.id;
    try {
        const showOne = await UserModule.findById(id);
        res.send(showOne);
    } catch (error) {
        console.log("Show One Failed..!");
        
    }
})

module.exports = route;



