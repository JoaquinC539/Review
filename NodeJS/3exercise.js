 'use strict'
 function exercise(urli){    
    var url=require('url');
    
    
    
        var parseURL=url.parse(urli,true);
        console.log(parseURL);
 }
 module.exports={exercise}
