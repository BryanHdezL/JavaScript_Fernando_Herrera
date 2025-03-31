// String
let nombre = 'Peter Parker'
console.log({ nombre })
nombre = 'Ben Parker'
console.log({ nombre })
console.log(`Tipo: ${typeof nombre}`)

// Boolean
let esMarvel = false
console.log({ isMarvel: esMarvel })
console.log(`Tipo: ${typeof esMarvel}`)

// Number
let numero = 30
console.log({ numero })
numero = 30.00000001
console.log({ numero })
console.log(`Tipo: ${typeof numero}`)

// Undefined
let superPoder
console.log({ superPoder })
console.log(`Tipo: ${typeof superPoder}`)

// Undefined
let soyNull = null
console.log({ soyNull })
console.log(`Tipo: ${typeof soyNull}`)

// Symbols
let symbol1 = Symbol('a')
console.log({ symbol1 })
console.log(`Tipo: ${typeof symbol1}`)
let symbol2 = Symbol('a')
console.log({ symbol2 })
console.log(`Tipo: ${typeof symbol2}`)
console.log(`¿Son iguales? → ${symbol1 === symbol2}`)
