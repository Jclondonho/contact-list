    let arrayDeObjetos = [
        {
            id: 0,
            nombre:"juan",
            apellido:"londoño",
            telefono: 3045485607,
            ciudad: "medellin",
            direccion: "calle4"
        }

    ];

    let nuevoContacto = "daniel guerrero";

    console.log("lista vieja: ");
        for (let j = 0; j < arrayDeObjetos.length; j ++){
            console.log(arrayDeObjetos[j]);

        }


    // imprimir (arrayLista);

    function agregarLista (id,nombre,apellido,telefono,ciudad,direccion){
        let nuevoContacto = [
            {
                id: id,
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                ciudad: ciudad,
                direccion: direccion
            }
    
        ];

        arrayDeObjetos.push(nuevoContacto);
    }
    agregarLista(1, "Henry","perez",3003208877,"cartagena","calle5" );
    agregarLista(2, "daniel","guerrero",314888913,"sincelejo","calle6");
    agregarLista(3, "carlos","mejia",3127653421,"monteria","calle7" );
    
    console.log("lista nueva");
    for (let i = 0; i < arrayDeObjetos.length; i ++){
        console.log(arrayDeObjetos[i]);

    }

    borrarContacto(arrayDeObjetos);

    imprimir (arrayDeObjetos);


    function borrarContacto(contactoEliminado){
        console.log("contacto eliminado: " + contactoEliminado.pop());
    }

    function imprimir (arrayLista1){
        console.log("nueva lista con el contacto Eliminado: ");
        for (let i = 0; i < arrayLista1.length; i ++){
            console.log(arrayLista1[i]);
        }
        
    }

    //Recorer Arrays con for
    //Para buscar algo en especifico While