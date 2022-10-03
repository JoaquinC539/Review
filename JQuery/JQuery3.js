'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}


   $("#addbtn").click(function(){ 
    var buy=$("#tobuy").val();
    $("#list").append("<ul>"+buy+"</ul>");

   });