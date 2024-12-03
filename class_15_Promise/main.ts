//interpereter      compile     goblal execution contaix   hoisting
//concorente
//leniar
//promise is place holder is temperarer place

// function makepizza(){
//     return "Your pizza is being prepared"
// }
// // let makeFrize = ()=> "Your pizza is being prepared"
// // console.log(makeFize(), "Table 1")
//promise pending state fullfil           state blocking and non blocking
// reject case 


// const helloPromise = new Promise ((resolve) => {
//     setTimeout(()=> {
//         resolve("Hello, World!")
//     },10000) // after 10 second
// })
// helloPromise.then((message) =>
//     console.log(message)
// )

const helloPromise = new Promise ((rej,resolve)=>{
    setTimeout(()=>{
        resolve("hello , world!")
    },1000)
})
helloPromise.then((message) =>
    console.log(message)
)

// const helloPromise = new Promise ((resolve) => {
//    setTimeout(()=> {
//         resolve("Hello, World!")
//     }, 10000)                             // after 10 second
// })
// helloPromise.then((message) =>
//     console.log(message)
// )

let SirZiaPromise = new Promise( (res, rej) => {
    return res("passed out")
} );

SirZiaPromise.then( (status) => {
    console.log(status)
})
SirZiaPromise
.then((status) => {
    console.log(status)
})
.catch((err) => {
    console.log(err)
})

async function checkSirZiaPromise(){
    let promiseVal = await SirZiaPromise
    console.log(promiseVal)
}