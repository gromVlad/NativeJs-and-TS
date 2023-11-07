//values and varibalse
//varibalse = values
let myName = "vlad";
//naming varibalse camelCase
let myFirstJob = "spesial work";
let mySecondJob = "OTK";
//not use naming start with 122... / PBNV / js symbol - undefined, null, name ... / name-one/
//use naming - > _myname / $secondName / my_name / PI = 3.14 - varibalse then not change

//==============================
//dtat types
console.log(typeof "hello"); //string
console.log(typeof 24); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
//bag in js null is not object
console.log(typeof null); //object
console.log(typeof 23n); //bigint
console.log(typeof Symbol()); //symbol

//==============================
//var,let,const
//change valuse dinamik
let myHome = "st 17";
console.log(myHome); //st 17
myHome = "New York st 23";
console.log(myHome); //New York st 23

//in create global valuses
var myCity = "Minsk";
console.log(myCity); //Minsk

//not create
const myNameFirst = "vlad";
myNameFirst = "victor"; //TypeError: Assignment to constant variable.

//===============================
//basic operators + - / * ** %
let fan = 42 - 35;
console.log(fan); //7
let stringsConcat = "hello" + " " + "World!!";
console.log(stringsConcat); //hello World!!
let x = 5 + 10;
console.log(x); //15
x += 25; //x = x + 25
console.log(x); //40
x++;
console.log(x); //41

//opeartors compare < > <= >= == === !== !=
console.log(24 - 6 > 87 - 70); //true

//=============================
//precedence operators
//operators see in table MDN operators priopity
let a, b;
a = b = 58 - 3 - 7;
//1) right-left -> 48
//2) a = b = 48 (operators = left -right priopit )
console.log(a, b); // 48 48

//============================
/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */
const weightsMark = 78;
const heightMark = 1.69;
const weightsJohn = 95;
const heightJohn = 1.76;
let calcBMI_Mark = weightsMark / heightMark ** 2;
let calcBMI_John = weightsJohn / (heightJohn * heightJohn);
let result = calcBMI_Mark > calcBMI_John;
console.log(result); //false
console.log("Mark " + (result ? "больше" : "меньше") + " John"); //Mark меньше John

//===================================
const myName = "Vlad";
const myJob = "OTK";
const age = 28;
const birthday = 1994;
let result =
  "My name is " +
  myName +
  " ,Im " +
  age +
  " years old " +
  " ,I work is " +
  myJob +
  " ,my birthday " +
  birthday +
  ".";
console.log(result); //My name is Vlad ,Im 28 years old  ,I work is OTK ,my birthday 1994.
// with template literal
let resultTwo = `My name is ${myName} ,Im ${age} years old  ,I work is ${myJob} ,my birthday ${birthday}.`;
console.log(resultTwo); //My name is Vlad ,Im 28 years old  ,I work is OTK ,my birthday 1994.

let info = "Hello \n Hunter \n vs \n Hunter";
console.log(info);
/* 
Hello 
Hunter 
vs 
Hunter 
*/
// with template literal
let infoTwo = `hello
Hunter
vs
Hunter`;
console.log(infoTwo);
/* 
hello
Hunter
vs
Hunter
 */

//==============================
// If else statements
let age = 16;
let truefalse = age >= 18;
if (truefalse) {
  console.log(`You go club`);
} else {
  let howAge = 18 - age;
  console.log(`Not go club, you go ${howAge}`);
} //Not go club, you go 2

let birthday = 1991;
let centery;
if (birthday < 2000) {
  centery = 21;
} else {
  centery = 20;
}
console.log(centery); //21

//===========================
/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement  */

const weightsMark = 78;
const heightMark = 1.69;
const weightsJohn = 95;
const heightJohn = 1.76;
let calcBMI_Mark = weightsMark / heightMark ** 2;
let calcBMI_John = weightsJohn / (heightJohn * heightJohn);
if (calcBMI_Mark > calcBMI_John) {
  console.log(
    `Mark's BMI ${calcBMI_Mark} is higher than John's ${calcBMI_John}!`
  );
} else {
  console.log(
    `John's BMI ${calcBMI_John} is higher than Mark's ${calcBMI_Mark}!`
  );
}
//John's BMI 30.668904958677686 is higher than Mark's 27.309968138370508!

//============================
//Converting type
let age = "28";
console.log(typeof Number(age)); //number
age = 28;
console.log(typeof String(age)); //string
let a = 4 + "8";
console.log(typeof a); //string
console.log(a); //48
let b = "8" - 2;
console.log(typeof b); //number
console.log(b); //6
//bag js
console.log(typeof NaN); //number
//Converting type
let age = "28";
console.log(typeof Number(age)); //number
age = 28;
console.log(typeof String(age)); //string
let a = 4 + "8";
console.log(typeof a); //string
console.log(a); //48
let b = "8" - 2;
console.log(typeof b); //number
console.log(b); //6
//bag js
console.log(typeof NaN); //number

//==========================
//Equality operators
console.log(24 == "24"); //true
console.log(24 === "24"); //false
if (23 !== "23") {
  console.log(`values not Equality`);
} //values not Equality

//=====================+
//Logical operators - || && !
console.log(true && true && false); //false
console.log(true || true || false); //true
console.log(true && true && !false); //true

//======================
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for
that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */
let dolphinsPoints = (97 + 112 + 101) / 3;
let koalasPoints = (109 + 95 + 123) / 3;
if (dolphinsPoints > koalasPoints && dolphinsPoints >= 90) {
  console.log(`win Dolphins score - ${dolphinsPoints}`);
} else if (koalasPoints > dolphinsPoints && koalasPoints >= 90) {
  console.log(`win Koalas score - ${koalasPoints}`);
} else if (
  koalasPoints === dolphinsPoints &&
  dolphinsPoints >= 90 &&
  koalasPoints >= 90
) {
  console.log(`not win `);
} else {
  console.log(`the END...))`);
}
//win Koalas score - 109

//=================================
//switch statements
let numberWeekDay = "Three";
switch (numberWeekDay) {
  case "One":
    console.log(`One day week`);
    break;
  case "Two":
    console.log(`Two day week`);
    break;
  case "Three":
  case "Four":
    console.log(`Three and Four day week`);
    break;
  case "Five":
    console.log(`Five day week`);
    break;
  case "Six":
    console.log(`Six day week`);
    break;
  case "Seven":
    console.log(`Seven day week`);
    break;
  default:
    console.log(`Not valid number`);
    break;
} //Three and Four day week
//in if statementsif (numberWeekDay === "One"){
console.log(`One day week`);
if (numberWeekDay === "Two") {
  console.log(`Two day week`);
} else if (numberWeekDay === "Three" || numberWeekDay === "Four") {
  console.log(`Three and Four day week`);
} else if (numberWeekDay === "Five") {
  console.log(`Five day week`);
} else if (numberWeekDay === "Six") {
  console.log(`Six day week`);
} else if (numberWeekDay === "Seven") {
  console.log(`Seven day week`);
} else {
  console.log(`Not valid number`);
} //Three and Four day week

//===============================
//expression and statements
//expression
3 + 4;
1984;
true || false;
//statements
if (2 > 4) {
  console.log(true);
} else {
  console.log(false);
}
let key = 4;
switch (key) {
  case 4:
    console.log(`four`);
    break;
  case 5:
    console.log(`five`);
    break;
  default:
    console.log(`not valid`);
    break;
}

//=================================
//ternary operators
let myAge = 28 >= 18 ? "adult" : "not adult";
console.log(myAge); //adult
console.log(`You ${28 >= 18 ? "adult" : "not adult"} man`); //You adult man

