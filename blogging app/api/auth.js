const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const url = require('url');

router.get('/login', (req, res) => {
    if (req.session.data) {
        req.session.destroy(function(err) {
            if (err)
                res.send(err)
            else
             setTimeout(function(){
                res.redirect('/')
            }, 3000);
        })
    } else {
        res.render('pages/login',{
            error:''
        });
    }
})

router.get('/register', (req, res) => {
    res.render('pages/register');
})

router.post('/register', (req, res) => {
    const data = new User({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "age": req.body.age,
        "password": req.body.password
    })
    data.save().then(result => {
        res.redirect('/');
    })
})

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err)
            res.send('error' + err);
        else if (!user)
            res.render('pages/login',{
                error:'No User found!!'
            });
        else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err)
                    res.send(err);
                else if (!result)
                    res.render('pages/login',{
                        error:"Wrong password!!"
                    });
                else {
                    let data = {
                        email:user.email,
                        firstname: user.firstname,
                        posts: user.posts
                    }
                    req.session.data = data;
                    res.redirect('/me');
                }
            })
        }
    })
})
module.exports = router;