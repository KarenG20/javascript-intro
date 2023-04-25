const name = 'Karen'
const lastname = 'Gómez'
//Creación de template
const nameCom = `${name} ${lastname}`

console.log(nameCom)
function getSaludo ( name){
    return 'Hola ' + name
}

console.log ( `Este es un texto: ${getSaludo (nameCom)}`)






