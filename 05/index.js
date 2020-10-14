const form = document.getElementById("form")
// const submit = document.getElementById("submit")
// const email = document.getElementById("email")
const container = document.getElementById("container")
const inputs = document.getElementsByTagName("input")

const check = () => {
    if (inputs[0].value.length > 0 && inputs[1].value.length > 0) {
        inputs[2].disabled = false
    } else inputs[2].disabled = true
}
const sayHi = () => {
    container.innerHTML = `Hello, ${User.name}`
}
const fault = () => {
    // Не правильно ставить только на не верно введенное поле класс))
    inputs[0].classList.add('invalid')
    inputs[1].classList.add('invalid')
    console.warn("so sad")
}

check()

// inputs[0].focus()

const User = {
    email: "email",
    password: "password",
    name:"PersonalName",
}

document.addEventListener('keyup', function(event) {
    
    if (event.target.value !== undefined) {
        check()
        if (event.target.value.length > 0) {
            event.target.classList.remove('invalid')
        } else {
            event.target.classList.add('invalid')
        }
    }
}, false);

submit.onclick = () => {
    event.preventDefault()
    const email = inputs[0].value
    const password = inputs[1].value
    if (email === User.email && password === User.password) {
        sayHi()
    } else {
        fault()
    }
}