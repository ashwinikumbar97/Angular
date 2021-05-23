//----------class
var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.greet = function () {
        console.log("hello");
    };
    Greet.prototype.hey = function () {
        console.log("heyy");
        console.log(typeof (msg));
    };
    return Greet;
}());
//--------------------function
function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
}
test_param(123, "this is a string");
function function_name() {
    return num;
}
var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
var num = -2;
var result = num > 0 ? "pos" : "neg";
console.log(result);
//var obj = new Greet();
//obj.greet();
//obj.hey();
var str = '1';
var str2 = str; //str is now of type number 
console.log(typeof (str2));
console.log(str2);
var msg = "hello";
var num = 123;
//console.log(msg+num+123)
//----------------switch 
var grade = "A";
switch (grade) {
    case "A": {
        console.log("Excellent");
        break;
    }
    default: {
        console.log("Invalid choice");
        break;
    }
}
//-----------------for loop
var j;
//var n = ["a","b","c"]
var n = [1, 3, 5];
for (j in n) {
    console.log(n[j]);
}
//---------optional parameter
function optional(param, param2) {
    console.log("optional ");
    if (param2 != undefined) {
        console.log("optional not defined");
    }
}
optional(2);
//----------Rest Parameters
function restParam() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i;
    for (i = 0; i < num.length; i++)
        console.log(num[i]);
}
restParam(2, 5, 7, 8); // how much aragument waana to pass can pass
//--------------function default value
function defaultfun(par, par2) {
    if (par === void 0) { par = 0.6; }
    if (par != undefined) {
        console.log("par undefined");
    }
}
defaultfun(1, 3);
var foo = function (x) { return 10 + num; };
var var_name = new Number(1);
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
