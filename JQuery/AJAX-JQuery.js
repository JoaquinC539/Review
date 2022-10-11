'use strict'

//Ejercicio 23
$("#buttonload").click(function (e) { 
    e.preventDefault();
    

$("#data").load("https://reqres.in/");
setTimeout(function(){
    console.clear();
},9500);
});

//Ejercicio 24
$("#getusers").click(function(){
    $.get("https://reqres.in/api/users?page=2",function(response){
        response.data.forEach((element,index) => {
            $("#content1g").append("<p>"+(index+1)+" "+element.first_name+"</p>");
        });
    });
});



//Ejercicio 25
$("#postu").submit(function(e){
e.preventDefault();
var user={
    name:$("#uname").val(),
    age:$("#uage").val()
}
$.post($(this).attr("action"),user)
    .done(function(response){
        console.log(user);
        alert("Usuario registrado, su id es: "+response.id);
    });
    
});

//Ejercicio 26

$("#button2ag").click(function(e){
    e.preventDefault();
    $.ajax("https://reqres.in/api/users?page=2",{
        method:"GET",
        beforeSend:function(){console.log("Enviando usuario")},
        setTimeout:5000,
        statusCode:{404:function(){console.log("Page not found")},
        500:function(){console.log("Error interno");},
        200:function(response){
            console.log("Success");
            console.log(response);
            response.data.forEach((element)=>{
                $("#content2g").append(element.first_name+"<br>");
            });           
           
        }},
        error:function(e){console.log("Error: "+e);}
        
    });
    return false;
});



