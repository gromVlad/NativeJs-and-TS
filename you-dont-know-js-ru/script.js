//1____ПОЗНАКОМЬТЕСЬ,JAVASCRIPT________//

//официально язык называется ECMAScript;

//обратной совместимость

//Для нового и несовместимого синтаксиса проблема решается транспиляцией (Babel - обеспечивая тот же результат с исключением конфликта)

//Проблема совместимости решаеться полифилами 
//Полифил для finally(..) в средах до ES2019
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function f(fn) {
    return this.then(
      function t(v) {
        return Promise.resolve(fn())
          .then(function t() {
            return v;
          });
      },
      function c(e) {
        return Promise.resolve(fn())
          .then(function t() {
            throw e;
          });
      }
    );
  };
}

//Транспиляция и полифилы — два чрезвычайно эффективных приема для заполнения разрыва между кодом, использующим новейшие стабильные возможности языка, и старыми средами, которые должны поддерживаться сайтом или приложением.

//JS является компилируемым языком - инструменты (включая ядро JS) обрабатывают и проверяют код программы(выдавая сообщения о любых обнаруженных ошибках) перед ее выполнением
//- сначала транспилируется Babel
//- затем упаковывается Webpack
//- передается ядру JS
//- Ядро JS разбирает код в форму AST
//- Ядро преобразует AST в своего рода байт-код — двоичное промежуточное представление
//- виртуальная машина JS выполняет программу

// до директивы use-strict
// разрешены только пропуски и комментарии
"use strict";
// остаток файла выполняется в строгом режиме

//JS является многопарадигменным языком

//--------------------------------
//____Обзор возможностей JS_____//
//Лучший способ изучить JS — начать писать код JS)))

//__Значения
//string boolean number null  undefined Symbol
//objects(array,objects,functions)

//__Массивы и объекты
var names = ["Frank", "Kyle", "Peter", "Susan"];

var me = {
  first: "Kyle",
  last: "Simpson",
  age: 39,
  specialties: ["JS", "Table Tennis"]
};
console.log(`My name is ${me.first}.`);

//__Определение типа значения
typeof 42; // "number"
typeof "abc"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" -- ошибка!
typeof { "a": 1 }; // "object"
typeof [1, 2, 3]; // "object"
typeof function hello() { }; // "function"

//__Объявление и использование переменных
//let отличается от var оно открывает более ограниченный доступ к переменной по сравнению с var
//let имеет блоковую область видимости
var adult = true;
if (adult) {
  var myName = "Kyle";
  let age = 39;
  console.log("Shhh, this is a secret!");
}
console.log(myName);
// Kyle
console.log(age);
// Ошибка!

// const похожа на let, но с дополнительным ограничением - не может быть присвоено другое значение позднее
const myBirthday = true;
let age = 39;
if (myBirthday) {
  age = age + 1; // OK!
  myBirthday = false; // Ошибка!
}

//__Функции
function awesomeFunction(coolThings) {
  // ..
  return amazingStuff;
}

//функциональные выражение
var awesomeFunction = function (coolThings) {
  // ..
  return amazingStuff;
};

//входные данные в параметрах
function greeting(myName) {
  console.log(`Hello, ${myName}!`);
}
greeting("Kyle"); // Hello, Kyle!

// возвращать значения при помощи ключевого слова return
function greeting(myName) {
  return `Hello, ${myName}!`;
}
var msg = greeting("Kyle");
console.log(msg); // Hello, Kyle!

//функции как свойства объекта
var whatToSay = {
  greeting() {
    console.log("Hello!");
  },
  question() {
    console.log("What's your name?");
  },
  answer() {
    console.log("My name is Kyle.");
  }
};
whatToSay.greeting();
// Hello!

//__Сравнения
//===  проверка как значения, так и типа
3 === 3.0; // true
"yes" === "yes"; // true
null === null; // true
false === false; // true
42 === "42"; // false
"hello" === "Hello"; // false
true === 1; // false
0 === null; // false
"" === null; // false
null === undefined; // false

NaN === NaN; // false
0 === -0; // true
//сравнения NaN используется специальная функция
Number.isNaN(NaN)
// сравнения -0 
Object.is(-0)

//объектные значения хранятся по ссылке
[1, 2, 3] === [1, 2, 3]; // false
{ a: 42 } === { a: 42 } // false
  (x => x * 2) === (x => x * 2) // false

