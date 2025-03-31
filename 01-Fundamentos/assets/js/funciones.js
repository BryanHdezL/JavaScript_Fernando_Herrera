// Declaración clásica de una función
function funcionClasica() {
  console.log(arguments)
  return 1
}

// Declaración de una función anónima
const funcionAnonima = function (name) {
  console.log(`Hola ${name}, desde función anónima.`)
}

// Declaración de un función flecha
const funcionFlecha = name => {
  console.log(`Hola ${name}, desde función flecha.`)
}

// Invocar funciones
const retornoFuncionClasica = funcionClasica('Bryan', 22, 'Ciudad de México')
console.log({ retornoFuncionClasica }) // Si no existe un return se define como undefined
funcionAnonima('Bryan')
funcionFlecha('Bryan')

// Ejercicios
const add = (a, b) => a + b
const getRandom = () => Math.random()

console.log(`Sumar: ${add(1, 2)}`)
console.log(`Aleatorio: ${getRandom()}`)
