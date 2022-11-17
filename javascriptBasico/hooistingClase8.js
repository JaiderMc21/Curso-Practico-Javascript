//Hoisting

/* El Hoisting es un proceso del compilador de JavaScript, que consiste en que la declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta despues de su ejecución.*/ 

//EJM 

//var miNombre = undefined;//esta linea automaticamente la crea en memoria el javascript

console.log(miNombre);//El console.log es una herramienta que nos proporciona el navegador para poder ejecutar variables y algunas ojo algunas fuciones

var miNombre = "Jaider";


//Ejm con funciones

hey();

function hey (){
    console.log("Hola " + miNombre);
};

var miNombre = "Diego"

/*Por buenas practicas todas las funciones que vayamos a usar en el codigo lo mejor es realizarlas todass al inicio del codigo en el numero de linea 2 o 3 para evitar este tipo de problemas */

