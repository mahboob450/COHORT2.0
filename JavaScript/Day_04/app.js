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

// pure function ek asha function :Always returns the same output for the same input
// same input->same output
// Does NOT change anything outside the function (no side effects)
// koe side effect nhi hoga
let b=19  
function ab(val){
    console.log(val+3)
}
ab(12)
ab(12)
ab(12)

// An impure function is a function that violates any rule of a pure function.
function abc(val){
    console.log(Math.random()+val)
}

abc(12)
abc(12)
abc(12)


// uderstanding scoping in js-[global scope,laxical scope , function scope]
/*1. Global Scope:-
// Variables declared outside any function or block are in global scope.

let a = 10;

function show() {
  console.log(a);
}

show(); // 10

✅ Features
Accessible anywhere in the program
Lives till program ends
Risky → can be modified from anywhere

2. Lexical Scope (Static Scope)
Lexical scope means:
A function can access variables from where it is defined, not where it is called.
JavaScript decides scope at compile time, not runtime.

function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  inner();
}

outer(); // 10
inner() can access x because it is lexically inside outer()

3. Function Scope
Variables declared with var inside a function are function-scoped.

function test() {
  var a = 10;
  console.log(a);
}

test();
console.log(a); // ❌ Error

✅ Features
Accessible only inside the function
var follows function scope
let and const follow block scope

var → Function Scope

var is scoped to the entire function, NOT to blocks (if, for, {}).

function test() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}

test(); // 10 ✅

✔ Even though x is inside if, it is accessible in the whole function.


**let & const → Block Scope
let and const are scoped to the nearest block {}.

function test() {
  if (true) {
    let a = 10;
    const b = 20;
  }

  console.log(a); // ❌ Error
  console.log(b); // ❌ Error
}
✔ a and b exist only inside the if block.

*/
// understanding 'closures' , scoping

// closure->ek function hai jo return karta hai function but returning function
// jo hai wo parent function ka koe variable use krega

function abcd(){
    let a=29
    return function(){
        console.log(a)
    }
}
