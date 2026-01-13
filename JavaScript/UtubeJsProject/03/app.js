let main=document.querySelector('main')
let crs=document.querySelector('.cursor')

main.addEventListener('mousemove',function(ele){
    //   console.log('helow')
    crs.style.left=ele.x + 'px'
    crs.style.top=ele.y + 'px'
})