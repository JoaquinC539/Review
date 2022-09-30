'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}


function pi(){

    var info=document.getElementById("formulario");
    info.addEventListener("submit",(event)=>{   
        event.stopImmediatePropagation();   
        var num=document.querySelector("#decimales").value;
        var value=(Math.PI).toFixed(Number(num));
        var selectDiv=document.getElementById("content1");
        var newElement=document.createElement("p");
        selectDiv.appendChild(newElement);
        newElement.append("El valor de pi es: "+value);
        newElement.classList.add("exercise");
    },false);
}

function impuesto(){
    var info=document.getElementById("formulario2");
    info.addEventListener("submit",(event)=>{
        event.stopImmediatePropagation();
        var precio=document.getElementById("precio").value;
        var iva=(document.getElementById("iva").value)/100;
        var selectDiv=document.getElementById("content2");
        var newElement=document.createElement("h3");
        selectDiv.appendChild(newElement);
        var precioF;
        if(iva=="0"||iva=="undefined"){
            iva=0.16
            precioF=precio*iva;
;
        }
        if(iva<=0.01){
            alert("El iva debe ser numero entero");
            return impuesto();
        }
        else{
            precioF=Number(precio)+Number(precio*iva);
        }
        newElement.append("El IVA es: "+Number(precio*iva)+"$");
        newElement.classList.add("exercise");
        newElement.appendChild(document.createElement("br"));
        selectDiv.appendChild(newElement);
        newElement.append("El precio final es: "+precioF+"$");
        
    });
}

function reves(){
    var info=document.getElementById("formulario3");
    info.addEventListener("submit",(event)=>{
        event.stopImmediatePropagation();
        var texto=document.getElementById("texto").value;
        var numchar=texto.length;
        var selectDiv=document.getElementById("content3");
        var newElement=document.createElement("p");
        selectDiv.appendChild(newElement);
        for(var i=numchar-1;i>=0;i--){
           newElement.append(texto[i]);
        }
        newElement.classList.add("exercise");
    });
}
function aleatorior(){
    var info=document.getElementById("formulario4");
    info.addEventListener("submit",function (event){
        event.stopImmediatePropagation();
        var min=Number(document.getElementById("min").value);
        var max=Number(document.getElementById("max").value);
        if(min=="0"||min=="undefined"){
            min=0
        }
        if(max=="0"||max=="undefined"){
            max=100
        }       
        var num=Math.floor(Math.random()*(max-min)+min);
        var selectDiv=document.getElementById("content4");
        var newElement=document.createElement("h4");
        selectDiv.appendChild(newElement);
        newElement.append("Numero: "+num);
        newElement.classList.add("exercise");
    })
}
