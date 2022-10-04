'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}


   $("#addbtn").click(function(){ 
    var buy=$("#tobuy").val();
    $("#list").append("<ul>"+buy+"</ul>");

   });

   function RemoveOptions(){
    var NewCiv=$("#newciv").val();
    $("#selection")
    .empty()
    .append("<option selected='selected' value='test'>"+NewCiv+"</option>");
   }

   function underline(){
    var text=$("#toUnderline").val().split(" ");
    for(var i=0;i<text.length;i++){
    var appendedtext=$("#content1").append("<span>"+text[i]+"</span>"+" ");
    }
    
    appendedtext.addClass("underlined");    
   }

   function removeClass(){
    $(".toRemove").removeClass();
    
   }