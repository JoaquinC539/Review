function exercise() {
    console.log("Ejercicio 6, conectar con el modulo de SQL");
    var mysql=require("mysql");
    var connnection=mysql.createConnection({
        host:"hostname",
        user:"user",
        password:"password",
        database:"database"
    });

    connnection.connect(function(err){
        if(err){
            console.log("Error al conectarse ocn la base datos");
            return;
        }
        console.log("Conexión establecida");
    })
    connnection.end(function(err){

    });
}
module.exports={exercise}