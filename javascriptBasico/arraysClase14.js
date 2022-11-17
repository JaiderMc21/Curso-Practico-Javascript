//Arrayssssss almacenamiento de varios datos

//Datos 
//El array puede tener mas array dentro del array jsjsjsjsjss

var frutas = ["Manzana","Pera","Piña","Banano"] //Esto es un array que ahora es una lista de frutas

console.log(frutas);//Esta seria la forma de ver lo que se encuentra en el array

console.log(frutas.length);//esta seria una forma de ver que tantos elementos se encuentran dentro del array en otras palabras nos muestrta la longitud

console.log(frutas[1]);//con esta estructura lo que hacemos es imprimir en pantalla solamente una cosa dentro del array ejm Pera

//--------------------------------------------------

//Estos metodos nos ayudaran a mutar agregar o quitar cosas del array

var frutas = ["Manzana","Pera","Piña","Banano"];

var masFrutas = frutas.push("Uvas");//Con este metodo nos ayuda a agregar mas cosas al final dentro de nuestro array ejm Uvas

var masFrutaInicial = frutas.unshift("Guanabana");//Esto nos ayudara a agregar un elemento al inicio del array no como el .push que lo agrega al finalejm la guanabana

var Eliminar = frutas.pop("Uvas");//Con este metodo nos ayuda a eliminar cosas de mi array ejemplo las uvas

var borrarFrutaInicial = frutas.shift("Uvas");//esto nos ayudara a eliminar algo al inicio del array sin importar lo que nosotros digamos eliminara el primero

var verPosicion = frutas.indexOf("Banano");//Esto nos ayudar a buscar el index,lugar,numero que ocupa algo dentro del array ejem estamsos buscando el Banano que es el index 3


