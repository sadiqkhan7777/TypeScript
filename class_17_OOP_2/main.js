// class Student {
//     public name: string
//     private age: number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var takePhoto = /** @class */ (function () {
    function takePhoto(filName, brstNo) {
        this.brust = brstNo;
        this.fiter = filName;
    }
    return takePhoto;
}());
//inheritance
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(filName, brstNo, rlTime) {
        var _this = _super.call(this, filName, brstNo) || this;
        _this.reelTime = rlTime;
        return _this;
    }
    return Instagram;
}(takePhoto));
var instaApp = new Instagram("whitness", 10, 10);
console.log(instaApp);
var personalData = /** @class */ (function () {
    function personalData(tName, tAge, tExp) {
        this.name = tName;
        this.age = tAge;
        this.experience = tExp;
    }
    Object.defineProperty(personalData.prototype, "updateAge", {
        set: function (updAge) {
            this.age = updAge;
        },
        enumerable: false,
        configurable: true
    });
    return personalData;
}());
var tdata1 = new personalData("ubaid", 10, 3);
tdata1.updateAge = 20;
console.log(tdata1);
