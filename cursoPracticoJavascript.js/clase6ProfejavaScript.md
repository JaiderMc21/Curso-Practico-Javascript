### Ciclosss

- Que es un ciclo ?

La forma de ejecutar un bloque de codigo hasta que se cumpla una condicion.

- Que tipo de ciclos existen?

While, For, do while.

- Que es un ciclo infinito ?

Es cuando la validacion de nuestros condicionales nunca se cumple y termina toteando(dañando) la aplicacion (cuando el navegador ya no puede mas de tanta ejecucion de ese bloque de codigo)

dato: el for es un ciclo el cual nos puede ayudar a evitar ese tipo de cituaciones de ciclos infinitos.

 - Puedo mezclar ciclos y condicionales ?

 Si aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo. 

```js

let i = 0;
while(i 5){
    console.log('El valor de i es: ' + i);
    i++;
};

let i = 10;
while (i=2){
    console.log('El valor de i es: ' + i);
    i--;
};

```

- Dato recuerda siempre romper el ciclo cuando uses el while ejem el i--;

### -------------------------------------------------

- Respuesta de prueba del examen


```js
let respuesta;

while(respuesta != '4'){
    let pregunta = prompt('¿Cuanto es 2 + 2?');
    respuesta = pregunta;
};

```


