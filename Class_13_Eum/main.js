//          ENUM TOPIC
// imejat invoc funtion
// enum Days {
//     Monday = "Sunny Weather",
//     Tuesday = "Rainy Weather",
//     Wednesday ="Dry Weather",
// }
// // let currentDay:Days = Days[0]
// console.log(Days.Monday);
// console.log(Days.Tuesday);
//H/w
//constEnum
//enum diff b/w constEnum
// Topic Data Type
// 1.ANY
// 2.Never
// 3.unknown
// let val:any;
// val = 5
// val = 'abc'
// val = true
// val = undefined 
// val = null
// let val2: unknown 
// val2  = 5
// val2 = "num"
// val2  = undefined
// val2 = null 
// val2 = true 
// let val3:string = val
// let val4:string = val2   
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
// let traffuclight : string []=
// ["green","red","yellow"]
// let tuples:[string,boolean,number]
// =["abc",true,1]
// tuples.push(12)
// topic function default parameter
// function greet(name:string = "user"){
//     console.log(`hello ${name}`)
// }// templet letrial
// greet("sir Okasha");
// optional parameter // templet letrial // rest parameter
function greet(name) {
    var teacherName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        teacherName[_i - 1] = arguments[_i];
    }
    console.log("hello ".concat(name));
}
greet("okasha", "ubaid", "Naeem", "yasir");
// topic a synconization
// rest parameter
console.log("hello world", "Hello world from okasha");