var x = [1, 2, 3];
// Присваивание выполняется копированием ссылки,
// поэтому y ссылается на *тот же* массив, что и x,
// а не на его новую копию.
var y = x;
y === x; // true
y === [1, 2, 3]; // false
x === [1, 2, 3]; // false

//==  оператором свободного равенства,допускает преобразование типа перед сравнением
42 == "42"; // true
1 == true; // true

//arr[i] < 500 активизирует преобразование типа
var arr = ["1", "10", "100", "1000"];
for (let i = 0; i < arr.length && arr[i] < 500; i++) {
  // will run 3 times
}

//!!!никогда не использовать несовпадающие типы в сравнениях

//__Организация кода JS
//классы и модули

//__Классы
class Page {
  constructor(text) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}
class Notebook {
  constructor() {
    this.pages = [];
  }
  addPage(text) {
    var page = new Page(text);
    this.pages.push(page);
  }
  print() {
    for (let page of this.pages) {
      page.print();
    }
  }
}
var mathNote = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");

//наследование (и полиморфизм)
// используется ключевое слово extends
class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
  print() {
    console.log(`
 Title: ${this.title}
 By: ${this.author}
 ${this.pubDate}
 `);
  }
}

class Book extends Publication {
  constructor(bookDetails) {
    super(
      bookDetails.title,
      bookDetails.author,
      bookDetails.publishedOn
    );
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }
  print() {
    super.print();
    console.log(`
    Publisher: ${this.publisher}
    ISBN: ${this.ISBN}
    `);
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }
  print() {
    super.print();
    console.log(this.URL);
  }
}

var YDKJS = new Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789"
});
YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = new BlogPost(
  "For and against let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);
forAgainstLet.print();
 // Title: For and against let
 // By: Kyle Simpson
 // October 27, 2014
 // https://davidwalsh.name/for-and-against-let

// !унаследованный и переопределенный методы могут иметь одинаковые имена и сосуществовать в классе, называется полиморфизмом

//__Модули

//фабричные функций модулей
function Publication(title, author, pubDate) {
  var publicAPI = {
    print() {
      console.log(`
      Title: ${title}
      By: ${author}
      ${pubDate}
      `);
    }
  };
  return publicAPI;
}

function Book(bookDetails) {
  var pub = Publication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.publishedOn
  );
  var publicAPI = {
    print() {
      pub.print();
      console.log(`
      Publisher: ${bookDetails.publisher}
      ISBN: ${bookDetails.ISBN}
      `);
    }
  };
  return publicAPI;
}  

function BlogPost(title, author, pubDate, URL) {
  var pub = Publication(title, author, pubDate);
  var publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    }
  };
  return publicAPI;
}

var YDKJS = Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789"
});
YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly

var YDKJS = Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789"
});
YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly

//отличие — отсутствие new и вызов фабрик модулей как обычных функций

//_Модули ES

//publication.js:
function printDetails(title, author, pubDate) {
  console.log(`
  Title: ${title}
  By: ${author}
  ${pubDate}
  `);
}
export function create(title, author, pubDate) {
  var publicAPI = {
    print() {
      printDetails(title, author, pubDate);
    }
  };
  return publicAPI;
}

//blogpost.js:
import { create as createPub } from "publication.js";
function printDetails(pub, URL) {
  pub.print();
  console.log(URL);
}

export function create(title, author, pubDate, URL) {
  var pub = createPub(title, author, pubDate);
  var publicAPI = {
    print() {
      printDetails(pub, URL);
    }
  };
  return publicAPI;
}

//-------------------------------
//________JS: копаем вглубь________//

//__Итерации
//Паттерн «Итератор» - обрабатывать источник — т. е. коллекцию данных — последовательно
//завершение перебора обычно обозначается каким-нибудь специальным значением
//for..of
for (let val of it) {
  console.log(`Iterator value: ${val}`);
}

// распределение итератора в массив,
// каждое значение в переборе занимает
// отдельный элемент (позицию) в массиве.
var vals = [...it];

//Распределение при вызове функции:
// распределение итератора в вызов функции,
// каждое значение в переборе занимает
// отдельный аргумент (позицию).
doSomethingUseful(...it);

