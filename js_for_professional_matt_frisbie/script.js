//РЕАЛИЗАЦИИ JAVASCRIPT
// ядро(ECMAScript);
// объектная модель документа(Document Object Model, DOM);
// объектная модель браузера(Browser Object Model, BOM)

//------------------------
//____JavaScript в HTML____//
/* 
<script>
 function sayHi() {
 console.log("Hi!");
 }
</script>
*/

//из внешнего файла
//<script src="example.js" />

//файлы из внешних доменов
//<script src="http://www.somewhere.com/afile.js"></script>

//элементы <script> интерпретируются в том порядке, в котором они расположены, при условии, что у них нет атрибутов defer и async

//все ссылки на JS - сценарии обычно указываются в элементе < body >
/* < !DOCTYPE html >
  <html>
    <head>
      <title>Example HTML Page</title>
    </head>
    <body>
      <!-- содержимое -->
      <script src="example1.js"></script>
      <script src="example2.js"></script>
    </body>
  </html> */

//Отложенные сценарии
//defer - можно безопасно выполнить после синтаксического анализа всей страницы. Атрибут defer сигнализирует браузеру, что загрузку сценария можно начать немедленно, но его выполнение следует отложить

//Асинхронные сценарии
//async - Он также применяется только к внешним сценариям и указывает браузеру немедленно начать загрузку файла, но для сценариев с атрибутом async не гарантируется выполнение в порядке их добавления, если нужно разрешить браузеру продолжить загрузку страницы, не дожидаясь завершения загрузки и выполнения сценария

//--------------------
//_____________Основы языка________________//

//Чувствительность к регистру

//__верблюжья нотация
firstSecond
myCar
doSomethingImportant

//__Комментарии 
// /* 

//Строгий режим
"use strict"

//__Инструкции
//Инструкции в ECMAScript завершаются точками с запятой
let sum = a + b // правильно даже без точки с запятой, но не рекомендуется
let diff = a - b; // правильно и рекомендуется

// допустимо, но чревато ошибками и не рекомендуется
if (test)
  console.log(test);
// предпочтительный способ
if (test) {
  console.log(test);
}

//__Ключевые слова нельзя использовать как идентификаторы или имена свойств

//__ПЕРЕМЕННЫЕ
//var, которое доступно во всех версиях ECMAScript, const и let

//__var
//не используйте var
//поднимаеться при объявлений var
//подчиянеться области видимости функции
//глобально можно объявлять
var message = "hi";

var message = "hi",
  found = false,
  age = 29;


if (true) {
  var name = 'Matt';
  console.log(name); // Matt
}
console.log(name); // Matt

// name поднимается
console.log(name); // undefined
var name = 'Matt';

var name = 'Matt';
console.log(window.name); // 'Matt'

//__let
//не поднимается
//подчиняется области видимости блока
//глобально нельзя объявлять
if (true) {
  let age = 26;
  console.log(age); // 26
}
console.log(age); // ReferenceError: age is not defined

// age не поднимается
console.log(age); // ReferenceError: age is not defined
let age = 26;

let age = 26;
console.log(window.age); // undefined

//__Объявление let в циклах for
//переменная-итератор будет видна только блоку for
for (var i = 0; i < 5; ++i) {
  // тело цикла
}
console.log(i); // 5

for (let i = 0; i < 5; ++i) {
  // тело цикла
}
console.log(i); // ReferenceError: i is not defined

//__const
//const предпочтительнее, чем let
//нельзя использовать const для объявления итераторов цикла
//const ведет себя так же, как и let, но с одним важным отличием что попытка изменить переменную const приведет к ошибке во время выполнения
const age = 26;
age = 36; // TypeError: assignment to a constant

//!Если переменная const ссылается на объект, она не нарушаетограничения const для изменения свойств внутри этого объекта
const person = {};
person.name = 'Matt'; // допустимо

//Однако если объявить переменную цикла for, которая не будет изменяться, const допустим
for (const value of [1, 2, 3, 4, 5]) {
  console.log(value);
}
// 1, 2, 3, 4, 5

