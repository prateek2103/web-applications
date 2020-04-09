console.log(window.location.host);
function Redirect(){
    var password=document.getElementById('Password');
    var name=document.getElementById('name');
   
if(password.value==='trial'){
    console.log(password.value);
    var host=window.location.host;
    window.location=`http://${host}/joining.html?name=${name.value}`;
}else{
    var feedback=document.getElementById('feedback');
    feedback.innerHTML="wrong password!!"
}
}