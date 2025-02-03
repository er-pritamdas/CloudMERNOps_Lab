// Can be declared multiple ways :

xstring = "this is me"; // automatic declaration
let y = 20; //  it respects scope
const u = 30; // const caanot be changed

// u = 40; // you cannot change the const values
console.log(typeof xstring);
console.log(typeof y);
console.log(`${u} ${typeof u}`);

var h = 40; //  you should not use var. this doesnt respect scope

// We can redeclare var variables
var x = 30;
var x = 30;

// we cannot redeclare let variables
let g = 90;
// let g = 80;
{
  var x = 80;
  console.log(x);
}

x = 90;
console.log(x);

{
    let y = 90;
    console.log(y)
}

console.log(y)



// Data Type
// We cannot do arethmetic operarion between bigint and number
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object -> array, NULL, symbol, 
// function

// let x; //  this is undefined
// console.log(typeof x)

let vari = 12n // this is bigint
console.log(typeof vari)

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



// Some unexpected stuffd

let valueOne = "1";
let valuetwo = "2";

console.log(valueOne + valuetwo) // This will not work
// all the bwlo will work
console.log(valueOne - valuetwo)
console.log(valueOne * valuetwo)
console.log(valueOne / valuetwo)

valueThree = 1/"apple"
console.log(valueThree)
console.log(typeof valueThree)

valueFour = 1/0;
console.log(valueFour)
console.log(typeof valueFour)


// Cannot perform operation between numbers and big int
let value = 123n;
let two = 123;
// let four = value / two; // will throw an error
let four = Number(value) / two // type converion to Number
console.log(four) 


// max and min safe number
let maxnumber = Number.MAX_SAFE_INTEGER;
console.log(maxnumber)

let minnumber = Number.MIN_SAFE_INTEGER;
console.log(minnumber)



// New Features
isInteger()
isSafeIntger()
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.