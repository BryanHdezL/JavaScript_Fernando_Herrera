let personaje = {
  name: 'Tony Stark',
  codeName: 'IronMan',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zio: '10880, 90265',
    ubicacion: 'Mabilu, California',
  },
}

console.log(personaje)
console.log('Nombre:', personaje.nombre)
console.log('CodeName', personaje['codeName'])
console.log('Edad:', personaje.edad)

console.log('Coords:', personaje.coords)
console.log('Lat:', personaje.coords.lat)

console.log('No. trajes:', personaje.trajes.length)
console.log('Último traje:', personaje.trajes[personaje.trajes.length - 1])

const x = 'vivo'
console.log('Vivo:', personaje[x])

// Eliminar una propiedad del objeto
delete personaje.edad
console.log(personaje)

// Agregar propiedades al objeto
personaje.casado = true
console.log(personaje)

// Convertir en objeto en una matriz
const entriesPares = Object.entries(personaje)
console.log(entriesPares)

// Bloquear las propiedades principales del objeto
Object.freeze(personaje)

// Obtener propiedades y valores del objeto
const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log({ propiedades, valores })
