// console.log("First")             executed    // callstack :         javascript is interperater
// for (let i = 1 ;i <= 10; i++){
//     console.log("third")     // executed             synchronous    // single threaded
// }
// console.log("2nd")       //executed 

//javascipt is single threaded language is using single thread of processor

                                    //arrow function H/W



// let add = () => {
//     console.log("ali");
// }
// add()

//general function     


                                //          callback funtion           \\

                                
// function greeting(askName:()=>void){
//     console.log("HELLO, greet!");
//     askName()
// }
// function askName(){
//     console.log("Enter Your Name")
// }
// greeting(askName);
// console.log(askName);



                                    //       Topic asynchronous      \\

// Asynchrounous funtion (code)                     // callback task queue

// console.log("first");

// Built-in Asynchrounous funtion
// setTimeout(()=>{
//     console.log("second")
// },1000)

// setTimeout(()=>{
//     console.log("fourth")
// },0)
// console.log('third')

// H?W  callback hell 
// callback promises