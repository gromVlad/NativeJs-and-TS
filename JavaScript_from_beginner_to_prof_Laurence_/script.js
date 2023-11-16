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











