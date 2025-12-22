// 1) instalation in ts
// npm i typescript -g

// Configuring tsconfig.json
// --> tsc --init
// compiling Typescript
// --> tsc --watch - continew run
// --> tsc - only single time watch
// tsc app.ts - only file watch

// 2) Introduction to Basic to Types

// Primitive types (number,string,boolean)
// Array
// Tuples
// Enums
// Any, Unknown,Void,null,Undefined,Never

// Primitive and refrence

// --> [],{},() -> reference

// 3) Primitive type

// let num = 123;
// let string = "Dhaval";
// let bool = true

// 4) Arrays
// -> To defind the types of the arrays

// let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Tuples

// To definf the specific string and number and any of the array in the tuple'

// let Tuples : [string,number] = ["HelloTS",123]

// 5) Enums

// -> (Enumeration) -> fixed set of values to defind

// enum StatusCode {
//   SUCCESS = 200,
//   NOT_FOUND = 404,
//   CONFLICT = 409,
//   TOO_MANY_REQUESTS = 429,
//   NETWORK_ERROR = 503,
// }

// function handleRequestCheck(status: number) {
//   switch (status) {
//     case StatusCode.SUCCESS:
//       console.log("Request Sucesssful");
//       break;

//     case StatusCode.NOT_FOUND:
//       console.log("Data not found");
//       break;

//     case StatusCode.CONFLICT:
//       console.log("Conflict Error");
//       break;
//     case StatusCode.TOO_MANY_REQUESTS:
//       console.log("Too many Request");
//       break;

//     case StatusCode.NETWORK_ERROR:
//       console.log("Network Error");
//       break;
//     default:
//       console.log("Unknown status code");
//   }
// }

// handleRequestCheck(503);

// Any,Unknown,Void & More

// let data: unknown;

// data = 12;
// data = "data";

// if (typeof data === "string") {
//   data.toUpperCase();
// }

// console.log("Data--->", data);
