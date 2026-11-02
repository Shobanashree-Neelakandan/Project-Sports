let toggle = document.querySelector("#toggle")
let navtoggle = document.querySelector("#navtoggle")
let navclose = document.querySelector("#close")

toggle.onclick = () => {
    navtoggle.classList.toggle("active")
}
navclose.onclick = () => {
    navtoggle.classList.remove("active")
}

// training slider

let previous = document.querySelector("#prev")
let next = document.querySelector("#next")

let trainingcards = document.querySelector(".training-cards")
let tcard = document.querySelectorAll(".tcard-1")

let index = 0

function moveSlider() {

    let cardWidth = tcard[0].offsetWidth + parseInt(getComputedStyle(trainingcards).gap);;
    let visible = window.innerWidth <= 780 ? 1 : 3;
    // let maxIndex = tcard.length - visible

    trainingcards.style.transform = `translateX(-${index * cardWidth}px)`;

    next.classList.toggle("disabled", index === tcard.length - 3)
    previous.classList.toggle("disabled", index === 0)

}

next.onclick = () => {
    let visible = window.innerWidth <= 780 ? 1 : 3;

    if (index < tcard.length - visible) {
        index++
    }
    moveSlider()
}

previous.onclick = () => {
    if (index > 0) {
        index--
    }
    moveSlider()
}

// form

let formData = JSON.parse(localStorage.getItem("userData")) || []

let myForm = document.querySelector("#register")

myForm.onsubmit = (e)=> {
    e.preventDefault()

    let name = document.querySelector("#f-name").value
    let gender = document.querySelector('input[name="gender"]:checked')?.value
    let number = document.querySelector("#co-num").value
    let address = document.querySelector("#cont-add").value
    let select = document.querySelector("#program").value

    let formObject = {
        name: name,
        gender: gender,
        number: number,
        address: address,
        select: select
    }

    formData.push(formObject);

    localStorage.setItem("userData",JSON.stringify(formData));

    alert(`Form Submitted Successfully ${name}`)

    myForm.reset()
    
}
