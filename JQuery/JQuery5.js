'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}

//Ejercicio 20
var element=$("<h1>",{
    text:"JQuery",
    class:"text"
});
$("#output").text(element.get(0).outerHTML);

//Ejercicio 21

$("#name").on("input",function(){
    var name=$("#name").val();
    var syncSpan=$("#namec");
    syncSpan.text(name);
});
$("#surname").on("input",function(){
    var lname=$("#surname").val();
    
    var syncSpanl=$("#lnamec");
    syncSpanl.text(lname);
});

//Ejercicio 22

$("#removebtn").click(function (e) { 
    e.preventDefault();
    var array=$("#array").val().split(" ");
    var arr=[];
    array.forEach((element)=>{ 
        arr.push(element.toUpperCase());
    });
    var toRemove=$("#arrayr").val();
    toRemove=toRemove.toUpperCase();
    var check=$.inArray(toRemove,arr);
    if(check==-1){
        alert("El elemento a remover no existe");
        return false;
    }else{arr=$.grep(arr,function(value){
        return value!=toRemove;        
    }); }
    $("#container2").append("<p>Array: "+array);
    $("#container2").append("<p>Palabara a remover: "+toRemove);
    $("#container2").append("<p>Lista sin palabra removida: "+arr);

});

//Ejercicio 23

$("#cssclassbtn").click(function(e){
e.preventDefault();
var selectdiv=$("#content3").children().find("li").eq(1);
selectdiv.css("color","red");
})