const container = document.getElementById("container")


const switcher = document.getElementById("switcher")
// const formDiv = document.getElementById("form-container")
let form = document.getElementsByClassName("form")
const alertDiv = document.getElementById("alert")


const sections = switcher.getElementsByTagName("div")
let active = sections[0].getElementsByClassName("active")

// console.log(sections)

const User = {
    email: "email",
    password: "password",
    name:"PersonalName",
}

let text = [`Hello, ${User.name}`]

if (active.innerHTML === "Login") {
    form = form[0]
    active = sections[0]
    active.classList.add("active")
    sections[1].classList.remove("active")
} else {
    form = form[1]
    active = sections[1]
    active.classList.add("active")
    sections[0].classList.remove("active")
}


const inputs = Array.from(form.getElementsByTagName("input")).slice(0, 2)
const button = document.getElementById("submit")


// console.log(Array.from(sections).indexOf(active)) //index active class

switcher.addEventListener('click', () => {
    console.log(Array.from(event.target.classList))
    if (Array.from(event.target.classList).indexOf("active") === -1) {
        active = switcher.getElementsByClassName("active")[1]
    }
}, false)

const check = () => {
    if (inputs[0].value.length > 0 && inputs[1].value.length > 0) {
        button.disabled = false
    } else button.disabled = true
}
const sayHi = () => {
    container.innerHTML = text[0]
}
const fault = () => {
    // Не правильно ставить только на не верно введенное поле класс))
    inputs[0].classList.add("invalid")
    inputs[1].classList.add("invalid")
    console.warn("so sad")
    let alert = document.createElement("p")

    alert.innerHTML = "email or password is wrong"
    alert.className = "alert"
    alertDiv.append(alert)
    setTimeout(() => {
        alert.remove()
    },2000)
}

check()

function listenButtons() {
    if (event.target.value !== undefined) {
        check()
        if (event.target.value.length > 0) {
            event.target.classList.remove("invalid")
        } else {
            event.target.classList.add("invalid")
        }
    }
}

inputs[0].addEventListener("keyup", listenButtons, false);
inputs[1].addEventListener("keyup", listenButtons, false);

button.onclick = () => {
    event.preventDefault()
    const email = inputs[0].value
    const password = inputs[1].value
    if (email === User.email && password === User.password) {
        sayHi()
    } else {
        fault()
    }
}