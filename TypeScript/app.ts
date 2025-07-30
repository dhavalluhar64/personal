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

const arr: number[] = [100, 200, 250, 400];

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

// interface Product {
//   name: string;
//   price: number;
//   stock: number;
// }

// const inventry: Product[] = [
//   { name: "iphone 15", price: 799, stock: 50 },
//   { name: "MacBook Air", price: 80000, stock: 20 },
// ];

// const lowStock = inventry.filter((pro) => pro.stock < 30);

// console.log("Low Stock", lowStock);

// const updateInvetory = inventry.map((item) => {
//   return { ...item, stock: item.stock - 10 };
// });

// console.log("Update Invetory-->", updateInvetory);

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

// const data : string = "dhaval"

// console.log("Data--->",data)

//  Tuples

//--> tuples check the array inisde value check

// -> syntext : - let arr : [string,number] = ["typescript",5.8]

// EX :-  const Tuples: [string, number, boolean] = ["type", 5, true];

// (4) Enums(enumerations)

//--> fixed set of values i wan't, like statuses, roles, ya categories.

// -> syntext :- enum UserRole {Admin ,Ediotor,Viewer}

// ex :-

// enum UserRole {
//   Admin = "admin",
//   crew = "crew",
//   service = "service",
// }

// function UserLogin(login: UserRole) {
//   if (login === UserRole.Admin) {
//     console.log("Admin Login Succesfully");
//   } else {
//     console.log("login field");
//   }
// }

//  UserLogin(UserRole.Admin)

// Scenario: E-Commerce Order Management System

// enums.ts
// enum OrderStatus {
//   Placed = "PLACED",
//   Processing = "PROCESSING",
//   Shipped = "SHIPPED",
//   Delivered = "DELIVERED",
//   Cancelled = "CANCELLED",
// }

// enum UserRole {
//   Admin = "ADMIN",
//   Customer = "CUSTOMER",
//   Support = "SUPPORT",
// }

// enum PaymentStatus {
//   Pending = "PENDING",
//   Completed = "COMPLETED",
//   Failed = "FAILED",
//   Refunded = "REFUNDED",
// }

// // types.ts
// interface Order {
//   id: string;
//   status: OrderStatus;
//   userId: string;
//   paymentStatus: PaymentStatus;
// }

// interface User {
//   id: string;
//   role: UserRole;
//   name: string;
// }

// // order-service.ts
// class OrderService {
//   private orders: Map<string, Order> = new Map();

//   createOrder(user: User, orderId: string): Order {
//     if (user.role !== UserRole.Customer) {
//       throw new Error(`Only ${UserRole.Customer} can place orders`);
//     }

//     const order: Order = {
//       id: orderId,
//       status: OrderStatus.Placed,
//       userId: user.id,
//       paymentStatus: PaymentStatus.Pending,
//     };

//     this.orders.set(orderId, order);
//     this.logAction(orderId, `Order created by ${user.name} (${user.role})`);
//     return order;
//   }

//   updateOrderStatus(
//     orderId: string,
//     newStatus: OrderStatus,
//     user: User
//   ): Order {
//     if (user.role !== UserRole.Admin && user.role !== UserRole.Support) {
//       throw new Error(
//         `Only ${UserRole.Admin} or ${UserRole.Support} can update order status`
//       );
//     }

//     const order = this.orders.get(orderId);
//     if (!order) {
//       throw new Error(`Order ${orderId} not found`);
//     }

//     const validTransitions: Record<OrderStatus, OrderStatus[]> = {
//       [OrderStatus.Placed]: [OrderStatus.Processing, OrderStatus.Cancelled],
//       [OrderStatus.Processing]: [OrderStatus.Shipped, OrderStatus.Cancelled],
//       [OrderStatus.Shipped]: [OrderStatus.Delivered],
//       [OrderStatus.Delivered]: [],
//       [OrderStatus.Cancelled]: [],
//     };

//     if (!validTransitions[order.status].includes(newStatus)) {
//       throw new Error(
//         `Invalid transition from ${order.status} to ${newStatus}`
//       );
//     }

//     order.status = newStatus;
//     this.logAction(
//       orderId,
//       `Status changed to ${order.status} by ${user.name} (${user.role})`
//     );
//     return order;
//   }

//   private logAction(orderId: string, message: string): void {
//     console.log(`[${new Date().toISOString()}] Order ${orderId}: ${message}`);
//   }
// }

// // main.ts
// function CustomerData() {
//   const orderService = new OrderService();

//   const customer: User = {
//     id: "U001",
//     role: UserRole.Customer,
//     name: "John",
//   };

//   const admin: User = {
//     id: "U002",
//     role: UserRole.Admin,
//     name: "Priya", // Changed for clarity
//   };

//   try {
//     const order = orderService.createOrder(customer, "ORD001");
//     console.log(`Order created: ${JSON.stringify(order)}`);

//     orderService.updateOrderStatus("ORD001", OrderStatus.Processing, admin);
//     console.log(`Order updated: ${JSON.stringify(order)}`);

//     orderService.createOrder(admin, "ORD002"); // Should throw error
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// CustomerData();

// Ex :

// enum StatusCode {
//   ABANDONED = "Abandoned status code 500",
//   NOTFOUND = "not found status code 404",
// }

// console.log("StatusCode--->", StatusCode.ABANDONED);

// (5)  Any, Unknown , Void , NUll ,Undefined , Never

// (1) Any by defult set

// let a;

// a = 12;
// a = "string";

// console.log("Acmascript-->", a);

// (2) Unknown

// --> Whenever you have data whose type is not previously confirmed (API response, user input,logs), use unknown, so that you cant access anything without type-checking, and the code remains secure and predictable.

// The mainly use of Unknown

// (1) API responses

// (2) Event handling

// (3) Error boundaries

// (4) Reducers/context

// (5) Utility libs

// let a: unknown;

// a = 12;
// a = "string";

// if (typeof a === "string") {
//   a.toUpperCase();
// }

// (3) Void

// ---> This function will not return any value

// function consoleLOg(best : string) : void {

//     console.log(`TS is ${best} typeSefty language`)
// }

// consoleLOg("best")

// function logOrderEvent(orderId: string, message: string): void {
//   console.log(`[${new Date().toISOString()}] Order ${orderId} : ${message}`);
// }

// logOrderEvent("BS002", "your items is placed");

// // (3) NULL

// let a: string | null = null;

// if (a === null) {
//   console.log("A is null");
// } else {
//   console.log("a has a value", a);
// }

// (4) never

// ---> When a function or expression will never return, it is used for type-safe error handling, exhaustive checking, and dead-code analysis. It ensures that the code remains safe in the future and does not fail in any unexpected condition.

// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError("Error 404");

// function keepRunning(): never {
//   while (true) {}
// }

// keepRunning();

// console.log("helloo");
