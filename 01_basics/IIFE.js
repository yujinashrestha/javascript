// (function func(){
//     console.log('this is IIFE function')
// })();

// ((name)=>{
//     console.log(`this is arrow IIFE function ${name}`)
// })('yujina')
function one(){
    console.log('this is function one')
    two()
}

function two(){
    console.log("this is function two")
    three()
}

function three(){
    console.log("this is function three")
}
 one()
two()
three()