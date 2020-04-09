const mongoose=require('mongoose');
mongoose.connect('mongodb://samuel:motherfucker123@ds117271.mlab.com:17271/node_blogger');

mongoose.connection.once('open',function(){
    console.log('connected to database');
}).on('error',function(err){
    console.log('an error occurred',err);
})
