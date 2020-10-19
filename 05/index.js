const USER = {
    email: "email",
    password: "password",
    name:"PersonalName",
}


const alert = document.createElement("p")

alert.innerHTML = "email or password is wrong"
alert.className = "alert"
alert.id = "alert"


const container = document.getElementById("container")
const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const buttonSubmit = document.getElementById("submit")

email.addEventListener("input", inputEventHandler)
password.addEventListener("input", inputEventHandler)
buttonSubmit.addEventListener("click", onClick)


const INVALID_CLASS = "invalid"

const setDisabledButtonState = () => {
    buttonSubmit.disabled = !(email.value && password.value)
}

setDisabledButtonState()

const sayHi = () => {
    container.innerText = `Hello, ${USER.name}`
}

const fault = () => {
    // Не правильно ставить только на не верно введенное поле класс))
    
    email.classList.add(INVALID_CLASS)
    password.classList.add(INVALID_CLASS)
    email.value = ""
    password.value = ""
    
    email.focus()

    if (!document.getElementById("alert")){
        container.append(alert)
    }
}

const removeFault = () => {
    if (document.body.contains(alert)) {
        alert.remove()
    }
}

email.focus()

function onClick(event) {
    event.preventDefault()
    const emailValue = email.value
    const passwordValue = password.value
    if (emailValue === USER.email && passwordValue === USER.password) {
        sayHi()
    } else {
        fault()
    }
}

function inputEventHandler(event) {
    const hasInvalid = event.target.classList.contains(INVALID_CLASS)
    const isValid = event.target.value !== ""

    if (!hasInvalid && !isValid) {
        event.target.classList.add(INVALID_CLASS)
    }
    if (hasInvalid && isValid) {
        event.target.classList.remove(INVALID_CLASS)
    }
    
    removeFault()
    setDisabledButtonState()
}