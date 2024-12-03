class Car {
brandZ = "Toyota"
modelZ = "Corolla"
yearZ = 2024
displayDetails(){
    return `Brand ${this.brand} model ${this.model} year${this.year}`
    }
}
let myCar = new Car()
console.log(myCar.displayDetails());

constructor(brand:string, model:string, year:number){
    this.brandZ = brand;
    this.modelZ = model;
    this.yearZ = year;
}
let myCar = new Car("")