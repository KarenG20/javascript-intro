//import {owners} from './data/heroes'

//const [dc,marvel] =owners
//console.log (owners);

import superHeroes from '../data/heroes'

//getHeroByID (id)

export const getHeroByID =(id) => 
   superHeroes.find ( (hero )=> hero.id ===id  )

//const getHeroByID = superHeroes.find ( (hero )=> hero.id ===2  )

//find


//getHeroesByOwner ('DC,'Marvel')
export const getHeroesByOwner = (owner) => 
    superHeroes.filter (superHeroes =>superHeroes.owner === owner)
//const getHeroesByOwner  = superHeroes.filter (superHeroes =>superHeroes.owner === ('DC'))
//function getHeroesByOwner ('DC', 'Marvel') {
    //superHeroes.find ( (hero )=> hero.id ===id  )
//}
//const getHeroByID = superHeroes.find ( (hero )=> hero.id ===2  )

//find


//console.log (superHeroes)


//import {getHeroByID,getHeroesByOwner} from './bases/08-imp-exp'



//console.log ( getHeroByID (4))




//console.log ( getHeroesByOwner ('Marvel'))




