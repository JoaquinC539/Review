'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}

//Función para crear la piramide del primer ejercicio
function piramide(){
	var selectDiv=document.getElementById("content1");
	var i,repeater;
	for (i=1;i<=30;i++){
		var newElement=document.createElement('p');
		for(repeater=0;repeater<i;repeater++){
			var row=document.createTextNode(i);			
			newElement.appendChild(row);
		}
			selectDiv.appendChild(newElement);
			newElement.classList.add("exercise");
	}}

	function piramidei(){
	var selectDiv=document.getElementById("content2");
	var i,repeater;
	for (i=30;i>=1;i--){
		console.log(i);
		var newElement=document.createElement('p');
		for(repeater=i;repeater>=1;repeater--){
			var row=document.createTextNode(i);			
			newElement.appendChild(row);
		}
			selectDiv.appendChild(newElement);
			newElement.classList.add("exercise");
	}}

function piramides(){
	var selectDiv=document.getElementById("content3");
	var repeatTimes=prompt("Introduzca el numero para hacer la piramide");
	if(repeatTimes>50||isNaN(repeatTimes)){
		alert("No es valido el dato introducido");
		repeatTimes=prompt("Introduzca el numero para hacer la piramide")
	}
	repeatTimes=Number(repeatTimes);
	var i,repeater;
	for (i=1;i<=repeatTimes;i++){
		var newElement=document.createElement('p');
		for(repeater=0;repeater<i;repeater++){
			var row=document.createTextNode(i);			
			newElement.appendChild(row);
		}
			selectDiv.appendChild(newElement);
			newElement.classList.add("exercise");
	}}

function multiplos(){
	var selectDiv=document.getElementById("content4");
	selectDiv.classList.add("exercise");
	var i,repeater;
	for(i=1;i<=150;i++){
	var newElement=document.createElement('p');	
			newElement.innerHTML=i;
			selectDiv.appendChild(newElement);	
		if(i%4==0){
			newElement.textContent=i+" (multiplo de 4)";
			selectDiv.appendChild(newElement);
		}
		if(i%9==0){
			newElement.innerHTML=i+" (multiplo de 9)";
			selectDiv.appendChild(newElement);			
		}
		if(i%5==0){
			newElement.innerHTML=i;
			selectDiv.appendChild(newElement);
			selectDiv.appendChild(document.createElement('hr'));
		} 
	}
}
function tabla(){
	var selectDiv=document.getElementById("content5");
	selectDiv.classList.add("exercise");
	var rows=prompt("Inserte el numero de filas");
	var columns=prompt("Insterte el numero de columnas")
	var table=document.createElement("table");
	selectDiv.appendChild(table);
	var j=rows*columns
	var r,c;
	for(r=1;r<=rows;r++){
		var tr=document.createElement("tr")
		table.appendChild(tr);
		for(c=1;c<=columns;c++){
			j--
			var td=document.createElement("td")
			td.innerHTML=j;
			tr.appendChild(td);
		}
	}	
}


