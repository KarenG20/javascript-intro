const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}
//Desestructuración
const {age, name, codeName, power= 'No tiene poder'} = person

// console.log ( name )
// console.log (age)
// console.log (codeName)
// console.log (power)

//Desestructuración
const createHero = ({age, name, codeName, power}) => 
    ({
        id: 134634,
        name,
        age,
        codeName,
        power
    })
        
    


console.log (createHero (person))