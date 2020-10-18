function task2() {
    function Modal() {
        this.show = function () {
            console.log(`show ${this.name}`)
        }

        this.hide = function() {
            console.log(`hide ${this.name}`)
        }
    }

    function Warning(name, message) {
        this.name = name
        this.message = message
    }

    function Success(name, message) {
        this.name = name
        this.message = message
    }

    const context = new Modal

    Warning.prototype = context
    Success.prototype = context

    const obj = {
        bingoBall: 2
    }
    const obj2 = {
        bingeBall: 2
    }
}


function task3() {
    Object.prototype.bingo = function() {
        for (let key in this) {
            if (typeof this[key] !== "function" && key.startsWith("bingo")) {
                console.log("bingo!")
                return;
            }
        }
    }
}

function task4() {
    class Anouncer {
        constructor(name) {
            this.present = function () {
                console.log(`Hello, I am ${this.type} and I have size ${this.size}`)
            }
        }
    }

    class Figure extends Anouncer {
        constructor(size) {
            super()
            this.size = size
        }
    }

    class Circle extends Figure {
        constructor(size, type) {
            super(size)
            this.type = type
        }
        getArea(){
            return this.size * 2 * Math.PI
        }
    }

    class Square extends Figure{
        constructor(size, type) {
            super(size)
            this.type = type
        }
        getArea(){
            return this.size ** 2
        }
    }

    const square = new Square(39, "square")

    const circle = new Circle(12, "circle")
    
    console.log(square.getArea())
    square.present()

    console.log(circle.getArea())
    circle.present()
}

function task5() {
    Number.prototype.add = function (number){
        return this + number
    }

    Number.prototype.multiply = function (number){
        return this * number
    }

    Number.prototype.divide = function (number){
        return this / number
    }

    Number.prototype.minus = function (number){
        return this - number
    }
}