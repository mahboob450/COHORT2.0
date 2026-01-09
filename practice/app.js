/*
LEVEL 1: Beginner (Basics of if-else)
// Check whether a number is even or odd
// Check whether a number is positive, negative, or zero
// Check if a person is eligible to vote
// Find the greater of two numbers
// Check if a number is divisible by 5
// Check whether a year is a leap year
// Check if a character is a vowel or consonant
// Check if a number is multiple of 3 or not
// Check if a number is greater than 100
// Print "Pass" or "Fail" based on marks (≥40)
*/


// // Print all prime numbers between 1–100

// let arr=[]
// for(let i=0;i<=100;i++){
//     arr[i]=1;
// }
// arr[0]=0;
// arr[1]=0;
// for(let i=2;i<=Math.sqrt(100);i++){
//     if(arr[i]===1){
//         for(j=i*i;j<=100;j+=i) arr[j]=0;
//     }
// }

// ans=[]
// for(let i=0;i<=100;i++){
//     if(arr[i]!==0) ans.push(i)
// }

// for(let val of ans){
//     console.log(val)
// }


let a=new Array(1,2,3,4,5,6)
a.forEach(ele => {
    console.log(ele)
});