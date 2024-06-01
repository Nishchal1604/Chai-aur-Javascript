// array

const myArr =[ 0,1,2,3,4,5]
const myHeroes= ["A","B"]
const myArr2 = new Array(1,2,3,4) 
/*const myArr =[ 0,1,2,3,4,5,"NISHCHAL", true]    -->elements in js can be 
                                                        1. resizable
                                                        2. can contains multiple type of data ( array can contain array itself)


js arrays are not  associative array and so array elements can not be accessed using arbitrary strings,  ut must be accessed using non negative integer.

console.log(myArr[])
*/

/*console.log(myArr[0])
console.log(myArr)*/

/* js array copy operations create shallow copies.( not deep copies)
        deep copy of an object is a copy whose properties doesn't  share same referencee properties.  */



        

/* difference between const arr and let arr
const arr = [1, 2, 3];
arr.push(4);        // Allowed
console.log(arr);   // Output: [1, 2, 3, 4]

arr = [5, 6, 7];    // Not allowed - TypeError: Assignment to constant variable.

let arr = [1, 2, 3];
arr.push(4);        // Allowed
console.log(arr);   // Output: [1, 2, 3, 4]

arr = [5, 6, 7];    // Allowed
console.log(arr);   // Output: [5, 6, 7]
*/

// array methods

/*
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)

*/

/*
myArr.unshift(15454646)
console.log(myArr)
myArr.shift()
console.log(myArr) 


console.log(myArr.shift()) //This gives you the element which is operated
*/

/*
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

*/

/* 
const newArr = myArr.join()   // it adds all the elements of an array into a string, sepereated by the  specified seperator

console.log(myArr)
console.log(newArr)
console.log(typeOf newArr)

*/

/*
difference between slice and splice*/

console.log("A", myArr)


const my1= myArr.slice(1,3)
console.log(my1)        // in slice we exclude last range element

console.log("B", myArr)  //in slice there is no change in original array

const my2 = myArr.splice(1,3)
console.log(my2)            // in spluce we include last range element

console.log("C",myArr)   // in splice there is a chnage in original array



