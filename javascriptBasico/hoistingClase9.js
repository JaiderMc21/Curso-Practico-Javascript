//Coercion

/* Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor*/


//COERCION IMPLICITA

var a = 4 + "7"; //47 String
var b = 4 * "7"; //28 Number


//COERCION EXPLICITA

var a = 20;//Number
var b = a + "";//Se comvierte en un string por concatenarlo con un expacio en blanco en b

var c = String(a);//esto es una forma de hacer que el valor 20 de la variable a que era un 20 numero se convierta en un 20 string

var d = Number(c);//Y esto hace lo mismo que el de arriba pero numero
