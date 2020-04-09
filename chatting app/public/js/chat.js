var socket=io();
socket.on('connect',() => {
    console.log('');
})
var text=document.getElementById('text');
var send=document.getElementById('send');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');
var form1=document.getElementById('form');
var outputbox=document.getElementById('output-window');
var joiner=document.getElementById('join');
var url_string=window.location.href;
var url=new URL(url_string);
var name=url.searchParams.get('name');

var person=name;
document.getElementById('feedback2').innerHTML="* you are logged in as "+person+ " *";
console.log(person);

form1.addEventListener('submit',function(e){
    e.preventDefault();
    socket.emit('message',{
        handler: person,
        text: form1[0].value,
        createdAt:new Date().getHours() + ":" + new Date().getMinutes(),
    })
            form1.reset();
        
})
    socket.emit('join',person);

socket.on('message',(data) => {
    feedback.innerHTML="";
    output.innerHTML +=  "<br><em>"+ data.createdAt + "<em> " + "<strong>" + data.handler + ': </strong>'+ "<em>" + data.text + '</em><br>';
    $(document).ready(function(){
        $('#output-window').scrollTop($('#output').height());
        })
});
text.addEventListener('keypress',function(){
    socket.emit('typing',person);
})
socket.on('typing',(data) => {
    feedback.innerHTML ='<p>' + data + ' is typing... </p>' ;
})
socket.on('join',(data)=>{
    joiner.innerHTML='<p><b>!!' + data + ' joined the chat!!</b></p><br>' ;
})


