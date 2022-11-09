'use strict'
function exercise() {
    console.log("Ejercicio 5, dado un objeto JSON borrar la segunda propiedad y obtener la longitud del objeto");
    var user = {
        first_name: "John",
        last_name: "Smith",
        age: "38",
        department: "Software"
        };
        console.log(user);

        delete user.last_name;
        console.log(user);
        console.log(Object.keys(user).length);
}

module.exports={exercise}