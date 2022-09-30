function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}

		function cleanclock(){	
			var classClear=document.querySelectorAll('.borrar');
			classClear.forEach(borrar=>{
				borrar.remove();});}
//Poner fecha
var selecDiv=document.getElementById("content1");
var fecha=new Date().toLocaleString('es-MX',{month:"long",day:"numeric",year:"numeric",hour12: true});

selecDiv.innerHTML=fecha;

function cronometro(){
	var tiempo1=new Date().getTime();
	var nombre=prompt("Introduce tu nombre");
	var apellido=prompt("Introduce tu apellido");
	var edad=prompt("Introduce tu edad");
	var tiempo2= new Date().getTime();
	var tardanza=(tiempo2-tiempo1)/1000;
	tardanza=tardanza.toFixed(1);
	var newElement=document.createElement("h4");
	var selecDiv=document.getElementById("content2");
	selecDiv.appendChild(newElement);
	newElement.innerHTML="En introducir "+nombre+" "+apellido+" "+edad+" ha tardado "+tardanza+" segundos";
}

//Calcular fechas
var currDate= new Date();
var thirtyDate= new Date(currDate.setDate(currDate.getDate()+30)).toLocaleString('es-MX',{month:"long",day:"numeric",year:"numeric",hour12: true});
var sixtyDate=new Date(currDate.setDate(currDate.getDate()+60)).toLocaleString('es-MX',{month:"long",day:"numeric",year:"numeric",hour12: true});
var content3=document.getElementById("content3");
content3.innerHTML=fecha+"<br>"+thirtyDate+"<br>"+sixtyDate+"<br>";

//Reloj
var reloj = 0;
var frecuencia = 1000;
function actualiza(){
	cleanclock();
  var ahora = new Date();
  var fecha = ahora.getDate() + " - " + (ahora.getMonth() + 1) + " - " + ahora.getFullYear();
  var hora = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();
  var escribe = 'Hoy es ' + fecha + ' y son las ' + hora + ' horas';
  reloj = setTimeout("actualiza()", frecuencia);
  var content4=document.getElementById("content4");
  var espacio=document.createElement('p');
  espacio.classList.add("borrar");
   content4.appendChild(espacio);
   espacio.append(escribe);

}



