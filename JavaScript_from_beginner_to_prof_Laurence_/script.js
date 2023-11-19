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
