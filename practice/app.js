// let h=document.querySelectorAll('h1')
// console.log(h)

// h.forEach(function(elem){

//     elem.addEventlistener('mouseenter',function(){
//        elem.innerHTML='my name is khan'
//     })
// })

let h = document.querySelectorAll('h1');

h.forEach(function(elem) {
    elem.addEventListener('mouseenter', function () {
        elem.innerHTML = 'my name is khan';
    });
    elem.addEventListener('mouseleave', function () {
        elem.innerHTML = 'hellow';
    });
});
