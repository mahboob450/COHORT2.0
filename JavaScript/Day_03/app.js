// Loops and conditional in javascript
// understanding condition operator in javascript -['if','else','if-else','else-if','ternart operator',switch-case]
// for loop in js
for(let i=0;i<6;i++){
    console.log("hello mahboob")
}
for(let i=1;i<=10;i++){
    console.log(i)
}
for(let i=10;i>0;i--){
    console.log(i)
}

// level 1-pure beginner practice
// 1.print number from 1 to 10
for(let i=1;i<=10;i++){
    console.log(i)
}
// 2.print only even numbers from 1 to 20
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
}
// 3.print from n to 1
for(let i=10;i>0;i--){
    console.log(i)
}
// 4.print the word "yes" 5 times
for(let i=0;i<5;i++){
    console.log("yes")
}
// 5.check even or odd
for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(`${i} - Even`)
    }else{
        console.log(`${i} - odd`)
    }
}
// 6.ask user for a number and say if it is positive or negative 
let num=prompt("Enter number: ")
if(num>0){
    console.log(`${num} is positive`)
}else{
    console.log(`${num} is negative`)
}
// 7.ask user for age and check if eligible for vote 
// let age=prompt("Enter your age")
// if(age.trim()>=18){
//     console.log("Eligible to vote")
// }else{
//     console.log("Not Eligible to vote")
// }
// let n=prompt("enter number")
// n=parseInt(n)
// console.log(typeof(num))

// Number("mahboob") -> NaN milega string ko number banaoge to
// NaN===NaN :- false
// isNaN(NaN) :-true
let age=prompt("Enter your age")
if(age===null){
    console.error("you cancelled it");
}else{
    if(age.trim()===""){
         console.error("bhai dhang se likhle...")
    }else{
        age=Number(age.trim())
        if(isNaN(age)){
            console.error("bhai please number dede...");
        }else{
            console.log("confirm ye number hai");
        }
    }
}
// while loop in js
// do while loop 
// forEach in js
// for in loop in js
// for of loop in js
// recursion in js
// loop control statement -['break','continue']

