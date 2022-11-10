'use strict';
function exercise(){
    console.log("Ejercicio 8, hacer que el programa escriba una linea de texto en un archivo");
    var fs=require("fs");
    fs.appendFile('../test.txt','\nnueva info',function(err){
        if(err){
            console.log(err);
        }else{console.log("Listo")}
    });

    
}
module.exports={exercise};