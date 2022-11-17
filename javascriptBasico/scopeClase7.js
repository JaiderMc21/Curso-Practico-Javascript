//Scopeeee IMPORTANTE
/* El scope recuerdalo jaider se trata de las cosas que se encuentran en estado global que significa que puede ser tomado por cual quier function y cosa, y el scope local que solo puede ser usado dentro de la function o cosa que se encuentre*/

var nombre = "Jaider";//Scope Global

function nombreApellido (){
    var apellido ="Castañeda";//Scope Local
    return nombre + apellido; //Llamado de la variable global a la funcion
};

nombreApellido();//Ejecucion de la funcion
