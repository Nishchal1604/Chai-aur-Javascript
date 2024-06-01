//difference between push , concatatenate,


const marvel_heros=["thor", "Ironman", "spiderman"]
const dc_heros=["superman", "flash", "batman"]

/*marvel_heros.push(dc_heros)  // push it does not give result in a new array 

console.log(marvel_heros)
console.log(marvel_heros[3][1])
console.log(marvel_heros[3],[1])
console.log(marvel_heros[3],1)
console.log (marvel_heros[3],1)

console.log(marvel_heros[3],"DSFA")*/


// concatenate gave results in a new array......it combines two or more array
 
/*const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)
*/

/*//spread operator

const all_new_heros= [...marvel_heros,...dc_heros] // it is no more array all elements are spreaded

console.log(all_new_heros)
*/

/*
    //FLAT

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
*/


/*

// isArray
console.log(Array.isArray("Hitesh"))  ///isArray tells whethter given text is in form of array or not
console.log(Array.from("Hitesh"))   // converts given text into array
console.log(Array.from({name: "hitesh"})) // interesting 
                                            // first we have to define whose array u want key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));