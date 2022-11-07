'use strict'
const ex1=require("./1exercise");
const ex2=require("./2exercise.js");

console.clear();
console.log("Bienvenido a los ejercicios de NodeJS");
const url="https://www.etutorialspoint.com/index.php/exercise/nodejs-exercises";
console.log("Ejercicios de NodeJS: ",url);
console.log("Este es un program interactivo, inserta el numero de ejercicio donde se pide \n y desplegará el ejercicio correspondiente de los x ejercicios");
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout});


function prompt(){
    rl.question("Selecciona el ejercicio (exit para terminar): ", function(name){
        if(name=="exit"){
            return rl.close();
        }
        if(name==1){
            ex1.exercise();
            prompt();
        }
        if(name==2){
            ex2.exercise();
            prompt();
        }
    });
    
}
       
    


rl.on("close",function(){
process.exit(0);
});
prompt();