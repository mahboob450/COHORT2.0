// NodeList ek collection hoti hai DOM nodes ki (elements, text, comments, etc.). Jab hum DOM se multiple elements select karte hain, to aksar NodeList milti hai.
//Important Points

// NodeList array jaisi dikhti hai, but pure array nahi hoti
// length hota hai
// forEach() use kar sakte ho
// Directly map, filter nahi chalte (array methods)

var allH1=document.querySelectorAll('h1')
console.log(allH1)
// allH1.forEach(function(elem){
//     // console.log('hello guys!')
//     console.log(elem.innerHTML)
//     console.log(allH1[0])
// })

// allH1[2].innerHTML='Bye bye'

// var outer=document.querySelector('#outer')
// console.log(outer.childNodes[2])
