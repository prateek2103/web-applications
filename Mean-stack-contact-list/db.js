const mongoose=require('mongoose');
const url="mongodb+srv://admin:admin123@cluster0-fujav.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url);

mongoose.connection.once('open',function(){
    console.log('connected to database');
}).on('error',function(err){
    console.log(err);
})

