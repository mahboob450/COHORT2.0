// let arr=[
//     {
//         name:'mahboob',
//         age:22
        
//     },
//     {
//         name:'mashkoor',
//         age:21

//     },
//     {
//         name:'mahmood',
//         age:25

//     },
//     {
//         name:'sakir',
//         age:5

//     },
//     {
//         name:'sajid',
//         age:40

//     }
// ]
// sum=0
// arr.forEach(function(ele){
//     sum=sum+ele.age
// })
// console.log(`average age is ${sum/arr.length}`)

const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    description: "Passionate about building responsive UI using React and modern CSS."
  },
  {
    fullName: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UI/UX Designer",
    description: "Designs user-friendly interfaces with a strong focus on usability."
  },
  {
    fullName: "Rohan Mehta",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    profession: "Backend Developer",
    description: "Works with Node.js and databases to build scalable backend systems."
  },
  {
    fullName: "Sneha Kapoor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Data Analyst",
    description: "Analyzes data to uncover insights and support business decisions."
  },
  {
    fullName: "Aditya Singh",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    profession: "Machine Learning Engineer",
    description: "Builds intelligent models and works on AI-driven applications."
  }
];
// lorem picsum ->api
// json placeholder
var sum='';
users.forEach(function(elem){

    sum=sum + `<div class="card">
            <img src="${elem.image}"alt="">
            <h2>${elem.fullName}</h2>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>

            </div>`
  
})
var main=document.querySelector('main')
main.innerHTML=sum