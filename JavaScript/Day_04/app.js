// Going deeper into function...
/*Understanding function in javascript and why it is widely used
[parameter,arguments, rest parameters , hoisting,variable,hoisting,function hoisting]
 */

//code ko reuse kerne me help kerta hai
//function aapka code ko tab chalata hai jab app usko call kerte hai

function fun(){
    console.log("hellow mahboob , how are you?")
}
fun()

function abcd(a,b,...c){
console.log(a,b,c)
}
abcd(1,2,3,4,5,6)

// function hoisting
act()
var act=function(){
    console.log("hey")
}

// PARAMETERS IN JS -[required,destructured,rest,default]

// required
function chai(a,b,c,d){
    // agar aapne parameter banaya and aapne unme arguments nahi bheja to fir wo value parameter ki undefined ho jayegi
}

// destructured
function chai({name,age}){
    console.log(name,age); // mahboob 22
}

chai({name:"mahboob",age:22})

// rest
function chai(...val){
    console.log(val)
}
chai(1,2,3,4,5)
// default
function chai(a,b,c=9){
    console.log(val) //1,2,9
}
chai(1,2)

// spread
function chai(a,b,c,d){
    console.log(val) //1,2,9
}
arr=[1,2,3,4]
chai(...arr)

// nested function
let a=12 // global scope:Accessible everywhere
function abcd(){
    let b=22 // function scope:Variables declared inside a function.
    function defg(){
        console.log("defg chla");
    }
    defg();
}
abcd();

// understanding immediately invoked function expression
(function(){
    let balance=4000 // not accessible outside
}) (); 

// More function in javascript -[Arrow function,fat Arrow,Anonymous,higher order , call back,first class,pure function,impure function]

//Basic Syntax-arrow function
const add = (a, b) => {
  return a + b;
};
add(2,4)

// Anonymous Function
const Add = function (a, b) {
  return a + b;
};

console.log(Add(2, 3)); // 5

// 🔥 HOF (Higher-Order Function) in JavaScript
// A Higher-Order Function (HOF) is a function that does at least one of these:
// 1️⃣ Takes another function as an argument
// 2️⃣ Returns a function

function abcd(a){
   return  function(){

   }
}
abcd(function(){

});
// A callback function is a function that is passed as an argument to another function and is executed later.

// first class function
// fcf ek concept hai-> functions us language main variable ki trah use ho skte hai

// uderstanding scoping in js-[global scope,laxical scope , function scope]
// understanding 'closures' , scoping
