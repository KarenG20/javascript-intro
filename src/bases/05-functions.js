function hello(xyz) {
    return `Hola ${xyz}`
}

const name ='Karen'
console.log (hello (name))

const greet = (name= 'Alexandra') => `Hola ${name}`

console.log (greet())


const getUser = () => ({
    uid: '1333',
    username: 'kargoro20'
})
console.log (getUser ())


const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'SuperMan'
}
]

// Metodo some
const exist = heroes.some ( (hero )=> hero.id ===1  )
console.log( exist)
const heroe = heroes.find ( (hero )=> hero.id ===2  )
console.log ( heroe.name)