// Types of Function
// 1. Normal Function Defination 
// 2. Functin Defination with Variable
// 3. Arrow Function


// Way 1: Function
function FunName(str){
    console.log("Hello: " + str);
}
const strValue = "Pritam"
FunName(strValue) //Hello: Pritam


// Way 2: Return Value
function ReturnValue(a,b){
    return a+b;
}
c = ReturnValue(2,3);
console.log(c) //5


// Way 3: Default Value
function ReturnValue(a=1,b=1){
    return a+b;
}
c = ReturnValue(2);
console.log(c) //3


// Way 4: Function with Var
const FunctionVariable = function(a,b){
    return a**b
}
console.log(FunctionVariable) // Function Reference
console.log(FunctionVariable(2,2)) //Function Execution


// Way 5: Arrow Function
const ArrowFunction = (a,b) => { return a**b}
console.log(ArrowFunction(2,2)); //Function Execution


// Way 6: Arrow Function Different Way 
const ArrowFunc = (a,b) => a**b //Implicit Return
console.log(ArrowFunc(2,2)); //Function Execution


//Way7: Function Constructor
const Name = new Function("a","b", "return a+b")
console.log(Name(1,2))


// IIFE - Immediately Invoked Function Expression or Slef Invoing Function

