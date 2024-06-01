const express = require('express');
const Router = express.Router();


Router.get('/',(req,res)=>{
    res.send('Get All Users');
})

Router.post('/',(req,res)=>{
    res.send('Add User');
})

Router.get('/:specificResource',(req,res)=>{
    res.send('Get Specific User');
})

Router.update('/:specificResource',(req,res)=>{
    res.send('Update Specific User');
})

Router.delete('/:specificResource',(req,res)=>{
    res.send('Delete Specific User');
})


module.exports = Router;