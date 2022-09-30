'use strict'

var users=[];
var post=[];
var selectDiv=document.getElementById("content1");

function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
}


getUsers()
.then(response=>response.json())
.then(data=>  {
    users=data;    
    addusers(users);

    });

function addusers(users){
    users.forEach((element,i) => {
        var newElement=document.createElement("p");
        selectDiv.appendChild(newElement);
        newElement.innerHTML=(i+1)+"-"+element.name+", email: "+element.email+", zipcode: "+element.address.zipcode
});
}
//Función para buscar un solo comentario de todos los registrados
function look(){
 var info=document.getElementById("spost");
 info.addEventListener("submit",(event)=>{
    var selection=document.getElementById("num").value;
    selection=Number(selection);
    getPost(selection);
    
 });
}
function getPost(selection){
    return fetch('https://jsonplaceholder.typicode.com/posts/'+selection)
    .then(response=>response.json())
    .then(data=>{
        post=data;
        postPost(post);
        
    })
    .catch(error=>{console.log(error)})
    }

function postPost(post){
    var selectDiv=document.getElementById("content2");
    var newElement=document.createElement("p");
    selectDiv.appendChild(newElement);
    newElement.innerHTML=("Usuario numero: "+post.userId+"<br> "+"Titulo: "+post.title+" <br>"+"Contenido: "+post.body);

}




