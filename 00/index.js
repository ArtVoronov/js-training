const characterName = "Леопольд"
const characterSurname = "Кот"
const characterAge = 45

alert(`Hello world! Встречай JS! Я ${characterSurname} ${characterName}, и мне ${characterAge}. Рад встрече!`)

const user = {
    name: "Дядя Стёпа",
    height: 210,
    age: 56,
    smoking: false,
    friends: ["Сергей Михалков", "Иван Аксенчук", "Леонид Шварцман", "Александр Локшин", "Борис Котов", "Георгий Мартынюк"]
}

user.canSingSong = "Может петь песни"

user.friends = []

console.log(user)