//итерируемые значения
//строки, массивы, карты, множества и т.д
// массив является итерируемым значением
var arr = [10, 20, 30];
for (let val of arr) {
  console.log(`Array value: ${val}`);
}
// Array value: 10
// Array value: 20
// Array value: 30

var arrCopy = [...arr];

var greeting = "Hello world!";
var chars = [...greeting];
chars;
// [ "H", "e", "l", "l", "o", " ",
// "w", "o", "r", "l", "d", "!" ]

// Два элемента DOM, `btn1` и `btn2`
var buttonNames = new Map();
buttonNames.set(btn1, "Button 1");
buttonNames.set(btn2, "Button 2");
for (let [btn, btnName] of buttonNames) {
  btn.addEventListener("click", function onClick() {
    console.log(`Clicked ${btnName}`);
  });
}

for (let btnName of buttonNames.values()) {
  console.log(btnName);
}
// Button 1
// Button 2

var arr = [10, 20, 30];
for (let [idx, val] of arr.entries()) {
  console.log(`[${idx}]: ${val}`);
}
// [0]: 10
// [1]: 20
// [2]: 30

//три формы итераторов: только для ключей (keys()), только для значений (values()) и для записей (entries()).

//___Замыкания
//функция запоминает и продолжает обращаться к переменным, находящимся вне ее области видимости
//прямые ссылки, сохраняющие саму переменную
function greeting(msg) {
  return function who(name) {
    console.log(`${msg}, ${name}!`);
  };
}
var hello = greeting("Hello");
var howdy = greeting("Howdy");
hello("Kyle");
// Hello, Kyle!
hello("Sarah");
// Hello, Sarah!
howdy("Grant");
// Howdy, Grant!

function counter(step = 1) {
  var count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  };
}
var incBy1 = counter(1);
var incBy3 = counter(3);
incBy1(); // 1
incBy1(); // 2
incBy3(); // 3
incBy3(); // 6
incBy3(); // 9

//встречаются при работе с асинхронным кодом
function getSomeData(url) {
  ajax(url, function onResponse(resp) {
    console.log(
      `Response (from ${url}): ${resp}`
    );
  });
}
getSomeData("https://some.url/wherever");
// Response (from https://some.url/wherever): ...

//__Ключевое слово this
//контекст выполнения
//Контекст выполнения функции динамичен, и он полностью зависит от того, как вызывается функция
function classroom(teacher) {
  return function study() {
    console.log(
      `${teacher} says to study ${this.topic}`
    );
  };
}
var assignment = classroom("Kyle");
// Kyle says to study undefined -- Oops :(

var homework = {
  topic: "JS",
  assignment: assignment
};
homework.assignment();
// Kyle says to study JS

var otherHomework = {
  topic: "Math"
};
assignment.call(otherHomework);
// Kyle says to study Math

//__Прототипы
//связь между двумя объектами
//Серия объектов, связанных через их прототипы, называется «цепочкой прототипов»
var homework = {
  topic: "JS"
};
homework.toString(); // [object Object]

//Связывание объектов
var homework = {
  topic: "JS"
};
var otherHomework = Object.create(homework);
otherHomework.topic; // "JS"
//Object.prototype (toString(),valueOf().. ) <- homework <- otherHomework

homework.topic;
// "JS"
otherHomework.topic;
// "JS"
otherHomework.topic = "Math";
otherHomework.topic;
// "Math"
homework.topic;
// "JS" -- не "Math"

function Classroom() {
  // ..
}
Classroom.prototype.welcome = function hello() {
  console.log("Welcome, students!");
};
var mathClass = new Classroom();
mathClass.welcome();
// Welcome, students!

//the same
class Classroom {
  constructor() {
    // ..
  }
  welcome() {
    console.log("Welcome, students!");
  }
}
var mathClass = new Classroom();
mathClass.welcome();
// Welcome, students!

//this поддерживает динамический контекст
var homework = {
  study() {
    console.log(`Please study ${this.topic}`);
  }
};
var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();
// Please study JS
var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();
// Please study Math


//__Практика

