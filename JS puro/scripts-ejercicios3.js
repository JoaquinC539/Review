'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}


//Función para en un formulario pedir 3 edades con nombre y decir cual es el mayor
function edad(){	
	var info=document.querySelector("#formulario");
	info.addEventListener('submit', ()=>{
		var nombre1=document.querySelector("#name1").value;
		var edad1=document.querySelector("#edad1").value;
		var nombre2=document.querySelector("#name2").value;
		var edad2=document.querySelector("#edad2").value;		
		var nombre3=document.querySelector("#name3").value;
		var edad3=document.querySelector("#edad3").value;
		var newElement=document.createElement("div");
		var selectDiv=document.getElementById("content1");
		newElement.classList.add("exercise");
		var edadesMax=Math.max(edad1 ,edad2,edad3);
		if(edadesMax==edad1){
			newElement.innerHTML="El de mayor edad es: "+nombre1+" y tiene "+edad1+ " años."
			selectDiv.appendChild(newElement);
		}
		if(edadesMax==edad2){
			newElement.innerHTML="El de mayor edad es: "+nombre2+" y tiene "+edad2+ " años."
			selectDiv.appendChild(newElement); 
		}
		if(edadesMax==edad3){
			newElement.innerHTML="El de mayor edad es: "+nombre3+" y tiene "+edad3+ " años."
			selectDiv.appendChild(newElement);
		}});}

	//Función para generar numero aleatorio

function aleatorio(){
	var selectDiv=document.getElementById("content2");
	var newElement=document.createElement('p');
	newElement.classList.add("exercise");
	var number=Math.floor(Math.random()*99+1);
	newElement.innerHTML=Number(number);
	selectDiv.appendChild(newElement);

}

//Función para crear tres numeros aleatorios irrepetibles
function aleatorio3(){
	var num1,num2,num3,i;
	var selectDiv=document.getElementById("content3");
	
	var br=document.createElement("br");
	do{
		num1=Math.floor(Math.random()*99+1);
		num2=Math.floor(Math.random()*99+1);
		num3=Math.floor(Math.random()*99+1);

	}while(num1==num2 && num2==num3 && num1==num3);
	const array1=[num1,num2,num3];
	array1.forEach((item,index)=>{
		var newElement=document.createElement('p');
		newElement.innerHTML="numero "+index+ ": "+item;
		selectDiv.appendChild(newElement);
		newElement.classList.add("exercise");	

	});
}

