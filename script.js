const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fade-in-left");
            document.querySelectorAll(".animated")[1].classList.add("fade-in-top");
            document.querySelectorAll(".animated")[2].classList.add("fade-in-right");
        }else{
            document.querySelectorAll(".animated")[0].classList.remove("fade-in-left");
            document.querySelectorAll(".animated")[1].classList.remove("fade-in-top");
            document.querySelectorAll(".animated")[2].classList.remove("fade-in-right");
        }
    })
})

observer.observe(document.querySelector(".animation-container"))

function clickedAbout(){
    document.querySelectorAll(".about")[0].scrollIntoView();
}
function clickedMap(){
    document.querySelectorAll(".map")[0].scrollIntoView();
}
function clickedCredits(){
    document.querySelectorAll(".credits")[0].scrollIntoView();
}
function clickedHome(){
    document.querySelectorAll(".main-img")[0].scrollIntoView();
}