//Сравнения
/* 
Функция scheduleMeeting(..) должна получать время
начала встречи (строка «чч:мм» в 24-часовом формате) и ее продолжительность (в минутах). Функция
должна вернуть true, если встреча приходится полностью на рабочий день (в соответствии с временем,
заданным в dayStart и dayEnd)
*/
function scheduleMeeting(startTime, durationMinutes) {
  var [, meetingStartHour, meetingStartMinutes] =
    startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
  durationMinutes = Number(durationMinutes);
  if (
    typeof meetingStartHour == "string" &&
    typeof meetingStartMinutes == "string"
  ) {
    let durationHours =
      Math.floor(durationMinutes / 60);
      durationMinutes =
      durationMinutes - (durationHours * 60);
    let meetingEndHour =
      Number(meetingStartHour) + durationHours;
    let meetingEndMinutes =
      Number(meetingStartMinutes) +
      durationMinutes;
    if (meetingEndMinutes >= 60) {
      meetingEndHour = meetingEndHour + 1;
      meetingEndMinutes =
      meetingEndMinutes - 60;
    }
    // сформировать полностью уточненные строки
    // времени (для упрощения сравнений)
    let meetingStart = `${meetingStartHour.padStart(2, "0")}:${meetingStartMinutes.padStart(2, "0")}`;
    let meetingEnd = `${String(meetingEndHour).padStart(2, "0")}:${String(meetingEndMinutes).padStart(2, "0")}`;
    // ПРИМЕЧАНИЕ: так как все выражения являются
    // строками, все сравнения являются
    // алфавитными, однако здесь такое сравнение
    // безопасно, потому что используются
    // полностью уточненные строки времени
    // (например, "07:15" < "07:30")
    return (
      meetingStart >= dayStart &&
      meetingEnd <= dayEnd
    );
  }
  return false;
}
scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false

//Замыкания
/* 
Функция range(..) получает в первом аргументе
число, представляющее первое числовое значение
в диапазоне. Второй аргумент также является числом,
представляющим вторую границу диапазона (включительно). Если второй аргумент опущен, должна
возвращаться другая функция, которая рассчитывает
получить этот аргумент.
*/
function range(start, end) {
  start = Number(start) || 0;
  if (end === undefined) {
    return function getEnd(end) {
      return getRange(start, end);
    };
  }
  else {
    end = Number(end) || 0;
    return getRange(start, end);
  }
  // **********************
  function getRange(start, end) {
    var ret = [];
    for (let i = start; i <= end; i++) {
      ret.push(i);
    }
    return ret;
  }
}
range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []
var start3 = range(3);
var start4 = range(4);
start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []
start4(6); // [4,5,6]

//Прототипы
/* 
Определите в программе модель «однорукого бандита» с тремя колесами, которые могут вращаться по
отдельности вызовом spin(), а затем выводит текущие
значения всех колес вызовом display()
*/
function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
  symbols: [
    "X", "Y", "Z", "W", "$", "*", "<", "@"
  ],
  spin() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      );
    }
    this.position = (
      this.position + 100 + randMax(100)
    ) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      );
    }
    return this.symbols[this.position];
  }
};
var slotMachine = {
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel)
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    var lines = [];
    // display all 3 lines on the slot machine
    for (
      let linePos = -1; linePos <= 1; linePos++
    ) {
      let line = this.reels.map(
        function getSlot(reel) {
          var slot = Object.create(reel);
          slot.position = (
            reel.symbols.length +
            reel.position +
            linePos
          ) % reel.symbols.length;
          return reel.display.call(slot);
        }
      );
      lines.push(line.join(" | "));
    }
    return lines.join("\n");
  }
};

slotMachine.spin();
slotMachine.display();
// < | @ | *
// @ | X | <
// X | Y | @
slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *

//-----------------------------------------
//-----------------------------------------
//_________ОБЛАСТЬ ВИДИМОСТИ И ЗАМЫКАНИЯ_______//

//--------------------------------
//___Что такое область видимости ?____//

//областью видимости (scope)

//JS точнее всего описывать как компилируемый язык
//при компиляции обрабатывается сразу вся программа,при интерпретации исходный код преобразуется строка за строкой
//3 основных этапов
// - Разбиение на лексемы/лексический разбор строка символовразбивается на осмысленные(для языка) фрагменты, называемые лексемами var a = 2 -> a, =, 2 и ;.
//- Разбор: поток (массив) лексем преобразуется в дерево вложенных элементов -  абстрактным синтаксическим деревом(AST)
//Генерирование кода: AST преобразуется в исполняемый код

