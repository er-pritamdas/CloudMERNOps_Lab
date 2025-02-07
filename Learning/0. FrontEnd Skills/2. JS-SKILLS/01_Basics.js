// variables: -----------------------------------------------------------------------
let _var = "This is a valid Variable"
let $var = "This is a valid Variable"
let $$$ = "Valid Variable"
// let var 1 = "no Valid "
// let var_1 = "Valid"



// How to declare Variables : ---------------------------------------------------------------------
// Always use let or const


// Var : Always have global scope
var variable = 20 // it doesnt respect block scope
console.log(variable) // 20 
{
    var variable = 10;
} 
console.log(variable) // 10
console.log(variable) // 10


//let  
let var1 = 43 // it respect scope
{
    let var1 = 45
    console.log(var1) // 45
}
console.log(var1) // 43
// var can be redeclare
var xyz = 10;
var xyz = 20;



//Let cannot be redeclared
let abc = 10;
// let abc = 20; this will throw error


// Constant 
//const NOTE: Const variable must be initialized always, otherwise throws error
const Constant = 20;
console.log(Constant); //20
{
    const Constant = 30;
    console.log(Constant); //30
}
console.log(Constant); //20
// Constant = 40; // reassignment not possible
// console.log(Constant) // This will throw error


//------------------------------------------------------------
//          Scope	Redeclare	Reassign	Hoisted	    Binds this
// var  	No	        Yes     	Yes	        Yes 	Yes
// let	    Yes	        No	        Yes     	No	    No
// const	Yes	        No	        No	        No	    No


// Operators --------------------------------------------------------------------------
let a = 10;
let b = 20;
// These operation is between variables
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a**b);
console.log(a%b);
console.log(a/b);
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);

let stringA = "Hello"
let stringB = "World"
// Ways of adding Strings
console.log(stringA + stringB) // HelloWorld
console.log(stringA + " " +stringB) //Hello World
console.log(`${stringA} ${stringB}`) //Hello World



// DataTypes ---------------------------------------------------------------------------
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object - Including Built-in Objects & user Defined objects
// Builtin : objects, arrays, dates, maps, sets, intarrays, floatarrays, promises Etc


// Important Points
let x = "10";
let y = "20";
let z = 30;
let m = 40;
console.log(x+y) //1020
console.log(z+m+x+y); // 701020
console.log(x+y+z+m); // 10203040


//Exponential Notation
let ExpoNotation = 123e5;
console.log(ExpoNotation); // 12300000
let ExpoNegNotation = 123e-5;
console.log(ExpoNegNotation); // 0.00123


//bigInt
let BigIntNumber = BigInt(1234);
console.log(BigIntNumber)
console.log(typeof BigIntNumber)


// Typeof
let undefinedNumber; // Type is Undefined
console.log(typeof undefinedNumber)











