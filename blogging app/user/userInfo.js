const express=require('express');
const router=express.Router();
const User=require('../models/user');
router.get('',(req,res)=>{
    if(!req.session.data){
        res.redirect('/');
    }else{
    let data=JSON.parse(JSON.stringify(req.session.data));
     res.render('pages/blog.ejs',{
          data:data
      });
    }
})

router.get('/create',(req,res)=>{
    if(!req.session.data){
    res.redirect('/');
}else{
    res.render('pages/create');
}
})

router.post('/create',(req,res)=>{
    if(!req.session.data){
        res.redirect('/');
    }else{
    const post={
        title:req.body.title,
        description:req.body.description
    }
    User.findOneAndUpdate({email:req.session.data.email},{ "$push": { "posts": post }},{new:true},(err,result)=>{
        if(err)
        res.send('an error occurred'+err)
        else
        {   
            let newPosts=result['posts'];
            req.session.data.posts=newPosts;
            res.redirect('/me');
        }   
        
    })
}
})
router.get('/:id',(req,res)=>{
    if(!req.session.data){
        res.redirect('/');
    }else{
        let post=req.session.data.posts.find(post=>{
        return post._id==req.params.id
    })
     post=JSON.parse(JSON.stringify(post));
     res.render('pages/post',{
         post:post
     })
    }
})

router.get('/delete/:id',(req,res)=>{
    let posts=req.session.data.posts.filter(post=>{
        return req.params.id!==post._id;
    })
     User.findOneAndUpdate({email:req.session.data.email},{posts:posts},(err,user)=>{
         if(err)
         res.send(err);
         else{
         req.session.data.posts=posts;
         res.redirect('/me');
         }
     })
})
module.exports=router;