'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}

function mayus(){
	var texto=prompt("Introduce un texto");
	texto=texto.toUpperCase()
	var selecDiv=document.getElementById("content1");
	var newElement=document.createElement("p");
	newElement.innerHTML=texto;
	selecDiv.appendChild(newElement);
	newElement.classList.add("exercise");
}

function divisor(){
	const texto=String(prompt("Introduce un texto"));
	var selecDiv=document.getElementById("content2");
	var newElement=document.createElement("p")
	selecDiv.appendChild(newElement);
	var i;
	var numchar=texto.length
	for(i=0;i<numchar;i++){
		if(i==numchar-1){
		newElement.append(texto[i]);
	}else{newElement.append(texto[i]+"-")}}
	newElement.classList.add("exercise");}

	function vocals(){
	var texto=String(prompt("Introduce un texto"));
	var selecDiv=document.getElementById("content3");
	var newElement=document.createElement("p")
	selecDiv.appendChild(newElement);
	var i;
	var j=0;
	texto=texto.toUpperCase();
	var numchar=texto.length
	for(i=0;i<numchar;i++){
		if(texto[i]=="A"||texto[i]=="E"||texto[i]=="I"||texto[i]=="O"||texto[i]=="U"){
			j++
		}
	}
	newElement.append("El texto tiene: "+j+" vocales");
	newElement.classList.add("exercise");
	}

function parentesis(){
	var texto=String(prompt("Introduce un texto que contenga parentesis"));
	var selecDiv=document.getElementById("content4");
	var newElement=document.createElement("p")
	selecDiv.appendChild(newElement);
	var i;
	var char;
	var choose;
	for(i=0;i<texto.length;i++){
		char=texto[i]
		if(char=="(" ){			
			choose=true;
		}
		if(char==")"){			
			choose=false
		}
		if(choose==true){
			if(char=="("){
			}else{newElement.append(char);}
		}
	}
	newElement.classList.add("exercise");
}

function reves(){
	var texto=prompt("introduce un texto");
	var selecDiv=document.getElementById("content5");
	var newElement=document.createElement('p');
	selecDiv.appendChild(newElement);
	for(var i=texto.length-1;i>=0;i--){
		console.log(texto[i]);
		newElement.append(texto[i]);	
	}	
		newElement.classList.add("exercise");
}		