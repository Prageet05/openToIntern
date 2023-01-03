const express = require('express');
const multer = require('multer');
const route = require('./router/router');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(multer().any())

mongoose.connect("mongodb+srv://kanirudh726:0cczXnVbYKHycDtp@project2-group14.tjfjpyg.mongodb.net/group-14Database" ,{
    UseNewUrlParser: true
})
.then( () => console.log("mongoDb is connected"))
.catch((err) => console.log(err.message))

app.use('/' , route)

app.listen(process.env.PORT ||3001, function(){
    console.log("express app running on port "+(process.env.port||3001))
})
