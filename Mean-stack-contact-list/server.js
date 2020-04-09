const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const db=require('./db');
const homeRoutes=require('./routes/home');

//middleware
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use('/home',homeRoutes);
    
//connecting to server
    app.listen(3000,function(){
        console.log('connected to server');
    });