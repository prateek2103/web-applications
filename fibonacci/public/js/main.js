$(document).ready(function(){
    $("button").click(function(){
        let num=Number($('#num').val());
        if(num>0){
            $.get('/number/'+num,function(data){
                $('h3#result').text("The fibonacci series is: "+data);
             })
        }
    })
})