// Variables


// var : Also doesnt Follow Scope
{
    y = 10;
    console.log(y);
}
y = 9;
console.log(y);

// Let : It respects Scopes
{
    let i = 1;
    console.log(i);
}
let i = 9
console.log(i)

// Const
let myValue;
const ThisismyConstValue = {} // Const must be initilialized 
console.log(typeof myValue);

// Datatypes
// Number, Bigint, string, boolean, undefined, objects:

let numberOne = 123;
let BigIntValue = 198n;
let UndefinedValue = null

console.log(BigInt(numberOne) + BigIntValue)
console.log(typeof UndefinedValue)


console.log(1+2+"3") // 33 
console.log("3"+1+2) // 33 => 312
console.log("3"+"1") // 31


a = [1,2,3,4,5,6,8,9] //Shallow Copies = > Heap 
b = a;
b[0] = 23;
// console.log(a) //1,2,3,..
// console.log(b) //23.2.3.4.....


Arr1 = [1,2,3,4]
Arr2 = [4,5,6,7]
Arr4 = [6,7,8,9]
Arr10 = [1,2,3,4,5,6,7,8,9]
Arr3 = []

StringValue = "This is me "
Arr = Array.from(StringValue); 
console.log(Arr);

Arr3 = [...Arr1, ... Arr2, ...Arr4]
console.log(Arr3)

Arr3 = Arr1.concat(Arr2,Arr4,Arr10)
console.log(Arr3)


function AddToCart(...num){
    console.log(num)
}
AddToCart(100,200,300,123,234,234,234,234,345)


ArrayValue = [1,2,3,4,[1,2,3,4,[1,2,3,4,[1,2,3,4]]]]
console.log(ArrayValue.flat(Infinity))

x = 4;
x = Number(4);

// let obj = new Object();
// obj.name = "pritam"
// console.log(obj)

// obj1 = obj;

// obj1.title = "Mr."
// console.log(obj1)
// console.log(obj)

// console.log(obj1 === obj)

function NormalObject(name) {
    this.name = name;
}

const obj1 = new NormalObject("Object 1");
const obj2 = new NormalObject("Object 2");

console.log(obj1 === obj2); 


// Singleton Object
MyOnj = {
    this: "is",
    My: "Name"
}

objTwoThis = MyOnj
console.log(objTwoThis === MyOnj); 
