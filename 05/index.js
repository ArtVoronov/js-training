const User = {
    email: "email",
    password: "password",
    name:"PersonalName",
}

const container = document.getElementById("container")
const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const buttonSubmit = document.getElementById("submit")

email.addEventListener("input", eventHandler)
password.addEventListener("input", eventHandler)
buttonSubmit.addEventListener("click", onClick)


const INVALID_CLASS = "invalid"
console.log(email,password,submit)

const setDisabledButtonState = () => {
    buttonSubmit.disabled = !(email.value && password.value)
}

setDisabledButtonState()

const sayHi = () => {
    container.innerText = `Hello, ${User.name}`
}
const fault = () => {
    // Не правильно ставить только на не верно введенное поле класс))
    email.classList.add(INVALID_CLASS)
    password.classList.add(INVALID_CLASS)
    
    if (!document.getElementById("alert")){
        let alert = document.createElement("p")

        alert.innerHTML = "email or password is wrong"
        alert.className = "alert"
        alert.id = "alert"
        container.append(alert)
    }
}

const removeFault = () => {
    if (document.getElementById("alert")) {
        document.getElementById("alert").remove()
    }
}

email.focus()

function onClick(event) {
    event.preventDefault()
    const emailValue = email.value
    const passwordValue = password.value
    if (emailValue === User.email && passwordValue === User.password) {
        sayHi()
    } else {
        fault()
    }
}

function eventHandler(event) {
    const hasInvalid = event.target.classList.contains(INVALID_CLASS)
    const isValid = event.target.value !== ""

    if (!hasInvalid && !isValid) {
        event.target.classList.add(INVALID_CLASS)
    } else {
        event.target.classList.remove(INVALID_CLASS)
    }
    removeFault()
    setDisabledButtonState()
}