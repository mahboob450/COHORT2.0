arr=[
  {
    dp:"https://images.unsplash.com/photo-1515161318750-781d6122e367?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1515161318750-781d6122e367?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    
  },
  {
    dp:"https://images.unsplash.com/photo-1574539602047-548bf9557352?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1574539602047-548bf9557352?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
  },
{
dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
story:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
},
{
    dp:"https://images.unsplash.com/photo-1657640606520-e695cbb1e14b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1657640606520-e695cbb1e14b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
},
{
    dp:"https://images.unsplash.com/photo-1606792109963-7b34205b1333?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1606792109963-7b34205b1333?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNleHklMjBnaXJsfGVufDB8fDB8fHww"
},
{
    dp:"https://images.unsplash.com/photo-1568819317551-31051b37f69f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1568819317551-31051b37f69f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
}

]
var storiyan=document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img src="${elem.dp}" alt="">
    </div> `
})

storiyan.innerHTML=clutter;

storiyan.addEventListener('click',function(dets){
    document.querySelector('#full-screen').style.display="block"
    document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
            document.querySelector('#full-screen').style.display='none'
    })
})