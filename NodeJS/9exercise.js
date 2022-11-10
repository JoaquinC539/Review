'use strict'
function exercise() {  
    console.log("Ejercicio 9, comprimir un archivo(zip)");
    var zlib=require('zlib');
    var fs=require('fs');    
    const {pipeline}=require('node:stream');
    const {promisfy}=require('node:util');    
    async function doZip(input,output){
        const gzip=zlib.createGzip();
        const source=fs.createReadStream(input);
        const product=fs.createWriteStream(output);
        await pipeline(source,gzip,product,(err)=>{
            if(err){console.log("un error",err)}
        });      
        }
     doZip('../test.txt','../Zipped.txt.gz')
     .catch((err)=>{console.log("Hubo un error",err)})
     console.log("Hecho")}
module.exports={exercise}