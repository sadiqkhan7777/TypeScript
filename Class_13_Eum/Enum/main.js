// enum topic
// immediate
var Days;
(function (Days) {
    Days["Monday"] = "1";
    Days["Tuesday"] = "2";
    Days["Wednesday"] = "Sunny Weather";
    Days["Thursday"] = "4";
    Days["Friday"] = "5";
    Days["Saturday"] = "6";
    Days["Sunday"] = "7";
})(Days || (Days = {}));
var currentDay;
console.log(Days.Wednesday);
