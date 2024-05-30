const accountId= 144553
let accountEmail= "nishchalkrgupta@gmail.com"
var accountPass= "149612"
accountCity= "Jaipur" //not a good way to declare a variable but still we could declare variable like this also.
let accountState;// in js it is our choice to use ;

/* There is difference between undefined and not defined
    
    undefined:
    existance - YES     value- NO
    ie:

    //.................
    ..........code
    console.log(b);
    var b=12;//

    output would show value of b as undefined 


    
    not defined:
    existence - NO      value- NO
    ie:

    //.................
    ..........code
    console.log(b);
    //

    output would show value of b as not defined

 */


/* Prefer not to use var bcz of issue in functional scope and block scope */

/* ***var const let***
 let is also used  like var

 difference
 * var- old js mein use hota tha
        var function scoped hota hai

 * let const- let const new js mein hai
              let const braces scoped hota hai
              


*/


// accountId = 2 // not allowed to change const 
accountEmail="google@gmail.com"
accountPass= "dsmi"
accountCity= "Bangalore"
console.log(accountId);

console.table([accountId,accountEmail,accountPass,accountCity, accountState]);  //instead of using console.log( ) multiple times we can show output in a form of table using this function