//__ТИПЫ ДАННЫХ
//примитивными типами (primitive types): неопределенный (undefined), нулевой (null), логический (boolean), числовой (number), строковый (string) и символьный (symbol)
//сложный тип данных(object),

//__Оператор typeof
//определения типа
var message = "some string";
alert(typeof message); // "string"
alert(typeof (message)); // "string"
alert(typeof 95); // "number"

//странные, но технически правильные значения
//typeof null возвращает строку "object"

//__Тип Undefined
//Неопределенный тип (undefined)
//не следует явно присваивать переменной значение undefined
let message;
console.log(message == undefined); // true

//__Тип Null
//Нулевой тип (Null)
//Логически null — это указатель на пустой объект, поэтому оператор typeof возвращает для него строку "object"
//когда нужный объектнедоступен, вместо него следует использовать null

//__Тип Boolean
//true не равно 1, а false не равно 0
let message = "Hello world!";
let messageAsBoolean = Boolean(message);//true

//FALSE - false / “” (пустая строка) / 0, NaN  / null / undefined

//__Тип Number
let intNum = 55; // целое число

//В строгом режиме - ошибка
let octalNum1 = 070; // 56 в восьмеричном формате
let octalNum2 = 079; // недопустимое восьмеричное значение –
// интерпретируется как 79

//Значения с плавающей точкой
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // допустимо, но не рекомендуется
let floatNum1 = 1.; // нет разрядов после десятичной точки –
// интерпретируется как целое число 1
let floatNum2 = 10.0; // нет дробной части –
// интерпретируется как целое число 10

//Очень большие и очень малые числа с плавающей точкой можно представлять в экспоненциальном формате
var floatNum = 3.125e7 // 31250000

//Диапазон значений
//Number.MIN_VALUE и Number.MAX_VALUE
//не попадающий в диапазон =  Infinity

//конечно ли значение,
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false

//NaN
//не число (Not a Number)
console.log(NaN == NaN); // false
//является ли он «не числом»
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false — 10 является числом
console.log(isNaN("10")); // false — может быть преобразовано в число 1

//Преобразование чисел
//Number(), parseInt() и parseFloat().
//true и false преобразуются в 1 и 0
//null преобразуется в 0
//undefined преобразуется в NaN
//Для строк действуют особые правила
let num1 = Number("Hello world!"); // NaN
let num2 = Number(""); // 0
let num3 = Number("000011"); // 11
let num4 = Number(true); // 1

let num1 = parseInt("1234blue"); // 1234
let num2 = parseInt(""); // NaN
let num3 = parseInt("0xA"); // 10 в шестнадцатеричном формате
let num4 = parseInt(22.5); // 22
let num5 = parseInt("70"); // 70 в десятичном формате
let num6 = parseInt("0xf"); // 15 в шестнадцатеричном формате
// второй аргумент: основание системы счисления
let num = parseInt("0xAF", 16); // 175
let num1 = parseInt("10", 2); // двоичное число 2
let num2 = parseInt("10", 8); // восьмеричное число 8
let num3 = parseInt("10", 10); // десятичное число 10
let num4 = parseInt("10", 16); // шестнадцатеричное число 16

let num1 = parseFloat("1234blue"); // 1234 (целое число)
let num2 = parseFloat("0xA"); // 0
let num3 = parseFloat("22.5"); // 22.5
let num4 = parseFloat("22.34.5"); // 22.34
let num5 = parseFloat("0908.5"); // 908.5
let num6 = parseFloat("3.125e7"); // 31250000

//__Тип String
//` "" ''
let firstName = "John";
let lastName = 'Jacob';
let lastName = `Jingleheimerschmidt`

//Символьные литералы
// \n - Перевод строки / \t - Табуляция ...

//Природа строк
let lang = "Java";
lang = lang + "Script"; // "JavaScript"

//Преобразование значения в строку
//toString()
let age = 11;
let ageAsString = age.toString(); // строка "11"
let found = true;
let foundAsString = found.toString(); // строка "true"

