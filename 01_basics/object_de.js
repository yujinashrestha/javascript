const car={
    name:"Tesla",
    Model:"Tesla model X",
    Color:"Black",
    autopilot:true
}

const {Model:M}=car
console.log(M)

function func(){
    console.log("this is the first function")
}
func()

function addnumbers(a,b){
    return a+b
}
console.log(addnumbers(5,3))

function restop(...num){
    return num
}
console.log(restop(4,5,6,7))

const user={
    username:"yujiina",
    address:"banepa"
}

function objecthandling(anyobject){
    return(`username:${anyobject.username}, address:${anyobject.address}`)
}

objecthandling(user)
console.log(objecthandling(user))