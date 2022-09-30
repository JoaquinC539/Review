"use strict";function clean(){document.querySelectorAll(".exercise").forEach(e=>{e.remove()})}function anos(){var e=document.getElementById("content1"),a=document.createElement("h3"),n=prompt("Verificiación de edad para conducir: Introduce tu edad");if(a.classList.add("exercise"),isNaN(n))return alert("No es un numero, vuelve a instertar el dato"),anos();18<=n&&(a.innerHTML="Tienes "+n+", ya puedes conducir",e.appendChild(a)),(n<18||75<=n)&&(a.textContent="Tienes "+n+" y no puedes conducir",e.appendChild(a))}function calificacion(){void 0!==a&&remove(a);var e=document.getElementById("content2"),a=document.createElement("h3");a.classList.add("exercise");var n=prompt("Pon tu calificación, del 1 al 10");if(isNaN(n)||n<0||10<n)return alert("No es valido la calificación o no es un número, vuelva a introducirlo"),calificacion();n<=3?(a.innerHTML="Calificación muy deficiente",e.appendChild(a)):n<=5?(a.innerHTML="Calificación insuficiente",e.appendChild(a)):n<=6?(a.innerHTML="Calificación suficiente",e.appendChild(a)):n<=7?(a.innerHTML="Calificación buena",e.appendChild(a)):n<=9?(a.innerHTML="Calificación notable",e.appendChild(a)):n<=10&&(a.innerHTML="Calificación sobresaliente",e.appendChild(a))}function cadenasT(){var e="";do{var a=prompt("Introduzca la primera cadena de texto"),e=""==e?a:e+"-"+a}while(confirm("¿Seguir introduciendo mas cadenas de texto?"));var n=document.getElementById("content3"),c=document.createElement("h3");c.innerHTML=e,n.appendChild(c),c.classList.add("exercise")}function sumas(){var e=Number(0);do{var a=prompt("Introduzca un numero")}while(isNaN(a)?alert("No es un numero"):e+=Number(a),confirm("¿Seguir insertando numeros?"));var n=document.getElementById("content4"),c=document.createElement("h3");c.innerHTML=e,n.appendChild(c),c.classList.add("exercise")}function DNI(){var e=prompt("Insserta un numero de hasta 8 cifras");if(console.log(e.length),isNaN(e)||8<e.length)alert("No es numero valido");else{var a=(e=Number(e))%23,n=document.getElementById("content5"),e=document.createElement("h3");e.classList.add("exercise");var c="";switch(a){case 0:c="T";break;case 1:c="R";break;case 2:c="W";break;case 3:c="A";break;case 4:c="G";break;case 5:c="M";break;case 6:c="Y";break;case 7:c="F";break;case 8:c="P";break;case 9:c="D";break;case 10:c="X";break;case 11:c="B";break;case 12:c="N";break;case 13:c="J";break;case 14:c="Z";break;case 15:c="S";break;case 16:c="Q";break;case 17:c="V";break;case 18:c="H";break;case 19:c="L";break;case 20:c="C";break;case 21:c="K";break;case 22:c="E"}e.innerHTML="La letra del DNI es: "+c,n.appendChild(e)}}
/*'use strict'

function clean(){
	
	var classClear=document.querySelectorAll('.exercise');

	classClear.forEach(exercise=>{
		exercise.remove();

	});

}
//Función para verificar años
function anos(){
var selectDiv=document.getElementById("content1");
var newElement=document.createElement('h3');
var edad=prompt("Verificiación de edad para conducir: Introduce tu edad");
	newElement.classList.add("exercise");
if(isNaN(edad)){
	alert("No es un numero, vuelve a instertar el dato");
	return anos();
}
else {
if (edad>=18) {
	
	newElement.innerHTML="Tienes "+edad+", ya puedes conducir"
	selectDiv.appendChild(newElement);

} if(edad<18 || edad>=75){
	
	newElement.textContent="Tienes "+edad +" y no puedes conducir"
	selectDiv.appendChild(newElement);
}}}

//Función para evaluar calificaciones de estudiantes
function calificacion(){
	if(typeof newElement!="undefined"){remove(newElement);}
var selectDiv=document.getElementById("content2");
var newElement=document.createElement('h3');
	newElement.classList.add("exercise");
	var nota=prompt("Pon tu calificación, del 1 al 10");
	if(isNaN(nota) || nota<0 || nota>10 ){
		alert("No es valido la calificación o no es un número, vuelva a introducirlo");
		return calificacion()
	}else if(nota<=3){
	newElement.innerHTML="Calificación muy deficiente";
	selectDiv.appendChild(newElement);
		}
		else if(nota<=5 ){
	newElement.innerHTML="Calificación insuficiente";
	selectDiv.appendChild(newElement);
		}
		else if(nota<=6){

	newElement.innerHTML="Calificación suficiente";
	selectDiv.appendChild(newElement);
		}
		else if(nota<=7){
	newElement.innerHTML="Calificación buena";
	selectDiv.appendChild(newElement);
		}
		else if(nota<=9){
	newElement.innerHTML="Calificación notable";
	selectDiv.appendChild(newElement);
		}
		else if(nota<=10){
	newElement.innerHTML="Calificación sobresaliente";
	selectDiv.appendChild(newElement);
		}
	}

//función para mostrar cadenas de texto (ejercicio 3)
function cadenasT(){
	var resultado="";
	do{
		var cadena=prompt("Introduzca la primera cadena de texto");

		if(resultado==""){
			resultado=cadena;
		}else{
			resultado=resultado+"-"+cadena
		}
	}
	while(confirm("¿Seguir introduciendo mas cadenas de texto?"));
	var selectDiv=document.getElementById("content3");
	var newElement=document.createElement('h3');
	newElement.innerHTML=resultado;
	selectDiv.appendChild(newElement);
	newElement.classList.add("exercise");

}
//funcion de sumas consecutivas
function sumas(){
	var resultado=Number(0);
	do{
		var numero=prompt("Introduzca un numero");
		if(isNaN(numero)){
			alert("No es un numero");
		}else{
		numero=Number(numero);
		resultado=resultado+numero;
		
	}
	}while(confirm("¿Seguir insertando numeros?"));
	var selectDiv=document.getElementById("content4");
	var newElement=document.createElement('h3');
	newElement.innerHTML=resultado;
	selectDiv.appendChild(newElement);
	newElement.classList.add("exercise");
}

function DNI(){
	var numero=prompt("Insserta un numero de hasta 8 cifras");
	console.log(numero.length)
	if(isNaN(numero)||numero.length>8){
		alert("No es numero valido")
	}else{
	numero=Number(numero);
	var resto=numero%23
	var selectDiv=document.getElementById("content5");
	var newElement=document.createElement('h3');
	newElement.classList.add("exercise");	
	var letra=""
	switch(resto){
				case 0:
					letra= "T";
					break;
		  		case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
	}
	newElement.innerHTML=("La letra del DNI es: "+letra);
	selectDiv.appendChild(newElement);
}
}
*/