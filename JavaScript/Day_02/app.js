/*Operators in js
1.Arethematics operator:
 + - * / ** %
2+3
2.Assignment operator:
= ,+=,-=,/=,%=

3.Comparasion operators
==,===,!=,!==, < , >,<=,>=

== not strict compare   NEVER USE THIS
=== strict compare ALWAYES USE THIS

4.Logical operators:
&& , |, !

5.Ternary operator:
condition? doThis : doThat

6.Type checking operation 
typeof
instanceof
kuch bhi banaaoge wo top pe likhi cheejo se aata hai

7.string operator 
+ (for concatenation)

8.spread / Rest operator
... (very important in js)

spread ...
let arr=[1,2,3,4,5];
let arr3=[...arr];

Rest ...
function fun(a,b,c,...rest){

}
fun(1,2,3,4,5,5,6)

9.Nullish coalescing operator:
?? (fallback only when null/ undefined)
null ?? console.log("sorry")
// sorry

10.optional chaining
let obj={}
obj?.name?.first;

*Variable hoisting in js
hoisting ka matlab hai ki variable ko banane se pahle bhi use kiya ja skta hai
hoisting me aapka variable toot jata hai do hisso me
declaration top of the file jata hai
initialisation wahi rehta hai jaha variable tha
ab aapka variable error nahi deta kyuki wo hmesha use se pahle exist ker rha tha
hoisting let k sath work nhi kerta hai
console.log(b);
var b=19;

just like that
var b // declaration jaata hai top pe
b=19

TDZ-temporal dead zone
console.log(b) error dega -> TDZ k ander b ko log nhi ker skte
let b=12
*/

// Assignment 29oct
// 1.Basic operators (Arithmetic , assignmeny , increment , decrement,comparison, logical, bitwise)
let a=10
let b=3
// arithemic operators
console.log(a+b)
console.log(a*b)
console.log(a-b)
console.log(a/b)
console.log(a%b)

// assignment operator
let x=9
x+=12
console.log(x)

// uniary operators
let count=4
count++
console.log(count)
count--
console.log(count)

console.log(5=="5")
console.log(5==="5")

if(10>5){
    if(10<20){
        console.log(`10 is equal to ${10}`)
    }
}

let m=10
if(m>100 && m<12){
    console.log("condition satisfied!")
}
else{
    console.log("condition not satisfied")
}

console.log(5&1)

// variable hoisting in js
console.log(t); //undefined
var t= 10

// function hoisting
test();
function test(){
    console.log("Hello");
}
// var hallo -variable hoisting
hallo(); // undefined
var hallo=function(){
    console.log("hellow")
}
// console.log(p); // error
// let p= 10

// age=prompt("Enter your name: ")
// if(age>18){
//     console.log("Adult")

// }
// else{
//     console.log("Minor")
// }

marks=prompt("Enter marks:")

if(marks>=90){
    console.log("A grade")

}
else if(marks>=75){
    console.log("B grade")
}
else if(marks>=50){
    console.log("C grade")
}
else{
    console.log("Fail")
}

city=prompt("Enter city:")

if(city=="Bhopal"){
    console.log("MP")

}
else if(city=="Delhi"){
    console.log("capital")
}

else{
    console.log("Unknown")
}

// Ternary operator
let temperature = 45;
let tem = (temperature > 30) ? "Hot" : "Pleasant";

console.log(tem);

// . Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”

let day=3

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid no")    
}

// Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let Age=prompt("Enter age: ")
let country=prompt("Enter countary")

if(Age>18 && country=="India"){
    console.log("you are eligible to vote")
}
else{
    console.log("Not eligible")
}



