var Car = /** @class */ (function () {
    function Car() {
        this.brand = "Toyota";
        this.model = "Corolla";
        this.year = 2024;
    }
    Car.prototype.displayDetails = function () {
        return "Brand ".concat(this.brand, " model ").concat(this.model, " year").concat(this.year);
    };
    return Car;
}());
var myCar = new Car();
console.log(myCar.displayDetails());
