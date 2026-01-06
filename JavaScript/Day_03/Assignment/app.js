// <!-- Assignment -->
// 7.Ask user's age and check if eligible to vote
// let age=prompt("Enter your age: ")
// if(age>=18){
//     console.log("you can vote!")
// }else{
//     console.log("Not eligible to vote")
// }

const { Profiler } = require("react");

// 8. print multiplication table of 5
// for(i=1;i<=10;i++){
//     console.log(`5x${i} -> ${5*i}`)
// }

// 9. count how many numbers between 1 and 15 are greater than 8
// cnt=0
// for(let i=1;i<=15;i++){
//     if(i>8){
//         cnt++
//     }
// }
// console.log(cnt)

// 10 Ask user for password and print access status
// let pass="mahboob"
// let password=prompt("Enter your password: ")

// if(password===null){
//     console.log("Please enter your password!")

// }
// else{
//     if(pass.trim()===""){
//         console.log("you enter only multiple space")
//     }
//     else{
//         if (isNaN(pass.trim())){
//             console.log("you enter wrong password")
//         }
//         else{
//             console.log("congrants, you enter correct password")
//         }
//     }
// }

// Level 2
// Q.11 Allow only 3 attempts to enter correct password
// let attempt=3
// let pass="mahboob"
// let password=prompt("Enter your password: ");
// while( attempt>=0){
//     if(attempt==0){
//         console.log("you exceed your maximum attempts,try after an hour!");
//         break;
//     }
//     if(pass===password){
//         console.log("you are login");
//         break;
//     }
//     else{
//        console.log("Try again!")
//        attempt-=1
//     }
// }

// bhaiya ka approach
// let attempts=0;
// let password="mahboob"
// khulgya=false;
// let pass=prompt("tum muje password do");
// attempts++;
// if(password===pass){
//     khulgya=true
// }
// while(password!==pass){
//     if(attempts===3){
//         console.error("Account Locked");
//         break;
//     }
//     password=prompt("password batao");
//     if(password===pass){
//     khulgya=true
//     }
//     attempts++
// }

// if (khulgya===true) console.log("account opened")

 //12.Ask user for words until they type "stop" . count how many times they typed "yes"
let word=prompt("Enter word: ")
if(word!=="stop") console.log("you stop")
cnt=0
while(word!=="stop"){
    if(word==="yes"){
        cnt++
    }
    word=prompt("Enter word:")
} 
console.log(cnt)

// 13.print numbers divisible by 7 from 1 to 50

let count=0
for(let i=1;i<=50;i++){
   if(i%7===0) count++
}
console.log(count)

// 14. sum of all odd numbers from 1 to 30

let sum=0
for(let i=1;i<=50;i++){
   if(i%2!==0) sum+=i
}
console.log(sum)

// 15.keep asking number untill user enters an even numbers

let num=prompt("Enter num: ")
if(num%2===0) console.log("you enter even number")
cnt=0
while(num%2!==0){
    num=prompt("Enter num:")
} 

// 16.print numbers between two user inputs
 let first=Number(prompt("enter first no:"))
 let last=Number(prompt("enter last no:"))
if(first>last){
    console.error("start can not be bigger than end")
}
 for(let i=first;i<=last;i++){
    console.log(i)
 }
// 

// 17.print only first 3 odd numbers from 1 to 20
let noOfOdd=0
for(let i=1;i<=20;i++){
    if(noOfOdd==3){
        break;
    }
    if(i%3===0) {
        console.log(i)
        noOfOdd+=1
    }
}

// 18.Ask user 5 numbers count how many are positive.
let pos=0
for(let i=1;i<=5;i++){
    let numb=prompt("enter number:")
    if(num>0){
        pos++
    }
}
console.log(pos)

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let withdrawals = 0
let balance = 1000

while (balance>0 && withdrawals < 3) {
    let amount = Number(prompt("Enter amount you want to withdraw"))

    if (amount > balance) {
        console.log("Insufficient balance")
        break
    }

    balance -= amount
    withdrawals++

    console.log(`You withdrew ${amount}. Available balance: ${balance}`)
}

if (withdrawals === 3) {
    console.log("You have done maximum 3 withdrawals")
}