//он может вывести значениес двоичным, восьмеричным, шестнадцатеричным и любым другим допустимым основанием
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"

//String()
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;
console.log(String(value1)); // "10"
console.log(String(value2)); // "true"
console.log(String(value3)); // "null"
console.log(String(value4)); // "undefined"

//Шаблонные строки
//могут быть определены в нескольких строках
let myMultiLineTemplateLiteral = `first line
second line`;

// полезны при определении шаблонов, таких как HTML
let pageHTML = `
<div>
 <a href="#">
 <span>Jake</span>
 </a>
</div>`;

//Интерполяция
let interpolatedTemplateLiteral =
  `${value} to the ${exponent} power is ${value * value}`;
console.log(interpolatedTemplateLiteral); // 5 to the second power is 25

//Теговые функции шаблонных строк
//первый аргумент — это массив простых строк, а остальные аргументы — это результаты вычисленных выражений
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
  console.log(strings);
  console.log(aValExpression);
  console.log(bValExpression);
  console.log(sumExpression);
  return 'foobar';
}

//or
function simpleTag(strings, ...expressions) {
  console.log(strings);
  for (const expression of expressions) {
    console.log(expression);
  }
  return 'foobar';
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "foobar"

//__Тип Symbol
//Символы — примитивные значения, а экземпляры символов уникальны и неизменны.Цель символа — быть гарантированным уникальным идентификатором для свойств объекта без риска столкновения свойств
let sym = Symbol();
console.log(typeof sym); // symbol

//можно указать необязательную строку, которая может использоваться для идентификации экземпляра символа при отладке
let fooSymbol = Symbol('foo');
console.log(fooSymbol); // Symbol(foo);

//Symbol не может использоваться с ключевым словом new
let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor

//Использование глобального реестра символов
// Symbol.for()
let fooGlobalSymbol = Symbol.for('foo');
console.log(typeof fooGlobalSymbol); // "object"

let fooGlobalSymbol = Symbol.for('foo'); // создание нового символа
let otherFooGlobalSymbol = Symbol.for('foo'); // переиспользование существующего
// символа
console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true

//Символы, определенные в глобальном реестре, полностью отличаются от символов, созданных с помощью Symbol(),
let localSymbol = Symbol('foo');
let globalSymbol = Symbol.for('foo');
console.log(localSymbol === globalSymbol); // false

//проверить нахождение символа в глобальном реестре
// Создаем глобальный символ
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s)); // foo
// Создаем обычный символ
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2)); // undefined

//Использование символов в качестве свойств
let s1 = Symbol('foo'),
  s2 = Symbol('bar'),
  s3 = Symbol('baz'),
  s4 = Symbol('qux');
let o = {
  [s1]: 'foo val'
};
// Также верно: o[s1] = 'foo val';

//__Тип Object
let o = new Object; // допустимо, но не рекомендуется

//Каждый экземпляр Object имеет свойства и методы :
// - constructor — функция, которая была использована для создания объекта
// - hasOwnProperty (имяСвойства) — указывает, есть ли у объекта (не у прототипа) данное свойство
// - isPrototypeOf(объект) — определяет, является ли объект прототипом другого объекта
// - propertyIsEnumerable(имяСвойства) — указывает, можно ли перебирать данное свойство в инструкции for-in
// - toLocaleString() — возвращает строковое представление объекта с региональными настройками среды выполнения
// - toString() — возвращает строковое представление объекта
// - valueOf() — возвращает строковый, численный или логический эквивалент объекта

//__ОПЕРАТОРЫ

//Унарные операторы
//побочным эффектом c декрементoм
let age = 29;
let anotherAge = --age + 2;
console.log(age); // 28
console.log(anotherAge); // 30

//с инкрементoм
let num1 = 2;
let num2 = 20;
let num3 = num1-- + num2;
let num4 = num1 + num2;
console.log(num3); // 22
console.log(num4); // 21

