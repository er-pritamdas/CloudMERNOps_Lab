
// "use strict";
// ----------------------------------------------------------------------------------------------------
//                                                  OBJECTS
// ----------------------------------------------------------------------------------------------------

// To create a  Object like this
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(`${typeof person}`)

// Second way of creating Obj
// const obj1 = {};
// console.log(`${typeof obj1}`)

// Creating Obj usaing New Keyword
// obj = new Object()
// obj.name = "Pritam";
// obj.surname = "Das";

// Adding Property
// obj.xyz = 12
// console.log(`${JSON.stringify(obj)}`)

// Deleting Property
// delete obj.xyz
// console.log(`${JSON.stringify(obj)}`)

// accessing objects
// console.log(`${obj}`)
// console.log(`${Object.values(obj)}`)
// console.log(`${Object.entries(obj)}`)

// Accessing Object Methods
// obj.FullName= function(){
// return `my name is ${obj.name} ${obj.surname}`;
// };
// This will print the Fucntion Defination
// console.log(obj.FullName)
// This will run the function 
// console.log(obj.FullName())


// Object Constructor
// // ------------------------------------------

// function Person(name, age, color, country="Indian"){

//     this.FirstName = name;
//     this.Age = age;
//     this.Color = color;
//     this.country = country;
// }

// let MyFather = new Person("Amit", 24, "light")

// console.log(`${JSON.stringify(MyFather)}`)

// // Note: We caanot add property to the object which are created using constructor normallly, To add :

// Person.prototype.height = 123

// console.log(`${JSON.stringify(MyFather)}`)


let obj = {
    name: "pritam",
    surname: "Das",
    fullname: function (){
        return this.name + this.surname;
    }
}

// console.log(obj.fullname())


// immutable
let x = 20;
let y = x;

console.log(x)
console.log(y)

y = 40;
console.log(y)
console.log(x)

// mutable
let NewObj = {}
NewObj = obj;

console.log(obj.name)
console.log(NewObj.name)

NewObj.name = "Jassi"

console.log(obj.name)
console.log(NewObj.name)


// this is a object coinstructor
function Indians(name, age, height, nation="hindi"){

    this.NAME = name;
    this.AGE = age;
    this.H = height;
    this.NATION = nation

}

ma = new Indians("Ruma", 34, 234)
console.log(JSON.stringify(ma));