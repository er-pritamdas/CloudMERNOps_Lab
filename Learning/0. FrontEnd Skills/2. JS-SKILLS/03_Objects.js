
// To create a  Object like this
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(`${typeof person}`)

// Second way of creating Obj
const obj1 = {};
console.log(`${typeof obj1}`)

// Creating Obj usaing New Keyword
obj = new Object()
obj.name = "Pritam";
obj.surname = "Das";

// Adding Property
obj.xyz = 12
console.log(`${JSON.stringify(obj)}`)

// Deleting Property
delete obj.xyz
console.log(`${JSON.stringify(obj)}`)

// accessing objects
console.log(`${obj}`)
console.log(`${Object.values(obj)}`)
console.log(`${Object.entries(obj)}`)

// Accessing Object Methods
obj.FullName= function(){
return `my name is ${obj.name} ${obj.surname}`;
};
// This will print the Fucntion Reference
console.log(obj.FullName)
// This will run the function 
console.log(obj.FullName())


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


// this is a object constructor
function Indians(name, age, height, nation="hindi"){

    this.NAME = name;
    this.AGE = age;
    this.H = height;
    this.NATION = nation

}
ma = new Indians("Ruma", 34, 234)
console.log(JSON.stringify(ma));


// Disply object Keys and Valsues:
const MyNewObj = {
    item1: 200,
    item2: 300,
    item4: 400,
    TotalCart: function(){
        return this.item1 + this.item2 + this.item4
    }
}
console.log(MyNewObj.TotalCart())
console.log(Object.entries(MyNewObj)) //Returns an Array of array of Each Entries
console.log(Object.values(MyNewObj)) //Returns an Array of Values
console.log(JSON.stringify(MyNewObj)) // Returns a String
console.log(typeof JSON.stringify(MyNewObj)) // Returns a String

