const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const saltRounds=10;
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        default:'',
    },
    description:{
        type:String,
        default:''
    }
})
const UserSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        default:''
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    posts:[postSchema]
})

UserSchema.pre('save',function(next){
    if(this.isNew||this.isModified('password')){
        const self=this;
        bcrypt.hash(self.password,saltRounds,(err,result)=>{
            if(err){
                next(err);
            }else{
                self.password=result;
                next();
            }
        })
    }else{
        next();
    }
})

const UserModel=mongoose.model('User',UserSchema);
module.exports=UserModel;