//Унарные плюс и минус
let s1 = "01";
s1 = +s1; // результат — число 1

let num = 25;
num = -num;
console.log(num); // -25

//__Поразрядные операторы
let num = -18;
console.log(num.toString(2)); // "-10010"

//Поразрядное НЕ  НЕ (~)
let num1 = 25; // двоичное число 00000000000000000000000000011001
let num2 = ~num1; // двоичное число 11111111111111111111111111100110
console.log(num2); // -26

//Поразрядное И
let result = 25 & 3;
console.log(result); // 1

//Поразрядное ИЛИ
let result = 25 | 3;
console.log(result); // 27

//Поразрядное исключающее ИЛИ
let result = 25 ^ 3;
console.log(result); // 26

//Сдвиг влево
//сдвигает все биты числа влево на указанное количество позиций
let oldValue = 2; // 10 в двоичном формате
let newValue = oldValue << 5; // 1000000 в двоичном формате (десятичное 64)

//Сдвиг вправо с сохранением знака
let oldValue = 64; // 1000000 в двоичном формате
let newValue = oldValue >> 5; // 10 в двоичном формате или 2 в десятичном

//Сдвиг вправо с заполнением нулями
let oldVallue = 64; // 1000000 в двоичном формате
let newValue = oldValue >>> 5; // 10 в двоичном формате или 2 в десятичном

//__Логические операторы
//НЕ, И и ИЛИ.

//Логическое НЕ
console.log(!false); // true
console.log(!"blue"); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!""); // true
console.log(!12345); // false

//Логическое И
let result = true && true; //true
let result = true && false; // false

//Логическое ИЛИ
let result = true || false;// true

//__Мультипликативные операторы
// * / %...
let result = 34 * 56;
let result = 66 / 11;
let result = 26 % 5; // 1

//__Оператор возведения в степень
console.log(Math.pow(3, 2)); // 9
console.log(3 ** 2); // 9

//__Операторы сложения и вычитания
let result = 1 + 2;
let result1 = 5 + 5; // два числа
console.log(result1); // 10
let num1 = 5;
let num2 = 10;
let message = "The sum of 5 and 10 is " + num1 + num2;
console.log(message); // выводится сообщение о том, что сумма 5 и 10 равна 510

let result1 = 5 - true; // 4, потому что true преобразуется в 1
let result2 = NaN - 1; // NaN
let result3 = 5 - 3; // 2
let result4 = 5 - ""; // 5, потому что "" преобразуется в 0
let result5 = 5 - "2"; // 3, потому что "2" преобразуется в 2
let result6 = 5 - null; // 5, потому что null преобразуется в 0

//__Операторы отношений
let result1 = 5 > 3; // true
let result2 = 5 < 3; // false
let result = "Brick" < "alphabet"; // true
let result = "23" < 3; // false

//__Равенство и неравенство
let result1 = ("55" == 55); // true — равно благодаря преобразованию
let result2 = ("55" === 55); // false — не равно из-за разных типов данных

let result1 = ("55" != 55); // false — равно благодаря преобразованию
let result2 = ("55" !== 55); // true — не равно из-за разных типов данных

//__Условный оператор
let max = (num1 > num2) ? num1 : num2

//__Операторы присваивания
let num = 10;
num += 10;

//__Оператор «запятая»
let num1 = 1, num2 = 2, num3 = 3;

//__Инструкция if
if (i > 25) {
  console.log("Greater than 25.");
} else if (i < 0) {
  console.log("Less than 0.");
} else {
  console.log("Between 0 and 25, inclusive.");
}

//__Инструкция do-while
//Тело цикла выполняется как минимум один раз
let i = 0;
do {
  i += 2;
} while (i < 10);

//__Инструкция while
let i = 0;
while (i < 10) {
  i += 2;
}

//__Инструкция for
let count = 10;
for (let i = 0; i < count; i++) {
  console.log(i);
}

//__Инструкция for-in
//для перебора несимвольных ключевых свойств объектов
for (const propName in window) {
  document.write(propName);
}
//всех свойств объекта windows

