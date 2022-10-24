"use strict";
exports.__esModule = true;
exports.logPerson = exports.users = void 0;
;
exports.users = [
    {
        name: "Max",
        age: 25,
        occupation: "Mesero"
    },
    {
        name: "Pedro",
        age: "34",
        role: "Admin"
    },
    {
        name: "Pamela",
        age: 21,
        occupation: "Policia"
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "Salvador del mundo"
    }
];
function logPerson(user) {
    if (user.occupation != undefined) {
        $("#content1").append("- ".concat(user.name, " ").concat(user.age, " ").concat(user.occupation, " <br>"));
    }
    //Ejercicio 2
    if (user.role != undefined) {
        $("#content2").append("- ".concat(user.name, " ").concat(user.age, " ").concat(user.role, " <br>"));
    }
}
exports.logPerson = logPerson;
$("#content1").append("Usuarios: <br>");
exports.users.forEach(logPerson);
//Ejercicio 3
var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    //Methods
    /**
     * set Color
     */
    Automovil.prototype.setColor = function (color) {
        this.color = color;
        return this.color;
    };
    /**
     * setModel
     */
    Automovil.prototype.setModel = function (year) {
        this.model = year;
        return this.model;
    };
    /**
     * setDistance
     */
    Automovil.prototype.setDistance = function (km) {
        this.distance = km;
        return this.distance;
    };
    /**
     * setDefects
     */
    Automovil.prototype.setDefects = function (defects) {
        this.defects = defects;
        return this.defects;
    };
    Automovil.prototype.setBrand = function (brand) {
        this.brand = brand;
        return this.brand;
    };
    Automovil.prototype.setType = function (type) {
        this.type = type;
        return this.type;
    };
    return Automovil;
}());
function carmodel() {
    var automovil = new Automovil();
    var color = $("#color").val();
    var model = Number($("#model").val());
    var brand = $("#brand").val();
    var type = $("#type").val();
    var distance = Number($("#km").val());
    var defects = $("#defects").val();
    $("#content3").empty();
    automovil.setColor(color);
    automovil.setModel(model);
    automovil.setBrand(brand);
    automovil.setType(type);
    automovil.setDistance(distance);
    if (defects == "true") {
        automovil.setDefects(Boolean(true));
        $("#content3").append("El auto es un: ".concat(automovil.type, " ").concat(automovil.brand, "de color ").concat(automovil.color, " modelo ").concat(automovil.model, " con ").concat(automovil.distance, "km y tiene defectos"));
    }
    else {
        automovil.setDefects(Boolean(false));
        $("#content3").append("El auto es un: ".concat(automovil.type, " ").concat(automovil.brand, "de color ").concat(automovil.color, " modelo ").concat(automovil.model, " con ").concat(automovil.distance, "km y no tiene defectos"));
    }
}
