 'use strict'
 function exercise(){
    console.log("Segundo ejercicio, hacer una petición por get ");
    const https=require("https");
    https.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",(response)=>{
        let data="";
        response.on("data",(chunk)=>{
            data +=chunk;
        });

        response.on("end",()=>{
            console.log(JSON.parse(data).explanation);
        });


    }).on("error",(err)=>{
        console.log("Error: ",err.message);
    });
}
    


module.exports={exercise}