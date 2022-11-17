//For y for of son ciclos repetir algo de manera continua 

var estudiantes = ["Jaider","Aleja","Gabo","Pepe","Elen","Sara"];

function saludarEstudiante (estudiante){
    console.log(`Hola, ${estudiante}`);
}

/*Datos 
casi siempre en la sintaxis for se utiliza la variable i pero si a uno le gustara podria
utilizar una difernte 

for(var i = 0;i < estudiantes.length; i++)
Lo que realizamos en esa formula es primera parte inicializamos la variable y le 
determinamos un valor; Luego le estamos diciendo a i que realice el ciclo for mientras sea menor que el rango de la variable estudianes
y para finalizar el ciclo le estamo diciendo a i que se aumente +1 cada por cada ciclo completado ese +1 se realiza gracias al ++



*/

for(var i = 0;i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i])
}


//FOR OF

/*Esta es una forma de realizar lo de arriba de una forma mas reducida lo que le estamos diciendo
es traeme iniciamos la variable estudiante y le decimos que salude de la tabla de estudiantes a un estudiante y eso lo hace hasta terminar de saludar */

for (var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}

