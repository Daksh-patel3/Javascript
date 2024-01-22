let score=33

console.log(typeof(score))

let valueInNumber=Number(score)

score="fsd"
valueInNumber=Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

//Number Conversions
//33-> 33
//"ff"->NaN
//true->1
//null->0

let isLoggedIn=1
let boolIsLoggedIn=Boolean(isLoggedIn)
console.log(boolIsLoggedIn);

//Boolean Conversions
//1->true
//0->false
//""->false
//"fsf"->true

let someNumber=438
let stringNum=String(someNumber)
console.log(typeof stringNum)