const express = require('express');
const Router = express.Router();


Router.get('/',(req,res)=>{
    res.send('Get All Posts');
})

Router.post('/',(req,res)=>{
    res.send('Add post');
})

Router.post('/:specificResource',(req,res)=>{
    res.send('Get Specific Post');
})

Router.post('/:specificResource',(req,res)=>{
    res.send('Update Specific Post');
})

Router.post('/:specificResource',(req,res)=>{
    res.send('Delete Specific Post');
})


module.exports = Router;