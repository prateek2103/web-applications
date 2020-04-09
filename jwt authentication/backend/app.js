const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./auth/auth');
const cookieParser = require('cookie-parser');
const checkAuth = require('./auth/checkauth');
const jwt = require('jsonwebtoken');
const User=require('./models/login');

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', auth);
app.use(cookieParser());

//routing
app.get('/api/home', function (req, res) {
    res.send('working');
})

 app.get('/api/me',checkAuth, (req, res) => {
    User.findOne({email:req.body},(err,user)=>{
         if(err){
             res.send('error occured');
         }
        if(!user){
             res.send('user not found');
        }else{
             res.send(user);
         }
    })
})

 app.get('/checkToken', checkAuth, (req, res) => {
     res.status(200).send('working');
 })
module.exports = app;