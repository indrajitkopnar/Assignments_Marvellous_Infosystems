//Assignment2Q2
function Addition(Arr) {
    var Sum = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        Sum = Sum + Arr[Cnt];
    }
    return Sum;
}
var Week = [23, 6, 7, 5];
var Ret = 0;
Ret = Addition(Week);
console.log("Addition is: " + Ret);
