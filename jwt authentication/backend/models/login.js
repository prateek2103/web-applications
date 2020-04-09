const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const saltRounds=10;
const loginSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

loginSchema.pre('save',function(next){
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


module.exports=mongoose.model('User',loginSchema);