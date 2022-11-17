//console.log('Hello World')//Validar si esta enlazado el js

const h1 = document.querySelector('h1');//para seleccionar una etiqueta
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){
  //console.log('Escuchando el evento de Click');

  const sumaInputs = Number(input1.value) + parseInt(input2.value);//con el valor Number y el valor parseInt le estamos diciendo al javascript que los valores a poner seran numeros
  pResult.innerText ="Resultado: " + sumaInputs;

};


