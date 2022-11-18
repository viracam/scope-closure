// varibles

var a; //declarando
var b = 'b'; //declarar y asignar
b = 'bb'; //reasignacion
var a = 'aaa'; //redeclaracion

// global Scope

var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //Se esta declarando como global
    console.log(country);
}

countries();
console.log(country);

