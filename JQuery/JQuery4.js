'use strict'
function clean(){	
	var classClear=document.querySelectorAll('.exercise');
	classClear.forEach(exercise=>{
		exercise.remove();});}

function removeCSS(){
    $("#toRemoveCSS").css("background","none");
}



$("#toClick").mousedown(function(event){
    switch (event.which) {
        case 1:
            $("#content1").append('Click izquierdo');
            break;
        case 2:
            $("#content1").append('Boton medio click.');
            break;
        case 3:
            $("#content1").append('Click derecho.');
            break;
        default:
            $("#content1").append('Tienes un mouse extraño');
    }
});

$(document).keypress(function(e){
    if(e.which==13){
        alert("Tecla enter pulsada");
    }
});

$.fn.rowCount=function(){
    return $('tr',$(this).find('tbody')).length;
}

$.fn.columnCount = function() {
    return $('th', $(this).find('tbody')).length;
}

var rowctr=$("#table1").rowCount();
var colctr=$("#table1").columnCount();

$("#print").append("Filas: "+rowctr+" Columnas: "+colctr);