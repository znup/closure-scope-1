// variables
var a; //declarando
var b = 'b'; //declaramos / asignamos
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion

// Global scope
var fruit = 'Apple'; //global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Latam';
  console.log(country);
}
countries();
console.log(country);
