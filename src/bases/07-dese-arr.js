const characters = [ 'Goku', 'Vegeta','Trunks']

const [goku,vegeta,trunks, goten='no tiene valor'] = characters

console.log ('Desestructuración de arreglos')
console.log (trunks, goten)

const returnArray = () => {
    return ['ABC', 123]
}
const [ letters, numbers] = returnArray ()

console.log ('Desestructuración de arreglos en una funcion con return')
console.log (letters,numbers)


const returnArray1 = (letters, numbers) => {
    return [letters, numbers]
}
const [ letters1, numbers1] = returnArray1 ( ['XYZ', 9798])
console.log (letters1, numbers1)
