

// Primitive: 7 types==>> String, number, null , boolean, unddefined, symbol, bigint;
// Refernce / Non Primitive: ==> Arrray, Objects, functions,


// Q. javascript dynamically types lang or statically types lang???

//     const score= 100 // no such need to define variable

//     Javascript is a dynamically types language.
//     In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.



// let userEmail; // this will incorporate value as undefined
// let userEmail = undefined; both are same thing



const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)


const a= 654981654844654544n  // using n makes it bigint



const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);




Type of varible and their Result

undefined=> undefined
null => Object
function=> object function




/* 
TYPES OF MEMORY

1. STACK: PRIMITIVE
2. HEAP: REFERENCED
*/