//==================================
/*
Coding Challenge #4Steven wants to build a very simple tip calculator for whenever he goes eating in
a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50
and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip'
for
this. It's not allowed to use an if/else statement � (If it's easier for you,
you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the
final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 */
const bill = 275;
const tips = bill <= 300 && bill >= 40 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tips}, and the total value
${bill + tips}`); //The bill was 275, the tip was 41.25, and the total value
316.25;
//Js поддерживает старые релизы чтобы да же более старые сайты
//оставались работоспособными через долгое время

//================================
//Fundamental JS(part 2)
//use strict mode - show mistakes with naming varibalse,declaration varibalse ...
("use strict");
let hasDriverPassport = false;
let progrming = true;
if (progrming) hasDriverPassport = true;
if (hasDriverPassport) console.log(`you get driver passport`); //you get driver
passport;

//===============================
//function
function inConsole() {
  console.log(`hello world`);
}
inConsole(); //hello world
//function with parametrs
function juice(apple, orange) {
  console.log(apple, orange); //4 6
  let juices = `Add ${apple} apple and ${orange} orange`;
  return juices;
}
let result = juice(4, 6);
console.log(result); //Add 4 apple and 6 oranges

//Function declaration –можно вызывать в независимости от того гдеона находиться, function expression только после объявления.

//function declaration
function myName(name) {
  return console.log(`your name ${name}`);
}
myName(`Vlad`); //your name Vlad
//function expression
let myNaming = function (name) {
  return console.log(`your name ${name}`);
};
myNaming(`John`); //your name John

//================================
//arrow function
let calcAge = (age) => console.log(65 - age);
calcAge(28); //37
let calcmyAge = (myName, age) => {
  let calc = 65 - age;
  return console.log(`${myName} - end of age ${calc}`);
};
calcmyAge("Vlad", 28); //Vlad - end of age 37

//===============================
//function call function
function cutFruit(fruit) {
  return fruit * 4;
}
function juiceFun(apple, orange) {
  let appleCut = cutFruit(apple);
  let orangeCut = cutFruit(orange);
  return console.log(`Fruit - ${appleCut} apple and ${orangeCut} orange`);
}
juiceFun(3, 5); //Fruit - 12 apple and 20 orange

//===============================
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.Each team competes 3 times, and then the average of the 3 scores is calculated
(so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores */
//
let average = (a, b, c) => (a + b + c) / 3;
let winTeam = (teamOne, teamTwo) => {
  if (teamOne >= teamTwo * 2) {
    console.log(`TeamOne win (${teamOne} > ${teamTwo})`);
  } else if (teamTwo >= teamOne * 2) {
    console.log(`TeamTwo win (${teamOne} < ${teamTwo})`);
  } else {
    console.log(`Nothing win ....`);
  }
};
//check 1
let dolphinsTeam = average(44, 23, 71);
let koalasTeam = average(65, 54, 49);
winTeam(dolphinsTeam, koalasTeam); //Nothing win ....
//check 2
dolphinsTeam = average(85, 54, 41);
koalasTeam = average(23, 34, 27);
winTeam(dolphinsTeam, koalasTeam); //TeamOne win (60 > 28)

//==============================
//Arrays
let newArr = new Array(1, "hello", 4);
console.log(newArr); //[ 1, 'hello', 4 ]
let arr = [1, true, null, 25, "hello"];
console.log(arr);
arr[1] = 29;
console.log(arr); //[ 1, 29, null, 25, 'hello' ]
arr[5] = "end";
console.log(arr); //[ 1, 29, null, 25, 'hello', 'end' ]
console.log(arr.length); //6
//last element arr
console.log(arr[arr.length - 1]); //6
let arrFirst = [1, 2, 4, 6];
function arrSecondary(num) {
  return num * 6;
}
let secondArr = [
  arrSecondary(arrFirst[0]),
  arrSecondary(arrFirst[2]),
  arrSecondary(arrFirst[arrFirst.length - 1]),
];
console.log(secondArr); //[ 6, 24, 36 ]

//================================
//Arrays basic methods
let arr = ["abc", true, 23];
//add element
arr.push(`end`);
arr.unshift("start");
console.log(arr); //[ 'start', 'abc', true, 23, 'end' ]
//del element
let delEnd = arr.pop();
console.log(delEnd); //end
arr.shift();
console.log(arr); //[ 'abc', true, 23 ]
//index and includes
console.log(arr.indexOf("abc")); //0
console.log(arr.indexOf(true)); //1
console.log(arr.indexOf("end")); //-1 / not element
console.log(arr.includes(true)); //true
console.log(arr.includes("start")); //false / not element
if (arr.includes("abc")) {
  console.log(`Arr includes element abc`);
} //Arr includes element abc

//===============================
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip
15% of
the bill if the bill value is between 50 and 300, and if the value is different,
the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test databelow
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as
array
values (so don't store the tip values in separate variables first, but right in
the new
array) */
let calcTips = (bills) => {
  return bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
};
let bill = [125, 555, 44];
let tips = [calcTips(bill[0]), calcTips(bill[1]), calcTips(bill[2])];
let total = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]];
console.log(bill); //[ 125, 555, 44 ]
console.log(tips); //[ 18.75, 111, 8.8 ]
console.log(total); //[ 143.75, 666, 52.8 ]

//===============================
//Object
let newObject = {
  naming: "Vlad",
  job: "engener",
  age: 28,
  city: "Minsk",
  country: "Belarus",
};
console.log(newObject);
/*
{
naming: 'Vlad',
job: 'engener',
age: 28,
city: 'Minsk',
country: 'Belarus'
} */

//===============================
//dot and bracket notation
let objectOne = {
  firstName: "Vlad",
  secondName: "Bodnar",
  job: "worker",
  age: 28,
  frends: ["Ana", "Egor", "John", "Roma"],
};
console.log(objectOne.job); //worker
console.log(objectOne["age"]); //28objectOne['location'] = 'belarus'
objectOne.email = "@my_email_ru";
console.log(objectOne);
/*
{
firstName: 'Vlad',
secondName: 'Bodnar',
job: 'worker',
age: 28,
frends: [ 'Ana', 'Egor', 'John', 'Roma' ],
location: 'belarus',
email: '@my_email_ru'
} */
let nameLoc = "location";
console.log(objectOne[nameLoc]); //belarus
console.log(`My name is ${objectOne.firstName}, I live this
${objectOne.location}, i have ${
  objectOne.frends.length
} friends, my best friends
thid ${objectOne.frends[objectOne.frends.length - 1]}`); //My name is Vlad, I live this belarus, i have 4 friends, my best friends thid Roma

//============================
//Object methods
let objectOne = {
  firstName: "Vlad",
  secondName: "Bodnar",
  job: "worker",
  frends: ["Ana", "Egor", "John", "Roma"],
  birthday: 1994,
  hasdriverlicence: true,
  calcAge: function () {
    this.age = 2023 - this.birthday;
    return this.age;
  },
  getstrings: function () {
    return console.log(`My name is ${this.firstName} ${this.secondName}, me
