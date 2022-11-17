### Resolviendo el ejercicio demas y de prueba del examen 

```js

function conseguirTipoSuscripcion(suscripcion){
    if(suscripcion == 'Free'){
        console.log('Solo puedes tomar los cursos gratis de platzi')
         return;
    }
    if(suscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }   
    if(suscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }   
    if (suscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
         return;
    }

    console.warm('Ese tipo de suscripcion no existe')//El console.warm lo que hace es ponerle un colorsito amarillo como de error al mensaje :3
}


``` 

### Dato 

Console.warm para dar alertas es muy bueno lo que hace es darle un color de error.


### Bonus plus de los plus

```js

let subscripciones = {
    Free: 'Solo puedes tomar los cursos gratis de platzi',
    Basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function validarSuscripcion (sub){
    if(subscripciones[sub]){
        console.log(subscripciones[sub]);
        return;
    };

    console.warn('Ese tipo de subscripcion no existe.')
    
}

```

### dato

Uno si puede explorar en los objetos asi obj[] pero en vez de poner un numero tiene que poner exactamente de la descripcion que esta dentro del objeto. Estas primeras clases del profe enseñando a resolver son muy buenas hay que tenerlas muy en cuenta en el futuro :3

