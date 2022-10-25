//these are variables in the global context
let a = 50;
let b = "Somestring";
var c = 100;

//this is a regular function bound to global context window
function sum(x, y) {
  return x + y;
}

//console.log(sum(10, 20));

//console.log(window.sum(100, 200));

//console.log(this.sum(1000, 2000));

//console.log(`a: ${window.a}, c:${window.c}`);

//console.log(`a: ${this.a}, c:${this.c}`);


/*
//this is a regular function
var multiply = function (x, y) {
  "use strict";
  console.log("Inside multiply function");
  //this is undefined here because strict mode is used
  console.log(this);
  return x * y;
};

multiply(40, 50);

//this is a regular function
var power = function (x, y) {
  console.log("Inside power function");
  //this is window here because defaultsloppy mode is used
  console.log(this);
  return x * y;
};

console.log(power(40, 2)); 



//this must be true because we are in global context
console.log(this === window);

//this is an object
var calculator = {
  x: 1,
  y: 1,

  divide: function (x, y) {
    console.log("We are inside divide function of an object");
    //this referes to the object calculator
    console.log(this === window);
    return x / y;
  },
};

//we are calling a function within an object
console.log(calculator.divide(5, 2));


//inside a class
class Example {
  some;

  constructor(some) {
    this.some = some;
  }

  first() {
    console.log("We are inside Example.first()");
    console.log(this.some);
  }

  static second() {
    console.log("We are inside Example.second()");
    console.log(this.unique);
  }
}

const ex1 = new Example(5000);
//inside a class this refers to the object instantiated
ex1.first();

//if we call in a static context, it refers to the static variables of the class
Example.unique = 10000;
Example.second();
*/

//this is an object constructor
function Processor() {
  this.x = 50;
  this.y = 100;
  //console.log(this);
  //this within an object constructor refers to the object being created
  this.callMe = function () {
    console.log(this); // constructor
  };
}

//normal function
Processor(); // this === window

//creating an object using object constructor
const processor1 = new Processor();
processor1.callMe(); // is it window? no. It is the object processor1

//this is an arrow function
var arrowFunction = () => {
  console.log("Printing inside arrowFunction");
  //the arrow function takes the lexical context of the function within which it is defined
  //this arrow function defined in the global context therefore this is window
  console.log(this);
};

arrowFunction();

//this is an object constructor
function Person() {
  this.x = 100;
  this.y = 700;

  //arrow function defined within the object constructor
  this.arrowFunction = () => {
    console.log("Printing inside Person.arrowFunction");
    //the arrow function takes the lexical context of the function within which it is defined
    console.log(this);
  };

  //nested object constructor within Person object constructor
  this.anotherFunction = function () {
    console.log(`Inside anotherFunction`);
    console.log(this);
    //this is an arrow function defined within a nested object constructor
    this.arrowFunction = () => {
      console.log("Printing inside Person.arrowFunction");
      //the arrow function takes the lexical context of the function within which it is defined
      console.log(this);
    };
  };
}

const person1 = new Person();
person1.arrowFunction();
const obj1 = new person1.anotherFunction();
obj1.arrowFunction();