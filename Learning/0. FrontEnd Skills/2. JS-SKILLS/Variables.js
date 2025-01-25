// // Can be declared multiple ways :

// x = "this is me"; // automatic declaration
// let y = 20; //  it respects scope
// const u = 30; // const caanot be changed

// // u = 40; // you cannot change the const values
// console.log(typeof x);
// console.log(typeof y);
// console.log(`${u} ${typeof u}`);

// var h = 40; //  you should not use var. this doesnt respect scope

// We can redeclare var variables
// var x = 30;
// var x = 30;

// we cannot redeclare let variables
// let g = 90;
// let g = 80;
// {
//   var x = 80;
//   console.log(x);
// }

// x = 90;
// console.log(x);

// {
//     let y = 90;
//     console.log(y)
// }

// console.log(y)



// Data Type

// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object -> array, NULL, symbol, 
// function

let x; //  this is undefined
console.log(typeof x)

let y = 12n // this is bigint
console.log(typeof y)

let r = null; // this is object
console.log(typeof r)

let c = "" // this is string
console.log(typeof c)

let j = true; // this is boolean
console.log(typeof j)

let k = undefined; // this is undefined
console.log(typeof k)


// Function
let variable = function(a=3,b=4){
let c = a+b;
return c;
};

console.log(variable); // this will print Function name
console.log(variable()); // this will call the function with default values
console.log(variable(120,80)); // this will call the function with specified Values