${this.calcAge()} age, i ${this.hasdriverlicence ? "have" : "not have"} driver
licence`);
  },
};
console.log(objectOne.calcAge()); //29
objectOne.getstrings(); //My name is Vlad Bodnar, me 29 age, i have driver licence
console.log(objectOne);
/* {
firstName: 'Vlad',
secondName: 'Bodnar',
job: 'worker',
frends: [ 'Ana', 'Egor', 'John', 'Roma' ],
birthday: 1994,
hasdriverlicence: true,
calcAge: [Function: calcAge],
getstrings: [Function: getstrings],age: 29
} */

//====================================
/* Let's go back to Mark and John comparing their BMIs! This time, let's use
objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass,
and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m
tall. */
const mark = {
  naming: "Mark",
  weights: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weights / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  naming: "John",
  weights: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weights / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark.calcBMI()); //27.309968138370508
console.log(john.calcBMI()); //24.194608809993426
if (mark.bmi > john.bmi) {
  console.log(`${mark.naming} weights then ${john.naming}`);
} else {
  console.log(`${john.naming} weights then ${mark.naming}`);
} //Mark weights then John

//===================================
//for loop
for (let rep = 0; rep < 5; rep++) {
  console.log(`You repeat ${rep}`);
}
/*
You repeat 0
You repeat 1
You repeat 2
You repeat 3
You repeat 4 */

//=================================
//Loopings arrays
const arr = [true, "abc", "hello", 87, null, {}, []];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  //newArr[i] = typeof arr[i]
  newArr.push(typeof arr[i]);
}
console.log(newArr);
/*
[
'boolean', 'string',
'string', 'number',
'object', 'object',
'object'
] */
//continue loop
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") continue;
  console.log(arr[i]);
} //abc / hello
//continue break
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") break;
  console.log(arr[i]);
} //abc / hello / true / abc / hello

//==================================
//Looping backwards and loop in loop
//backwards
let arr = [1, 2, 3, 4, 5, 6];
let backArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  backArr.push(arr[i]);
}
console.log(backArr); //[ 6, 5, 4, 3, 2, 1 ]
//loop in loopfor (let ex = 1; ex < 4 ;ex++){
console.log(`---------ex number ${ex}`);
for (let rep = 1; rep < 5; rep++) {
  console.log(`Ex ${ex} repetition number No ${rep}`);
}

/*
---------ex number 1
Ex 1 repetition number No 1
Ex 1 repetition number No 2
Ex 1 repetition number No 3
Ex 1 repetition number No 4
---------ex number 2
Ex 2 repetition number No 1
Ex 2 repetition number No 2
Ex 2 repetition number No 3
Ex 2 repetition number No 4
---------ex number 3
Ex 3 repetition number No 1
Ex 3 repetition number No 2
Ex 3 repetition number No 3
Ex 3 repetition number No 4 */

//===========================
//while loop
let rep = 0;
while (rep < 5) {
  console.log(`repeat ${rep}`);
  rep++;
}
/*
repeat 0
repeat 1
repeat 2
repeat 3
repeat 4 */
let randomNumber = Math.trunc(Math.random() * 6) + 1;
console.log(randomNumber); //5
while (randomNumber !== 6) {
  console.log(`number continue -> ${randomNumber}`);
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  if (randomNumber === 6) console.log(`The End`);
}
/*
number continue -> 2
number continue -> 2
The End */

//============================
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a
for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how
to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array */
//
let calcTips = (bills) => {
  return bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
};
let bill = [22, 295, 176, 440, 37];
let tips = [];
let total = [];
for (let i = 0; i < bill.length; i++) {
  tips.push(calcTips(bill[i]));
  total.push(tips[i] + bill[i]);
}
console.log(bill); //[ 22, 295, 176, 440, 37 ]
console.log(tips); //[ 4.4, 44.25, 26.4, 88, 7.4 ]
console.log(total); //[ 26.4, 339.25, 202.4, 528, 44.4 ]
//
function calcSumAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcSumAverage(bill)); //194console.log(calcSumAverage(tips))//34.09
console.log(calcSumAverage(total)); //228.09

//============================
//Develop skills and setup vs code, debugging
/* - Поставить цели конкретные
- Не копировать код а действительно понимать его, не двигаться
дальше пока не поймешь
- Новые знания сразу использовать для закрепления
- Кодировать дополнительно вне курса для улучшения скилла
- Писать как можно больше кода не задумываясь пока о его чистоте
и качеству
- Вы никогда не будите знать все- Не учиться в изоляции
- Не один курс не сделает тебя программистом , надо делать
самостоятельные проекты
Решение проблем в програмировании :
-выстроить логическую цепочку проблем для решения задач, не
прыгать от одной задачи к другой;
- Первый шаг к решению задать себе вопрос хороши ли я понимаю
саму проблему, хорошо ли понимаю общую картину этой
проблемы на 100%
-Второй шаг разбить большую задачу на под задачу
-Третий шаг начать реализовывать маленькие подзадачи
самостоятельно, если не можешь решить собственными силами
пользоваться MDN, stack overflow, Google.
-Четвертый шаг собрать все воедино (все маленькие подзадачи
сделанные) и попробовать написать псевдо код имитируя рабочий
код. Далее решить уже перенести на рабочий код. */

//You resolve problem - in cut on sub problem
//How ignore mictare?
//How find max value in arr?
//How find min value in arr?
//Return new values different max and min value
function calcTemp(a1, a2) {
  const arrConcat = a1.concat(a2);
  console.log(arrConcat); //[ 17, 21, 23, 'error', 12, 5, -5, 0, 4 ]
  let max = arrConcat[0];
  let min = arrConcat[0];
  for (let i = 0; i < arrConcat.length; i++) {
    if (typeof arrConcat[i] !== "number") continue;
    if (max < arrConcat[i]) max = arrConcat[i];
    if (min > arrConcat[i]) min = arrConcat[i];
  }
  console.log(max); //23
  console.log(min); //-5
  return console.log(max - min); //28}
  calcTemp([17, 21, 23, "error"], [12, 5, -5, 0, 4]);
}

//Процесс debugging : сначала идентифицировать ошибку -> далеенайти ее в коде -> устранить ее -> и обратно протестировать процесс.

//use console
console.log();
console.warn(); //console then warn
console.error(); //console then error
//show how table object
console.table();
//includes debugger in code
debugger;

/* Работа с отладчиком ошибок
Войти в отладчик ошибок -> sourse -> войти в свой код -> дальше
поставить чек поинт (в виде точки красной) -> далее перемещаемся
по панели управления справа ( пауза , далее) – > также в меню
показывают изменения самого кода при переходе от одной точки к
другой (scope block).Также при наведении на какой-нибудь элемент
мы видим изменения значений и их результат. */

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in
1
days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/
const dataOne = [17, 21, 23];
const dataTwo = [12, 5, -5, 0, 4];
function convertingArr(arr) {
  sum = " ... ";
  for (let i = 0; i < arr.length; i++) {
    sum += `${arr[i]}oC in ${i + 1} days ... `;
  }
  console.log(sum);
}
convertingArr(dataOne); //... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days...
convertingArr(dataTwo); //... 12oC in 1 days ... 5oC in 2 days ... -5oC in 3 days... 0oC in 4 days ... 4oC in 5 days ...

//=========================
//DOM
//includes dom - add element
console.log(document.querySelector(".message").textContent); //Start guessing...
//Dom – является точкой соединения между html, css и js.Dom не является частью js а является просто спецификацией ecma.Он является часть web APIs библиотекой которой по сути написаны на базе js.

//===================================
//Project No1
{
  /* < input type = "number" class="guess" />
<p class="message">Start guessing...</p> */
}

//change content element in html
const a = (document.querySelector(".message").textContent = 20);
console.log(a); //20
//change and work with input element
const b = (document.querySelector(".guess").value = 35); //35console.log(b)

//-------------------------
{
  /* <button class="btn again">Again!</button>
<p class="message">Start guessing...</p>
<input type="number" class="guess" />
//Add Eventlistener => .eventListener in btn -> on click -> eventHendler { runcode } */
}

document.querySelector(".check").addEventListener("click", function () {
  //add value in input
  const guess = document.querySelector(".guess").value;
  console.log(guess); //0
  const message = document.querySelector(".message");
  //if input value false get message - Not valid input value
  if (!guess) {
    message.textContent = "Not valid input value";
  }
});
//Not valid input value

//------------------------
//Logic game
{
  /* < div class="number" >?</ >
<input type="number" class="guess" />
<p class="label-score">� Score: <span class="score">20</span></p>
<p class="label-highscore">
� Highscore: <span class="highscore">0</span>
</p>
<button class="btn check">Check!</button> */
}

//You logic game
//score
let score = 20;
//highscore
let highscore = 0;
//secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//show secret number
document.querySelector(".number").textContent = secretNumber;
//Add Eventlistener => .eventListener in btn -> on click -> eventHendler { runcode }
document.querySelector(".check").addEventListener("click", function () {
  //add value in input
  const guess = document.querySelector(".guess").value;
  const message = document.querySelector(".message");
  //
  //if input value false get message - Not valid input value
  if (!guess) {
    message.textContent = "Not valid input value";
    //next logic else win
  } else if (+guess === secretNumber) {
    message.textContent = "You win";
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
    //else value > secretNumber
  } else if (+guess > secretNumber) {
    if (score > 1) {
      message.textContent = "input high value";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lose";
      document.querySelector(".score").textContent = 0;
    }
    //else value < secretNumber
  } else if (+guess < secretNumber) {
    if (score > 1) {
      message.textContent = "input low value";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lose";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//manipulation in css
document.querySelector("body").style.backgroundColor = "#f12704";
document.querySelector("main").style.color = "#070707";

/* Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess inputfields
4. Also restore the original background color (#222) */
//Add eventListener reset
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("main").style.color = "#eee";
});

//includes highscore
if (score > highscore) {
  highscore = score;
}
document.querySelector(".highscore").textContent = highscore;

//all code games with refactoring
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//includes fun with message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    // document.query elector('.message').textContent = 'No number!';
    displayMessage(" No number!");
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '� Correct Number!';
    displayMessage("� Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '� Too high!' : '� Too low!';
      displayMessage(guess > secretNumber ? "� Too high!" : "� Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '� You lost the game!';
      displayMessage("� You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//================================
//Project No2
{
  /* <button class="show-modal">Show modal 1</button>
<button class="show-modal">Show modal 2</button>
<button class="show-modal">Show modal 3</button>
<div class="modal hidden">
<button class="close-modal">&times;</button>
<h1>I'm a modal window �</h1>
<p>
Lorem ...
</p>
</div>
<div class="overlay hidden"></div> */
}

//project Two
("use strict");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
//choose all nodelist
const btnShow = document.querySelectorAll(".show-modal");
console.log(btnShow);

/*
NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
0: button.show-modal
1: button.show-modal
2: button.show-modal
length: 3
[[Prototype]]: NodeList */
//get one with NodeList
for (let i = 0; i < btnShow.length; i++) {
  console.log(btnShow[i].textContent);
} //Show modal 1 / Show modal 2 / Show modal 3

//----------------------
//function work on click button
const openModalInWindow = function () {
  //remove class in modal and overlay
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//call function on click show modal window
for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener("click", openModalInWindow);
}
//function work on click overlay and btn close
const closeModalInWindow = function () {
  //add class in modal and overlay
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//close on click button
btnClose.addEventListener("click", closeModalInWindow);
//close on click overlay
overlay.addEventListener("click", closeModalInWindow);

//--------------------------
//keyboard click event
//keydown, keyup, keypress
document.addEventListener("keydown", function (e) {
  //enter keyboard
  console.log(e); //KeyboardEvent {isTrusted: true, key: 'Enter', code: 'Enter',location: 0, ctrlKey: false, ...} / KeyboardEvent {isTrusted: true, key: 'Escape',code: 'Escape', location: 0, ctrlKey: false, ...} ...
  console.log(e.key); //Enter / Escape//if enter -> "Escape" keyboard and modal not class = "hidden"
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalInWindow();
  }
});

//===================================
//Project No3
/* <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="stylesheet" href="style.css" />
<title>Pig Game</title>
</head>
<body>
<main>
<section class="player player--0 player--active">
<h2 class="name" id="name--0">Player 1</h2>
<p class="score" id="score--0">43</p>
<div class="current">
<p class="current-label">Current</p>
<p class="current-score" id="current--0">0</p>
</div>
</section>
<section class="player player--1">
<h2 class="name" id="name--1">Player 2</h2>
<p class="score" id="score--1">24</p>
<div class="current">
<p class="current-label">Current</p>
<p class="current-score" id="current--1">0</p>
</div>
</section><img src="dice-5.png" alt="Playing dice" class="dice" />
<button class="btn btn--new">� New game</button>
<button class="btn btn--roll">� Roll dice</button>
<button class="btn btn--hold">� Hold</button>
</main>
<script src="script.js"></script>
</body>
</html> */

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let scores, currentScore, activePlayer, playing;
// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);

//=============================
//How JavaScript Works Behind the Scenes
/* S является высокоуровневым языком который в отличии от
низкоуровневых не управляет памятью компьютера и его ресурсами, но
минус в том что отнимает больше ресурсов при совей работе в отличие от
низкоуровневых языков программирование как C и т.д
JS обладает автоматическим уборщиком мусора , удаляет
неиспользованные объекты в памяти для лучшего быстродействия системы
при работе языка.
JS является интерпретируемым и компилируемым кодом т.к. язык ввода
программиста компилируется в машинный код.
JS является мултипарадигменным языком программирование – может быть
как процедурным , объектно ориентированным так и функциональным
языком в зависимости от необходимости (универсальный язык).JS обладает прототипным наследованием используемым в объектно
ориентированном подходе, за основу взято что все что мы видим в js это
объекты которые вызываются с помощью методов , а используем мы их с
помощью прототипного наследования.
JS обладает первым классом функциональности что позволяет вызвать одни
функции с помощью других функции и т.д.
JS является динамическим языком что позволяет менять все на лету но это
является и проблемой в некоторых случаях, некоторые предпочитают
использовать typescript из-за этого.
JS работает по модели параллелизма с неблокируемым планировщиком
событий(event loop).Позволяет параллельно работать разным функциям и
методом параллельно не мешая и не прерывая их. 

Работа JS основана на движке у каждого браузера свой движок. Например
движок Google и node это движок V8 engine.
Внутри работа JS делиться на две части основной стек вызова (call stack) и
куча(head).Стек состоит из контекста выполнения ,куча состоит из
неструктурированных объектов в памяти
При компиляции код преобразуется в машинный код храниться в
портативном файле который потом может выполниться на компьютере. При
интерпретации код сразу одновременно преобразуется и
читается(интерпретация работает медленно по сравнению с
компиляцией).Поэтому сейчас JS использует микс с интерпретацией и
компиляцией для быстроты действия. который называться составной
компиляцией, в ней заранее выполниться компиляция но нет портативного
файла.
Первый этап parsing кода то есть его чтения, первоначально абстрактно
читает код , делит его на куски помощью элемента AST. Далее хранит все в
дереве, также сразу проверяет все на ошибки, далее это дерево будет нужно
чтобы сгенерировать машинный код. Далее сгенерированный код
преобразуется в машинный код. Машинный код выполняется сразу же
.исполнения происходит в стеке вызова. С начала мы получаем не
оптимизируемый код далее фоновом режиме этот код оптимизируется
(множество раз происходит компиляция и оптимизация).Одного движка недостаточно для работы требуется также доступ веб API по
сути которые являются функциональными провайдерами к двигателю
JS.Например при работе какой либо функции и т.д. помещается в очередь
обратного вызова, далее когда стек пуст он передаться стек вызова далее
попадая в event loop.
__________________________
Глобальный контекст выполнения служит для кода верхнего уровня
(глобальные переменные и т.д.).Глобальный контекст хранит в себе все
методы, функции и аргументы.JS всегда работают в контексте выполнения.
Весь контекст выполнения формирует стек вызова.
Первая что есть в контексте выполнения это переменная среда (variable
environment) – хранит в себе все переменные , функции, объекты. Далее в
себе функции содержит scope chain. Далее ключевое слова (this
keyword).Важно помнить что arrow функции не имеют this keyword., они
используют эти слова от родителей.

Стек вызова отслеживает где мы находимся отслеживая все в настоящем
времени, когда один контекст выполниться он удалиться из стека вызова,далее и далее в зависемости от цепочки вызова той или иной функции ,
переменной и т.д. когда все выполниться останется только глобальный стэк
который будет работать до закрытие страницы или обновления и т.д.
______________________
Scope concept – задает вопрос где живут переменные .Зависит от того где
мы пишем переменные от родительского блока.
Scope –окружающая среда которая в которой определена переменная.
Scope variable – область кода где можем получить определенную
переменную.
Global Scope они доступны по всюду , во всех фикциях и блоках.
Function scope – каждая функция создает свой локальный scope,за
пределами не доступны
Block scope – между операторами скобки создаться свой scope, за
пределами не доступны.

Каждая переменная доступ к родительским переменным
Порядок в котором вызывается функция вообще не влияет на цепь
областей видимости. Не забывать что только let и сonst являются
блоками.
*/

//===========================
/* Scope работает изнутри снаружи, то есть дочерние элемент ы
имеют доступ к родителям но родительский элемент не имеет
доступ к дочернему scope(как >).Поэтому находясь в глобальном
scope при обращении к переменным дочерним scope мы получаем
ошибку и т.д.Все правило работают в строгом режиме.Также
нельзя забывать что var переменная доступна везде вне
зависимости от расположении в scope. */
//practice scope
//scope work with {global scope} <- {function scope <- {if scope ...}}

//Global scope
let namesMy = "Vlad";
console.log(namesMy); //Vlad
//scope function
function hello() {
  let variableHello = "hello";
  console.log(variableHello);
  console.log(namesMy); //Vlad - use variable in parents scope is work
  //if scope
  if (variableHello) {
    let variableHello = "goodbye";
    console.log(variableHello); //goodbye <- use variables in if scope / not usevariabels with fun hello()
    namesMy = "Vitez"; // change varibalse in global scope / not create new
    console.log(namesMy); //Vitez
  }
}
hello(); //hello
console.log(variableHello); //error -> variableHello is not defined ; not work

//==============================
/* Variable environment поднимает некоторые функции и т.д. вверх
по scope, поднимается за чет hosting .Например function declaration
может использовать перед его созданием. Var также поднимается
но со значением undefined(что усложняет поиск ошибок, поэтому
ввели новые переменные с другими значениями). Let и const
фактический не подниматься если их вызывать до их объявление
будет ошибка так как а они попадают в TDZ (temporal Dead Zone –
будет ошибка в отличии от использование var).Arrow function ведут
себя так чем были объявлены , то есть он перенимает суть подъема
самой переменной , например если объявляли let или const то до
объявление вызвать не можем (TDZ), если var то перенимаем его
поведения со значением подъема undefined. */
//Variable environment practice
console.log(a); //undefined - var
console.log(b); //error - Cannot access 'b' before initialization (TDZ)
console.log(c); //error - Cannot access 'c' before initialization (TDZ)
var a = "abc";
let b = "hello";
const c = "last"; //function
console.log(functionDeclaration(2, 5)); //7
console.log(functionExpression(2, 5)); //error -> Cannot access'functionExpression' before initialization
console.log(functionArrow(2, 5)); //error -> Cannot access 'functionArrow' before
initialization;
console.log(functionArrowVar(2, 5)); //error -> functionArrowVar is not a function
functionArrowVar = undefined(2, 5);
console.log(functionArrowVar); //undefined
function functionDeclaration(a, b) {
  return a + b;
}
let functionExpression = function (a, b) {
  return a + b;
};
let functionArrow = (a, b) => a + b;
//use function Arrow with var
var functionArrowVar = (a, b) => a + b;
//bad practice var
//varVeribalse not 10 (true) , var = undefined (false)
if (!varVeribalse) myFun(); //hello world
var varVeribalse = 10;
function myFun() {
  console.log("hello world");
}
//window varibalse
var one = 5;
let two = 15;
const three = 25;
console.log(one === window.one); //true
console.log(two === window.two); //false
console.log(three === window.three); //false

//===================================
/* This –ключевое слово this не статично оно динамично в объектах,
при вызове ключевого слова в объекте через метод оно всегда
будет указывать на этот объект а не где была создана
первоначально. */
//keyword this
("use strict");
//this in global scopeconsole.log(this)//window :{}
//regular function this = undefined
const calcAge = function (birth) {
  console.log(2037 - birth); //37
  console.log(this); //undefined
};
calcAge(2000);
//in arrow function this points on parents
const calcAgeArrow = (birth) => {
  console.log(2037 - birth); //37
  console.log(this); //window
};
calcAge(1980);
//points on object
const objectOne = {
  age: 1991,
  //method
  calc: function () {
    console.log(this);
    console.log(2037 - this.age);
  },
};
objectOne.calc(); //{age: 1991, calc: ƒ} / 46
//keyword points on object then call method (really importans understand rule!)
const objectTwo = {
  age: 2030,
};
//copy calc
objectTwo.calc = objectOne.calc;
console.log(objectTwo); //{ age: 2030, calcAge: undefined }
//calc points on objectTwo
objectTwo.calc(); //7
//copy method not naming
const f = objectOne.calc;
console.log(f); //[Function: calc]
f(); //Cannot read properties of undefined (reading 'age') / not age in const f / f- regular function

//================================
/* Никогда не использовать function arrow в качестве метода объекта
– так ключевое слово this указывает не на сам объект а на его
родителя (этого объекта) */
//regular function vs arrow function
const obj = {
  names: "Vlad",
  age: 25,
  //great points on parents scope , parents scope this global scope
  great: () => {
    console.log(`hello ${this.names}`);
  },
  fun: function () {
    console.log(`hello ${this.names}`);
  },
};
obj.great(); //hello undefined
obj.fun(); //hello Vlad
//use function regular in method with this
const objTwo = {
  names: "Vlad",
  age: 25,
  fun: function () {
    console.log(`hello ${this.names}`);
    //solution problems use varibale then copy this
    const a = this;
    //use function regular
    const myFun = function () {
      //without copy this
      //console.log(this)//undefined
      //console.log(this.age)//Cannot read properties of undefined
      console.log(a); //{ names: 'Vlad', age: 25, fun: [Function: fun] }
      console.log(a.age); //25
    };
    myFun();
  },
};
objTwo.fun();
//use function arrow in method with this (ES6)
const objTwo = {
  names: "Vlad",
  age: 25,
  fun: function () {
    console.log(`hello ${this.names}`);
    //solution problem ES6
    const myFun = () => {
      console.log(this); //{ names: 'Vlad', age: 25, fun: [Function: fun] }
      console.log(this.age); //25
    };
    myFun();
  },
};
objTwo.fun();
//use arguments onle works in regular expression
const addExpr = function (a, b) {
  console.log(arguments);
  return console.log(a + b);
};
addExpr(2, 5); //show how object -> { '0': 2, '1': 5 } / 7
//use more arguments then in (parametrs function)
addExpr(7, 8, 9, 20, 35); //{ '0': 7, '1': 8, '2': 9, '3': 20, '4': 35 } / after two parametr stop + , other values ignor 15,
//not use arguments in arrow function
const addArrow = (a, b) => {
  console.log(arguments);
  return console.log(a + b);
};
addArrow(5, 7, 10, 7); //arguments is not defined / not work arguments in arrow function

//==========================
/* разница между ссылочным и примитивным значением.
Примитивное значения меняется по адресу, и весь процесс
происходит в стеке вызова. Но объект является большим элементов
поэтому часть его храниться в куче, и ссылка будет указывать на
этот объект в памяти. И при копировании одного и ого же объекта
ссылка будет сохраняться поэтому при изменений объекта
оригинальный и копирований объекта будет равнозначны что
изменилось в одном измениться и в другом объекте. */
//primitive and object (primitive and reference types)
//primitive tupes - number, string, boolean, undefined, null, symbol,BigInt
//reference types - objects, arrays, functions, mane more...
//primitive work
let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

//referense work
const me = {
  name: "vlad",
  age: 30,
};
const friends = me;
friends.age = 27;
console.log(me); //{ name: 'vlad', age: 27 } / change in origin objects
console.log(friends); //{ name: 'vlad', age: 27 }

//practice primitiv and reference types
//prinmitive types
let a = 5;
let b = a;
a = 10;
console.log(a); //10
console.log(b); //5 - not change with a
//reference types
const objectOrigin = {
  names: "Vlad",
  age: 25,
  city: "Minsk",
};
console.log(objectOrigin); //{ names: 'Vlad', age: 25, city: 'Minsk' }
const copyObjects = objectOrigin;
copyObjects.city = "New York";
console.log(objectOrigin); //{ names: 'Vlad', age: 25, city: 'New York' }
console.log(copyObjects); //{ names: 'Vlad', age: 25, city: 'New York' }
//copyObjects = {}//Assignment to constant variable./ not other object /copyObjects this const varibals / we change object insade
//how copy objects without change original
//Object.assign work only first level {}, the other level not work{{}}
const myObjectOrigin = {
  names: "Vladislav",
  age: 28,
  city: "Berlin",
};
console.log(myObjectOrigin); //{ names: 'Vlad', age: 25, city: 'New York' }
const myCopyObjects = Object.assign({}, myObjectOrigin);
myCopyObjects.city = "Paris";
console.log(myCopyObjects); //{ names: 'Vladislav', age: 28, city: 'Paris' }
console.log(myObjectOrigin); //{ names: 'Vladislav', age: 28, city: 'Berlin' } /not original objects
//
const Origin = {
  names: "Vladislav",
  age: 28,
  child: ["kate", "jake"],
};
console.log(Origin);
const myCopy = Object.assign({}, Origin);
myCopy.child.push("others");
////Object.assign not work other level {{}}
console.log(myCopy); //{ names: 'Vladislav', age: 28, child: [ 'kate', 'jake','others' ] }
console.log(Origin); //{ names: 'Vladislav', age: 28, child: [ 'kate', 'jake','others' ] }

//===========================
//Data Structures, Modern Operators and Strings
// dectruction Arrays
//old oproach
let arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c); //1 2 3
//new oproach with destruction arrays
const [x, y, z] = arr;
console.log(x, y, z); //1 2 3
console.log(arr); //[ 1, 2, 3 ] - arr not change
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (a, b) {
    return [this.categories[a], this.mainMenu[b]];
  },
};
//use dectruction
let [one, two, three] = restaurant.mainMenu;
console.log(one, two, three); //Pizza Pasta Risotto
//use not all values in arr
let [first, secondary] = restaurant.mainMenu;
console.log(first, secondary); //Pizza Pasta
let [one1, , three3] = restaurant.mainMenu;
console.log(one1, three3); //Pizza Risotto
//change varibalse place old oproach
////Pizza Pasta
let rem = first;
first = secondary;
secondary = rem;
console.log(first, secondary); //Pasta Pizza
//use change varibalse place with destruction arrays
a = 1;
b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
//use return desctruction from function
console.log(restaurant.order(0, 1)); //[ 'Italian', 'Pasta' ]
let [resOne, restwo] = restaurant.order(0, 1);
console.log(resOne, restwo); //Italian Pasta
//nested arrays
let arrNested = [1, 2, [7, 8]];
let [a1, b1, [c1, d1]] = arrNested;
console.log(a1, b1, c1, d1); //1 2 7 8
//default values
let [a2 = 1, b2 = 1, c2 = 1] = [12, 13];
console.log(a2, b2, c2); //12 13 1 - 1 -> default values

//=========================
/* При деструктуризации объектов используем имена переменных
аналогичные с именами в объектах, их расположения не имеет
значения как массивах, т.к . мы используем конкретные имена. */
// dectruction Object
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (a, b) {
    return [this.categories[a], this.mainMenu[b]];
  },
  //destructions parametrs in functions
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and
${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
//use name varibal = name objects
let { mainMenu, categories } = restaurant;
console.log(mainMenu, categories); //[ 'Pizza', 'Pasta', 'Risotto' ] [ 'Italian','Pizzeria', 'Vegetarian', 'Organic' ]
//use different names
let { mainMenu: main, categories: list } = restaurant;
console.log(main, list); //[ 'Pizza', 'Pasta', 'Risotto' ] [ 'Italian', 'Pizzeria','Vegetarian', 'Organic' ]
//default values
let { mainMenu: maintwo = [], starter: start = [] } = restaurant;
console.log(maintwo, start); //[ 'Pizza', 'Pasta', 'Risotto' ] []
//mutating values
let a = 99;
let b = 120;
const obj = { a: 1, b: 2, c: 3 };
//{ a, b } = obj //error ->Unexpected token '='
//work with (;)
({ a, b } = obj);
console.log(a, b); //1, 2

//==============================
// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); //11 23
//in use destruction with functions / converting objects in fuctions to getvaribals / see high
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
}); //Order received! Garlic Bread and Risotto will be delivered to Via del Sole,21 at 22: 30
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
}); //Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21at 20:00

//============================
// The Spread Operator (...)
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (a, b) {
    return [this.categories[a], this.mainMenu[b]];
  },
  //destructions parametrs in functions
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and
${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
//old oproach
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]
//ES6 oproach
const newArr = [1, 2, ...arr];
console.log(newArr); //[1, 2, 7, 8, 9]
//the same
console.log(...newArr); //1 2 7 8 9
console.log(1, 2, 7, 8, 9); //1 2 7 8 9
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); //[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); //['Focaccia','Bruschetta','Garlic Bread','CapreseSalad','Pizza','Pasta','Risotto']
// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters); //['J', 'o', 'n','a', 's', ' ','S.']
console.log(...str); //J o n a s
// console.log(`${...str} Vlad`); //error not use
// Real-world example
const ingredients = [
  //prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients); //a,b,c
//in functions work add ingredients old oproach
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//with spread (new oproach ES6)
restaurant.orderPasta(...ingredients);
// Objects
//new objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);
//copy objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name); //Ristorante Roma
console.log(restaurant.name); //Classico Italiano

//===================================
//Rest Pattern and Parameters
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [ 3, 4, 5 ]
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Risotto [ 'Focaccia','Bruschetta', 'Garlic Bread', 'Caprese Salad' ]
// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //{ thu: { open: 12, close: 22 }, fri: { open: 11, close:23 } }
// 2) Functions
//mush more parametrs in arr / converting in array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3); //5
add(5, 3, 7, 2); //17
add(8, 2, 5, 3, 2, 1, 4); //25
//in arr in varibals
const x = [23, 5, 7];
add(...x); //35
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach"); //mushrooms
["onion", "olives", "spinach"];
restaurant.orderPizza("mushrooms"); //mushrooms []

//=================================
//Short Circuiting (&& and ||)
const restaurant = {
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
console.log("---- OR ----");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas"); //3
console.log("" || "Jonas"); //Jonas
console.log(true || 0); //trueconsole.log(undefined || null);//null
console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello
//ternary operators
restaurant.numGuests = 0; // 0 - false value
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10
//alternative with ||
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //10
console.log("---- AND ----");
console.log(0 && "Jonas"); //0
console.log(7 && "Jonas"); //Jonas
console.log("Hello" && 23 && null && "jonas"); //null
// with if
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
} //mushrooms ['spinach']
//alternative with &&
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach"); ///mushrooms ['spinach']

//==============================
// The Nullish Coalescing Operator - ??
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //10
// Nullish: null and undefined ( ignor 0 or '' empty string)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //0

//===============================
// Logical Assignment Operators
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
}; // OR assignment operator
rest1.numGuests = rest1.numGuests || 10; //10
rest2.numGuests = rest2.numGuests || 10; //10
//the same
rest1.numGuests ||= 10; //10
rest2.numGuests ||= 10; //10
// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log((rest1.numGuests ??= 10));
console.log((rest2.numGuests ??= 10));
// AND assignment operator
rest1.owner = rest1.owner && "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";
//the same
rest1.owner &&= "<ANONYMOUS>"; //undefined
rest2.owner &&= "<ANONYMOUS>"; //<ANONYMOUS>

//==============================
/* We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are
field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and
'Kimmich'.
Then, call the function again with players from game.scored
*/ const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [player1, players2] = game.players;
console.log(player1, players2);
/*
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby','Lewandowski'
] [
'Burki',
'Schulz',
'Hummels', 'Akanji',
'Hakimi', 'Weigl',
'Witsel', 'Hazard',
'Brandt', 'Sancho',
'Gotze'
] */
//2
const [goalkeeper, ...fieldPlayers] = player1;
console.log(goalkeeper, fieldPlayers);
/* Neuer [
'Pavard', 'Martinez',
'Alaba',
'Davies',
'Kimmich', 'Goretzka',
'Coman',
'Muller',
'Gnarby', 'Lewandowski'
] */
//3
const allPlayers = [...player1, ...players2];
console.log(allPlayers);
/* [
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski', 'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze'
] */
//4
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
/*
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski', 'Thiago',
'Coutinho',
'Perisic'
] */ //5
const {
  odds: { team1 = 0, x: draw = 0, team2 = 0 },
} = game;
console.log(team1, draw, team2); //1.33 3.25 6.5
//6
//rest in arrays
const printGoals = function (...players) {
  console.log(`total scored ${players.length}`);
};
printGoals(...game.scored); //total scored 4 // destruction in values
//7
team1 < team2 && console.log(`Win ${game.team1} odds :${team1}`); //Win BayernMunich odds: 1.33
team1 > team2 && console.log(`Win ${game.team2} odds :${team2}`); //not work

//=================================
// The for-of Loop for Array
const arrOne = [true, undefined, false, null];
const arrTwo = ["string", 25];
const menu = [...arrOne, ...arrTwo];
//loop values
for (const item of menu) console.log(item); //true undefined false null string 25
//loop values and index /
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} //1: true 2: undefined 3: false 4: null 5: string 6: 25
console.log([...menu.entries()]); //[[0, true],[1, undefined],[2, false],[3,null], [4, 'string'], [5, 25]]

//==================================
//New syntax in Es6 , Objects literal
//use values in objects
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //olp oproach copy objects
  openingHours: openingHours,
  //new oproach ES6 enhanced object literals
  openingHours,
  //old
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //new ES6 without (: and function)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//=======================================
// Optional Chaining
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
};
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//console.log(restaurant.openingHours.mon.open);//error
// WITH optional chaining - alternative if / return else NOT - undefined
console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined
// Example with optional chaining
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
/* n mon, we open at closed
On tue, we open at closed
On wed, we open at closed
On thu, we open at 12
On fri, we open at 11
On sat, we open at 0
On sun, we open at closed */
//Optional chaining in methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); //Method doesnot exist
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); //Methoddoes not exist
//Optional chaining with arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];
console.log(users[0]?.name ?? "User array empty"); //Jonass
//without Optional chaining
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

//==============================
// Looping Objects:for of, Object Keys, Values, and Entries
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
};
// Property Key
const properties = Object.keys(openingHours);
console.log(properties); //[ 'thu', 'fri', 'sat' ]
// Property VALUES
const values = Object.values(openingHours);
console.log(values);
/* [
{ open: 12, close: 22 },
{ open: 11, close: 23 },
{ open: 0, close: 24 }
] */
// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
/* [
[ 'thu', { open: 12, close: 22 } ],
[ 'fri', { open: 11, close: 23 } ],
[ 'sat', { open: 0, close: 24 } ]
] */
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); //We are open on 3 days: thu, fri, sat,
// [key, value]
for (const [day, open] of entries) {
  console.log(`On ${day} we time ${open}`);
}
/*
On thu we time [object Object]
On fri we time [object Object]
On sat we time [object Object] */
//del in values with helping destruction {}for (const [day, { open, close }] of entries) {
console.log(`On ${day} we open at ${open} and close at ${close}`);
/* On thu we open at 12 and close at 22
On fri we open at 11 and close at 23
On sat we open at 0 and close at 24 */

//=============================
/* Let's continue with our football betting app! Keep using the 'game' variable
from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like
this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
} */
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
for (const [goal, players] of Object.entries(game.scored)) {
  console.log(`Goal ${+goal + 1} : ${players}`);
}
/* Goal 1 : Lewandowski
Goal 2 : Gnarby
Goal 3 : Lewandowski
Goal 4 : Hummels */
//2
let average = 0;
for (const values of Object.values(game.odds)) {
  average += values;
  console.log(average); //1.33 4.58 11.08
}
average /= Object.values(game.odds).length;
console.log(average); //3.6933333333333334
//3
for (const [keyS, values] of Object.entries(game.odds)) {
  let result = keyS === "x" ? "draw" : `victory ${game[keyS]}`;
  console.log(`Odd of ${result} : ${values}`);
}
/*
Odd of victory Bayern Munich : 1.33
Odd of draw : 3.25
Odd of victory Borrussia Dortmund : 6.5 */ //4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers); //{ Lewandowski: 2, Gnarby: 1, Hummels: 1 }

//==================================
/* Sets – нужны для поиска дубликатов , к ним нельзя обращаться по
номеру как к массивам. Просто после нахождения уникальных
элементов конвертируем обратно в массив. Можно работать как с
массивами так и со строками. */
// Sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet); //Set(3) { 'Pasta', 'Pizza', 'Risotto' }
console.log(new Set("Jonas")); //Set(5) { 'J', 'o', 'n', 'a', 's' }
console.log(ordersSet.size); //3
console.log(ordersSet.has("Pizza")); //true
console.log(ordersSet.has("Bread")); //false
ordersSet.add("Garlic Bread"); //add element unique
ordersSet.add("Garlic Bread"); //element not unique / not add
ordersSet.delete("Risotto"); //delete element
// ordersSet.clear(); // delete all elements in Set
console.log(ordersSet); //Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }
//work with Loop
for (const order of ordersSet) console.log(order);
// Example find unique element in array / converting in Set / next in array withunique elements
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]; //arr
const staffUnique = new Set(staff); //converting in Set
console.log(staffUnique); //{ 'Waiter', 'Chef', 'Manager' }
console.log(staffUnique[0]); //undefined - Set not work [index element]
let newArr = [...staffUnique]; // converting in arr
console.log(newArr[1]); //Cheflet newArrTwo =[...new Set(staff)] // 2 in 1 / Sets and converting arr
console.log(newArrTwo[2]); //Manager

//===============================
//Maps –могут иметь значения ключа любого типа
// Maps: Fundamentals
//create maps
const rest = new Map();
//add new element
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));
/* Map(3) {
'name' => 'Classico Italiano',
1 => 'Firenze, Italy',
2 => 'Lisbon, Portugal'
} */
//add more elements
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
//get element
console.log(rest.get("name")); //Classico Italianov
console.log(rest.get(true)); //We are open :D
console.log(rest.get(1)); //Firenze, Italy
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); //'Weare closed: (
//checr elements in map
console.log(rest.has("categories")); //true
//delete elements
rest.delete(2);
// rest.clear(); delete all elements
//size maps
console.log(rest.size); //8
//use key with arrays
//not work arrays reference types
rest.set([2, 3], "Hello");
console.log(rest.get([2, 3])); //undefined / others arrays [2,3] !== [2,3] -> true
//work with arraysconst arr = [1, 2];
rest.set(arr, "Test");
//rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr)); //Test
// Maps: Iteration
//add in ([all elements])
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct �"],
  [false, "Try again!"],
]);
console.log(question);
/* Map(7) {
'question' => 'What is the best programming language in the world?',
1 => 'C',
2 => 'Java',
3 => 'JavaScript',
'correct' => 3,
true => 'Correct �',
false => 'Try again!'
} */
// Convert object to map
const openingHours = {
  fri: {
    open: 12,
    close: 22,
  },
  ths: {
    open: 11,
    close: 23,
  },
  fru: {
    open: 0,
    close: 24,
  },
};
console.log(Object.entries(openingHours));
/* [
[ 'fri', { open: 12, close: 22 } ],
[ 'ths', { open: 11, close: 23 } ],
[ 'fru', { open: 0, close: 24 } ]
] */
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
/* Map(3) {
'fri' => { open: 12, close: 22 },'ths' => { open: 11, close: 23 },
'fru' => { open: 0, close: 24 }
} */
// Quiz app
console.log(question.get("question")); //What is the best programming language inthe world ?
//use Loop im map
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
/*
Answer 1: C
Answer 2: Java
Answer 3: JavaScript */
// const answer = Number(prompt('Your answer'));
const answer = 3; //3
console.log(question.get(question.get("correct") === answer)); //Correct �
// Convert map to array
//get arrays in arrays [[][]...]
console.log([...question]);
/* [
[ 'question', 'What is the best programming language in the world?' ],
[ 1, 'C' ],
[ 2, 'Java' ],
[ 3, 'JavaScript' ],
[ 'correct', 3 ],
[ true, 'Correct �' ],
[ false, 'Try again!' ]
] */
// console.log(question.entries());
//get keys
console.log([...question.keys()]); //[ 'question', 1, 2, 3, 'correct', true, false]
//get values
console.log([...question.values()]);
/* [
'What is the best programming language in the world?',
'C',
'Java',
'JavaScript',
3,
'Correct �',
' */

//================================
/* Резюме о arrays , objects,set,maps. Eсли нужен простой список то
используем Arrays and Set, если нужна структура ключ и значениято используем Maps and Objects.По сути мы используем такие
структуры данных для хранения и обработки информации,
получения от API данных обычно в формате JSON.На самом деле
структур данных больше чем 4 есть еще : Stacks. Queues. Linked
Lists, Trees, hash tables. */

//ARRAYS
tasks = ["Code", "Eat", "Code"];
/*
Используйте, когда вам нужен упорядоченный
список значений (может содержать
дубликаты)
Используйте, когда вам нужно
манипулировать данными */
//SETS
tasks = new Set(["Code", "Eat", "Code"]);
/*Используйте, когда вам нужно работать
с уникальными значениями
Используйте, когда действительно важна высокая производительность
Используется для удаления дубликатов
из массивов */
//OBJECTS
task = {
  task: "Code",
  date: "today",
  repeat: true,
};
/* Более "традиционное" хранилище ключей/значений
("злоупотребляемые" объекты)
Проще в написании и доступе
значения с помощью . и []
Используйте, когда вам нужно
включить функции (методы)
Использовать при работе с
J ON (можно преобразовать в карту) */
//MAPS
task = new Map([
  ["task", "Code"],
  ["date", "today"],
  [false, "Start coding!"],
]);
/* Лучшая производительность
Ключи могут иметь любой тип данных
Легко повторять
Легко вычисляемый размер
Используйте, когда вам нужновключить функции (методы)
Используйте, когда вам просто нужно
сопоставить ключ со значениями */

//========================
/*Let's continue with our football betting app! This time, we have a map with a log
of the events that happened during the game.The values are the events
themselves, and the keys are the minutes in which each event happened(a football
game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened(no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair.So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average,
every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the
first half or second half(after 45 min) of the game, like this:
[FI T HALF] 17:
GOAL
GOOD LUCK �
*/
const gameEvents = new Map([
  [17, " GOAL"],
  [36, "� Substitution"],
  [47, " GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, " GOAL"],
  [80, " GOAL"],
  [92, "� Yellow card"],
]);
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//==========================
// Working With Strings - Part 1 and 2
const airline = "TAP Air Portugal";
const plane = "A320";
//show index [] stings
console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log("B737"[0]); //B
//length
console.log(airline.length); //16
console.log("B737".length); //4
//indexOf and lastIndexOf
console.log(airline.indexOf("r")); //6
console.log(airline.lastIndexOf("r")); //10
console.log(airline.indexOf("portugal")); //-1
//slice
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air
console.log(airline.slice(0, airline.indexOf(" "))); //TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Portugal
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga
//example
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat �");
  else console.log("You got lucky �");
};
checkMiddleSeat("11B"); //You got the middle seat �
checkMiddleSeat("23C"); //You got lucky �
checkMiddleSeat("3E"); //You got the middle seat �//create with new String
console.log(new String("jonas")); //[String: 'jonas']
console.log(typeof new String("jonas")); //object
console.log(new String("jonas").slice(1)); //onas
// Working With Strings - Part 2
const airline = "TAP Air Portugal";
//toLowerCase and toUpperCase
console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
// Fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Jonas
// Comparing emails with help trim()
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@jonas.io
console.log(email === normalizedEmail); //true
// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS); //288.97$
//replace all words
const announcement =
  "All passengers come to boarding door 23. Boarding door23!";
console.log(announcement.replace("door", "gate")); //All passengers come toboarding gate 23. Boarding door 23! / not all words
console.log(announcement.replaceAll("door", "gate")); //All passengers come toboarding gate 23. Boarding gate 23! / first oproach
console.log(announcement.replace(/door/g, "gate")); //All passengers come toboarding gate 23. Boarding gate 23! / second oproach
// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); // true
console.log(plane.includes("Boeing")); //false
console.log(plane.startsWith("Airb")); //true
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
} //Part of the NEW ARirbus family
// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife"); //You are NOTallowed on board
checkBaggage("Socks and camera"); //Welcome aboard!
checkBaggage("Got some snacks and a gun for protection"); //You are NOT allowed onboard;

//==============================
// Working With Strings - Part 3 
//69
