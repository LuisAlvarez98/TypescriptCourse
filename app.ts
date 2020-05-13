/*
    Typescript variables and datatypes lecture
*/

let valueDouble = 8.75;
let valueInt = valueDouble | 0; //8
let roundedInt = (valueDouble + 0.5) | 0; //9

//String to int
let str = "1234";
let i = +str;

let s = "Welcome";
let n = "Luis" + "Alvarez";
let greeting = `${s}, ${n}`;

console.log(greeting);

//Parsing String to Number
let numberString = "123";
console.log(parseInt(numberString));
let floatString = "12.3";
console.log(parseFloat(floatString));

//Check variable data type
let x = 5;
console.log(typeof x);
console.log(x);

//In typescript you can define the type of varialbe
let num: number; // Number datatype
let width: any = 300; // Any datatype

/*
    Typescript Conditional Statements
*/
let p = 15;
if (p % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

switch (p) {
  case 0:
  case 1:
    console.log("0 and 1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("Default");
}
/**
 *  Typescript Loops
 */
//While
let counter: number = 0;
let msg: string;

while (counter < 10) {
  msg = `Count: ${counter}`;
  console.log(msg);
  counter++;
}
//Do while
let c: number = 4;
let fact: number = 1;
do {
  fact *= c;
  c--;
} while (c > 0);
console.log(`${n}! = ${fact}`);

//For loop
for (let v = 0; v < 10; v++) {
  //
}
//For in - properties of object
const workDays = {
  Monday: "1",
  Tuesday: "2",
};
for (const day in workDays) {
  console.log(day);
}
//For of - elements of collection
const wDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (const day of wDays) {
  console.log(day);
}
/**
 *  Typescript arrays
 */
//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let weDays: string[] = ["Monday", "..."];
let mixedArray: any[] = [1, new Date(), "Hello there"];
let matrix: string[][];
//Other ways of init
let arr: number[] = new Array(1, 2, 3, 4, 5);
let arr2: number[] = new Array(10);
// Access arrays with indexes. arr[index]
// i+=1 is faster in JS instead of i++
//Iterating over arrays

for (let len: number = arr.length, i: number = len; i >= 0; i -= 1) {
  console.log(arr[i]);
}
let capitals: string[] = ["Sofia", "London", "Madrid"];

for (const i in capitals) {
  console.log(capitals[i]);
}
//Insert and removing elements
//arr.push(element)
//arr.pop()
//arr.unshift(element) ->inserts new element at the head of the array
//arr.shift() ->  remove element from head
//.isArray -> boolean

/**
 *  Typescript Functions
 */
function printTutorial() {
  console.log("Typescript fundamentals");
}
printTutorial();
// Function with params
function printSign(x: number) {
  if (x > 0) {
    console.log("+");
  } else if (x < 0) {
    console.log("-");
  } else {
    console.log("0");
  }
}
// Object Arguments
function printArguments() {
  let i;
  for (i in arguments) {
    console.log(arguments[i]);
  }
}
//printArguments(1, 2, 3, 4);
