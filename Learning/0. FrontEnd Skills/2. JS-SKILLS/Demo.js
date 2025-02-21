// Function Closures
function Counter (){
    let count = 0;

    return function(){
        count = count+1;
        return count
    };
}

add = Counter() 
add() // 1
add() 

console.log(add()) // 