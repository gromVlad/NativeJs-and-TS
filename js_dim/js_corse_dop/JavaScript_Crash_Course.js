//for work js -> node js, ide, prettier
console.log("hello");
//comments -> comments in js

// ____Varibals____//
//varibals -> let const
let age = 25;
console.log(age); //25

const salary = 8000; //8000 -> const not change =
//better use const in app

// ___Data Types___//
//string, number, boolean,undefined,null type,undefined type, bigint type,symbol type -> primitiv

//objects -> not primitiv

const name = "vlad";
const lang = "JS";
const channel = `Code`;
const total = 0;
const PI = 3.14;
const isPrimary = true;
const isNewUser = false;
let result; // undefined
const data = null; // better use null values

const person = {
  first: "vlad",
  last: "bodnar",
  age: 30,
};
person.first; // dot notation

const arr = [1, 3, 7, 4];
arr[0]; //1

//dinamik type js
let a = 10;
a = "vlad";
a = true;

//___Operators___//
let x = 10;
let y = 5;
x + y; 
x * y; 
x - y; 
x / y; 
x % y; 

//operand
x++
y--

x === y // false
x !== y // true
x > y
x >= y

x > 8 && y > 5 // all true then work
x > 8 || y > 5 // or 
!x 

'hello' + 'world'

const isEven = 10 % 2 === 0 ? true : false //ternary operators

// ___Type Conversion____
2 + "23" //"223"
true + "3" //"true3"
"4" - "2" //2
"hel" - "wow" //NaN
"5" - "false" //5
5 + undefined //NaN
Number("5")//5
Number('')//0
parseFloat('3.14')//3.14
String(500)//'500'
String(null)//'null'
(500).toString()//"500"
Boolean(10)//true // null undefined 0 '' NaN -> return false

//___Equality___//
//== ===
let var1 = "test"
let var2 = "test"
var1 == var2 // true
var1 === var2 //true
var1 = "10"
var2 = 10
var1 == var2 // true
var1 === var2 // false
var1 = "false"
var2 = ''
var1 == var2 // true
var1 === var2 // false
var1 = null
var2 = undefined
var1 == var2 // true
var1 === var2 // false

//___Conditional Statement
//if else else if switch
const num = 5
if (num > 0){
  return 'number is positiv'
} else if (num < 0) {
  return "is negativ"
} else{
  return "zero"
}

const color = 'red'
switch (color) {
  case "red":
    return ' color red'
  case "green":
    return ' color green'
  case "blue":
    return ' color blue'
  default:
    break;
}

// __Looping code___//

//for loop
for (let index = 0; index <= 4; index++) {
  "hello " + i
}// hello 1 hello 2 hello 3 hello 4

//while
let i = 1
while (i <= 5) {
  "hello " + i
  i++
}//// hello 1 hello 2 hello 3 hello 4

//do ... while
i = 6
do {
  "hello " + i
  i++
} while (i <= 5)// hello 6 -> run one 

//for
//the same for loop
arr = [1,2,3,4]
for (const num of arr){
  "hello " + num
} //hello 1 hello 2 hello 3 hello 4

//___Functions___//
function name(params1,params2) {
  //code run
}

function greet() {
  return 'Good morning'
}
greet()//'Good morning'
greet()//'Good morning'

function greet(name) {
  return 'Good morning' + name
}
greet('vlad')//'Good morning vlad'

function add(a,b) {
  return a + b
}

const sum = add(5,10)//15

const myFun = () => {
  return "Hello am arrow function"
}
myFun()//"Hello am arrow function"

const myFun2 = (a,b) => a + b
myFun2(3,5)//8

//____Scope____//
//block scope , function scope, global scope
//global scope
const global = 100

////block scope
if (true){
  const name = "join"
  console.log(global)//100
}
console.log(name) //error

//function scope
function nam (){
  const myName = "batman"
}
nam()
console.log(myName) //error



