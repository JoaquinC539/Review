'use strict'

function exercise() {  
    console.log("Ejercicio 7, leer un archivo linea por linea")
    
    var rd=require('readline');
    var fs=require('fs');

    var file=rd.createInterface({
        input:fs.createReadStream('../index.html')
    });
    file.on("line",function(line){
       console.log(line);
    });
    
}
module.exports={exercise}