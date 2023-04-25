/* console.log ('Inicio')
new Promise ((resolve,reject)=>{
    console.log('Cuerpo de la promesa')
    reject ('Promesa con error')
})
.then(console.log )
//CallBack
.catch (console.log)

console.log ('Fin') */

import {getHeroByID} from './bases/08-imp-exp'
const getHeroByIDAsync =(id)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const hero =getHeroByID(id)
            if  (hero) {
                resolve (hero)
            } else{
                reject ('Hero does not exist')
            }
           
        },1000);
    });
}

getHeroByIDAsync(100)
    .then(hero=> console.log(`He is hero: ${hero.name}`))
    .catch(console.log)