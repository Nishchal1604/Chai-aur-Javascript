//singleton
//constructor with singleton...........literals without singleton


// object literals   -->>>to declare literals
//Object.create

const mySym = Symbol("Key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",
    [mySym]: "mykey1",  // to represent a symbol as a key--->>>very important for interview
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.fullname)
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym) 
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email= "dfhao@gmail.com"  //this way we can change the value of any key

//to avoid any change in object keys later on, we can use FREEZE

Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);



//treat functions just  like a variable


// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());  