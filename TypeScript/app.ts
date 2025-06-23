// var a = 12;

// function ABC(a : number,b : number){

  // return a + b;
//  }

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

const arr: number[] = [100, 200, 250, 300];

// console.log("ListofThePrograming---->", ListofThePrograming);

// console.log("ListOFTheFirst-NUmber--->",ListofThePrograming[0])
// ListofThePrograming.push("C++")
// console.log("ListofThePrograming--->",ListofThePrograming)

// const dubble = arr.map((mul) => mul * 2);

// console.log("Multiplyby--->2", dubble);

// const filterNumber = arr.filter((num) => num < 250);

// console.log("Under 250--->", filterNumber);

let movieRatings: number[][] = [
  [4.1, 4.2, 4.3],
  [4.4, 4.5, 5],
]; // 2D array in the TypeScript

// Example --->  2D array
// 1 2 3 // R-0
// 4 5 6 // R-1
// 7 8 9 // R-2
//c-0,c-1,c-2

// const result = movieRatings[1][1]

// console.log("Result--->",result)

// function getFirtsRatting<T>(arr: T[]): T { // Generic Function
//   return arr[0];
// }

// const FirstMoviewRatiing = getFirtsRatting<number[]>(movieRatings);

// console.log("FirstMoviewRatiing--->", FirstMoviewRatiing);

// Readonly, Tuple, aur Real-World Optimization

// // (1) // Readonly array for search rankings (can't change)
// const searchRankings: readonly number[] = [1, 2, 3];

// // (2) // Tuple for structured data (title, rank)
// const SearchResult: [string, number] = ["TypeScript Tutorial", 1];

// const TotalScore = searchRankings.reduce((a, c) => a + c, 0);

// console.log("TotalScore---->", TotalScore);

// console.log("SearchResult--->", SearchResult);

// searchRankings.push() // only for the read only Data

// console.log("Result--->", searchRankings);

// (3) Array with Interfaces

interface Product {
  name: string;
  price: number;
  stock: number;
}

const inventry: Product[] = [
  { name: "iphone 15", price: 799, stock: 50 },
  { name: "MacBook Air", price: 80000, stock: 20 },
];

const lowStock = inventry.filter((pro) => pro.stock < 30);

console.log("Low Stock", lowStock);

const updateInvetory = inventry.map((item) => {
  return { ...item, stock: item.stock - 10 };
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
