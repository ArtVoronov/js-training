// 1. Создать функцию - конструктор Dog(name, breed, age), которая будет принимать в качестве аргументов
// имя(string),
// породу(string),
// возраст(number),
// и потом при последующем вызове(инстанцировании)
// создавать объект со следующими свойствами:

// name,
// age,
// breed,


// и методами:


// intro() - выводит в консоль строку следующего вида: Woof! I am NAME, and I am AGE. I am BREED.
//     bark() - выводит в console.log() столько раз слово “woof!”, (через пробел) сколько собаке лет.Например, собаке 5 лет.
// После вызова метода bark() в консоль должна быть выведена следующая строка: “woof! woof! woof! woof! woof!”
// comeHere(word) - принимает на вход строку word.Если word совпадает с именем собаки, то в консоль должно быть выведено “arf - arf”.
// Если не совпадает, то ничего выводить не надо
// ***(три звезды! это может быть очень сложно…)
// teach(skill) - принимает на вход строку skill, после чего проверяет:
// 1) есть ли у текущего инстанса поле skills
// 2) если нет - создает его и присваивает ему массив
// 3) добавляет в конец массива skills строку skill
// 4) Если после добавления в skills количество навыков собаки превысило 4 штуки, то уже при последующих вызовах метода bark()
// в console.log() должно выводиться вместо предыдущего сообщения текст
// Hm.I am smarter than you.I have at least COUNT_OF_SKILLS skills.Do it yourself!.
//     Важно! метод bark() не знает ничего про skill’ы, никаких проверок внутри метода bark() делать нельзя

function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.intro = function () {
        console.log(`Woof! I am ${name}, and I am ${age}. I am ${breed}.`)
    }
    this.bark = function () {
        for (let i = 0; i < this.age; i++) {
            console.log(`woof!`)
        }
    }
    this.comeHere = function (word) {
        if (word === this.name) {
            console.log(`arf - arf`)
        }
    }
    this.teach = function (skill) {
        if (this.skills === undefined){
            this.skills = []
            console.log(this.skills)
        }
        if (this.skills.length > 3) {
            this.bark = function () {
                console.log(`Hm. I am smarter than you. I have at least ${this.skills.length} skills. Do it yourself!!`)
            }
        } else {
            this.skills.push(skill)
        }
    }
}

// let Dog1 = new Dog("Dog1", "asd",5)