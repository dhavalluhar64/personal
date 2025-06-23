// var a = 12;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function ABC(a : number,b : number){
//   return a + b;
// }
// console.log(ABC(5,5))
// const arr : number[] = [1,2]
//  const multiplication = arr.reduce((a,b) => {
//     return a * b
//  },2)
//  console.log("multiple by two Data--->",multiplication)
// const ListofThePrograming: string[] = [
//   "JAVA",
//   "Node.Js",
//   "Python",
//   ".NET",
//   "C#",
// ];
var arr = [100, 200, 250, 300];
// console.log("ListofThePrograming---->", ListofThePrograming);
// console.log("ListOFTheFirst-NUmber--->",ListofThePrograming[0])
// ListofThePrograming.push("C++")
// console.log("ListofThePrograming--->",ListofThePrograming)
// const dubble = arr.map((mul) => mul * 2);
// console.log("Multiplyby--->2", dubble);
// const filterNumber = arr.filter((num) => num < 250);
// console.log("Under 250--->", filterNumber);
var movieRatings = [
    [4.1, 4.2, 4.3],
    [4.4, 4.5, 5],
]; // 2D array in the TypeScript
var inventry = [
    { name: "iphone 15", price: 799, stock: 50 },
    { name: "MacBook Air", price: 80000, stock: 20 },
];
var lowStock = inventry.filter(function (pro) { return pro.stock < 30; });
console.log("Low Stock", lowStock);
var updateInvetory = inventry.map(function (item) {
    return __assign(__assign({}, item), { stock: item.stock - 10 });
});
console.log("Update Invetory-->", updateInvetory);
// installing
// 1) npm i typescript -g
// 2) typescript config file create Command :- tsc --init
// 3) typesctipt run command :- tsc filename.ts
// 4) Continew run file command :- tsc watch
// Basic Types
// 1) Primitive types (number,string,boolean)
// 2) Arrays
// 3) Tuples
// 4) Ennums
// 5) Any,Unknown,void,Null, Undefined,Never
