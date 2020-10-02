// Your code goes here

const navlinks = document.querySelectorAll('.nav-link');
console.log(navlinks);

navlinks.forEach((ele)=>{
    ele.addEventListener('mouseenter',(event)=>{
        event.target.style.color = "red";
    });
});
navlinks.forEach((ele)=>{
    ele.addEventListener('mouseleave',(event)=>{
        event.target.style.color = 'black';
    });
});

const image = document.querySelector('img');
image.addEventListener('click',()=>{
    image.style.transform = "scale(1.4)";
});
image.addEventListener('dblclick',()=>{
    image.style.transform = "scale(1)";

});
 
window.addEventListener('resize',()=>{
    image.src = "https://amp.businessinsider.com/images/5b171adc1ae66250008b47c1-1920-960.jpg"
    
});

window.addEventListener('scroll',()=>{
    image.src = "img/fun-bus.jpg";
});

window.addEventListener('load',()=>{
    alert("Welcome to fun bus beautiful website");
});

document.addEventListener('keydown',(ele)=>{
    if(ele.key === 'r'){
        alert("You have pressed R!");
    }else{
        alert(`You have pressed ${ele.key}`);
    };
});

const body = document.querySelector('body');
const logo = document.querySelector('.logo-heading');
const navgation = document.querySelector('.nav');

body.addEventListener("click", (e) => {
  body.style.backgroundColor = 'lightblue';
});

logo.addEventListener("dblclick", (e) => {
  logo.style.backgroundColor = 'hotpink';
  e.stopPropagation();
});

navgation.addEventListener("click", (e) => {
 navgation.style.border = '5px solid limegreen';
  e.stopPropagation();
});
  
const link = document.querySelector('.nav-link');
link.addEventListener("click", (e) => {
  console.log('click: ', e);
  e.preventDefault();
  
});


// const navbar = document.querySelector('.nav-link');
// navbar.addEventListener('click',(ele)=>{
//     ele.preventDefault();
// });

