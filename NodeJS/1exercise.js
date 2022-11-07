 'use strict'
function exercise(){
    const Firstex=console.log("Hacer un programa para hacer llamadas http a externos");
    var https=require('http');
    var req=https.request({
       host:"www.google.com",
       method:"GET",
       path:"/"
    },function(response){
       response.setEncoding("utf8");
       response.on("readable",function(){
           console.log(response.read());
       });
       
    });
    console.log(req);
}


 module.exports={exercise}