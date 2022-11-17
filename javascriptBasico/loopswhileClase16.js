//Lopps es como el for pero una forma diferente de hacerlo como si fuera una funcion


var estudiantes = ["jaider","Aleja","Gabo","Pepe","elen","Sara"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
};

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();//lo que esta haciendo aca es sacar los estudiantes del array una forma de verlo es gracias al console.log dentro del while
    saludarEstudiante(estudiante);
}