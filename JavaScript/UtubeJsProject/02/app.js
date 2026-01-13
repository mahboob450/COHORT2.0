let con=document.querySelector('#container')
let love=document.querySelector('i')

con.addEventListener('dblclick',function(){
    love.style.opacity='1'
    love.style.transform=' translate(-50%,-50%) scale(1.2)'

    setTimeout(function(){
        love.style.opacity=0
    },1000)
    setTimeout(function(){
        love.style.transform=' translate(-50%,-50%) scale(1.2) scale(0)'
    },2000)
})

