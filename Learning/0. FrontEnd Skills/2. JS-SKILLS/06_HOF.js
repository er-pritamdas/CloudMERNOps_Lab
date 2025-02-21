// Types of HOF
// - For of
// - For in
// - For Each
// - Filters
// - Maps
// - Reduce 


// HOF in Array 
let MyArr = [10,20,30,40,50]
for(let i of MyArr){
    console.log(i) // THis will print Values
}

for(let x in MyArr){
    console.log(x); // This will print the index
}

let x=MyArr.forEach(function(v,i,a){
    console.log(`${i} -> ${v} `)
    console.log(a) //  i is index, v is value and a is array
    // let sum = 0;
    // sum = sum + v
    // return sum // this will never return anything
}) // Tak parameter as fuction callback and not function execution
console.log(x) // this is undefined

let MyFiler = MyArr.filter((v,i,a) =>  a[i]>=30) // THis function inside the filter also take three parameters like forEach 
console.log(MyFiler)

let MyMap = MyArr.map((v,i,a) => v+10)
                 .filter( (v,i,a)=> v>50)
console.log(MyMap)

let myReduce = MyArr.reduce( (ac, cv) => ac + cv, 10)
console.log(myReduce)