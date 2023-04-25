const arrays = [1,2,3,4]
arrays.push (5)

const arrays2 =  [...arrays]

const arrays3 = arrays2.map (function (n){
    return n*2
})
arrays3.push (14)

arrays2.push ( 6)
console.log (arrays)
console.log (arrays2)
console.log (arrays3)