//__Инструкция for-of
//прохождения элементов в итерируемом объекте
for (const el in [2, 4, 6, 8]) {
  document.write(el);
}

//__Метки инструкций
start: for (let i = 0; i < count; i++) {
  console.log(i);
}
//на метку start можно ссылаться позднее в инструкции break или continue

//__Инструкции break и continue
// break немедленно завершает цикл, передавая управление следующей инструкции после цикла
// continue завершает только текущую итерацию цикла
let num = 0;
for (let i = 1; i < 10; i++) {
  if (i % 5 == 0) {
    break;
  }
  num++;
}
console.log(num); // 4

let num = 0;
for (let i = 1; i < 10; i++) {
  if (i % 5 == 0) {
    continue;
  }
  num++;
}
console.log(num); // 8

//с помеченными инструкциями
outermost:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outermost;
    }
    num++;
  }
}
console.log(num); // 55

//__Инструкция with
//В строгом режиме инструкция with не поддерживается
//делает областью видимости кода конкретный объект
//ради удобства для тех случаев, когда имя одного объекта приходится вводить снова и снова
let qs = location.search.substring(1);
let hostName = location.hostname;
let url = location.href;

//можно переписать следующим образом
with (location) {
  let qs = search.substring(1);
  let hostName = hostname;
  let url = href;
}

//__Инструкция switch
switch (i) {
  case 25:
    console.log("25");
    break;
  case 35:
    console.log("35");
    break;
  case 45:
    console.log("45");
    break;
  default:
    console.log("Other");
}

//__ФУНКЦИИ
function sayHi(name, message) {
  console.log("Hello " + name + ", " + message);
}

//при достижении инструкции return функция сразу завершается
function sum(num1, num2) {
  return num1 + num2;
  console.log("Hello world!"); // никогда не выполняется
}

//return можно также использовать без указания возвращаемого значения
function sayHi(name, message) {
  return;
  console.log("Hello " + name + ", " + message); // никогда не вызывается
}

//-----------------------------------
//____Переменные, область видимости и память______//
//переменные могут содержать значения двух видов: примитивные и ссылочные

//Ссылочные значения - работаете не с самим объектом, а со ссылкой (reference) на него

//Копирование значений
//примитивные 
let num1 = 5;
let num2 = num1; //5

//ссылочные
//обе переменные указывают на один объект
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); // "Nicholas"

//Передача аргументов
//аргументы в функции передаются только по значению
function addTen(num) {
  num += 10;
  return num;
}
let count = 20;
let result = addTen(count);
console.log(count); // 20 — без изменений
console.log(result); // 30

function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}
let person = new Object();
setName(person);
console.log(person.name); // "Nichola

//Проверка типа
let s = "Nicholas";
console.log(typeof s); // string
console.log(person instanceof Object); // относится ли person к типу Object?

//__КОНТЕКСТ ВЫПОЛНЕНИЯ И ОБЛАСТЬ ВИДИМОСТИ
// Каждый контекст может искать переменные и функции в цепочке областей видимости по направлению наружу, но не внутрь.
//Основных типов контекстов выполнения два, глобальный контекст и контекст функции
var color = "blue";
function changeColor() {
  let anotherColor = "red";
  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    // здесь доступны переменные color, anotherColor и tempColor
  }
  // здесь доступны переменные color и anotherColor, но не tempColor
  swapColors();
}
// здесь доступна только переменная color
changeColor();

//Объявление области действия блока с помощью let, const
if (true) {
  let a;
}
console.log(a); // ReferenceError: a is not defined

if (true) {
  const a = 0;
}
console.log(a); // ReferenceError: a is not defined

//__СБОРКА МУСОРА
//за управление памятью при работе сценариев отвечает среда выполнения

//Отслеживание и очистка
//Когда переменная покидает контекст, она помечается как находящаяся вне контекста,после этого, считаются готовыми к удалению
//примерно таким же способом очищаеться и ссылочные данные

