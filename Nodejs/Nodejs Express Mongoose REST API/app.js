require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


const authRoutes = require('./routes/auth.js')
// const postsRoutes = require('./routes/posts.js')
// const usersRoutes = require('./routes/users.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use('/auth',authRoutes)
// app.use('/users',usersRoutes)
// app.use('/posts',postsRoutes);





app.get('/',(req,res)=>{
    res.send('/')
})


app.listen(process.env.PORT,(err)=>{
    console.log('Server is running on port %s',process.env.PORT);
})
