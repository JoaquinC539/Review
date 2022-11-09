'use strict'
function exercise(){
    console.log("Ejercicio 4,Dada un expresión de letras, remplazar mas de dos letras a juntas con la letra b")
    var expression="aaaewewedsdaewddsxaac";
    var prune=expression.replace(new RegExp("[Aa]{2}"),"b");
    console.log("Expresion: ",expression);
    console.log("Filtrada:4 ",prune);    
}
module.exports={exercise}