const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const contactSchema=new Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:10
    }
})

const contactModel=mongoose.model('contactModel',contactSchema);
module.exports=contactModel;