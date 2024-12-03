        //          ENUM TOPIC
        // imejat invoc funtion

// enum Days {
//     Monday = "Sunny Weather",
//     Tuesday = "Rainy Weather",
//     Wednesday ="Dry Weather",
// }
// let currentDay:Days[2]
// console.log(Days.Monday);
// console.log(Days.Tuesday);

const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

const enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color["Blue"]; //Not allowed with const enums
console.log(colorName);


//H/w
//constEnum
//enum diff b/w constEnum
  

// function abc():never{
//     while(true){

//     }
// }
// abc()

//type abc = string & number 

                                // topic    TYPE CASTING

// let data:unknown
// let abc:boolean = data as boolean

// topic tuples

let trafficlight : string []= ["green","red","yellow"]
let tuples:[string,boolean,number] = ["abc",true,3]

tuples.push(12)

//                     // topic function default parameter

// function greet(name:string = "user"){
//     console.log(`hello ${name}`)
// }// templet letrial
// greet("sir Okasha");


// optional parameter // templet letrial // rest parameter
// topic a synconization


// rest parameter

// function greet(name: string, ...teacherName:string[]){
//     console.log(`hello ${name}, ${teacherName}`)
// }
// greet("okasha","ubaid","Naeem","yasir");


// console.log("hello world" , "Hello world from okasha");

// function overload

// function hello(message:string):string
// function hello(message:number):number
// function hello(message:any){
//     return message;
// }
// hello(true)