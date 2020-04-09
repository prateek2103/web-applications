const User=require('../models/login');
const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const secret='supersecret';
const bcrypt=require('bcryptjs');



//routing
router.post('/register',(req,res,next)=>{
    const {email,password}=req.body;
    const user=new User({"email":req.body.email,"password":req.body.password});
    user.save((err,result)=>{
        if(err)
          res.status(500).send(err)
        else{
            res.status(200).send('user created successfully');
        }
    })
})

router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err)
        res.status(500).send('please try again later');
        else if(!user)
        res.status(404).send('no user found')
        else{
            bcrypt.compare(req.body.password,user.password,(err,same)=>{
                if(err)
                res.status(500).send('an error occured')
                else if(!same)
                res.status(500).send('authentication failed')
                else{
                    const payload={
                        email:user.email
                    };
                    const token=jwt.sign(payload,secret,{
                        expiresIn:'1h',
                    })
                    res.cookie('token',token,{httpOnly:true}).sendStatus(200)
                }
            })
        }
    })
})


module.exports=router;