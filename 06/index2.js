const formContainer = document.getElementById("form-container")

const Template = [`
    <input placeholder="email" type="text" id="email">
    <input placeholder="password" type="password" id="password">
    <input type="submit" id="submit" value="Login">
`,`
    <input placeholder="name" type="text" id="name">
    <input placeholder="age" type="text" id="age">
    <input placeholder="email" type="text">
    <input placeholder="city" type="text">
    <input placeholder="password" type="password">
    <input placeholder="repeat password" type="password">
    <input type="submit" id="submit" value="Register">
`]

let inputs
let buttonSubmit


const initForm = (template) => {
    let form = document.createElement('form')
    form.className = "form"
    form.innerHTML = template
    formContainer.append(form)
    inputs = form.getElementsByTagName('input')
    buttonSubmit = inputs.submit
    buttonSubmit.disabled = check()
    Array.from(inputs).forEach(elem => {
        elem.addEventListener("keyup", listenButtons, false);
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
        if (event.target.value.length > 0) {
            event.target.classList.remove("invalid")
        } else {
            event.target.classList.add("invalid")
        }
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

submit.onclick = () => {
    event.preventDefault()
}