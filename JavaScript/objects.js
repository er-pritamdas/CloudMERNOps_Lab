// ------ Can create a object using object literal : simply assign keys and values in curly braces
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(`${typeof person}`)


// Creating Object using new keyword
let obj = new Object({
    name: "Pritam",
    lastName: "Das",
    age: 50,
})
console.log(`Created Object from new Keyword ${obj}`)

// ------ Create an Object from existing Object
let ob1 = new Object({
    name: "Pritam",
    lastName: "Das",
    age: 50,
})
let ob2 = Object.assign(ob1)
console.log(`Create Object from ob1 : ${ob2}`)

//------ Created Object from Entries
const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];

const myObj = Object.fromEntries(fruits);


// ------ Copies properties from Source Obj to target object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {firstName: "Anne",lastName: "Smith", color: "red"};
Object.assign(person1, person2);
console.log(`Copied from Person2 : ${person1.color}`)


// Adding Property
obj.xyz = 12
console.log(`${obj}`)
console.log(`${JSON.stringify(obj)}`)


// Deleting Property
delete obj.xyz
console.log(`${JSON.stringify(obj)}`)


// accessing objects
console.log(`${obj}`)
console.log(`${Object.values(obj)}`)
console.log(`${Object.entries(obj)}`)


// Accessing Object Methods
obj.FullName = function () {
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
// Object is mutable
let NewObj = {}
NewObj = obj;
console.log(obj.name)
console.log(NewObj.name)
NewObj.name = "Jassi"
console.log(obj.name)
console.log(NewObj.name)


// this is a object constructor
function Indians(name, age, height, nation = "hindi") {

    this.NAME = name;
    this.AGE = age;
    this.H = height;
    this.NATION = nation

}
ma = new Indians("Ruma", 34, 234)
console.log(JSON.stringify(ma));
// This is how you can add a method in Object Constructor using prototype
Indians.prototype.Info = function(){
    return `${this.NAME} || ${this.AGE} || ${this.H} || ${this.NATION}`
}
console.log(ma.Info())


// Disply object Keys and Valsues:
const MyNewObj = {
    item1: 200,
    item2: 300,
    item4: 400,
    TotalCart: function () {
        return this.item1 + this.item2 + this.item4
    }
}
console.log(MyNewObj.TotalCart())
console.log(Object.entries(MyNewObj)) //Returns an Array of array of Each Entries
console.log(Object.values(MyNewObj)) //Returns an Array of Values
console.log(JSON.stringify(MyNewObj)) // Returns a String
console.log(typeof JSON.stringify(MyNewObj)) // Returns a String

// Object Predefined Methods

// Assign ()
let PritObj = {
    name: "pritam",
    age: 25,
} 
let PoulObj = {
    name: "Poulami Das",
    age: 18,
}
let JassiObj = Object.assign({}, PritObj) // PritObj to empty Obj
console.log(JassiObj)
Object.assign(PritObj, PoulObj) // PoulObj to PritObj
console.log(PritObj)




// General Methods :
// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)




// Protection Methods :
// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)





// Property Management Methods
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)