### Arraysss,Listas y Objetos

- Que es un array ?

Es un lista de elementos. en la cual se puede guardar lo que nosotros queramos

```js
const array = [1,'jajaja',true,false];

```

- Que es un objeto ?

Es una lista de elementos pero cada elemento tienen un nombre clave.

```js
const obj = {
    name: 'Fulanito',
    edad: 3,
    comidasFavoritas = ['Pollo Frito','Vegetales']
};
```

- Cuando es mejor usar objetos o arrays ?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplir). Mientras que un objeto cuando los nombre de cada elemento son importantes para nuestro algoritmo


-Puedo mezclar arrays con objetos y viceversa ?

Si. Los arrays pueden guardar objetos y los objetos pueden guardar arrays entre sus propiedades.


```js
function imprimirPrimeroArray (array){
    console.log(`Este es tu primer elemento ${array[0]}`)
}

function imprimirDeAUno (uno){
    for(var i = 0 ;i < uno.length ; i++){
        console.log(`El valor es: ${uno[i]}`);
    };
}


```

### Dato del profe

Si te vas a documentar de javascript o de programacion trata de buscar siempre la pagina developer.mozilla.org entre los resultados de busqueda en google


### En este apartado para poder imprimir cada valor de un objeto uno por uno lo que hicimos fue transformar el objeto en un array y ejecutar la funcion del array de imprimir uno por uno.

- Transformar un objeto a un array es con Object.values()

```js

const obj = {
    name: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo Frito','Vegetales']
};

function imprimirDeAUnoObj (obj){

    var uno = Object.values(obj)
    for(var i = 0 ;i < uno.length ; i++){
        console.log(`El valor es: ${uno[i]}`);
    };
}

```


