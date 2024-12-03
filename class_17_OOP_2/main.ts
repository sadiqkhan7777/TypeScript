// class Student {
//     public name: string
//     private age: number
    
//     //dynamic code
//     constructor(stdName:string, stdAge:number){
//         this.name = stdName
//         this.age = stdAge
//     }

//     canProgram ():void {
//         console.log("this student can Program")
//     }
// }

// let s1:Student = new Student ("M Ali", 20)
// //s1.age = 18
// // s1.name = "M.Ali"
// //s1.canProgram()

// s1.name = "ubaid"
// console.log(s1)


//abstract class
// abstract class takePhoto {
//     fiter: string
//     brust: number
//     constructor (filName:string, brstNo: number){
//         this.brust = brstNo
//         this.fiter = filName 
//     }
// }
// //inheritance

// class Instagram extends takePhoto{
//     reelTime: number
//     constructor(filName:string, brstNo:number, rlTime:number){
//         super(filName,brstNo,)
//         this.reelTime = rlTime
//     }
// }
// let instaApp:Instagram =  new Instagram("whitness",10, 10)
// console.log(instaApp)

// class personalData {
//     public name:string
//     private age:number
//     public experience:number

//     constructor(tName:string,tAge:number,tExp:number){
//         this.name = tName
//         this.age = tAge
//         this.experience = tExp
//     }
//     set updateAge(updAge:number){
//         this.age = updAge
//     }
// }

// let tdata1:personalData = new personalData ("ubaid",10,3)
// tdata1.updateAge = 20

// console.log(tdata1);



// ATM PROJECT


// class GiaicAtm {
//     private name:string
//     private pin:number
//     public balance:number
//     private islogin:boolean
//     constructor(name:string,pin:number,balance:number){
//         this.name = name
//         this.pin  = pin
//         this.balance = balance
//     }
//     login():void{
//         if(this.name == "ubaid" && this.pin === 1234){
//             this.islogin = true
//         }else{
//             this.islogin = false
//         }   
// }
// deposite(amount:number):number {
//     if(this.islogin) {
//         this.balance += 
//     }
//     return this.balance += amount
// }
// withdrawl(amount:number):void{
//     this.balance -= amount
//     console.log(`You have successfully withdraed : ${amount}`);
//     return  this .balance
// }

// let Ubaidtransac:GiaicAtm = new GiaicAtm ('ubaid',1234,10000)
// Ubaidtransac.deposite(9000)
// }

// console.log(Ubaidtransac.balance);
