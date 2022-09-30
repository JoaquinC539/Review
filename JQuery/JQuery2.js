'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}

//To restrict number of characters
var maxlength=$("#twit").attr("maxlength");
$("#twit").keyup(function(){
    var textLength=maxlength-$(this).val().length;
    $("#count").text(textLength);
});

//Function to bold first words of a text
function bold(){
    var texts=$("#texto")
    var words=texts.val();
    texts.val("");
    var splitWords=words.split(' ')    
    var selectDiv=document.getElementById("content1");
    var newElement=document.createElement("div");
    selectDiv.appendChild(newElement);
    newElement.classList.add("exercise");
    newElement.setAttribute("id","tagb");
    var newelement=$("#tagb");
    newelement.append("<strong>"+splitWords[0]+"</strong>"+" ");
    for (let index = 1; index < splitWords.length; index++) {    
        newelement.append(splitWords[index]+" ");        
    }        
}
$("#newDiv").click(function(){
    var attributes={
        id:"test",
        class:"exercise"
    }
    var newDiv=document.createElement("div");
    var selectNewDiv=$(newDiv);
    selectNewDiv.attr("id","test");
    selectNewDiv.attr("class","exercise");
    $("#content2").append(selectNewDiv);
});

$("#moving").click(function(){
    const div1=$("#div1");
    const div2=$("#div2");
    if(div1.parent().attr("id")=="out"){
    div1.appendTo("#content3");
    div2.appendTo("#content3");
    } else{
        div1.appendTo("#out");
        div2.appendTo("#out");   
    }
    
});

$("#JSONb").click(function(){
    var color=$("#color").val();
    var size=$("#size").val();
    var JSONnew={"color":color,"tamaño":size}
    console.log(JSONnew);
    $.each(JSONnew,function(key,data){
        $("#content4").append(key,": ",data,"<br>");
    });
    $("#color").val("");
    $("#size").val("");
});





