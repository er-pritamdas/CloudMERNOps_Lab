
// ----------------------------------------------------Way 1: Simple Function
function FunName(str){
    console.log("Hello: " + str);
}
const strValue = "Pritam"
FunName(strValue) //Hello: Pritam


// ---------------------------------------------------Way 2: Return Value from Function
function ReturnValue(a,b){
    return a+b;
}
c = ReturnValue(2,3);
console.log(c) //5


//---------------------------------------------------Way 3: Default Value to function
function ReturnValue(a=1,b=1){
    return a+b;
}
c = ReturnValue(2);
console.log(c) //3


// -------------------------------------------------Way 4: Function stored in a Var
const FunctionVariable = function(a,b){
    return a**b
}
console.log(FunctionVariable) // Function Reference
console.log(FunctionVariable(2,2)) //Function Execution


// -------------------------------------------------Way 5: Arrow Function
const ArrowFunction = (a,b) => { return a**b}
console.log(ArrowFunction(2,2)); //Function Execution


// -------------------------------------------------Way 6: Arrow function (implicit return)
const ArrowFunc = (a,b) => a**b //Implicit Return
console.log(ArrowFunc(2,2)); //Function Execution


//--------------------------------------------------Way 7: Function Constructor
const Name = new Function("a","b", "return a+b")
console.log(Name(1,2))


//---------------------------------------------------IIFE - Immediately Invoked Function Expression or Slef Invoing Function
x = (function (){console.log("Automatically Invoked")})(); // This will not throw any error
(function (){console.log("Automatically Invoked")})(); /*
This function will throw error,
*/


// ... is a rest parameter 
// Function Argument Length
// Argements : This will count the number of variables passed to the function, and not the variables used in the function
function NameOfFunction(...Variable){
  console.log("Variables : ",Variable)
  console.log(arguments[0])
  return arguments.length; // Arguments object
}
console.log("Argument Length " + NameOfFunction(1,1,2,3,4,5,6,7,8))


//More About Argument Object
let sum = 0;
function Args (...total){
    for (let i in arguments){
        sum = sum + arguments[i];
    }
    return sum, arguments.length;
}
sum, Length = Args(1,2,3)
console.log(`Total Sum ${sum}  and Total items ${Length}`)


// Returning Multiple Values from a Function
function Sum(a,b){
    return [a,b];
}
[x,y] = Sum(21,34);
console.log(x);
console.log(y);

// Call () and apply() method, you can write a method that can be used on different objects.

//Function call() methods
const person = {
    fullNameWithCity: function(city) {
      return this.firstName + " " + this.lastName + " " + city;
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
      }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  // This will return "John Doe":
console.log(person.fullNameWithCity.call(person1, "Delhi")) //With Arguments
console.log(person.fullName.call(person2)) //Without Arguments


//Function Apply() methods
const FullObj = {
    fullName: function(city, state) {
      return this.firstName + " " + this.lastName + " is from " + city + ", " + state;
    }
  }
  const Marry = {
    firstName: "Mary",
    lastName: "Doe"
  }
  const prit = {
    firstName: "Pritam",
    lastName : "Das"
  }
  // This will return "Mary Doe":
  FullObj.fullName.apply(Marry);
  console.log(FullObj.fullName.apply(prit, ["Chennai", "Tamil Nadu"])); // Must pass the argument in arrays unlike call
//   The call() method takes arguments separately.
//   The apply() method takes arguments as an array.



// Function Bind() methods : Borrows a function from another object
const BindPerson = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      console.log(this.firstName + " " + this.lastName)
    }
  }
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  let fullName = BindPerson.fullName.bind(member);


// More about bind objects
// setTimeout() Function will accept the callback function, but we cannot use the functions of the objects as callback function
// to use the function inside the objects we can use the bind 
setTimeout(BindPerson.fullName, 2000) // This will not give us the resulsts
displayBindPerson = BindPerson.fullName.bind(BindPerson)
setTimeout(displayBindPerson, 2000)


// Function Clousers 
// Undeclared variables are always global , even if they are created inside the function or any scope 
function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const add = myCounter();
add();
add();
add();
// the counter is now 3

