console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);   
console.log("02" > 1);


console.log(null > 0);              //false
console.log(null == 0);             //false
console.log(null >= 0);             //true

// in this result is shocking because comparison and equality operator works in different way

//comparison operators >< => =< convert null to number treating it as 0



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//with undefined all compariosn and equality operator will show false


// === "Strictly check=> checks value as well as data type"

console.log("2" === 2);         // here datat type is not same          