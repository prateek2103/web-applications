const express=require('express')
const app=express()
const todoModel=require("../models/todo")

//routes
//load data
app.get("/",(req,res)=>{
    todoModel.find({},(err,data)=>{
        if(err){
            res.send(err)
        }
        res.send(data)
    }) 
})

//add a new task
app.post("/add",(req,res)=>{
    let work=new todoModel(req.body)
    work.save(work,()=>{
        res.send(work._id)
    })
})

//change the status of a task
app.post("/changeStatus/:id",(req,res)=>{
    newStatus=""
    todoModel.findOne({_id:req.params.id},(err,data)=>{
            if(err){
                res.send(err)
            }
            let work=data
            if(work.status=="doing"){
                newStatus="done"
            }
            else{
                newStatus="doing"
            }
            if(work.status!="done"){
                todoModel.findOneAndUpdate({_id:req.params.id},{status:newStatus},(err)=>{
                    if(err)
                        res.send(err)
                    res.send("successfully updated")
                })
            }
    })
})

//delete a task
app.get("/delete/:id",(req,res)=>{
    todoModel.deleteOne({_id:req.params.id},function(err){
        if(err)
            res.send("A problem occurred!!")
        else
            res.send('deleted succesfully')
    })
})

module.exports=app