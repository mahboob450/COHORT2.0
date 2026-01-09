let list=[
   
     {
      team:'CSK',
      primary:'yellow',
      captain:'MSD',
      trophies:5,
      famous: [255, 255, 0]

    },
    {
      team:'RCB',
      primary:'red',
      captain:'RP',
      trophies:1,
      famous: [255, 0, 0]
    },
    {
      team:'KKR',
      primary:'purple',
      captain:'AK',
      trophies:3,
      famous: [128, 0, 128]
    },
    {
      team:'SRH',
      primary:'orange',
      captain:'PC',
      trophies:1,
      famous: [255, 165, 0]
    },
    {
      team:'LSG',
      primary:'blue',
      captain:'RiP',
      trophies:0,
      famous: [0, 0, 255]
    },
    {
      team:'DC',
      primary:'sky blue',
      captain:'AP',
      trophies:0,
      famous: [255, 255, 0]

    },
   
]
let h1=document.querySelector('#h1')
let h2=document.querySelector('#h2')
let h3=document.querySelector('#h3')
let h4=document.querySelector('#h4')
let btn=document.querySelector('button')
let box=document.querySelector('#box')

btn.addEventListener('click' ,function(){
    let num=Math.floor(Math.random()*list.length)
    h1.innerHTML=`Team Name :${list[num].team}`
    h2.innerHTML=`Jersey Color:${list[num].primary}`
    h3.innerHTML=`Captain :${list[num].captain}`
    h4.innerHTML=`No of Trophies :${list[num].trophies}`
    let [r, g, b] = list[num].famous;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})