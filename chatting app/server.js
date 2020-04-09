const express=require('express');
const path=require('path');
const http=require('http');
const socketIO=require('socket.io');
const app=express();
const publicPath=path.join(__dirname,"public");
const port= process.env.PORT || 3000;

//middleware
app.use(express.static(publicPath));

const server=http.createServer(app);
const io=socketIO(server);

server.listen(port,function(){
    console.log('connected to server');
});
io.on('connection',(socket) => {
    console.log('user connected');
    socket.on('message',(data) =>{
        io.emit('message',data);
    });
    socket.on('typing',(data) => {
        socket.broadcast.emit('typing',data);
    })
    socket.on('join',(data)=>{
        socket.broadcast.emit('join',data);
    })
})

