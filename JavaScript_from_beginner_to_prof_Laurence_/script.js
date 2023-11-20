//JavaScript является интерпретируемым языком программирования: это значит,компьютер распознает его в процессе работы кода.Некоторые языки перед запуском кода требуют обработки(данный процесс называется компиляцией) — нодля JavaScript в этом нет необходимости.Компьютер интерпретирует JavaScriptна лету.При этом «движок», понимающий JavaScript, называется интерпретатором.

//ECMAScript -> спецификация, или стандартизации JavaScript

console.log("Hello world!");
console.table() //введенные данные в виде таблицы
console.error() //сообщение об ошибке
console.log(4 + 10);//14

alert("Hi there!");// всплывающее окно с текстом Hi there!

//Добавление JavaScript на веб-страницу
{/* 
<html>
  <script type="text/javascript" src="ch1_alert.js"></script>
</html>
 */}

//Функция prompt()
prompt("Hi! How are you?");//получить от пользователя данные

//Случайные числа
console.log(Math.random() * 100);//4.586
console.log(Math.floor(Math.random() * 100));//25

//В JavaScript есть семь типов примитивов: String, Number, BigInt,Boolean, Symbol, undefined и null

//--------------------
//Переменные
firstname = "Maaike";
x = 2;

//let, var и const
let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;//используется для переменных, которым присваивается значение только один раз


//-------------------
//Тип данных String
let singleString = 'Hi there!';
let doubleString = "How are you?";

let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);//Let's learn JavaScript

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);//Hello, what's your name? Is it "Mike"?

let str3 = "New \nline.";
// New
// line.

//-----------------
//Тип данных Number
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //в десятичной системе будет 8
let hexNr = 0x3E8; //в десятичной системе будет 1000
let binNr = 0b101; //в десятичной системе будет 5
let binNr2 = 0b100; // десятичная версия будет 4

//----------------
//Тип данных BigInt
//использовать BigInt только с другими BigInt.
let bigNr = 90071992547409920n;

//--------------
//Тип данных Boolean
let bool1 = false;
let bool2 = true;

//--------------
//Тип данных Symbol
//переменные не равны, даже если их значение и тип одинаковы
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2)
//These two strings are the same: true
//These two Symbols are the same: false

//-----------------
//Значение undefined
let unassigned;
console.log(unassigned);//Undefined

//----------------
//Значение null
let empty = null; //специальное значение, указывающее на то, что переменная пуста или имеет неизвестное значение

//--------------
//Определение типа переменной
let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);//str string
console.log("nr", typeof nr);//nr number 
console.log("bigNr", typeof bigNr);//bigNr bigint 
console.log("bool", typeof bool);//bool boolean 
console.log("sym", typeof sym);//sym symbol 
console.log("undef", typeof undef);//undef undefined
console.log("unknown", typeof unknown);//unknown object -> ошибка, которая существует в JavaScript

//---------------
//Преобразование типов данных
let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);//4

let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2);//22

NaN //(not a number — «не число»

//---------------
//Арифметические операторы
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;//26

let str1 = "Hello ";
let str2 = "addition";
let result2 = str1 + str2;//Hello addition

let name = "vlad"
let age = 24
let isProgramming = true
console.log(`Hello, my name is ${name}, I am ${age} years old and I can code JavaScript: ${isProgramming}.`);//Hello, my name is vlad, I am 24 years old and I can code JavaScript: true.

let nr1 = 20;
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);//16 NaN -результат вычитания числа из строки не является числом

let nr1 = 15;
let nr2 = 10;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 * nr2;
let result2 = str1 * nr3;
console.log(result1, result2);//150 NaN

let nr1 = 30;
let nr2 = 5;
let result1 = nr1 / nr2;
console.log(result1);//6

let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);//8

