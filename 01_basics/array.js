// const marvel_heroes=['thor', 'ironman', 'spiderman', 'doctor strange']
// const dc_heroes=['superman', 'batman', 'wonderwoman', 'flash', 'aquaman']
// // marvel_heroes.push(dc_heroes)
// // console.log(marvel_heroes[4][2])
// const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes)
// const allnewheroes=[...marvel_heroes, ...dc_heroes]
// console.log(allnewheroes)
// const array=[1,2,3,4,[5,6,7,[8,9,10]],11,12]
// newarray=array.flat(Infinity)
// console.log(newarray)
// console.log(Array.isArray("yujina"))
// console.log(Array.of("yujina"))

//objects literals
// const sys1=Symbol()
// const sys2=Symbol()
// const jsUser={
//     Name:"hitesh",
//     address:"mumbai",
//     email:"hitesh@gmail.com",
//     [sys1]:"this is the first symbol",
// [sys2]:" second symbol"
// }
// console.log(jsUser[sys1])
// console.log(jsUser[sys2])
// //Object.freeze(jsUser)
// jsUser.email="yujinashresths@gmail.com"
// console.log(jsUser)

// jsUser.greetings= function(){
//     console.log("hello, jsUser !!")
// }

// jsUser.greetings1=function(){
//     console.log(`hello jsUser, ${this.Name}`)
// }
// jsUser.greetings()
// jsUser.greetings1()
// console.log(jsUser.greetings1())

//object singleton
const tinder=new Object()
console.log(tinder)
tinder.id="1001"
tinder.username="janice"
tinder.isloggedIn="false"
console.log(tinder)

// const facebook={
//     userid:"anonymous123",
//     fullname:{
//         userfullname:{

//             firstname:"avinash",
//             lastname:"dsouza"
//         }

//     },
//     email:"avinash@gmail.com"
// }
//
// console.log(facebook.fullname.userfullname.firstname)
// const obj1={1:"one", 2:"two"}
// const obj2={3:"three", 4:"four"}
// // const obj3=Object.assign({}, obj1, obj2)
// // console.log(obj3)

// const obj3={...obj1, ...obj2}
// console.log(obj3)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty('username'))
