const express = require('express');
const Router = express.Router();

const AuthModel = require('./../models/auth.js')

Router.post('/register',(req,res)=>{

    const {name,phone,mail,password} = req.body;
    
    

    res.send('Register');
})

Router.post('/login',(req,res)=>{
    res.send('login');
})

Router.post('/logout',(req,res)=>{
    res.send('logout');
})
module.exports = Router;