const express=require('express');
const ejs=require('ejs');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const db=require('./db.js');
const api=require('./api/auth');
const path=require('path');
const uuid=require('uuid');
const session=require('express-session');
const me=require('./user/userInfo');

//setting up session
app.use(session({
    genid:(req)=>{
        console.log('in the middleware');
        console.log(req.sessionID);
        return uuid();
    },
    secret:'taptap',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:600000}
}))

//setting up ejs
app.set('view engine','ejs');

//middlewware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/static',express.static(path.join(__dirname,'public')));
app.use(morgan('tiny'));
app.use(cors());

//additional routes
app.use('/api',api);
app.use('/me',me);

//route
app.get('/',(req,res)=>{
     res.render('pages/index');
})

app.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err)
        res.send(err);
        else
        res.redirect('/');
    })
})

module.exports=app;