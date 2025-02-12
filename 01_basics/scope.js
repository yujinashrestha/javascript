// const user={
//     username:"yujina",
//     email:"yujinashresths@gmail.com",
//     message:function(){
//         console.log(`${this.username}, welcome to the website !! `)
        
//     }
// }
// user.message()
// user.username="yuna"
// user.message()

// console.log(this)

// function one(){
//      username="yujina"
//     console.log(this.username)
// }

// one()

// const func=()=>{
//     console.log("this is the arrow function")
// }

// func()

// const add=(a , b)=>({username:"yujina"})

// console.log(add(5, 3))

// const addtwo=function(a,b){
//     console.log(a+b)
// }
// addtwo(4, 5)

// const user={
//     username:"hitesh",
//     gmail:"hitest@google.com",
//     message:function(){
//       console.log(`${this.username}, welcome to this website !! `)
//     }
// }

// user.message()

// function func(){
//     let username="yujina"
//     console.log(`${this.username}, welcome !! `)
// }

// func()
const func=(a, b)=>{
  return a+b
}
console.log(func(1,2))

const func1=(c, d)=>({username:"yujina"})

console.log(func1(101, 3))