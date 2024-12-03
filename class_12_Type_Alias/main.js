console.log(" ! TypeAlias ! ");
var student1 = {
    name: "sadiq",
    age: 25,
    cnicNo: 3,
    address: "jahangirRoad",
};
var student2 = {
    name: "Ali",
    age: 20,
    cnicNo: 2939,
    address: "saddar",
};
console.log();
// type IRollNo = string | number // pip sign |   | static type
// let rollNo:IRollNo = ""
// rollNo = 2020 
// // intersection 
// // type IStudent = {
// //     name :string,
// //     rollNo : number,
// // }
// // type ITeacher = {
// //     name : string,
// //     experince : number,
// // }
// // let studen1 : IStudent = {
// //     rollNo : 2390,
// //     name : "sadiq"
// // }
// // let Teacher = {
// //     name : "Ubaid",
// //     experince : 3,
// // }
// // type intersection = IStudent & ITeacher
// // let Teacher2:{
// //     name: "Okasha",
// //     rollNo: 12345,
// //     experince : 3,
// // }
// // type IStudent = {
// //     name   : string,
// //     rollNo : number,
// // }
// // type ITeacher = {
// //     name    :   string,
// //     experience : number,
// //     department : string,
// // }
// // let IStudent = {
// //     name: "Ali",
// //     rollNo : 2032
// // }
// // let ITeacher = {
// //     name    :   "Usman",
// //     experience : 4,
// //     department   : "HR",
// // }
// // type intersection = IStudent & ITeacher
// // let Teacher1 :{
// // }
// // LITERAL TYPING 
// // type Icecreamflavours =  "Strawberry" | "Bubble Gum" | "Blue Berry"
// // let Icecream : Icecreamflavours= "Strawberry"
// // structral typing    &    nomenal typing 
// // fresh object
// // stale object
// //let sphere = ball   // stale object 
// let ball = {        // fresh object
//     diameter: 10,
// }
// let sphere = {
//     diameter: 20,
// }
// let tube = {
//     diameter: 30,
//     length: 10,
// }
// // ball = sphere 
// // sphere = ball 
// // console.log(ball)
// // console.log(sphere)
// ball = {
//     diameter:20,
//     length:30,
// }
// ball = tube
//let a:string|20|false|"hello" = "world"
//type Abc = string & number
