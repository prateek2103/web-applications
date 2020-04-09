const express=require('express');
const router=express.Router();
const Contact=require('../models/contact-list');

//getting the contact list
router.get('/',function(req,res){
    Contact.find({},function(err,data){
        if(err)
            res.send(err);
        res.send(data);
    })
})

//adding to contact list
router.post('/add',function(req,res){
    var data=new Contact(req.body);
    data.save(function(err){
        if(err){
            res.send(err);
        }
        res.json(data);
    })
})

//deleting a contact
router.get('/delete/:id',function(req,res){
    Contact.findByIdAndRemove({_id:req.params.id},function(err){
        if(err){
            res.send(err);
        }
        res.json("deleted successfully");
    })
})

//updating a contact
router.put('/update/:id',function(req,res){
    Contact.findByIdAndUpdate({_id:req.params.id},req.body,function(err){
        if(err)
            res.send(err);
        res.json('updated successfully');
    })
})
module.exports= router;