// Longitud de un arreglo
console.log('\nLongitud de arreglo: ')
let games = ['Zelda', 'Mario', 'Metroid', 'Chrono']
console.log(`Largo: ${games.length}`)

// Posiciones de un arreglo
console.log('\nPosiones en un arreglo: ')
let first = games[0]
let last = games[games.length - 1]
console.log(`Primero: ${first}`)
console.log(`Ultimo: ${last}`)

// Barrer cada elemento del arreglo
games.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr })
})

// Agregar un nuevo elemento al final del arreglo
let newLength = games.push('F-Zero')
console.log({ newLength, games })

// Agregar un nuevo elemento al inicio del arreglo
newLength = games.unshift('Fire Emblem')
console.log({ newLength, games })

// Eliminar el ultimo elemento
let gameDeleted = games.pop()
console.log({ gameDeleted, games })

// Eliminar una posicion especifica del arreglo
let pos = 1
console.log(games)
let gamesDeleted = games.splice(pos, 2)
console.log({ gamesDeleted, games })

// Obtener la posicion de un elemento especifico
let metroidIndex = games.indexOf('Metroid')
console.log({ metroidIndex })
