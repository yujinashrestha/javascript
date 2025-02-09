let currentdate=new Date()
console.log(currentdate)
console.log(currentdate.toDateString())
console.log(currentdate.toString())
console.log(currentdate.toLocaleDateString())
console.log(currentdate.toLocaleString())
console.log(currentdate.toJSON())

let mydate=new Date(2023, 1, 15)
console.log(mydate.toLocaleString())
let newdate=new Date("01-11-2025")
console.log(newdate.toLocaleString())
let now=Date.now()
console.log(now)
console.log(mydate.getTime())

console.log(mydate.toLocaleString('default', {
    weekday:"long"
}))
/* array methods */
const myarray=[1,2,3,4,5]
const newarray=new Array(1,2,3,4,5)
console.log(myarray[0])
myarray.push(6)
console.log(myarray)
myarray.unshift(10)
console.log(myarray)

