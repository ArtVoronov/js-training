const formContainer = document.getElementById("form-container")

const Template = [`
    <input placeholder="email" type="text" id="email">
    <input placeholder="password" type="password" id="password">
    <input type="submit" id="submit" value="Login">
`,`
    <input placeholder="login" type="text" id="login">    
    <input placeholder="name" type="text" id="name">
    <input placeholder="age" type="text" id="age">
    <input placeholder="email" type="text" id="email">
    <input placeholder="city" type="text" id="city">
    <input placeholder="password" type="password" id="password">
    <input placeholder="repeat password" type="password" id="repeat password">
    <input type="submit" id="submit" value="Register">
`]

const errorMessage = { login: 'Please check login', name: 'Name is empty', rPassword: "Password don't match" }

let inputs
let buttonSubmit

class User {
    constructor(login, name, age, email, city, password) {
        this.login = login
        this.name = name
        this.age = age
        this.email = email
        this.city = city
        this.password = password
    }

    checkData() {
        checkUserData(this)
    }
}

const regObject = {
    login: /^[^,.]+$/,
    age: /^\d+$/,
    email: /\S+@\S+\.\S+/
}

const initForm = (template) => {
    let form = document.createElement('form')
    form.className = "form"
    form.id = "form"
    form.innerHTML = template
    formContainer.append(form)
    inputs = form.getElementsByTagName('input')
    buttonSubmit = inputs.submit
    buttonSubmit.disabled = check()
    Array.from(inputs).forEach(elem => {
        elem.addEventListener("keyup", () => {
            listenButtons()
        }, false);
    })
    // console.log(buttonSubmit)
}


initForm(Template[1])

const removeForm = () => {
    formContainer.innerHTML = ""
    Array.from(inputs).forEach(elem => {
        
    })
}

const switcher = document.getElementById("switcher")

const sections = switcher.getElementsByTagName('div')
const forms = document.getElementsByTagName('form')


function setActive() {
    // sections.item(Math.abs(Array.from(sections).indexOf(event.target) - 1)).classList.remove('active')
    // sections.item(Math.abs(Array.from(sections).indexOf(event.target))).classList.add('active')

    // removeForm()
    initForm(Template[Math.abs(Array.from(sections).indexOf(event.target))])
}

// for (let section of sections) {
//     section.addEventListener('click',setActive,false)
// }


function listenButtons() {
    if (event.target.value !== undefined) {
        buttonSubmit.disabled = check()
        setTargetInvalidOnBlur(event.target)
        if (event.target.value.length > 0) {
            event.target.classList.remove("invalid")
        } else {
            event.target.classList.add("invalid")
        }
    }
}

function setTargetInvalidOnBlur(target) {
    Array.from(inputs).forEach(elem => {
        elem.classList.remove("invalid")
    })
    target.classList.add("invalid")
    target.onblur = () => {
        if (target.value.length > 0) { target.classList.remove("invalid") }
    }
}

function check() {
    let disabled = true
    Array.from(inputs).forEach(input => {
        if (input.type !== 'submit'){
            if (input.value.length > 0) {
                disabled = false
            } else {
                return disabled = true
            }
        }
    })
    return disabled
}


const fault = (errorMessage) => {
    let alert = document.createElement("p")

    alert.innerHTML = errorMessage
    alert.className = "alert"
    container.append(alert)

    setTimeout(() => {
        alert.remove()
    }, 2000)
    return null
}

const getData = (userInfo) => {
    Array.from(inputs).forEach(input => {
        if(input.type !== 'submit' && input.id !== 'repeat password')
        userInfo[input.id] = input.value
    })
    return userInfo
}

const checkUserData = (userInfo) => {
    let regExp
    for (const [id, value] of Object.entries(userInfo)) {
        console.log(`${id} : ${value}`)
        regExp = new RegExp(regObject.login)
        regExp.test(userInfo.login)?true:false
    }
     

    if () {
        console.log("Nice login")
    }

    if (userInfo.name.length > 0) {
        console.log("Nice name")
    }

    regExp = new RegExp(regObject.age)

    if (regExp.test(userInfo.age)) {
        console.log("Nice age")
    }

    regExp = new RegExp(regObject.email)
    
    if (regExp.test(userInfo.email)) {
        console.log("Nice email")
    }
}

submit.onclick = () => {
    event.preventDefault()
    let user = new User()
    getData(user)
    user.checkData()
}




// trash

// let userInfo = {}
//     Array.from(inputs).forEach(elem => {
//         if (elem.id !== 'submit' && elem.value.length > 0) {
//             userInfo[elem.id] = elem.value
//         }
//     })
//     console.log(userInfo)

//     let regExp = new RegExp("^[^,.]+$")

//     if (!regExp.test(userInfo.login)) {
//         fault(errorMessage.login)
//         inputs.login.classList.add("invalid")
//     }

//     if (name.length === 0 && event.target.id === userInfo.id) {
//         console.log()
//         fault(errorMessage.name)
//         inputs.name.classList.add("invalid")
//     }

//     console.log(`PASSWORD: ${userInfo.password}`)
//     if (userInfo.password) {
//         if (userInfo.password.includes(userInfo["repeat password"], 0)) {
//             if (userInfo.password === userInfo["repeat password"]) {
//                 console.log("NicePassword!")
//             } else {
//                 fault(errorMessage.rPassword)
//                 console.log(inputs["repeat password"])
//                 inputs["repeat password"].classList.add("invalid")
//             }
//         }
//     }