let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result1}`)//10 % 3 = 1

//--------------------
//Унарные операторы: инкремент и декремент
//x++ - постфиксным унарным оператором
//++x - — префиксный унарный оператор

let nr1 = 4;
nr1++;
console.log(nr1);//5

let nr2 = 4;
nr2--;
console.log(nr2);//3

let nr = 2;
console.log(nr++);//2
console.log(nr);//3

let nr = 2;
console.log(++nr);//3

//-------------------
//Сочетание операторов
//Можно создавать сочетания операторов, и работать они будут так же, как и в математике.Они будут исполняться точно в том же порядке, и совершенно не обязательно слева направо.Это происходит благодаря явлению, называемому приоритетом оператора.
let c = (4 ** 2 ) + (5 ** 2)//41

//-------------------
//Операторы присваивания
x += 5 //x = x +
x **= 3  // x = x ** 3

//-------------------
//Операторы сравнения
// == сравниваться будут только значения, но не типы данных
let x = 5;
let y = "5";
console.log(x == y);//true

// != Не равно
let x = 5;
let y = "5";
console.log(x != y);//false

//Больше и меньше
let x = 5;
let y = 6;
console.log(y > x);//true

//-----------------
//Логические операторы

//«И» (&&)
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);//true

//«ИЛИ» (||)
//только одна из частей должна быть истинной
console.log(x > y || y < z);//true

//«НЕ» (!)
let x = false;
console.log(!x);//true

//----------------
//Проекты

//Конвертер миль в километры
let a = 130
let b = a * 1.609
console.log(`Расстояние ${a} миль. равно ${b} км`);//Расстояние 130 миль. равно 209.17 км

//Вычислитель индекса массы тела (ИМТ)
let weightInPounds = 75;
let heightInInches = 30;

let weightInKg = weightInPounds * 0.45359237;
let heightInMeters = heightInInches * 0.0254;

const BMI = weightInKg / (heightInMeters * heightInMeters);//58.5891316365966

//----------------------------
//___Множественные значения JavaScript__//

//_Массивы и их свойства
//Массивы — это перечни значений
arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

arr3 = new Array(10);//[ <10 empty items
arr4 = [10];//[ 10 ]

let arr = ["hi there", 5, true];

//Вы можете изменить значения констант массива, но не можете изменить сам массив
const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);//new value
arr = ["nope, now you are overwriting the array"];//TypeError: Assignment to constant variable.

//_Доступ к элементам
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);//Toyota

//_Перезапись элементов
cars[0] = "Tesla";
console.log(cars);//[ 'Tesla', 'Renault', 'Volkswagen' ]

//_Встроенное свойство длины
colors = ["black", "orange", "pink"]
console.log("Length of colors:", colors.length);//Length of colors: 3

//использовать длину для доступа к последнему элементу массива:
lastElement = colors[colors.length - 1];

//несуществующую индексную позицию
numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);//numbers [ 12, 24, 36, <2 empty items>, 48 ]

//_Добавление и замена элементов
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");

//добавить элементы с определенным индексом
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// 1 - индекс массива, 2 - число элементов, которые мы хотим удалить
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
/* 
 'circle',
 'triangle',
 'square',
 'trapezoid',
 'rectangle',
 'pentagon'
] */

//добавить массив в существующий масcив
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);//[ 1, 2, 3, 4, 5, 6 ]
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Удаление первого элемента
arr8.shift();
//[ 2, 3, 4, 5, 6, 7, 8 ]

//удаления значений
arr8.splice(1, 3);
//[ 2, 6, 7, 8 ]

//удаления 
delete arr8[0];
//[ <1 empty item>, 6, 7, 8 ]

//Поиск элементов 
let findValue2 = arr8.find(e => e === 6);//6

//найти элемент
arr8 = [2, 6, 7, 8];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);//1 -1

//с какой позиции он должен начать поиск
arr8 = [2, 6, 7, 8];
let findIndex3 = arr8.indexOf(6, 2);//-1

//Сортировка
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();//[ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]
let ages = [18, 72, 33, 56, 40];
ages.sort();//[ 18, 33, 40, 56, 72 ]

//Метод reverse
names.reverse();
//[ 'Maria', 'James', 'Fatiha', 'Bert', 'Alicia' ]

//Практическое занятие 
let newListProducts = ["Milk", "Bread","Apples"]
newListProducts.splice(1, 1, "Banana","Eggs.")
newListProducts.splice(-1)
newListProducts.sort()
newListProducts.find(el => el === "Milk")
newListProducts.splice(newListProducts.indexOf('Banana'), 0, "Carrots","Lettuce")
let preList = ["Juice","Pop"]
let resultList = newListProducts.concat(preList,preList)
console.log(resultList);//['Carrots', 'Lettuce', 'Banana', 'Eggs.', 'Milk', 'Juice', 'Pop', 'Juice'

//Многомерные массивы
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let value1 = arrOfArrays[0][1];//2

let arr = [0, 1, 2];
console.log(typeof arr);//Object

//----------------------------
//__Объекты в JavaScript__//

let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true
};

//получить доступ к свойствам
dog["color"];
dog.color;
let variable = "age";
console.log(dog[variable]);//3

//Обновление объектов
dog["color"] = "blue";
dog.weight = 2.3;

//__Объекты внутри объектов
let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};

//доступ к адресу
company.address.zipcode = "33117";
company["address"]["number"] = "100";

//Практическое занятие
const people = {
  friends:[]
}

let oneFriends = {
  name:'vlad',
  age:25
}

let twoFriends = {
  name:'Sveta',
  age:18
}

let threeFriends = {
  name:'Victor',
  age:45
}
people.friends.push(oneFriends,twoFriends,threeFriends)
console.log(people);// { friends: [{ name: 'vlad', age: 25 }, { name: 'Sveta', age: 18 }, { name: 'Victor', age: 45 }]}

//--------------------------
//___Логические операторы___//

//Операторы if и if else, else if
let rain = true;
if (rain) {
  console.log("** нужно взять зонт, когда я пойду на улицу **");
} else {
  console.log("** я могу оставить зонт дома **");
}
//** нужно взять зонт, когда я пойду на улицу **

let age = 10;
let cost = 0;
let message;
if (age < 3) {
  cost = 0;
  message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
  cost = 5;
  message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
  cost = 10;
  message = "A regular ticket costs 10 dollars.";
} else {
  cost = 7;
  message = "A ticket is 7 dollars.";
}
console.log(message); //With the child discount, the fee is 5 
console.log("Your Total cost " + cost);//Your Total cost 5

//Условные тернарные операторы
let access = age < 18 ? console.log("denied") : console.log("allowed");//denied

//__Операторы switch
let activity = "Breakfast"
switch (activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
}
//It is 7:00AM

//Сочетание операторов
let grade = "B"
switch (grade) {
  case "F":
  case "D":
    console.log("You've failed!");
    break;
  case "C":
  case "B":
    console.log("You've passed!");
    break;
  case "A":
    console.log("Nice!");
    break;
  default:
    console.log("I don't know this grade.");
}
//You've passed!

//------------------------
//___Циклы__//
//Циклы выполняют блок кода определенное количество раз
//цикл while / цикл do while / цикл for / цикл for in / цикл for of

//Циклы while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// 1 2 3...9

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}
//Found her! 

//массив Фибоначчи
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}

//Циклы do while
//Здесь то, что находится в блоке do, сначала выполняется, а после этого оценивается (while).
let number;
do {
  number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));
/* 
Please enter a number between 0 and 100: > -50
Please enter a number between 0 and 100: > 150
Please enter a number between 0 and 100: > 34
*/

//Цикл for
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//1,2,3 ..

//массив, содержащий только четные значения
let arr = [];
for (let i = 0; i < 100; i = i + 2) {
  arr.push(i);
}
// [0, 2, 4, 6. . .]

//Вложенные циклы
//не лучшее решение
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j);
  }
}
/* 
 [
 0, 1, 2, 3, 4, 5, 6
 ],
 [
 0, 1, 2, 3, 4, 5, 6
 ],
 [
 0, 1, 2, 3, 4, 5, 6
 ]
]
 */
console.table(arrOfArrays);

//Циклы и массивы
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
  if (names[i].startsWith("M")) {
    delete names[i];
    continue;
  }
  names[i] = "hello " + names[i];
}
console.log(names);
/* 
[
 'hello Chantal',
 'hello John',
 <1 empty item>,
 'hello Bobbi',
 'hello Jair'
]
*/

//Цикл for of
//для перебора элементов массива , можно перебирать и объекты
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of names) {
  console.log(name);
}
//Chantal, John ...

//Цикл for in
//для oblects
//Цикл for in можно использовать при работе с массивами, он вернет только индексы
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};
for (let prop in car) {
  console.log(car[prop]);
}
//Golf,Volkswagen,1999

//Цикл из объектов, преобразованных в массивы
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};
let arrKeys = Object.keys(car);
console.log(arrKeys);//[ 'model', 'make', 'year', 'color' ]

//the same
for (let key of Object.keys(car)) {
  console.log(key);
}
//[ 'model', 'make', 'year', 'color' ]

for (let key of Object.values(car)) {
  console.log(key);
}
// Golf,Volkswagen ...

//перебор значений обоих массивов
let arrEntries = Object.entries(car);
console.log(arrEntries);
/* 
 [ 'model', 'Golf' ],
 [ 'make', 'Volkswagen' ],
 [ 'year', 1999 ],
 [ 'color', 'black' ]
]
*/

//the same
for (const [key, value] of Object.entries(car)) {
  console.log(key,value);
}

//Операторы break и continue
//break остановит цикл ,чтобы прекратить перебирать
//continue — для перехода на новую итерацию цикл
//
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 4) {
    break;
  }
}
//1,2,3,4

for (let car of cars) {
  if (car.color !== "black") {
    continue;
  }
  if (car.year >= 2020) {
    console.log("we could get this one:", car);
  }
}
/* 
we could get this one: { model: 'Peugeot', make: '208', year: 2021,
color: 'black' }
we could get this one: { model: 'Fiat', make: 'Punto', year: 2020,
color: 'black' }
*/

let i = 1;
while (i < 8) {
  i++;
  if ((i - 1) % 2 === 0) {
    continue;
  }
  console.log(i - 1);
}
//1 3 5 7

//break, continue и вложенные циклы
//когда во вложенном цикле появляются break или continue, внешний цикл не останавливается
let groups = [
  ["Martin", "Daniel", "Keith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
];

for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M:", member);
      break;
    }
  }
}
//found one starting with M: Martin
//found one starting with M: Margot

//break, continue и метки
//Выведен будет только один результат, потому что далее мы выйдем из внешнего цикла и все циклы завершатся после нахождения первого совпадения
outer:
for (let group of groups) {
  inner:
  for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M:", member);
      break outer;
    }
  }
}
//found one starting with M: Martin

//------------------------
//____Функции___//

function sayHello() {
  let you = prompt("What's your name? ");
  console.log("Hello", you + "!");
}
sayHello();//Hello Maaike!

//Название функции
//описывает действие, «горбатый регистр» , используйте глаголы для описания действия функции

//Параметры и аргументы
function addTwoNumbers(x, y) {
  console.log(x + y);
}
addTwoNumbers(3,5)//8

//Неопределенные параметры или параметры по умолчанию
function addTwoNumbers(x = 2, y = 3) {
  console.log(x + y);
}
addTwoNumbers()//5

//Если вы вызовете функцию с большим количеством аргументов взяв первые по порядку аргументы
addTwoNumbers(1, 2, 3, 4);//3

//Стрелочные функции
let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(3, 5)//8

//Оператор spread
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very",
"powerful"];//['JavaScript', 'is', 'so', 'much', 'fun', 'and', 'very', 'powerful']

function addFourNumbers(x, y, z, a) {
  console.log(x + y + z + a);
}
let arr = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr, ...arr2);//27

//Параметр rest
//rest используется внутри списка параметров функции
function someFunction(param1, ...param2) {
  console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?");//hi [ 'there!', 'How are you?' ]

//Возврат значений функций
//Оператор return прекращает выполнение функции и отправляет обратно любое значение, стоящее после return.
function addTwoNumbers(x, y) {
  return x + y;
}
addTwoNumbers(3, 5)//8

let addTwoNumbers = (x, y) => x + y;

let addTwoNumbers = (x, y) => {
  console.log("Adding...");
  return x + y;
}

//__Область видимости переменных в функциях

//Находясь вне функции, переменные уходят из области видимости
function testAvailability() {
  let y = "Local variable!";
  console.log("Available here:", y);
}
testAvailability();//Available here: Local variable!
console.log("Not available here:", y)//ReferenceError: y is not defin

//с помощью return вы можете сделать доступным
function testAvailability() {
  let y = "I'll return";
  console.log("Available here:", y);
  return y;
}
let z = testAvailability();//Available here: I'll return
console.log("Outside the function:", z);//Outside the function: I'll return

//Сравнение переменных let ,const и var
//var видимав пределах функции, как мы и говорили выше, а let фактически видима в пределах блока кода.
function doingStuff() {
  if (true) {
    var x = "local";
  }
  console.log(x);
}
doingStuff();//local

//let ограничена блочной областью,
function doingStuff() {
  if (true) {
    let x = "local";
  }
  console.log(x);
}
doingStuff();//ReferenceError: x is not defined

//hoisting - переменной var если она используется до того момента, как она была объявлена, присваивается значение undefined вместо вызова ошибки ReferenceError

//Глобальные переменные
//переменные, объявленные вне функции или какого-либо другого блока кода,доступны отовсюду, потому что не были объявлены в блоке
let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar);
function creatingNewScope(x) {
  console.log("Access to global vars inside function.", globalVar);
}
creatingNewScope("some parameter");
console.log("Still available:", globalVar);
/*
 Outside function: Accessible everywhere!
Access to global vars inside function. Accessible everywhere!
Still available: Accessible everywhere! 
*/

let x = "global";
function doingStuff() {
  let x = "local";
  console.log(x);
}
doingStuff();
console.log(x);
/* 
local
global
*/

//__Немедленно вызываемое функциональное выражение
//функция, которая выполняется сразу же после того, как была определена
(function () {
  console.log("IIFE!");
})(); //"IIFE!"

(() => {
  console.log("run right away");
})();//run right away

//__Рекурсивные функции
//вызвать функцию изнутри самой этой функции
function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
    logRecursive(nr - 1);
  } else {
    console.log("done with recursion");
  }
  console.log("Ended function:", nr);
}
logRecursive(3);
/* 
Started function: 3
Started function: 2
Started function: 1
Started function: 0
done with recursion
Ended function: 0
Ended function: 1
Ended function: 2
Ended function: 3
*/

function factorial (n) {
  if (n === 0){
    return 1
  } else {
    return n * factorial(n-1)
  }
}
factorial(8)//40320

//__Вложенные функции
//переменные доступны внутри функции, в которой определены
function doOuterFunctionStuff(nr) {
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
  }
}
doOuterFunctionStuff(2);
/* 
Outer function
9
I can access outer variables: 2
*/


function doOuterFunctionStuff(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
}
//она доступна только в области функции doOuterFunction
doInnerFunctionStuff(3);
//ReferenceError

//__Анонимные функции
//Анонимную функцию можно вызвать, используя имя переменной
let functionVariable = function () {
  console.log("Not so secret though.");
};
//functionVariable();

//__Функции обратного вызова
function doFlexibleStuff(executeStuff) {
  executeStuff();
  console.log("Inside doFlexibleStuffFunction.");
}

let anotherFunctionVariable = function () {
  console.log("Another anonymous function implementation.");
}
doFlexibleStuff(anotherFunctionVariable);
/* 
Another anonymous function implementation.
Inside doFlexibleStuffFunction.
*/

let youGotThis = function () {
  console.log("You're doing really well, keep coding!");
};
setTimeout(youGotThis, 1000);
//after 1000 -> You're doing really well, keep coding!

//---------------------------------
//___Классы___//
//класс под каппотом функция конструктор
class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");//JavaScript is a chihuahua and weighs 2.4 kg.

class ClassName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}
//экземпляр 
let obj = new ClassName("arg1", "arg2");

//Метод constructor
//Он содержит свойства, которые будут установлены при инициализации класса
//В методе constructor вы можете задать значения по умолчанию.
//Методы, как и функции, могут принимать параметры и возвращать результаты
//Свойства содержат данные класса - Person получает два свойства от конструктора: firstname и lastname
class Person {
  constructor(firstname, lastname = "Doe") {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  //Методы
  greet() {
    console.log("Hi there! I'm", this.firstname);
  }

  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
}
let p = new Person("Maaike", "van Putten"); 
console.log("Hi", p.firstname);//Hi Maaike
p.greet();//Hi there! I'm Maaike
let compliment = p.compliment("Harry", "hat");
console.log(compliment);//That's a wonderful hat, Ha

//свойства, недоступные извне
class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
}
let p = new Person("Maria", "Saga");
console.log(p.firstname);//undefined

//Геттеры и сеттеры
//Геттеры и сеттеры — это особые свойства, которые можно использовать для получения данных из класса и записи полей данных в классе.
//Геттеры и сеттеры выглядят как функции, потому что после них ставят скобки(()), но функциями они не являются! Аксессоры начинаются с ключевых слов get и set
//Геттер используется для получения свойства
//Сеттер действует наоборот: принимает параметр, присваивает новое значение свойству и ничего не возвращает
class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}
let p = new Person("Maria", "Saga");
console.log(p.firstname);//Maria
p.firstname = "Adnane";
console.log(p.firstname);//"Adnane"

//Наследование
//Наследование — одна из ключевых концепций ООП. Согласно ей классы могут иметь дочерние классы, которые наследуют свойства и методы родительского класса
//использованием ключевого слова extends
//super в конструкторе вызывает конструктор родителя — в данном случае конструктор Vehicle
//Вызов super() не является обязательным, но вы должны использоватьэто ключевое слово при нахождении в классе, который наследуется от другогокласса — иначе получите ReferenceError.
class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("moving at", this.currentSpeed);
  }
  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
  doWheelie() {
    console.log("Driving on one wheel!");
  }
}
let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color); //Black 
motor.accelerate(50);
motor.move();//moving at 50

//Прототипы
//Прототипы — это механизмы JavaScript, которые делают возможным существование объектов.
//Object.prototype - всегда находится на вершине дерева наследования
//Свойство prototype содержит в себе все методы и свойства объекта
//, методы и свойства, определенные через prototype, точно такие же, как если бы они были определены в классе
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
}
Person.prototype.introduce = function () {
  console.log("Hi, I'm", this.firstname);
};
Person.prototype.favoriteColor = "green";
let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);//"green
p.introduce();//green Hi, I'm Maria

//-----------------------------------
//___Встроенные методы JavaScript___//
//функционал JavaScript, который мы получаем «из коробки»
//Разница между методом и функцией заключается в том, что функция определяется в любом месте скрипта, а метод — внутри класса.Таким образом, методы в значительной степени являются функциями классов и экземпляров.
let s = "Hello";
console.log(
  s.concat(" there!")
    .toUpperCase()
    .replace("THERE", "you")
    .concat(" You're amazing!")
);
//HELLO you! You're amazing!

//Глобальные методы
let x = 7;
console.log(Number.isNaN(x));//false
//можно просто задать:
console.log(isNaN(x));//false

//Декодирование и кодирование URI
//Кодирование — простая конвертация из одной формы в другую
//Пример до использования кодирования:
//https://www.example.com/submit?name=maaike
//Тот же адрес URL, но с применением кодирования:
//https://www.example.com/submit?name=maaike%20van%20putten

//Методы decodeUri() и encodeUri()
//код заменил пробелы в закодированной версии и снова удалил их в декодированной
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);//Encoded: https://www.example.com/submit?name=maaike%20van%20putten
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);//Decoded: https://www.example.com/submit?name=maaike van putten

//Методы decodeUriComponent() и encodeUriComponent()
//с их помощью = и & заносятся в закодированную переменную
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);//Encoded: https%3A%2F%2Fwww.example.com%2Fsubmit%3Fname%3Dmaaike%20 van%20putten
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);//Decoded: https://www.example.com/submit?name=maaike van putten

//Парсинг чисел
let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of ", int_int, "is", typeof int_int)//Type of 6 is number

//JavaScript не любит сбоить и выдавать ошибки, поэтому пытается заставить работать код в меру своих возможностей
let str_nan = "hello!";
let int_nan = parseInt(str_nan);
console.log("Type of", int_nan, "is", typeof int_nan);//Type of NaN is number

//Создание чисел с плавающей точкой с помощью parseFloat()
let str_float = "7.6";
let float_float = parseFloat(str_float);
console.log("Type of", float_float, "is", typeof float_float);//Type of 7.6 is number

let str_version_nr = "2.3.4";
let float_version_nr = parseFloat(str_version_nr);
console.log("Type of", float_version_nr, "is", typeof float_version_nr);//Type of 2.3 is number

//Исполнение кода JavaScript с помощью eval()
//когда вы почувствуете, что вам действительно нужно использовать eval(), покопайтесь сначала в интернете.
//<input onchange="go(this)"></input>
{/* <script>
  function go(e) {
    eval(e.value);
 }
</script> */}

//__Методы работы с массивами

//определенного действия для каждого элемента
let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff);
/* 
Printing stuff: grapefruit on array position: 0
Printing stuff: 4 on array position: 1
Printing stuff: hello on array position: 2
*/

//Фильтрация массива
let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
  return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);//[ 'squirrel', 'Tjed' ]

//Проверка условия для всех элементов
console.log(arr.every(checkString));//false

//Замена части массива другой частью массива
//Первый — это целевая позиция, в которую копируются значения. Второй — указание позиции, с которой надо начинать копирование.И третий — конец копируемой последовательности(данный индекс не включен в область копирования).
arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);//[ 5.6, 4, 'hello', 5.6, true ]

//Сопоставление значений массива
let arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);//[ 2, 3, 4, 5 ]

//Поиск последнего вхождения элемента в массиве
let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));//2
let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("hi"));//-1

//__Строчные методы
//Объединение строк
let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);//Hello JavaScript

//Преобразование строки в массив
let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);//[ 'Hello', 'JavaScript' ]

let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);//[ 'strawberry', 'watermelon', 'grapefruit' ]

//Преобразование массива в строку
let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);
//a,b,c

let letters = ["a", "b", "c"];
let x = letters.join('-');
console.log(x); //a-b-c

//Работа со свойствами index и position
//indexOf() работает быстрее, чем search()
let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);//7

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);//-1

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);//17

//lastIndexOf() — он возвращает индекс той позиции, где аргумент строки встречается последний раз.
let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);//24

//какой символ находится под определенным индексо
let pos1 = poem.charAt(10);
console.log(pos1);//r

//Создание подстрок
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3);
console.log("1:", substr1);//1: e a substring
console.log("2:", substr2);//2: Cre

//Замена фрагментов строки
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);//Hi Pascal

//Если требуется заменить все встречающиеся значения, применяется метод replaceAll()
let s3 = "hello hello";
let new_s3 = s3.replaceAll("hello", "oh");
console.log(new_s3);//oh oh

//Верхний и нижний регистры 
let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye)//BYE!

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);//hi how are you?

//Начало и конец строки
let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);//true

let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);//false

//__Числовые методы

//Проверка на принадлежность числовому типу данных
let x = 34;
console.log(isNaN(x));//false 
console.log(!isNaN(x));//true 
let str = "hi";
console.log(isNaN(str));//true

//Проверка на конечность значения
let x = 3;
let str = "finite";
console.log(isFinite(x));//true
console.log(isFinite(str));//false 
console.log(isFinite(Infinity));//false 
console.log(isFinite(10 / 0));//false 

//Проверка целых чисел
let x = 3;
let str = "integer";
console.log(Number.isInteger(x));//true
console.log(Number.isInteger(str));//false
console.log(Number.isInteger(Infinity)); //false
console.log(Number.isInteger(2.4));//false

//Указание количества знаков после запятой
let x = 1.23456;
let newX = x.toFixed(2);//1.23

//Указание необходимой точности
let x = 1.23456;
let newX = x.toPrecision(2);//1.2

//__Математические методы
//Нахождение наибольшего и наименьшего числа
let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);//233

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);//1

//Квадратный корень и возведение в степень
let result = Math.sqrt(64);
console.log(result);//8

let result2 = Math.pow(5, 3);
console.log(result2);//125 -> 5 × 5 × 5

//Преобразование десятичных дробей в целые числа
let x = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.round(x));//X: 6.78 becomes 7
console.log("Y:", y, "becomes", Math.round(y));//Y: 5.34 becomes 5
console.log("X:", x, "becomes", Math.ceil(x));//X: 6.78 becomes 7
console.log("Y:", y, "becomes", Math.ceil(y));//Y: 5.34 becomes 6
console.log("X:", x, "becomes", Math.floor(x));//X: 6.78 becomes 6
console.log("Y:", y, "becomes", Math.floor(y));//Y: 5.34 becomes 5

//trunc() не округление в меньшую сторону, а просто возврат целой части
console.log("X:", x, "becomes", Math.trunc(x));//X: 6.78 becomes 6
console.log("Y:", y, "becomes", Math.trunc(y));//Y: 5.34 becomes 5

//Показатель степени и логарифм
let x = 2;
let exp = Math.exp(x);
console.log("Exp:", exp);//Exp: 7.38905609893065
let log = Math.log(exp);
console.log("Log:", log);//Log: 2

//__Метод работы с датами

//Генерирование дат
let currentDateTime = new Date();
console.log(currentDateTime);//2021-06-05T14:21:45.625Z

let now2 = Date.now();
console.log(now2);//1622902938507

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);//2022-02-10T12:10:15.100Z

//Методы получения и установки элементов даты
let d = new Date();
console.log("Day of week:", d.getDay());//Day of week: 6
console.log("Day of month:", d.getDate());//Day of month: 5
console.log("Month:", d.getMonth());//Month: 5
console.log("Year:", d.getFullYear());//Year: 2021
console.log("Seconds:", d.getSeconds());//Seconds: 24
console.log("Milliseconds:", d.getMilliseconds());//Milliseconds: 171
console.log("Time:", d.getTime());//Time: 1622903604171

//Изменить дату подобным образом можно с помощью метода set.
d.setFullYear(2010);
console.log(d);//2010-06-05T14:29:51.481Z

d.setMonth(9);
console.log(d);//2010-10-05T14:30:39.501Z

d.setHours(10);
console.log(d);//2010-10-10T10:34:54.518Z

d.setTime(1622889770682);
console.log(d);//2021-06-05T10:42:50.682Z

//Парсинг дат
let d1 = Date.parse("June 5, 2021");
console.log(d1);//1622851200000

let d2 = Date.parse("6/5/2021");
console.log(d2);//1622851200000

//Преобразование даты в строку
console.log(d.toDateString());//Sat Jun 05 2021
console.log(d.toLocaleDateString());//6/5/2021

//--------------------------
//___Объектная модель документа (DOM)__//

//BOM (Browser Object Model) - Объект window

//Объект history
//Объект history применятся для перехода на предыдущую страницу
window.history.go(-1);
//Объект navigator - информацию об используемомнами браузере — указывая, что это за браузер, какова его текущая версия и в какой операционной системе он функционирует
//Объект location - Он содержит URL текущей веб - страницы

//DOM -> head и body 
//head -> title
//body -> h1 и div. div ...

//Дополнительные свойства DOM
document // описывает DOM

//Выбор элементов страницы
//<h1 class="output">Hello World</h1>
const ele1 = document.querySelector("h1");
console.dir(ele1);//Hello World

//querySelectorAll(): он вернет все элементы, которые совпадают с заданным значением, в виде массива
//<div class="output">Test</div>
const eles = document.querySelectorAll(".output");
console.log(eles)//Test

//__Управление динамическими элементами с помощью DOM

//Базовое перемещение в DOM
/* 
<!DOCTYPE html>
<html>
 <body>
 <h1>Let's find the treasure</h1>
 <div id="forest">
 <div id="tree1">
 <div id="squirrel"></div>
 <div id="flower"></div>
 </div>
 <div id="tree2">
 <div id="shrubbery">
 <div id="treasure"></div>
 </div>
 <div id="mushroom">
 <div id="bug"></div>
 </div>
 </div>
 </div>
 </body>
</html>
*/

document.body

/* 
childNodes — более полное явление, нежели потомки. Потомки просто
содержат все HTML-элементы (по сути, узлы). childNodes содержит
еще текстовые узлы и комментарии. Для работы с потомками тем
не менее вы можете использовать идентификаторы, и это упрощает
их применение
*/
//Чтобы добраться до сокровища с помощью потомков, вам придется использовать:
console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);//<div id="treasure"></div>

//childNodes является массивом, поэтому для получения правильных дочерних элементов придется указывать точные значения индекса
console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

//код вернет нас к уровню родительскому
document.body.children.forest.children.tree2.parentElement;

//переместиться к tree1
document.body.children.forest.children.tree2.previousElementSibling;
//к tree2 
document.body.children.forest.children.tree1.nextElementSibling;

//Выбор элементов в качестве объектов
/* 
<!DOCTYPE html>
<html>
 <body>
 <h1>Welcome page</h1>
 <p id="greeting">
 Hi!
 </p>
 </body>
</html>
*/
document.body.children.greeting;//<p id="greeting">

//Изменение свойства innerText
document.body.children.greeting.innerText = "Bye!";
document.body.children.greeting.innerHTML = "<b>Bye!</b>";

//Доступ к элементам DOM
//<div id="two" class="example">Hi!</div>
document.getElementById("two");

//Доступ к элементам по названию тега
document.getElementsByTagName("div");
/* HTMLCollection(3) [div#one.example, div#two.example, div#three.something,
one: div#one.example, two: div#two.example, three: div#three.something] */
document.getElementsByTagName("div").item(1);//<div id="two" class="example">Hi!</div>

//Доступ к элементам по названию класса
document.getElementsByClassName("example");
/* 
HTMLCollection(2) [div#one.example, div#two.example, one: div#one. example,
two: div#two.example]
*/

//Доступ к элементам с помощью CSS - селектора
document.querySelector("div"); //<div id="one" class="example">Hi!</div> / первое повстречавшееся значение div

//Использование querySelectorAll()
document.querySelectorAll("div");
//NodeList(3) [div#one.example, div#two.example, div#three.something]

//Обработчик щелчка кнопкой мыши на элементе
/* 
<!DOCTYPE html>
<html>
 <body>
 <div id="one" onclick="alert('Ouch! Stop it!')">Don't click here!
 </div>
 </body>
</html>
*/

/* 
<!DOCTYPE html>
<html>
 <body>
 <script>
 function stop(){
 alert("Ouch! Stop it!");
 }
 </script>
 <div id="one" onclick="stop()">Don't click here!</div>
 </body>
</html>
*/

/* 
<!DOCTYPE html>
<html>
 <body>
 <div id="one">Don't click here!</div>
 </body>
</html>
*/
document.getElementById("one").onclick = function () {
  alert("Auch! Stop!");
}

//Ключевое слово this и DOM
//В DOM this относится к тому элементу DOM, которому оно принадлежит.Если мы определим onclick, чтобы отправить this в качестве аргумента, будет отправлен элемент с onclick.
function reveal(el) {
  console.log(el);
}
//<button onclick="reveal(this)">Click here!</button> / логировался тот элемент, в котором находится функция

//Управление стилем элемента
/* 
p {
 display: none;
}

p {
 display: block;
}
*/
//<button onclick="toggleDisplay()">Magic!</button>
function toggleDisplay() {
  let p = document.getElementById("magic");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}

//Добавление классов в элементы
document.getElementById("shape").classList.add("hide");

//Удаление классов из элементов
document.getElementById("shape").classList.remove("blue");

//Переключение классов
document.getElementById("shape").classList.toggle("hide");

//Управление атрибутами
//<a id="friend" class="fancy boxed" href="https://www.google.com">Ask my friend here.</a >
//<div id="shape" class="square"></div>
el.setAttribute("style", "background-color:red;border:1px solid black");
el.setAttribute("id", "new");
el.setAttribute("class", "circle");
//<div id="new" class="circle" style="background-color:red;border:1px solid black"></div>

//Прослушиватели событий элементов
//<div id="square" style="width:100px;height:100px;background-color: grey; ">Click for magic</div>
function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
window.onload = function () {
  document.getElementById("square").addEventListener("click", changeColor);
}

//Создание новых элементо
let el = document.createElement("p");
el.innerText = Math.floor(Math.random() * 100);
document.body.appendChild(el);

