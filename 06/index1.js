const switcher = document.getElementById("switcher")
const switcherButtons = switcher.getElementsByTagName("div")

const forms = document.getElementsByTagName("form")

let inputs

let buttonSubmit

function listenButtons() {
    if (event.target.value !== undefined) {
        if (event.target.value.length > 0) {
            event.target.classList.remove("invalid")
        } else {
            event.target.classList.add("invalid")
        }
        check()
    }
}

const checkInputs = () => {
    Array.from(forms).forEach(elem => {
        if (elem.classList.contains('active')) {
            inputs = elem.getElementsByTagName('input')
            elem.addEventListener("keyup", listenButtons, false);
            buttonSubmit = inputs.submit
        }
    })
}

const check = () => {
    let disabled
    Array.from(inputs).forEach(input => {
        console.log(input.type, input.value.length)
        if (input.value.length <= 0 && input.type !== 'submit') {
            disabled = true
        }
    })
    return disabled?true:false
}

const setActive = function () {
    Array.from(switcherButtons).forEach(elem => {
        elem.classList.remove('active')
    })
    event.target.classList.add('active')
    Array.from(forms).forEach(elem => {
        elem.classList.remove('active')
    })
    forms[Array.from(switcherButtons).indexOf(event.target)].classList.add('active')
    checkInputs()

    console.log(buttonSubmit.disabled)
    buttonSubmit.disabled = check()
    console.log(buttonSubmit.disabled)
}

for (let elem of switcherButtons) {
    // console.log(elem)
    elem.addEventListener('click', () => {
        setActive()
    },false)
}

submit.onclick = () => {
    event.preventDefault()
}