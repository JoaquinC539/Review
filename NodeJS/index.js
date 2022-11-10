'use strict'
const ex1=require("./1exercise");
const ex2=require("./2exercise");
const ex3=require("./3exercise");
const ex4=require("./4exercise");
const ex5=require("./5exercise");
const ex6=require("./6exercise");
const ex7=require("./7exercise");
const ex8=require("./8exercise");
const ex9=require('./9exercise');
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
    setTimeout(()=>{console.log("Selecciona el ejercicio (exit para terminar): ");},1000)
    rl.question(" ", function(name){
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
        if(name==3){
            console.log("Ejercicio 3, dada una url, descomponer sus propiedades en un json");
            rl.question("Dame una url: ",function(url){
                ex3.exercise(url);
                prompt();
            })           
        }
        if(name==4){
            ex4.exercise();
            prompt();
        }
        if(name==5){
            ex5.exercise();
            prompt();
        }
        if(name==6){
            ex6.exercise();
            prompt();
        }
        if(name==7){
            ex7.exercise();
            prompt();
        }
        if(name==8){
            ex8.exercise();
            prompt();
        }
        if(name==9){
            ex9.exercise();
            prompt();
        }
    });
    
}     
rl.on("close",function(){
process.exit(0);
});
prompt();