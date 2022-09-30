'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}
function spam(){
for (var i=0;i<=25;i++){
    $("#content1").append("<p>Hola<p>");
    
}
$("#content1 p").addClass("exercise");
$("#bhidden").show();
}

$("#bhidden").click(function(){
    $("html,body").animate({scrollTop:0});
    $("#bhidden").hide();
    setTimeout(function() {clean();},3000);
});
//Disables right click menu
$(document).bind("contextmenu",function(e){
    return false;
      });

 //Checkbox 
 $("#box").click(function(){
    if($("#submitb").is(":disabled")){
        $("#submitb").removeAttr("disabled");
    }else{$("#submitb").attr("disabled","disabled");}
 });
 $("#submitb").click(function(){
    alert("Submited");
    $("#box").prop("checked",false)
    $("#submitb").attr("disabled","disabled");
 });

 //Blinking text
 function blinkText(){
 $(".blink").fadeOut(500);
 $(".blink").fadeIn(500);
 }
 setInterval(blinkText,800);

 //Put zebra class on odd rows
 $("table tr:odd").addClass("zebra");

$(".btn").click(function(){
    window.print();
    return false
})