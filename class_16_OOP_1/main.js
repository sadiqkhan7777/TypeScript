"use strict";
// oop object oriented programming
// interface CarType {
//     brand:string;
//     model:string;
//     year:number;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// class Car implements CarType {
//     brand:string = "Toyota"
//     model:string = "Corolla"
//     year:number = 2024
// }
// const myCar:CarType = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2024
// }
const myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2024
};
function displayDetails() {
    return `Brand ${myCar.brand} model ${myCar.model} year ${myCar.year}`;
}
console.log(displayDetails());
// let myCar = new Car()
// console.log(myCar);
