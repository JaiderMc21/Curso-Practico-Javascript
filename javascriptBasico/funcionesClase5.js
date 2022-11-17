//FUNCIONESSSS DECLARATIVAS Y EXPRESION

//Declarativas
/*La estructura es:
    function nombreDeFuncion (Parametros){Instrucciones a ejecutar}
*/
function miFuncion(){
    return 3;
};

//Expresion o Anonimas
/*La estructura es:
    var nombreDeVariable = function (Parametros){Instrucciones a seguir}
*/

var miFuncion2 = function(a,b){
    return a + b;
};

miFuncion2();//Cuando es una funcion debemos de ponerle los parentesis al final


//Ejms

function saludarEstudiantes (estudiante){
    return("Hola" + estudiante);
} //Recuerda que a pesar de ser un parametro siguen aplicando las reglas de los valores 
// cuando ejecuto console.log en vez de return me sale el resultado y el tipo de dato que se manejo