//Утечки памяти
let outer = function () {
  let name = 'Jake';
  return function () {
    return name;
  };
}
//пока существует функция outer, переменная name не может быть очищена

//-------------------------------------------
//______Ссылочные типы_________

//__ТИП DATE
let now = new Date();

//создать объект Date для 23 мая 2019 г
let someDate = new Date("May 23, 2019");

// 5 мая 2005 г., 17:55:55 по локальному времени
let allFives = new Date(2005, 4, 5, 17, 55, 55);

// получение времени начала
let start = Date.now();

let date1 = new Date(2019, 0, 1); // 1 января 2019 г.
let date2 = new Date(2019, 1, 1); // 1 февраля 2019 г.
console.log(date1 < date2); // true
console.log(date1 > date2); // false

//getTime()  / setTime (миллисекунды) / setFullYear (год) / getMonth() ...

//__ТИП REGEXP
//регулярные выражения
//g — включает глобальный режим
//i — включает режим без учета регистр
//m — включает многострочный режим
//y — включает режим закрепления
//u — включает режим Юникода.

//Регулярное выражение создается путем объединения шаблона и флагов
// Поиск всех экземпляров "at" в строке.
let pattern1 = /at/g;

// Поиск первого экземпляра "bat" или "cat" без учета регистра.
let pattern2 = /[bc]at/i;

// Поиск всех трехсимвольных сочетаний, заканчивающихся на "at", независимо от регистра.
let pattern3 = /.at/gi;

// Поиск первого экземпляра "bat" или "cat" без учета регистра.
let pattern1 = /[bc]at/i;

// То же, что и pattern1, но с использованием конструктора.
let pattern2 = new RegExp("[bc]at", "i");

let re = null;
for (let i = 0; i < 10; i++) {
  re = /cat/g;
  re.test("catastrophe");
}

//Свойства экземпляра RegExp
let pattern1 = /\[bc\]at/i; 
console.log(pattern1.global); // false
console.log(pattern1.ignoreCase); // true

//___Тип Boolean
let booleanObject = new Boolean(true);

//__Тип Number
let numberObject = new Number(10);
let num = 10;
console.log(num.toString()); // "10"

//__Тип String
let stringObject = new String("hello world");
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false

let stringValue = " hello world ";
let trimmedStringValue = stringValue.trim();

let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman

let stringValue = "foo";
console.log(stringValue.padStart(6)); // " foo"
console.log(stringValue.padStart(9, ".")); // "......foo"

let stringValue = "hello world";
console.log(stringValue.toLocaleUpperCase()); // "HELLO WORLD"
console.log(stringValue.toUpperCase()); // "HELLO WORLD"

let text = "cat, bat, sat, fat";
let pattern = /.at/;
// то же, что и pattern.exec(text)
let matches = text.match(pattern);
console.log(matches.index); // 0
console.log(matches[0]); // "cat"
console.log(pattern.lastIndex); // 0

let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"

let colorText = "red,blue,green,yellow";
let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"]
let colors2 = colorText.split(",", 2); // ["red", "blue"]
let colors3 = colorText.split(/[^\,]+/); // ["", ",", ",", ",", ""]

let stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); // 1
console.log(stringValue.localeCompare("yellow")); // 0
console.log(stringValue.localeCompare("zoo")); // -1

//__Строковые итераторы и деструктурирование
let message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next()); // {value: "a", done: false}
console.log(stringIterator.next()); // {value: "b", done: false}
console.log(stringIterator.next()); // {value: "c", done: false}
console.log(stringIterator.next()); // {value: undefined, done: true}

//__Методы кодирования URI
//Чтобы браузер все же мог принимать и понимать их, методы кодирования URI
// encodeURI() не кодирует специальные знаки, входящие в URI
//encodeURIComponent() кодирует любой нестандартный знак
let uri = "http://www.wrox.com/illegal value.js#start";
console.log(encodeURI(uri));//// "http://www.wrox.com/illegal%20value.js#start"
console.log(encodeURIComponent(uri));//// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"

