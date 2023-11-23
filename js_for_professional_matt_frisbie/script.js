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


