// const myFitstElement = document.getElementById("my-first-element")
// const containers = document.getElementsByClassName("container")
// const wrapper = document.getElementsByClassName("wrapper")[0]
// const elements = document.getElementsByClassName("element").slice(0,2)

const pInserted = document.createElement("p")

pInserted.className = "text"
pInserted.innerHTML = "Это всего лишь текст"

document.body.append(pInserted)

const div = document.createElement("div")

div.className = "alert"
div.innerHTML = "А это сообщение об ошибке"
div.style = "background:red; color:white; padding:20px"

document.body.append(div)

let ol = document.createElement("ol")
document.body.append(ol)

const list = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]

list.forEach((name, index) => {
    let li = document.createElement("li")
    if ((index + 1) % 2 === 0) {
        li.className = "even"
    } else {
        li.className = "odd"
    }
    li.innerHTML = name
    ol.append(li)
});
    
const sheet = new CSSStyleSheet()
sheet.replaceSync('.even {color: green} .odd {color: blue}')
    
document.adoptedStyleSheets = [sheet]

let messageArr = []
let i = 0

const checkMessages = (div) => {
    messageArr.forEach(elem => {
        if (elem.style.top === div.style.top) {
            div.style.top = Number(div.style.top.replace("px","")) + 25 + 'px'
        }
        if (elem.style.left === div.style.left) {
            div.style.left = Number(div.style.left.replace("px","")) + 25 + 'px'
        }
    })
    div.id = "div"+i++
    messageArr.push(div)
    if (messageArr.length > 3) {
        let deleteDiv = messageArr.shift()
        document.getElementById(deleteDiv.id).remove()
    }
}

const showMessage = (text, background, top, left) => {
    let div = document.createElement("div")
    div.innerHTML = text
    div.style = `position:fixed; background:${background}; left:${left}px; top:${top}px`
    checkMessages(div)
    document.body.append(div)
}

const ul = document.createElement("ul")
document.body.append(ul)

let arr = []
let sum = 0
let value = prompt("Введите число")
while (value !== null) {
    arr.push(value)
    value = prompt("Введите число")
}
arr.forEach((elem) => {
    if (!isNaN(elem)){
        sum += Number(elem)
        let li = document.createElement("li")
        li.innerHTML = sum
        ul.append(li)
    }
})
