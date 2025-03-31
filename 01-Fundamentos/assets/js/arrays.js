const arr1 = new Array(10)
const arr2 = []
console.log({ arr1 })
console.log({ arr2 })

let videoGames = ['Mario 3', 'Megaman', 'Chrono Triger']
console.log({ videoGames })
console.log(videoGames[0])

let something = [true, 123, 'Bryan', 1 + 2, function () {}, () => {}, { a: 1 }, ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']]]
console.log({ something })

// Exercises
console.log(`Ejercicio 1: ${something[2]}`)
console.log(`Ejercicio 2: ${something[7][3]}`)
console.log(`Ejercicio 3: ${something[7][4][1]}`)
