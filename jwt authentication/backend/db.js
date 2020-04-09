const mongoose=require('mongoose');

//connecting to mongodb server
mongoose.connect('mongodb://rick:picklerick123@ds143604.mlab.com:43604/jwtauth');

//checking the connection
mongoose.connection.once('open',()=>{
    console.log('connected to server');
}).on('error',(err)=>{
    console.log("an errror occurred",err);
})
