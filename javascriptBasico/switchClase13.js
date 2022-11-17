//Switch algo muy muy similiar al if else

var numero = 1;

switch(numero){
    case 1: 
        console.log("Soy uno");
       break;//El break se usa para cerra el caso y si una de las validaciones es correcta se detenga muestre el resultado y no siga validando

     case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    
    default:
        console.log("No soy nada")

}   


//Prueba

/* Informacion del juego

    piedra = 0
    tijera =1 
    papel =2

*/

function juegoSwitch (jugador1,jugador2){

    switch(true){//pendiente el true se usa para validar si algo es correctooo

        case (jugador1===0 && jugador2 ===1):
            console.log("Gano el jugador 1");
        break;
        case jugador1===1 && jugador2===2:
            console.log("Gano el jugador 1");
        break;
        case jugador1===2 && jugador2===0:
            console.log("Gano el jugador 1");
        break;
        case jugador1===jugador2:
            console.log("Empate");
        break;
        default:
            console.log("Gano el jugador 2");
    }
}