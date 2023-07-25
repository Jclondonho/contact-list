let arrayLista = ["juan londoño","oscar villegas","andres perez"];
let nuevoContacto = "daniel guerrero";
console.log("lista vieja" +arrayLista);
agregarLista(arrayLista, nuevoContacto);
borrarContacto(arrayLista);
imprimir (arrayLista);
function agregarLista (arregloDecontacto, contactoNuevo){
arregloDecontacto.push(contactoNuevo);

console.log("lista nueva");
for (let i = 0; i < arregloDecontacto.length; i ++){
    console.log(arregloDecontacto[i]);

}
}
function borrarContacto(contactoEliminado){
    console.log("contacto eliminado: " + contactoEliminado.pop());
}
function imprimir (arrayLista1){
    console.log("nueva lista es: ");
     for (let i = 0; i < arrayLista1.length; i ++){
         console.log(arrayLista1[i]);
     }
    
}

//Recorer Arrays con for
//Para buscar algo en especifico While