var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David" //declarar y asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarar y asignar
var secondName = 'Ana'; // reasignado
console.log(secondName);

//let 

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; //reasignar
//let fruit = 'Banana'; // no se puede redeclarar

const animal = 'dog'; //declar y asignar
animal = 'cat' // no se puede reasignar

//const animal = 'Snake'; // no se puede redeclarar

const vehicles = []; // mantiene la inmutavilidad
vehicles.push('carrito');
vehicles.pop();