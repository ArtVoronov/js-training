function fizzBuzz(n) {
    return (n%5===0)&&(n%3===0)?"FizzBuzz!":((n%5===0)?"Buzz!":((n%3===0)?"Fizz!":""))
}


function toNumber(value) {
    if (!isNaN(Number(value))) {
        return Number(value) 
    } else {
        return null
    }
}


function createUser(name, age, height, weight) {

    if (!typeof name == "string" || (!name && name.length <= 0) || !!toNumber(name)) {
        return null
    } else
    if (!typeof age == "number" || !toNumber(age) || age < 0) {
        return null
    } else
    if (!typeof height == "number" || !toNumber(height) || height < 0) {
        return null
    } else
    if (!typeof weight == "number" || !toNumber(weight) || weight < 0) {
        return null
                } else return { name, weight, age, height, skills: { run: run(weight), volleyball: volleyball(height, weight), videoGames: videoGames(age, height, weight) } }
}


function run(weight){
        if (weight < 100 && weight > 0) {
            return true
        } else return false
    }
    function volleyball(height, weight) {
        if (weight < 90 && height > 185) {
            return true
        } else return false
    }


    function videoGames(age, height, weight) {
        if (age < 18 && height > 140) {
            return true
        } else if (weight > 130) {
            return true
        } else return false
}

    
function isPalindrom(word) {
    for (let i = 0; i < (word.length / 2); i++){
        if (!(word[i] == word[word.length - 1 - i])) {
            return false
        }
    }
    return true
}


function quadraticEquation(a, b, c) {
    
    let D, x1, x2

    D = b ** 2 - 4 * a * c
    
    console.log(`D = ${b}^2 - 4*${a}*${c}`)
    console.log(`D = ${D}`)

    if (D > 0) {
        x1 = (-b + D ** (1 / 2)) / (2 * a)
        x2 = (-b - D ** (1 / 2)) / (2 * a)

        console.log(`x1 = (-${b} + ${D} ** (1 / 2)) / (2 * ${a})`)
        console.log(`x1 = ${x1}`)
        console.log(`x2 = (-${b} - ${D} ** (1 / 2)) / (2 * ${a})`)
        console.log(`x2 = ${x2}`)

        return [x1, x2]
    } else if (D == 0) {
        x1 = -b / (2 * a)

        console.log(`x = -${b} / (2 * ${a})`)
        console.log(`x = ${x1}`)

        return [x1]
    } else {
        return []
    }
}

// console.log(quadraticEquation(1, -8, 72))


//Сбился со счётом месяцев, слишком много думать, пока что не пойму как решить

function getCalendar(year, month) {
    // month += 1
    let calendar = []
    let date = new Date(Date.UTC(year, month, 0));

    console.log(date.getMonth())

    date = -date.getDay()+1
    
    
    // console.log(getDaysInMonth(year, month -1))
    // console.log(getWeeksInMonth(year, month-1))

    for (let j = 0; j < getWeeksInMonth(year, month); j++) {
        calendar[j]=[]
        for (let i = 0; i < 7; i++) {
            if (date > 0 && date <= getDaysInMonth(year, month)) {
                calendar[j].push(date)
            } else calendar[j].push(null)
            date++
        }
    }

    console.log(calendar)
}
getCalendar(2020, 2)

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
};

function getWeeksInMonth(year, month) {
    let daysCount = getDaysInMonth(month, year)
    let date = new Date(year, month, 0)

    return Math.ceil((daysCount+date.getDay()) / 7)
}