//обратные методы, decodeURI() и decodeURIComponent()

//__Объект Window
let color = "red";
function sayColor() {
  console.log(window.color);
}
window.sayColor(); // "red"

//__Объект Math
let max = Math.max(3, 54, 32, 16);
console.log(max); // 54
let min = Math.min(3, 54, 32, 16);
console.log(min); // 3

console.log(Math.ceil(25.9)); // 26
console.log(Math.ceil(25.5)); // 26
console.log(Math.ceil(25.1)); // 26
console.log(Math.round(25.9)); // 26
console.log(Math.round(25.5)); // 26
console.log(Math.round(25.1)); // 25
console.log(Math.fround(0.4)); // 0.4000000059604645
console.log(Math.fround(0.5)); // 0.5
console.log(Math.fround(25.9)); // 25.899999618530273
console.log(Math.floor(25.9)); // 25
console.log(Math.floor(25.5)); // 25
console.log(Math.floor(25.1)); // 25

let num = Math.floor(Math.random() * 10 + 1);

//Math.abs(x) / Math.exp(x) / Math.expm1(x) / Math.log(x) ...

//------------------------------------
//____Ссылочные типы коллекций______

//__ТИП OBJECT
let person = new Object();
person.name = "Nicholas";
person.age = 29;

let person = {
  name: "Nicholas",
  age: 29
};

//Для доступа к свойствам объектов обычно применяется точечная нотация
alert(person["name"]); // "Nicholas"
alert(person.name); // "Nicholas"

//__ТИП ARRAY
let colors = new Array("red", "blue", "green");
let colors = ["red", "blue", "green"]; // массив с тремя строками

// Строки будут разбиты на массив из отдельных символов
alert(Array.from("Matt")); // ["M", "a", "t", "t"]

let colors = ["red", "blue", "green"]; // объявить массив строк
alert(colors[0]); // вывести первый элемент
colors[2] = "black"; // изменить третий элемент
colors[3] = "brown"; // добавить четвертый элемент

if (Array.isArray(value)) {
  // какие-то действия с массивом
}

const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());
alert(aKeys); // [0, 1, 2, 3]
alert(aValues); // ["foo", "bar", "baz", "qux"]
alert(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

// Весь массив заполняется пятерками
zeroes.fill(5);
alert(zeroes); // [5, 5, 5, 5, 5]
zeroes.fill(0); // сброс
// Заполнение массива начиная с индекса 3 шестерками
zeroes.fill(6, 3);
alert(zeroes); // [0, 0, 0, 6, 6]

let ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
ints.copyWithin(5);
alert(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

let colors = ["red", "blue", "green"]; // массив с тремя строками
alert(colors.toString()); // red,blue,green
alert(colors.valueOf()); // red,blue,green

let colors = ["red", "blue"];
colors.push("brown"); // добавление элемента
colors[3] = "black"; // добавление элемента
alert(colors.length); // 4
let item = colors.pop(); // получение последнего элемента
alert(item); // "black"

let values = [1, 2, 3, 4, 5];
values.reverse();// 5,4,3,2,1

let values = [0, 1, 5, 10, 15];
values.sort();// 0,1,10,15,5

let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors); // red,green,blue
alert(colors2); // red,green,blue,yellow,black,brown

let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
alert(colors2); // green,blue,yellow,purple
alert(colors3); // green,blue,yellow

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
alert(numbers.indexOf(4)); // 3
alert(numbers.lastIndexOf(4)); // 5
alert(numbers.includes(4)); // true

const people = [
  {
    name: "Matt",
    age: 27
  },
  {
    name: "Nicholas",
    age: 29
  }
];
people.find((element, index, array) => element.age < 28)// {name: "Matt", age: 27}
alert(people.findIndex((element, index, array) => element.age < 28));
//

//Методы перебора элементов
//every() / filter() / forEach / map() / some()

let values = [1, 2, 3, 4, 5];
let sum = values.reduce((prev, cur, index, array) => prev + cur);
alert(sum); // 15







