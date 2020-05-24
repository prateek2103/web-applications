//schema for our todo project

const mongoose=require("mongoose")
const Schema=mongoose.Schema
const todoSchema=new Schema({
    data:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"todo"
    }
})

let Todo=mongoose.model("todo",todoSchema)
module.exports= Todo