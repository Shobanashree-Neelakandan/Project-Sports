let toggle = document.querySelector("#toggle")
let navtoggle = document.querySelector("#navtoggle") 
let navclose = document.querySelector("#close")

toggle.onclick = ()=>{
    navtoggle.classList.toggle("active")
}
navclose.onclick = ()=>{
    navtoggle.classList.remove("active")
}

// training slider

let previous = document.querySelector("#prev")
let next = document.querySelector("#next")

let trainingcards = document.querySelector(".training-cards")
let tcard = document.querySelectorAll(".tcard-1")

let index = 0

function moveSlider(){

    let cardWidth = tcard[0].offsetWidth + parseInt(getComputedStyle(trainingcards).gap);;
    let visible = window.innerWidth <= 780 ? 1 : 3;
    // let maxIndex = tcard.length - visible

    trainingcards.style.transform = `translateX(-${index * cardWidth}px)`;
    
    next.classList.toggle("disabled", index === tcard.length - 3)
    previous.classList.toggle("disabled", index === 0)

}

next.onclick = ()=>{
        let visible = window.innerWidth <= 780 ? 1 : 3;

    if(index < tcard.length - visible){
        index++
    }
    moveSlider()
}

previous.onclick = ()=>{
    if(index > 0){
        index--
    }
    moveSlider()
}


