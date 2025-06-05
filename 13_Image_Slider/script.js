const slides = document.querySelectorAll(".slides img")
let slideindex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeslider);
function initializeslider(){
    if(slides.length>0){
        slides[slideindex].classList.add("displayslide");
        intervalId=setInterval(nextslide,3000)
    }
}

function showslide(index){
    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index<0){
        slideindex = slides.length - 1;
    }
    slides.forEach(slide=>{
        slide.classList.remove("displayslide")
    });
    slides[slideindex].classList.add("displayslide")
}

function prevslide(){
    clearInterval(intervalId)
    slideindex--;
    showslide(slideindex);
}

function nextslide(){
    slideindex++;
    showslide(slideindex);
}