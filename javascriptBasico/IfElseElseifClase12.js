//CONDICIONALES IF ,ELSE, ELSE IF

//Estrutura de IF

/*
if (Condicion){
    tarea que va a pasar si la condicion es correcta
}
*/

//ejm

//dato ya con solo poner un true ya estamo afirmando que este if es verdadero en otra palabras que si va a pasar

//otro dato lo que pongamos en la condicion del if tiene que ser verdad por que si no por ende nos vamos a quedar sin esa condicion

if (true){
    console.log("Hola");
}

//Estructura else

/*if (Condicion){
    tarea que va a pasar si la condicion es correcta
}else{
    tarea que sucedera si la condicion no es correcta
} 
*/

if(false){
    console.log("Hola");
}else{
    console.log("soy falso");
}

//Estructura else if

//dato nosotros ponemos agregar la cantidad de else if que queramos y else es como un si no me cumples al menos una de las condiciones que puse pues te mueres y ya jajajaja


/*if (Condicion){
    tarea que va a pasar si la condicion es correcta
}else if (segunda condicion si la primera no es correcta) {

}else{
    tarea que sucedera si ninguna condicion no es correcta
}  */

//ejm

var edad = 18;


if (edad===18){
    console.log("Si puedes votar");
}else if (edad>18){
    console.log("El usuario ya a votado antes")
}else{
    console.log("Usted aun no puede votar")
}

//un ejemplo mas loco jejejeje usando functio,valores de comparacion y el tema de esta clase

function validarVotador (edad){
    if (edad===18){
        console.log("Si puedes votar");
    }else if (edad>18){
        console.log("El usuario ya a votado antes");
    }else if (edad<18 && edad>0){
        console.log("Usted aun no puede votar");
    }else if (edad<0){
        console.log("Disculpe usted no a ni nacido");
    }else{
        console.log("A chimbear al parque");
    };
};



//Operador ternario es una forma de usar el if y el else de manera mas corta

/*Estructura 

condition ? true : false;

el signo de ? es el if
el signo de : es el else


*/

//EJM

var numero = 1;

var resultado = numero === 1 ? " si soy un uno " : "No no soy un uno"

console.log(resultado);//saldra si soy un uno



//Reto

var piedra = 0;
var papel = 1;
var tijera = 2;

function juegoPiedraPapelTijera (jugador1,jugador2){
    if(jugador1===piedra && jugador2 ===tijera){
        console.log("Gano el jugador1")
    }else if (jugador1===tijera && jugador2===papel){
        console.log("Gano el jugador1")
    }else if (jugador1===papel && jugador2===piedra){
        console.log("Gano el jugador1")
    }else if(jugador1===jugador2){
        console.log("Empatados")
    }else{
        console.log("Gano el jugador2")
    }
    
}
