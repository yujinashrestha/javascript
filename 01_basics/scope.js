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

const func=()=>{
    console.log("this is the arrow function")
}

func()

const add=(a , b)=>({username:"yujina"})

console.log(add(5, 3))
