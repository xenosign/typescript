var str = "Hello, Typescript!";
var num = 38;
var bool = false;
// 가능은 하지만 권장하지 않는 타입들
// undifined 만 할당 가능
var un = undefined;
// null
var nu = null;
// unkowon
var idontknow = "?";
// any
var comeon = {
    name: 123,
    age: 13
};
var Arr = [1, 2, 3];
var arr2 = ["a", "b", "c"];
var obj = {};
var obj2 = {
    name: "LHS",
    age: 38
};
var obj3 = {
    name: "Choco",
    age: 12,
    ok: false
};
// Optional Param
function optionalAdd(a, b, c) {
    return a + b + c;
}
// console.log(optionalAdd(1, 2));
function optionalAdd2(a, b, c) {
    var sum = 0;
    if (c) {
        sum = a + b + c;
    }
    else {
        sum = a + b;
    }
    return sum;
}
//console.log(optionalAdd2(1, 2));
// defalut Param
function defaultFunc(name) {
    if (name === void 0) { name = "LHS"; }
    console.log(name);
}
//console.log(defaultFunc());
// 함수 선언
var addFunc = function add(a, b) {
    return a + b;
};
var add2 = function add2(a, b) {
    return "str";
};
var testVariable;
testVariable = add2;
console.log("Type of without type declaration: ", typeof addFunc);
console.log("Type of with type declaration: ", typeof add2);
function voidFunc() {
    console.log("!!");
    return undefined;
}
console.log(voidFunc());
voidFunc();
function anyFunc() {
    console.log("ANY");
    var any = 1;
    console.log(typeof any);
}
console.log(anyFunc());
function restFunc(str1, str2) {
    var restStr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restStr[_i - 2] = arguments[_i];
    }
    console.log(restStr);
    return str1 + str2 + restStr.join("");
}
console.log(restFunc("aa", "bb", "cc", "dd", "ee", "ff"));
function argFunc() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
argFunc("aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa");
