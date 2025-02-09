let gamename=new String('snake game')
console.log(gamename[0])
console.log(gamename.toUpperCase())
console.log(gamename.charAt(4))
const newstring=gamename.substring(0, 6)
console.log(newstring)
const anotherstring=gamename.slice(0 ,4)
console.log(anotherstring)
const nextstring=gamename.slice(-8, 4)
console.log(nextstring)
const demo1=gamename.split(' ')
console.log(demo1)
const demo2="   Yujina"
console.log(demo2.trim())
console.log(gamename.replace(' ', "-"))
console.log(gamename.includes('snake'))
const balance=new Number(100)
console.log(balance.toString().length)
console.log(balance.toFixed(2))
const anothernum=1000000
console.log(anothernum.toPrecision(4))
console.log(anothernum.toLocaleString('en-IN'))

console.log(Math.random())
console.log(Math.floor(Math.random()*10 + 1))
const max=10
const min=20
console.log(Math.floor(Math.random()*(max-min+1)+min))

