let email="yujinashresths@gmail.com"
const accountId=133345
var password="yujina@567"
console.table([email, accountId, password])
/* prefer not to use var because of block scope issue and functional scope issue */
/*alert(3+3) we are using node js not the browser so this line of code will throw error*/
let x=3
let y=x++
console.log(`x:${x}, y:${y}`)
let a=3
let b=++a
console.log(`x:${a}, y:${b}`)
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)

const bigNumber=2343253578578n
console.log(bigNumber)

my_obj={
    name:"yujina",
    age:20, 
    faculty:"Devops"
}

const myfunct=function() {
    console.log("hello world")
}
myfunct()
console.log(typeof myfunct)

let var1="hitest"
let var2=var1
var2="mikesh"
console.log(var1)
console.log(var2)
let user1={
    email:"shreya@gmail.com",
    username:"shreyaupd"
}
let user2=user1
user2.username="khushihihi"
console.log(user1.username)