//Приемник - присваивается ли ей значение
//students = [ // ..
//for (let student of students) { -> student

//Источники
//for (let student of students) { -> students

//__Лексические области видимости
//определяется на стадии компиляции, фактическое создание откладывается до стадии выполнения
// Если переменная не объявлена в текущей области видимости, то проверяется следующая внешняя / вмещающая область видимости

//--------------------------------
//_______Лексическая видимость_________//
/* 
метафора по поводу работы 
Представьте, что у вас есть куча красных, синих и зеленых камешков. Вы хотите разложить все камешки по банкам: красные кладутся в красную банку, зеленые — в зеленую, а синие — в синюю.
Если после сортировки вам понадобится зеленый камешек, вы
уже знаете, что его нужно искать в зеленой банке.

Таким образом, цвет каждого камешка определяется
цветом области видимости, в которой этот камешек был изначально создан.
*/
var students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Suzy" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" }
];
function getStudentName(studentID) {
  // Функциональная область видимости: СИНИЙ
  for (let student of students) {
    // Область видимости цикла: ЗЕЛЕНЫЙ
    if (student.id == studentID) {
      return student.name;
    }
  }
}
var nextStudent = getStudentName(73);
console.log(nextStudent); // Suzy

//выражение в области видимости ЗЕЛЕНЫЙ(3) может обращаться к переменным из КРАСНЫЙ(1), СИНИЙ(2) и ЗЕЛЕНЫЙ(3) и т.д

//краткая сводка обработки команд вида var students = [ .. ] за два этапа:
//- Компилятор создает объявление переменной в области видимости (так как она еще не была ранее объявлена в текущей области видимости).
//- Во время работы Движка для обработки присваивания в этойкоманде Движок дает команду Менеджеру области видимостипровести поиск переменной и инициализировать ее undefined, чтобы она была готова к использованию, после чего присваивает ему значение - массив.

//__Вложенная область видимости
//Области видимости могут вкладываться друг в друга на произвольную глубину
//Один из ключевых аспектов лексической области видимости заключается в том, что если в любой момент ссылку на идентификатор не удается найти в текущей области видимости, происходит обращение к следующей внешней области видимости; процесс повторяется, пока не будет обнаружен ответ или пока не будут проверены все возможные области видимости
//При неудаче - ReferenceError

//__Цепочка областей видимости
// определяет путь, по которому можно обращаться к переменным

//__Затенение
//В одной области видимости не может быть двух и более переменных с совпадающими именами; такие множественные ссылки будут интерпретироваться как одна переменная

var studentName = "Suzy";
function printStudent(studentName) {
  studentName = studentName.toUpperCase();
  console.log(studentName);
}
printStudent("Frank");
// FRANK
printStudent(studentName);
// SUZY
console.log(studentName);
// Suzy

//Это единственный способ обратиться к замещенной переменной из области видимости, в которой находится замещающая переменная - !так не делать
var studentName = "Suzy";
function printStudent(studentName) {
  console.log(studentName);
  console.log(window.studentName);
}
printStudent("Frank");
// "Frank"
// "Suzy"

var special = 42;
function lookingFor(special) {
  // Идентификатор `special` (параметр) в этой
  // области видимости замещается внутри keepLooking()
  // и поэтому недоступен из этой области видимости.
  function keepLooking() {
    var special = 3.141592;
    console.log(special);
    console.log(window.special);
  }
  keepLooking();
}
lookingFor(112358132134);
// 3.141592
// 42

//Подведем итог: объявление let (во внутренней области видимости) всегда может затенить объявление var во внешней области видимости.Объявление var (во внутренней области видимости) может затенить объявление let во внешней области видимости только в том случае, если между ними есть граница функции

//___Область видимости имени функции

//askQuestion функция не «поднимается» / ofTheTeacher объявляется как идентификатор внутри самой функции
var askQuestion = function ofTheTeacher() {
  // ..
};

//__Стрелочные функции
//Объявления переменной в этой вложенной областивидимости подчиняются тем же правилам, что и в функциональной области видимости
var askQuestion = () => {
  // ..
};
() => 42;
id => id.toUpperCase();
(id, name) => ({ id, name });

//------------------------------------
//_______Глобальная область видимости_________//

