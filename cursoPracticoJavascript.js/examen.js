/* una variable es un elemento en consola que se encarga de guardar informacion en ella o guardas un espacio en consola para en un futuro usarlo

la diferencia entre declarar y inicializar una variable es que cuando declaras una variable lo que estas haciendo es apartando el espacio en memoria y cuando la inicializas es cuando le estas dando un valor a dicho espacio que separastes en memoria

la diferencia entre sumar numeros y concatenar strings es que cuando concatenas strings no estas directamente haciendo una suma solo estas agregando strings al texto que tienes ejemplo 

1 + "1" = 11

el operador que nos permite sumar o concatenar es el operador del +


Nombre = string
Apellido = string
Nombre de usuario Platzi = string
Edad = Number
Correo Electronico = String
Mayor de edad = Booleano
Dinero ahorrado = Number
Deudas = Number

*/

var Nombre = "Jaider Manuel";
let Apellido = "Castañeda Pavas";
let Usuario_Platzi = "Jaider021";
let Edad = 19;
let Correo_Electronico = "jaidermc21@hotmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 2000000;
let deudas = 210000;

function nombreCompleto(){
    return Nombre + Apellido;
    return Nombre + " " + Apellido;
}

function nombreCompleto3(){
    return Nombre + " " + Apellido;
}

function nombreCompleto2(){
    console.log(Nombre + " " + Apellido);
}

function dineroReal(){
    var realmoney = dineroAhorrado - deudas;
    return realmoney;
}


/* Una funcion es un conjunto de acciones que nos permitiran reutilizarlas en nuestro codigo a las cuales se les puede agregar parametros y crear una gran diversidad de eventos

una funcion me sirve en mi codigo cuando considero que va a ser necesaria para poder cumplir un objetivo o repetir una accion ejemplo una suma una union de varias variables para realizar una operacion

la diferencia entre parametros y argumentos es que los parametros son los filtros necesarios para realizar mi funcion y los argumentos son las acciones que realizara mi funcion si se cumplen los parametros 

*/


function infoUsuario(nombre,apellido,nickname){
    console.log("Mi nombre es "+ nombre + " " + apellido +", pero prefiero que me digas " + nickname + ".")
}

function infoUsuario2(nombre,apellido,nickname){
    return ("Mi nombre es "+ nombre + " " + apellido +", pero prefiero que me digas " + nickname + ".")
}

function infoUsuario3(nombre,apellido,nickname){
    return (`Mi nombre es ${nombre} ${apellido} pero me gusta que me digan ${nickname}.`)
}

/*un condicional es una expresion que nos permite evaluar si es verdadero o falso 

los condicionales que existen son if else y switch


Puedo combinar funciones y condicionales?

Podemos encadenar una respusta desde un condional a otro pero no podemos combinarlo dentro de una misma expresión. Si podemos ocuparlos de forma separada y luego encadenar una acción dependiendo del resultado.

repasar clase del if else y el while
*/

const tipoDeSuscripcion= "Basic"

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Registrate para obtener una suscripcion")
}


/*No me dio el ki del reto */

/*Un Ciclo es una accion que se hace de forma repetida hasta donde nosotros lo indiquemos con los parametros*/


/*Los tipos de ciclo que existen en javascript son el for, for of, while  */


/* Un ciclo infinito como el nombre lo indica es un ciclo que no tienen fin que al momento de crearlo no le pusimos la condicion por la cual acabaria dicho ciclo y es un problema poque podria hacer que nuestro codigo se quede ahi de forma enterna y crashee el codigo*/

/* Los ciclos y las condiciones si se pueden convinar*/


let i= 0;
while (i < 5) {
    console.log("El valor de i es: " + i++);
}


let a = 10;
while(a>=2){
    console.log("El valor de i es: " + a--);
}


/*Un array es un lugar en el cual se alamacenan elementos*/

/*un objeto es un lugar en el cual se almacena informacion del objeto seleccionado en otras palabras multiples variables con sus valores */

/*Ocupamos objetos cuando el conjunto de elementos es muy grande y de distintos tipos de valores. */

/*Claro que se pueden mezclar arrays con objetos y viceversa */

var colores = ["Rojo","Verde","Azul"];

function imprimirPrimero (primero){
   return primero.shift();
};

//------------------------------------------------

var colores = ["Rojo","Verde","Azul"];

function imprimirArrayUnoAUno (cualquierArray){
    for(Unitario of cualquierArray){
        console.log(Unitario);
    };
};

//------------------------------------------------

//https://www.youtube.com/watch?v=a7b4S9Zk65w&ab_channel=DesarrolloWeb.com

var computadora = {
    board:"Asrock",
    procesador:"Intel",
    grafica:"Evga",
};

function imprimirObjetoUnoAUno (objeto){
    for(objetoUnidad in objeto){
        console.log(objeto[objetoUnidad]);
    }
}




