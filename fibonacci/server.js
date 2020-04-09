const express=require('express'),
      app=express(),
      port=4000,
      path=require("path");
      fibo=require('./fibonacci_series');

//static files
app.use('/static',express.static(path.join(__dirname,'/public')));

//routes
app.get('/',(req,res)=>{
        res.send("connected to nodejs");
})

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.get('/number/:num',(req,res)=>{
    let num=req.params.num;
    res.send(fibo(num));
})

//server connection
app.listen(port,()=>{
    console.log('connected to server');
})