// внутри самой глобальной области видимости свойствоглобального объекта может быть затенено глобальной переменной
window.something = 42;
let something = "Kyle";
console.log(something);
// Kyle
console.log(window.something);
//42

//всегда используйте var для глобальных имен. let и const следует зарезервировать для блоковых областей видимости

//элемент DOM с идентификатором id автоматически создает глобальную переменную, которая ссылается на него
// никогда не используйте эти глобальныепеременные, хотя они всегда будут незаметно создаваться
/* 
<ul id="my-todo-list">
  <li id="first">Write a book</li>
  ..
</ul>
*/
window["my-todo-list"];// <ul id="my-todo-list">..</ul>

//window.name — заранее определенный глобальный элемент / если бы мы использовали let name привело бы к затенению window.name
var name = 42;
console.log(name, typeof name);
// "42" string

//__Веб-работники
//позволяет файлу выполняться в потоке
var studentName = "Kyle";
let studentID = 42;
function hello() {
  console.log(`Hello, ${self.studentName}!`);
}
self.hello();
// Hello, Kyle!
self.studentID;
// undefined

//__Консоль средств разработчика/REPL
//Такие инструменты обычно до какой-то степени эмулируют глобальную область видимости; это именно эмуляция, а не строгое соответствие

//__Модули ES (ESM)
//Они существуют на уровне модуля
var studentName = "Kyle";
function hello() {
  console.log(`Hello, ${studentName}!`);
}
hello();
// Hello, Kyle!
export default hello;

//__Node
//верхний уровень программ Node никогда не бывает глобальнойобластью видимости
//, Node фактически упаковывает такой кодв функцию, чтобы объявления var и function содержались в области видимости функции - обертки, а не считались глобальными переменными
var studentName = "Kyle";
function hello() {
  console.log(`Hello, ${studentName}!`);
}
hello();
// Hello, Kyle!
module.exports.hello = hello;
//Как же определять реальные глобальные переменные в Node? global. global
global.studentName = "Kyle";
function hello() {
  console.log(`Hello, ${studentName}!`);
}
hello();
// Hello, Kyle!
module.exports.hello = hello;

//__globalThis
// надежная ссылка на глобальную область видимости )))
const theGlobalScopeObject =
  (typeof globalThis != "undefined") ? globalThis :
    (typeof global != "undefined") ? global :
      (typeof window != "undefined") ? window :
        (typeof self != "undefined") ? self :
          (new Function("return this"))();

//----------------------------------------------------
//___(Не такой уж) тайный жизненный цикл переменных_____//

//поднятие предполагает, что программа переупорядочивается движком JS 

//__Поднятие функций
//Этот код работает нормально - поднятием (hoisting)
greeting();
// Hello!
function greeting() {
  console.log("Hello!");
}

//«‘greeting’ не является функцией
greeting();
// TypeError
var greeting = function greeting() {
  console.log("Hello!");
};

//__Поднятие переменной
greeting = "Hello!";
console.log(greeting);
// Hello!
var greeting = "Howdy!";

//__Повторное объявление
var studentName = "Frank";
console.log(studentName); // Frank
var studentName;
console.log(studentName); // Frank <--- все равно!
// добавим явную инициализацию
var studentName = undefined;
console.log(studentName); // undefined <--- видите!?

var greeting;
function greeting() {
  console.log("Hello!");
}
// по сути пустая операция
var greeting;
typeof greeting; // "function"
var greeting = "Hello!";
typeof greeting; // "string"

// повторно объявить переменную можно только - использовать var во всех (двух или более) объявлениях

//Ключевое слово const требует, чтобы переменная была инициализирована
const empty; // SyntaxError
const studentName = "Frank";
console.log(studentName);
// Frank
studentName = "Suzy"; // TypeError

//__Циклы
//когда во время выполнения программа входит в область видимости, происходит сброс в исходное состояние
var keepGoing = true;
while (keepGoing) {
  let value = Math.random();
  if (value > 0.5) {
    keepGoing = false;
  }
}

for (let i = 0; i < 3; i++) {
  let value = i * 10;
  console.log(`${i}: ${value}`);
}
// 0: 0
// 1: 10
// 2: 20

//__TDZ
//всегда размещайте объявления let и const в начале области видимости
console.log(studentName);
// ReferenceError
let studentName = "Suzy";

//-------------------------------------------------
//___Ограничение раскрытия областей видимости_____
