'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}

function vocalp(){
	var texto=prompt("Introduce un texto o palabra");
	var selectDiv=document.getElementById("content1");
	var newElement=document.createElement("p");
	selectDiv.appendChild(newElement);
	newElement.classList.add("exercise");
	texto=texto.toUpperCase();
	texto=texto.split('');
	var vocal;
	for(var i=0;i<=texto.length;i++){
		vocal=texto[i];
		if(vocal=="A"||vocal=="E"||vocal=="I"||vocal=="O"||vocal=="U" ){
			newElement.append("La primera vocal es la : "+vocal+"; y su posición es la: "+(i+1));
			break;
		}	
	}

};

function vocalip(){
	var texto=prompt("Introduce un texto o palabra");
	var selectDiv=document.getElementById("content2");
	var newElement=document.createElement("p");
	selectDiv.appendChild(newElement);
	newElement.classList.add("exercise");
	texto=texto.toUpperCase();
	texto=texto.split('');
	var vocal;
	for(let i=0;i<=texto.length;i++){
		if(texto[i].includes("A")){
			newElement.append("La primera vocal es la : "+texto[i]+"; y su posición es la: "+(i+1));
			break;
		}
			if(texto[i].includes("E")){
			newElement.append("La primera vocal es la : "+texto[i]+"; y su posición es la: "+(i+1));
			break;
		}	
				if(texto[i].includes("I")){
			newElement.append("La primera vocal es la : "+texto[i]+"; y su posición es la: "+(i+1));
			break;
		}	
				if(texto[i].includes("O")){
			newElement.append("La primera vocal es la : "+texto[i]+"; y su posición es la: "+(i+1));
			break;
					if(texto[i].includes("U")){
			newElement.append("La primera vocal es la : "+texto[i]+"; y su posición es la: "+(i+1));
			break;
		}	
		}		
	}

}

function fibonacci(){
	var position=prompt("Hasta que numero de la serie de fibonacci quieres saber?")
	var selectDiv=document.getElementById("content3");
	var newElement=document.createElement("p");
	selectDiv.appendChild(newElement);
	var j=[1,1];
	var n,i;
for(i=1;i<=position;i++){
	n=j[i-1]+j[i];
	j.push(n);
	
}

newElement.append(j);
newElement.classList.add("exercise");
}

function piedra(){
var info=document.getElementById("formulario");
info.addEventListener("submit",(event)=>{
event.stopImmediatePropagation();
	var e=document.getElementById("opciones");
	var seleccion=e.value;
	var selectDiv=document.getElementById("content4");
	var newElement=document.createElement('p');
	selectDiv.appendChild(newElement);	

	var num=Math.floor(Math.random()*3)
	var pc=""

	switch (num) {
		case 0:
			pc="piedra"
			break;
		case 1:
			pc="papel"
			break;
		case 2:
			pc="tijera"
			break;
	
	}
	if(seleccion==pc){
		newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
		newElement.appendChild(document.createElement("br"));
		newElement.append(" Es un empate");
		}
	if(seleccion=="piedra"){
		if(pc=="papel"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" La maquina gana!!");
		}
		if(pc=="tijera"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" Tu ganas!!");
		}
	}
	if(seleccion=="papel"){
		if(pc=="tijera"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" La maquina gana!!");
		}
		if(pc=="piedra"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" Tu ganas!!");
		}
	}
	
	if(seleccion=="tijera"){
		if(pc=="piedra"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" La maquina gana!!");
		}
		if(pc=="papel"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" Tu ganas!!");
		}
	}
	newElement.classList.add("exercise")

});

	/*var selectDiv=document.getElementById("content4");
	var newElement=document.createElement('p');
	selectDiv.appendChild(newElement);
	var seleccion=prompt("Seleccciona opción 'piedra', 'papel', 'tijera' ");
	if(seleccion!="piedra"||seleccion!="papel"||seleccion!="tijera"){
		alert("No es una seleccion valida");
		seleccion=prompt("Seleccciona opción 'piedra', 'papel', 'tijera' ");
	}
	var num=Math.floor(Math.random()*3)
	var pc=""

	switch (num) {
		case 0:
			pc="piedra"
			break;
		case 1:
			pc="papel"
			break;
		case 2:
			pc="tijera"
			break;
	
	}
	if(seleccion==pc){
		newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
		newElement.appendChild(document.createElement("br"));
		newElement.append(" Es un empate");
		}
	if(seleccion=="piedra"){
		if(pc=="papel"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" La maquina gana!!");
		}
		if(pc=="tijera"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" Tu ganas!!");
		}
	}
	if(seleccion=="papel"){
		if(pc=="tijera"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" La maquina gana!!");
		}
		if(pc=="piedra"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" Tu ganas!!");
		}
	}
	
	if(seleccion=="tijera"){
		if(pc=="piedra"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" La maquina gana!!");
		}
		if(pc=="papel"){
			newElement.append("Tu escogiste: "+seleccion+ " y la maquina escogio: "+pc);
			newElement.appendChild(document.createElement("br"));
			newElement.append(" Tu ganas!!");
		}
	}
	newElement.classList.add("exercise");*/
	}
