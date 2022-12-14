


 //Ejercicio 1
export interface User{
    name:string,
    age:number,
    occupation:string
};



export const users:unknown[]=[
{
    name:"Max",
    age:25,
    occupation:"Mesero"
},
{
    name:"Pedro",
    age:"34",
    role:"Admin"
},
{
    name:"Pamela",
    age:21,
    occupation:"Policia"
},
{
    name:"Bruce Willis",
    age:64,
    role:"Salvador del mundo"
}
]

export function logPerson(user:any){
    if(user.occupation!=undefined){
    $("#content1").append(`- ${user.name} ${user.age} ${user.occupation} <br>`);}
    //Ejercicio 2
    if(user.role!=undefined){
        $("#content2").append(`- ${user.name} ${user.age} ${user.role} <br>`);
    }
}

$("#content1").append("Usuarios: <br>")
users.forEach(logPerson);

//Ejercicio 2 


interface Admin{
    name:string,
    age:number,
    role:string
}

export type Person=unknown;
//Ejercicio 4
interface Obligatories{
    setColor(color);
    setModel(model);
    setDistance(distance);
    setBrand(brand);
    setType(type);
}



//Ejercicio 3

class Automovil implements Obligatories{
//Object properties
    public color:string;
    public model:number;
    public brand:string;
    public type:string;
    public distance:number;
    public defects:boolean;

    //Constructor
    constructor(color,model,brand,type,distance,defects){
        this.color=color;
        this.model=model;
        this.brand=brand;
        this.type=type;
        this.distance=distance;
        this.defects=defects;
    }

    //Methods
    /**
     * set Color
     */
    public setColor(color) {
        this.color=color;
        return this.color;
    }  
    /**
     * setModel
     */
    public setModel(year) {
        this.model=year;
        return this.model;
    } 
    /**
     * setDistance
     */
    public setDistance(km) {
        this.distance=km;
        return this.distance;
    }
    /**
     * setDefects
     */
    public setDefects(defects) {
        this.defects=defects;
        return this.defects;
    }
    public setBrand(brand){
        this.brand=brand;
        return this.brand;
    }
    public setType(type){
        this.type=type;
        return this.type;
    }

}

function carmodel(){    
    var color=$("#color").val();
    var model=Number($("#model").val());
    var brand=$("#brand").val();
    var type=$("#type").val();
    var distance=Number($("#km").val());
    var defects=$("#defects").val();
    var automovil=new Automovil(color,model,brand,type,distance,defects);
    $("#content3").empty(); 

    if(defects=="true"){
        automovil.setDefects(Boolean(true))
        $("#content3").append(`El auto es un: ${automovil.type} ${automovil.brand} de color ${automovil.color} modelo ${automovil.model} con ${automovil.distance}km y tiene defectos`);
    } else{
        automovil.setDefects(Boolean(false))
        $("#content3").append(`El auto es un: ${automovil.type} ${automovil.brand} de color ${automovil.color} modelo ${automovil.model} con ${automovil.distance}km y no tiene defectos`);
    }     
}

