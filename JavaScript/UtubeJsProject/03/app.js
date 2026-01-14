let main=document.querySelector('main')
let crs=document.querySelector('.cursor')

main.addEventListener('mousemove',function(ele){
    //   console.log('hellow')
    crs.style.left=ele.x + 'px'
    crs.style.top=ele.y + 'px'
})