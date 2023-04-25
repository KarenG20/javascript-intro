const person = {
    name: 'Karen',
    lastname: 'Gómez',
    year: 33,
    street: {
        city: 'Bogotá',
        zip: 2534,
        lat:  14.2356,
        long: 15.312
    }
}
//Romper referencia
const person2 ={...person};
person2.name= 'Teresa'

console.log (person)
console.log (person2)

