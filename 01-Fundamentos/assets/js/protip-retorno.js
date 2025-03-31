// Retornar objetos
const createPerson = (name, lastname) => ({ name, lastname })

const person = createPerson('Bryan', 'Hernández')
const { lastname: newLastname } = createPerson('Bryan', 'Hernández')
console.log(person)
console.log({ newLastname })

// Argumentos en funciones flecha
const printArgs = (age, ...args) => {
  console.log({ age, args })
  return args
}

const [married, active, name, greeting] = printArgs(22, true, false, 'Bryan', 'Hola')
console.log({ married, active, name, greeting })

// Destructuración con objetos
let tony = {
  name: 'Tony Stark',
  codeName: 'IronMan',
  vivo: false,
  //   edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}

const printProperties = ({ nombre, codeName, vivo, edad = 22, trajes }) => {
  console.log({ nombre })
  console.log({ codeName })
  console.log({ vivo })
  console.log({ edad })
  console.log({ trajes })
}

printProperties(tony)
