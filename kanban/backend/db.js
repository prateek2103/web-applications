const mongoose=require("mongoose")

//this is a local on machine database
const url="mongodb://localhost/todo"

function db(){
    mongoose.connect(url,{useNewUrlParser: true ,useUnifiedTopology: true ,useFindAndModify:false},(err)=>{
        if(err){
            console.log("error")
        }else{
            console.log("connected to database")
        }
    })
}

module.exports=db
