const formContainer = document.getElementById("form-container")

const Template = [`
    <input placeholder="email" type="text" id="email">
    <input placeholder="password" type="password" id="password">
    <input type="submit" id="submit" value="Login" disabled>
`,`
    <input placeholder="name" type="text" id="name">
    <input placeholder="age" type="text" id="age">
    <input placeholder="email" type="text">
    <input placeholder="city" type="text">
    <input placeholder="password" type="password">
    <input placeholder="repeat password" type="password">
    <input type="submit" id="submit" value="Register" disabled>
`]

let inputs

const initForm = (template) => {
    let form = document.createElement('form')
    form.className = "form"
    form.innerHTML = template
    formContainer.append(form)
    inputs = form.getElementsByTagName('input')
}
initForm(Template[0])

const removeForm = () => {
    formContainer.innerHTML = ""
    Array.from(inputs).forEach(elem => {
        
    })
}

const switcher = document.getElementById("switcher")


const sections = switcher.getElementsByTagName('div')
const forms = document.getElementsByTagName('form')


function setActive() {
    sections.item(Math.abs(Array.from(sections).indexOf(event.target) - 1)).classList.remove('active')
    sections.item(Math.abs(Array.from(sections).indexOf(event.target))).classList.add('active')

    removeForm()
    initForm(Template[Math.abs(Array.from(sections).indexOf(event.target))])
}

for (let section of sections) {
    section.addEventListener('click',setActive,false)
}