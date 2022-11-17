//console.log('Hello World')//Validar si esta enlazado el js

const h1 = document.querySelector('h1');//para seleccionar una etiqueta
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*btn.addEventListener('click',btnOnClick); //esto es una forma de escuchar diferente y mas ordenada desde javascript sin intervenir en el html*/

form.addEventListener('click',sumarInputValues);

function sumarInputValues(){
  //event.preventDefault();// esto es una forma de cancelar el recargo de la pagina por causa del submit del formulario
  const sumaInputs = Number(input1.value) + parseInt(input2.value);
  pResult.innerText ="Resultado: " + sumaInputs;

};




