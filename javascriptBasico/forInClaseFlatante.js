//For in se usa para hacer recorridos en objetos como lo hemos visto en los arrays pero en objetos

//https://www.youtube.com/watch?v=a7b4S9Zk65w&ab_channel=DesarrolloWeb.com

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
  };
  function readObject(object) {
    for (let key in object) {
      console.log(object[key]);
       }
   }
  readObject(myCar);