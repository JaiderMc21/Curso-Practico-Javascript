//console.log('Hello World')//Validar si esta enlazado el js

const h1 = document.querySelector('h1');//para seleccionar una etiqueta
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');//para seleccionar una clase
const pid = document.querySelector('#pid');//para seleccionar un id
const input = document.querySelector('input');//para seleccionar una etiqueta

/*querySelectorAll nos ayuda a por ejemplo seleccionar todos los div */

console.log(input.value);

console.log({//nos ayuda a imprimir todos esas etiquetas como un elemento 
  h1,
  p,
  parrafito,
  pid,
  input
});

//------------------------------------------------------------------

/*Modificando Html desde JAVASCRIPT */

h1.innerHTML = 'mario <br> Feo' ;
h1.innerText = 'mario <br> Feo' ;

console.log(h1.getAttribute('class'));// esto es para leer si hay o no hay algo dentro de lo que seleccionamos ejemplo la class

h1.setAttribute('class', 'verde')//Con setAttribute lo que podemos hacer es modificar el valor del atributo de la etiqueta h1 del html 

h1.classList.add('rojo');//Con classList.add lo que hacemos es agregarle una clase

h1.classList.remove('verde');//Con classList.remove lo que hace es remover una clase

input.value = "456";//con el input no es necesario ingresar con un getAtrribute o un setAtrribute se puede cambiar dirtectamente

console.log(document.createElement('span'));

//-------------------------------------------------

/*Creando una etiqueta nueva en html */
const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);


pid.innerHTML = "";//aca lo que hicimos fue borrar el contenido anterior que habia en la etiqueta asociada al id pid

pid.append(img);// aca lo que hicimos fue agregar la etiqueta creada en javascript a la etiqueta que es parte del id pid en otras palabras no borra el contenido que tiene






