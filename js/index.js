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

window.addEventListener('scroll',()=>{
    body.style.backgroundColor = "red";
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