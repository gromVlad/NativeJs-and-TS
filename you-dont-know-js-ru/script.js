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
//___Ограничение раскрытия областей видимости____//

//__Принцип наименьшего раскрытия
//по умолчанию раскрытие должно ограничиваться абсолютным минимумом, а все остальное должно остаться приватным 
function diff(x, y) {
  if (x > y) {
    //tmp блоковую область видимости
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
diff(3, 7); // 4
diff(7, 5); // 2

//__Сокрытие в функциональной области видимости
// внешняя/глобальная область видимости
function hideTheCache() {
  // промежуточная область видимости, в которой скрывается `cache`
  var cache = {};
  return factorial;
  // **********************
  function factorial(x) {
    // внутренняя область видимости
    if (x < 2) return 1;
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }
}
var factorial = hideTheCache();
factorial(6);
// 720
factorial(7);
// 5040

//__Немедленный вызов функциональных выражений
//IIFE (Immediately Invoked Function Expression)
var factorial = (function hideTheCache() {
  var cache = {};
  function factorial(x) {
    if (x < 2) return 1;
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }
  return factorial;
})();
factorial(6);
// 720
factorial(7);
// 5040

// внешняя область видимости
(function () {
  // внутренняя область видимости
})();
// снова внешняя область видимости

//__Создание областей видимости с блоками
{
  // не обязательно область видимости (пока)
  // ..
  // теперь мы знаем, что блок должен быть областью видимости
  let thisIsNowAScope = tr
  for (let i = 0; i < 5; i++) {
    // также является областью видимости, активизируемой
    // после каждой итерации
    if (i % 2 == 0) {
      // просто блок, не область видимости
      console.log(i);
    }
  }
}
// 0 2 4

//я рекомендую использовать дополнительную явную блоковую область видимости

function getNextMonthStart(dateStr) {
  var nextMonth, year;
  {
    let curMonth;
    [, year, curMonth] = dateStr.match(
      /(\d{4})-(\d{2})-\d{2}/
    ) || [];
    nextMonth = (Number(curMonth) % 12) + 1;
  }
  if (nextMonth == 1) {
    year++;
  }
  return `${year}-${String(nextMonth).padStart(2, "0")
    }-01`;
}
getNextMonthStart("2019-12-25"); // 2020-01-01

function sortNamesByLength(names) {
  var buckets = [];
  for (let firstName of names) {
    if (buckets[firstName.length] == null) {
      buckets[firstName.length] = [];
    }
    buckets[firstName.length].push(firstName);
  }
  // блок для сужения области видимости
  {
    let sortedNames = [];
    for (let bucket of buckets) {
      if (bucket) {
        // каждый массив сортируется по алфавиту
        bucket.sort();
        // присоединить отсортированные имена
        // к текущему списку
        sortedNames = [
          ...sortedNames,
          ...bucket
        ];
      }
    }
    return sortedNames;
  }
}
sortNamesByLength([
  "Sally",
  "Suzy",
  "Frank",
  "John",
  "Jennifer",
  "Scott"
]);
// [ "John", "Suzy", "Frank", "Sally",
// "Scott", "Jennifer" ]

//__var и let
//должна объявляться так, чтобы область ее использования была очевидно
//var присоединяется к ближайшей вмещающей области видимости функции, где бы она ни находилась
//Если объявление принадлежит блоковой области видимости, используйте let

//переменная i, по сути, всегда используется только внутри цикла
for (let i = 0; i < 5; i++) {
  // ...
}

//объявление catch можно опустить
try {
  doOptionOne();
}
catch { // Объявление catch опущено
  doOptionTwoInstead();
}

//__FiB
//полностью избегать FiB
//никогда не размещайте объявления функций непосредственновнутри любого блока.Всегда размещайте объявления функцийв любой точке области верхнего уровня функции(или глобальной области видимости).
//о нежелательности функциональных объявлений в блоках
if (true) {
  function ask() {
    console.log("Am I called?");
  }
}


var isArray = function isArray(a) {
  return Array.isArray(a);
};
// переопределите определение, если это необходимо
if (typeof Array.isArray == "undefined") {
  //Размещение функциональных выражений в блоках — абсолютно нормальное и допустимое решение
  isArray = function isArray(a) {
    return Object.prototype.toString.call(a)
      == "[object Array]";
  };
}

//--------------------------------
//___Использование замыканий____//
//Замыкание является аспектом поведения функций и только функций

//Замыкание позволяет greetStudent(..) продолжать обращатьсяк этим внешним переменным даже после завершения внешней области видимости / экземпляры students и studentID будут оставаться в памяти
// внешняя/глобальная область видимости: КРАСНЫЙ(1)
function lookupStudent(studentID) {
  // области видимости функции: СИНИЙ(2)
  var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
  ];
  return function greetStudent(greeting) {
    // область видимости функции: ЗЕЛЕНЫЙ(3)
    var student = students.find(
      student => student.id == studentID
    );
    return `${greeting}, ${student.name}!`;
  };
}
var chosenStudents = [
  lookupStudent(6),
  lookupStudent(112)
];
// обращение к свойству name функции:
chosenStudents[0].name;
// greetStudent
chosenStudents[0]("Hello");
// Hello, Sarah!
chosenStudents[1]("Howdy");
// Howdy, Frank!

//__Замыкание и стрелки
//даже крошечные стрелочные функции могут участвовать в системе замыканий
var student = students.find(
  student =>
    // область видимости функции: ОРАНЖЕВЫЙ(4)
    student.id == studentID
);

//__Накопление замыканий
//Каждый экземпляр внутренней функции addTo(..) замыкается по своей собственной переменной
//при каждом выполнении внешней функции adder(..) создается новый экземпляр внутренней функции
function adder(num1) {
  return function addTo(num2) {
    return num1 + num2;
  };
}
var add10To = adder(10);
var add42To = adder(42);
add10To(15); // 25
add42To(9); // 51

//__Живая ссылка, а не снимок
//е замыкание представляет собой живую ссылку, которая сохраняет доступ к полноценной переменной

//замыкание включают перемнные, а не ее значение
var studentName = "Frank";
var greeting = function hello() {
  // В замыкании используется `studentName`,
  // а не "Frank"
  console.log(
    `Hello, ${studentName}!`
  );
}
// позднее
studentName = "Suzy";
// позднее
greeting();
// Hello, Suzy!

var keeps = [];
for (var i = 0; i < 3; i++) {
  keeps[i] = function keepI() {
    // замыкание по `i`
    return i;
  };
}
keeps[0](); // 3 -- ПОЧЕМУ!?
keeps[1](); // 3
keeps[2](); // 3

var keeps = [];
for (var i = 0; i < 3; i++) {
  // при каждой итерации создается новая переменная `j`,
  // которой присваивается копия значения `i` на данный момент
  let j = i;
  // переменная `i` здесь еще не замкнута, поэтому ничто не
  // мешает непосредственно использовать ее текущее значение
  // при каждой итерации цикла
  keeps[i] = function keepEachJ() {
    // замыкание по `j`, не по `i`!
    return j;
  };
}
keeps[0](); // 0
keeps[1](); // 1
keeps[2](); // 2

//объявление let в цикле for создает не только одну переменную для цикла, но и новую переменную для каждой итерации цикла.Этот трюк / странность — именно то, что необходимо для наших замыканий в циклах
var keeps = [];
for (let i = 0; i < 3; i++) {
  // `let i` автоматически создает новую переменную `i`
  // для каждой итерации!
  keeps[i] = function keepEachI() {
    return i;
  };
}
keeps[0](); // 0
keeps[1](); // 1
keeps[2](); // 2

//__Типичные замыкания: Ajax и события
function lookupStudentRecord(studentID) {
  ajax(
    `https://some.api/student/${studentID}`,
    function onRecord(record) {
      console.log(
        `${record.name} (${studentID})`
      );
    }
  );
}
lookupStudentRecord(114);
// Frank (114)

//Обработчики событий
//При нажатии кнопки label все еще существует и может использоваться
function listenForClicks(btn, label) {
  btn.addEventListener("click", function onClick() {
    console.log(
      `The ${label} button was clicked!`
    );
  });
}
var submitBtn = document.getElementById("submit-btn");
listenForClicks(submitBtn, "Checkout");

//Это не замыкание а поиск по лексическим областям вызова
function say(myName) {
  var greeting = "Hello";
  output();
  function output() {
    console.log(
      `${greeting}, ${myName}!`
    );
  }
}
say("Kyle");
// Hello, Kyle!

//Переменные, которые просто присутствуют, но к которым не происходят обращения, не приводят к созданию замыканий
function lookupStudent(studentID) {
  return function nobody() {
    var msg = "Nobody's here yet.";
    console.log(msg);
  };
}
var student = lookupStudent(112);
student();
// Nobody's here yet.

//___Жизненный цикл замыканий и сборка мусора(GC)
//Замыкание может неожиданнопомешать освобождению переменной, с которой вы уже завершили работу, что приводит к утечке памяти со временем.
function manageStudentGrades(studentRecords) {
  var grades = studentRecords.map(getGrade);
  // сбросить значение `studentRecords`, чтобы предотвратить
  // нежелательное удержание памяти в замыкании
  studentRecords = null;
  return addGrade;
  // ..
}

//__Для чего нужны замыкания?
//Замыкание может повысить эффективность, так как экземплярфункции может запомнить ранее определенную информацию, вместо того чтобы каждый раз вычислять ее заново
//. Замыкание позволяет экземпляру внутренней функции makeRequest() запомнить эту переменную и обращаться к ней при необходимости
function setupButtonHandler(btn) {
  var recordKind = btn.dataset.kind;
  var requestURL = APIendpoints[recordKind];
  var requestData = data[recordKind];
  btn.addEventListener(
    "click",
    function makeRequest(evt) {
      ajax(requestURL, requestData);
    }
  );
}

//---------------------------------
//_____Паттерн «Модуль»_________//
//-Должна существовать внешняя область видимости — обычно от функции - фабрики модулей, выполняемой хотя бы один раз.
//- Внутренняя область видимости модуля должна содержать хотя бы один блок скрытой информации, представляющей состояние модуля.
//- Модуль должен возвращать через свой открытый API ссылку на хотя бы одну функцию, которая содержит замыкание на скрытое состояние модуля(чтобы это состояние сохранялось после вызова).

//__Инкапсуляция и принцип наименьшего раскрытия(POLE)

//__Пространства имен (группировка без состояния)
//несколько взаимосвязанных функций без данных

// пространство имен, не модуль
var Utils = {
  cancelEvt(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();
  },
  wait(ms) {
    return new Promise(function c(res) {
      setTimeout(res, ms);
    });
  },
  isValidEmail(email) {
    return /[^@]+@[^@.]+\.[^@.]+/.test(email);
  }
};

//__Структуры данных (группировка с состоянием)
// структура данных, не модуль
var Student = {
  records: [
    { id: 14, name: "Kyle", grade: 86 },
    { id: 73, name: "Suzy", grade: 87 },
    { id: 112, name: "Frank", grade: 75 },
    { id: 6, name: "Sarah", grade: 91 }
  ],
  getName(studentID) {
    var student = this.records.find(
      student => student.id == studentID
    );
    return student.name;
  }
};
Student.getName(73);
// Suzy

//__Модули (управление доступом с состоянием)
//getName(..) обращается к приватным скрытым данным records
// IIFE подразумевает о один центральный экземпляр модуля обычно называется одиночкой (singleton)
var Student = (function defineStudent() {
  var records = [
    { id: 14, name: "Kyle", grade: 86 },
    { id: 73, name: "Suzy", grade: 87 },
    { id: 112, name: "Frank", grade: 75 },
    { id: 6, name: "Sarah", grade: 91 }
  ];
  var publicAPI = {
    getName
  };
  return publicAPI;
  // ************************
  function getName(studentID) {
    var student = records.find(
      student => student.id == studentID
    );
    return student.name;
  }
})();
Student.getName(73); // Suzy

//__Фабрика модулей (множественные экземпляры)
// фабричная функция, не IIFE для создания одиночного экземпляра
//мы просто определяем обычную автономную функцию
function defineStudent() {
  var records = [
    { id: 14, name: "Kyle", grade: 86 },
    { id: 73, name: "Suzy", grade: 87 },
    { id: 112, name: "Frank", grade: 75 },
    { id: 6, name: "Sarah", grade: 91 }
  ];
  var publicAPI = {
    getName
  };
  return publicAPI;
  // ************************
  function getName(studentID) {
    var student = records.find(
      student => student.id == studentID
    );
    return student.name;
  }
}
var fullTime = defineStudent();
fullTime.getName(73); // Suzy

//__Модули Node CommonJS
//один модуль на файл
//по аналогии со стилем определения модулей IIFE
module.exports.getName = getName;
// ************************
var records = [
  { id: 14, name: "Kyle", grade: 86 },
  { id: 73, name: "Suzy", grade: 87 },
  { id: 112, name: "Frank", grade: 75 },
  { id: 6, name: "Sarah", grade: 91 }
];
function getName(studentID) {
  var student = records.find(
    student => student.id == studentID
  );
  return student.name;
}

//
var Student = require("/path/to/student.js");
Student.getName(73);
// Suzy

//Пример модуль
// function useCalc(..) { .. }
// function formatTotal(..) { .. }
function calculator() {
  var currentTotal = 0;
  var currentVal = "";
  var currentOper = "=";
  var publicAPI = {
    number,
    eq,
    plus() { return operator("+"); },
    minus() { return operator("-"); },
    mult() { return operator("*"); },
    div() { return operator("/"); }
  };
  return publicAPI;
  // ********************
  function number(key) {
    // цифра?
    if (/\d/.test(key)) {
      currentVal += key;
      return key;
    }
  }
  function eq() {
    // клавиша = ?
    if (currentOper != "=") {
      currentTotal = op(
        currentTotal,
        currentOper,
        Number(currentVal)
      );
      currentOper = "=";
      currentVal = "";
      return formatTotal(currentTotal);
    }
    return "";
  }
  function operator(key) {
    // серия из нескольких операций?
    if (
      currentOper != "=" &&
      currentVal != ""
    ) {
      // предполагается нажатие '='
      eq();
    }
    else if (currentVal != "") {
      currentTotal = Number(currentVal);
    }
    currentOper = key;
    currentVal = "";
    return key;
  }
  function op(val1, oper, val2) {
    var ops = {
      // ВНИМАНИЕ: стрелочные функции
      // используются только для краткости
      "+": (v1, v2) => v1 + v2,
      "-": (v1, v2) => v1 - v2,
      "*": (v1, v2) => v1 * v2,
      "/": (v1, v2) => v1 / v2
    };
    return ops[oper](val1, val2);
  }
}
var calc = calculator();
useCalc(calc, "4+3="); // 4+3=7
useCalc(calc, "+9="); // +9=16
useCalc(calc, "*8="); // *5=128
useCalc(calc, "7*2*3="); // 7*2*3=42
useCalc(calc, "1/0="); // 1/0=ERR
useCalc(calc, "+3="); // +3=ERR
useCalc(calc, "51="); // 51

//-------------------------------------
//_________Что такое this?__________//
//При вызове функции создается запись активации, также называемая контекстом выполнения
//Связывание this происходит в момент вызова функции, и то, начто ссылается this, определяется исключительно местом вызова, из которого была вызвана функция.

function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "Hello, Im " + identify.call(this);
  console.log(greeting);
}
var me = {
  name: "Kyle"
};
var you = {
  name: "Reader"
};
identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, I’m KYLE
speak.call(you); // Hello, I’m READER

function foo(num) {
  console.log("foo: " + num);
  // Подсчет вызовов `foo`.
  // Примечание: `this` в действительности сейчас содержит
  // `foo` из-за того, как была вызвана функция `foo`
  this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    // используя `call(..)`, мы гарантируем, что `this`
    // указывает на сам объект функции (`foo`)
    foo.call(foo, i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// сколько раз была вызвана функция `foo`?
console.log(foo.count); // 4

function baz() {
  // Стек вызовов: `baz`
  // Следовательно, место вызова принадлежит глобальной
  // области видимости
  console.log("baz");
  bar(); // <-- Место вызова для `bar`
}
function bar() {
  // Стек вызовов: `baz` -> `bar`
  // Следовательно, место вызова находится в `baz`
  console.log("bar");
  foo(); // <-- Место вызова для `foo`
}
function foo() {
  // Стек вызовов: `baz` -> `bar` -> `foo`
  // Следовательно, место вызова находится в `bar`
  console.log("foo");
}
baz(); // <-- Место вызова для `baz`

//__Связывание по умолчанию
//автономных вызовов функций
function foo() {
  console.log(this.a)
}
var a = 2;
foo(); // 2

//режим strict
function foo() {
  "use strict";
  console.log(this.a);
}
var a = 2;
foo(); // TypeError: `this` is `undefined`

//__Неявное связывание
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
};
obj.foo(); // 2 / this.a

//__Неявная потеря this
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
};
var bar = obj.foo; // Ссылка на функцию/синоним!
var a = "oops, global"; // `a` также является свойством
// глобального объекта
bar(); // "oops, global"

function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  // `fn` - просто еще одна ссылка на `foo`
  fn(); // <-- место вызова!
}
var obj = {
  a: 2,
  foo: foo
};
var a = "oops, global"; // `a` также является свойством
// глобального объекта
doFoo(obj.foo); // "oops, global"

//Обработчики событий в популярных JavaScript нередко заставляют обратные вызовы иметь значение this, указывающее, например, на элемент DOM

//__Явное связывание
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2
};
foo.call(obj); // 2

//__Жесткое связывание
//bind(..)  возвращает новую функцию, жестко запрограмированную для вызова исходной функции с заданным вами контекстом this.
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = {
  a: 2
};
var bar = foo.bind(obj);
var b = bar(3); // 2 3
console.log(b); // 5

//__«Контексты» вызовов API
//Во внутренней реализации эти функции почти наверняка используют явное связывание
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "awesome"
};
// Использовать `obj` как `this` для вызовов `foo(..)`
[1, 2, 3].forEach(foo, obj);
// 1 awesome 2 awesome 3 awesome

//__Связывание new
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2

//__Приоритет
//явное связывание приоритетнее неявного, а следовательно, перед проверкой неявного связывания следует сначала проверить, действует ли явное связывание
//- Функция вызвана с new (связывание new)? Если да, то this содержит новый сконструированный объект / var bar = new foo()
//- Функция вызвана с call или apply (явное связывание), дажескрытыми в жесткой привязке bind ? Если да, то this содержит явно заданный объект / var bar = foo.call( obj2 )
//- Функция вызвана с контекстом (неявное связывание), такженазываемым объектом - владельцем или содержащим объектом ? Если да, то this содержит контекстный объект. / var bar = obj1.foo()
//- В остальных случаях используется this по умолчанию (привязка по умолчанию). Если действует режим strict, выбирается undefined, а если нет — глобальный объект: var bar = foo()

//__Игнорирование this
//null или undefined, эти значения фактически игнорируются, и к вызову применяется правило связывания по умолчанию
function foo() {
  console.log(this.a);
}
var a = 2;
foo.call(null); // 2

//__Безопасность при использовании this
//созданного объекта, который гарантированно не создаст неприятных побочных эффектов в вашей программе
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
// Пустой DMZ-объект
var ø = Object.create(null);
// распределение массива по параметрам
foo.apply(ø, [2, 3]); // a:2, b:3
// каррирование вызовом `bind(..)`
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3

//__Косвенные ссылки
function foo() {
  console.log(this.a);
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
(p.foo = o.foo)(); // 2

//__Лексическое поведение this
//принимают связывание this от внешней области видимости
function foo() {
  // Вернуть стрелочную функцию
  return (a) => {
    // `this` здесь лексически наследуется от `foo()`
    console.log(this.a);
  };
}
var obj1 = {
  a: 2
};
var obj2 = {
  a: 3
};
var bar = foo.call(obj1);
bar.call(obj2); // 2, не 3!

function foo() {
  setTimeout(() => {
    // `this` здесь лексически наследуется от `foo()`
    console.log(this.a);
  }, 100);
}
var obj = {
  a: 2
};
foo.call(obj); // 2

//До появления ES6 уже существовал довольно распространенный паттерн, который по духу был почти неотличим от стрелочных функций ES6
function foo() {
  var self = this; // лексический захват `this`
  setTimeout(function () {
    console.log(self.a);
  }, 100);
}
var obj = {
  a: 2
};
foo.call(obj); // 2

//---------------------------------
//___________Объекты____________//
//Объекты существуют в двух формах: декларативной (литеральной) и сконструированной.

//Литеральный синтаксис 
var myObj = {
  key: value
  // ...
};

//Сконструированная
var myObj = new Object();
myObj.key = value;

//__Тип
//Объекты — общие структурные элементы 6 основных типов
//String Number Boolean Object Function Array Date RegExp Error
//представляют собой встроенные функции,вызов функции с оператором new
var strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false
var strObject = new String("I am a string");
typeof strObject; // "object"
strObject instanceof String; // true
// проверка подтипа объекта
Object.prototype.toString.call(strObject); // [object String] / был создан конструктором String

//язык автоматически преобразует строковый примитивв объект String тогда, когда это необходимо
var strPrimitive = "I am a string";
console.log(strPrimitive.length); // 13

//Способ хранения значений / . или оператор []
var myObject = {
  a: 2
};
myObject.a; // 2
myObject["a"]; // 2

//вычисляемые имена свойств
var prefix = "foo";
var myObject = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world"
};
myObject["foobar"]; // hello
myObject["foobaz"]; // world

//Свойства и методы
//функция становится методом не приопределении, а во время выполнения только для конкретного вызова в зависимости от того, как именно она вызывается
var myObject = {
  foo: function foo() {
    console.log("foo");
  }
};
var someFoo = myObject.foo;
someFoo; // function foo(){..}

//__Массивы
//рассчитаны на числовое индексирование
var myArray = ["foo", 42, "bar"];
myArray.length; // 3
myArray[0]; // "foo"
myArray[2]; // "bar"

//__Дублирование объектов

//У поверхностной копии значение a нового объекта будет копией значения 2, но свойства b, c и d будут всего лишь ссылками на те же области памяти
//Глубокое копирование создаст копии не только myObject, но и anotherObject и anotherArray
function anotherFunction() { /*..*/ }
var anotherObject = {
  c: true
};
var anotherArray = [];
var myObject = {
  a: 2,
  b: anotherObject, // ссылка, а не копия!
  c: anotherArray, // другая ссылка!
  d: anotherFunction
};
anotherArray.push(anotherObject, myObject);

var newObj = JSON.parse( JSON.stringify( someObj ) );

//поверхностное копирование - > Object.assign(..) - в первом параметре объект-приемник, а в остальных параметрах — один или несколько объектов - источников
var newObj = Object.assign({}, myObject);
newObj.a; // 2
newObj.b === anotherObject; // true
newObj.c === anotherArray; // true
newObj.d === anotherFunction; // true

//__Дескрипторы свойств
var myObject = {
  a: 2
};
Object.getOwnPropertyDescriptor(myObject, "a");
// {
// value: 2,
// writable: true,
// enumerable: true,
// configurable: true
// }
//writable (возможность записи), enumerable(перечисляемость) и configurable(возможность настройки)

// Object.defineProperty(..) для добавления нового свойства или изменения существующего свойства
var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true
});
myObject.a; // 2

//Writable
//writable определяет возможность изменения
var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false, // запись невозможна!
  configurable: true,
  enumerable: true
});
myObject.a = 3;
myObject.a; // 2

//Configurable
//допускает настройку
//блокирует возможность использования оператора delete
var myObject = {
  a: 2
};
myObject.a = 3;
myObject.a; // 3

Object.defineProperty(myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, // настройка невозможна!
  enumerable: true
});
myObject.a; // 4
myObject.a = 5;
myObject.a; // 5

Object.defineProperty(myObject, "a", {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true
}); // TypeError

//Enumerable
//должно ли свойство включаться в перечисления свойств объектов

//Неизменяемость
//Объединяя writable:false с configurable:false, можно фактически создать константу
var myObject = {};
Object.defineProperty(myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
});

//Запрет расширения
var myObject = {
  a: 2
};
Object.preventExtensions(myObject);
myObject.b = 3;
myObject.b; // undefined

//Seal
//Object.seal(..) - все существующие свойства получают пометку configurable:false

//Freeze
//Object.freeze(..) самая высокая степень неизменяемости 

//__[[Get]]
var myObject = {
  a: 2
};
myObject.b; // undefined /  если ей не удается каким - либо образом получить значение

//__Геттеры и сеттеры
//Геттер — свойства, которые вызывают скрытую функцию для получения нужного значения.Сеттер — свойства, которые вызывают скрытую функцию для присваивания значения.
// Имя _a_ выбрано в данном примере исключительно по общепринятой схеме; оно не несет никакой информации о поведении — это обычное свойство, как и любое другое.
var myObject = {
  // определить геттер для `a`
  get a() {
    return this._a_;
  },
  // определить сеттер для `a`
  set a(val) {
    this._a_ = val * 2;
  }
};
myObject.a = 2;
myObject.a; // 4

//__Существование
var myObject = {
  a: 2
};

//обхода цепочки [[Prototype]] / существование свойства
("a" in myObject); // true
("b" in myObject); // false

//не обращается к цепочке [[Prototype]]
myObject.hasOwnProperty("a"); // true 
myObject.hasOwnProperty("b"); // false / 

//__Перечисление
var myObject = {};
Object.defineProperty(
  myObject,
  "a",
  // разрешить для `a` перечисление, как обычно
  { enumerable: true, value: 2 }
);
Object.defineProperty(
  myObject,
  "b",
  // ЗАПРЕТИТЬ для `b` перечисление
  { enumerable: false, value: 3 }
);

//Циклы for..in рекомендуется использовать только с объектами

//различения перечисляемых и неперечисляемых свойств / enumerable:true + существует ли свойство 
myObject.propertyIsEnumerable("a"); // true
myObject.propertyIsEnumerable("b"); // false
Object.keys(myObject); // ["a"]
Object.getOwnPropertyNames(myObject); // ["a", "b"]

//__Перебор
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// 1 2 3

//forEach(..) every(..) some(..)

var myArray = [1, 2, 3];
for (var v of myArray) {
  console.log(v);
}
// 1
// 2
// 3

//У массивов имеется встроенная реализация @@iterator
var myArray = [1, 2, 3];
var it = myArray[Symbol.iterator]();
it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }

var myObject = {
  a: 2,
  b: 3
};

var myObject = {
  a: 2,
  b: 3
};

// собственную реализацию @@iterator по умолчанию для любого объекта
Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var o = this;
    var idx = 0;
    var ks = Object.keys(o);
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        };
      }
    };
  }
});
// ручной перебор `myObject`
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }
// перебор `myObject` в `for..of`
for (var v of myObject) {
  console.log(v);
}
// 2
// 3

//---------------------------------
//___________Классы______________//
//Класс — тот же план. Чтобы получить объект, с которым можно взаимодействовать, необходимо создать экземпляр

//__Конструктор
//Экземпляры классов конструируются специальным методом класса, имя которого обычно совпадает с именем класса.Этот метод называется конструктором

//__Наследование
//Дочерний класс содержит исходную копию поведения родителя, но он может переопределять любое унаследованное поведение и даже определять новые аспекты поведения

//__Полиморфизм
//что любой метод может обратиться к другому методу на более высоком уровне иерархии наследовани

//__Множественное наследование
//каждое определение родительского класса копируется в дочерний класс

//__Примеси

//Явные примеси
//Такая функция во многих библиотеках/фреймворках часто называется extend(..)
// сильно упрощенный пример `mixin(..)`:
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // копировать, если не существует
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

//Паразитическое наследование
//Разновидность паттерна явной примеси — явная в одних отношениях и неявная в других — называется «паразитным наследованием»
// "Традиционный класс JS" `Vehicle`
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function () {
  console.log("Turning on my engine.");
};
Vehicle.prototype.drive = function () {
  this.ignition();
  console.log("Steering and moving forward!");
};

// "Паразитический класс" `Car`
function Car() {
 // сначала `car` является `Vehicle`
  var car = new Vehicle();
  // изменить `car` для создания специализации
  car.wheels = 4;
  // сохранить привилегированную ссылку на `Vehicle::drive()`
  var vehDrive = car.drive;
  // переопределить `Vehicle::drive()`
  car.drive = function () {
    vehDrive.call(this);
    console.log(
      "Rolling on all " + this.wheels + " wheels!"
    );
    return car;
  }
}
  var myCar = new Car();
  myCar.drive();

// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!

//Неявные примеси
//лучше избегать
var Something = {
  cool: function () {
    this.greeting = "Hello World";
    this.count = this.count ? this.count + 1 : 1;
  }
};
Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1
var Another = {
  cool: function () {
    // неявная примесь `Something` к `Another`
    Something.cool.call(this);
  }
};
Another.cool();
Another.greeting; // "Hello World"
Another.count; // 1 (не использует общее состояние с `Something`)

//-------------------------------
//________Прототипы_____________//
//внутреннее свойство  [[Prototype]]
//Если операция [[Get]] по умолчанию не может найти запрашиваемое свойство непосредственно в объекте, она переходит по ссылке[[Prototype]] объекта
var anotherObject = {
  a: 2
};
// создать объект, связанный с `anotherObject`
var myObject = Object.create(anotherObject);
myObject.a; // 2

//оператор in проверит всю цепочку объекта
("a" in myObject); // true

//__Object.prototype
//[[Prototype]] завершается на встроенном объекте Object.prototype

myObject.foo = "bar";
//, когда foo находится не в myObject, а на более высоком уровне цепочки[[Prototype]] myObject доступное только для чтения

//замещение создает слишком много сложностей и нюансов  стараетесь избежать его
var anotherObject = {
  a: 2
};
var myObject = Object.create(anotherObject);
anotherObject.a; // 2
myObject.a; // 2
anotherObject.hasOwnProperty("a"); // true
myObject.hasOwnProperty("a"); // false
myObject.a++; // неявное замещение!
anotherObject.a; // 2
myObject.a; // 3
myObject.hasOwnProperty("a"); // true

//__Функции «классов»
function Foo() {
  // ...
}
Foo.prototype; // { }

//объект, создаваемый вызовом new Foo() , наделяется (отчасти произвольно) связью через[[Prototype]] с этим объектом
//объект a во внутренней реализации связывается через[[Prototype]] с объектом Foo.prototype.
//Мы просто связали два объекта друг с другом по ссылке
function Foo() {
  // ...
}
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype; // true

//JS создает связь между двумя объектами , благодаря которой один объект может делегировать обращения к свойствам / функциям другому объект а не наследование

//__«Конструкторы»
//.constructor, и это свойство содержит обратную ссылку на функцию с которой был связан объект

function Foo() {
  // ...
}
Foo.prototype.constructor === Foo; // true
var a = new Foo();
a.constructor === Foo; // true

//Конструктор или вызов?
//в JavaScript правильнее всего говорить, что «конструктор» — любая функция, вызываемая с ключевым словом

//__Механика
//Foo.prototype не копируются в каждый из объектов a и b

function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};
var a = new Foo("a");
var b = new Foo("b");
a.myName(); // "a"
b.myName(); // "b"

//__снова о «конструкторе»
//свойство .constructor объекта Foo.prototype присутствует по умолчанию только у объекта, созданного при объявлении функции Foo.
function Foo() { /* .. */ }
Foo.prototype = { /* .. */ }; // создание нового объекта
prototype
var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true! / делегирование продолжается и доходит до Object.prototype

//__Наследование (на основе прототипов)
function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};
function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// здесь мы создаем новый объект `Bar.prototype`,
// связанный с `Foo.prototype`
//делает Bar.prototype ещеодной ссылкой на Foo.prototype
Bar.prototype = Object.create(Foo.prototype);
// Внимание! Значение `Bar.prototype.constructor` исчезает.
// Возможно, вам придется вручную "исправить" его, если вы привыкли полагаться на такие свойства!

Bar.prototype.myLabel = function () {
  return this.label;
};
var a = new Bar("a", "obj a");
a.myName(); // "a"
a.myLabel(); // "obj a"

//
//Сравним стандартные методы связывания Bar.prototype с Foo. prototype до ES6 и в ES6:
// до ES6
// теряет существующий объект `Bar.prototype` по умолчанию
Bar.prototype = Object.create(Foo.prototype);
// ES6+
// изменяет существующий объект `Bar.prototype`
Object.setPrototypeOf(Bar.prototype, Foo.prototype);

//__Анализ связей «классов»
function Foo() {
  // ...
}

Foo.prototype.blah = ""

var a = new Foo();

a instanceof Foo; // true

//более элегантный подход
Foo.prototype.isPrototypeOf(a); // true

// Встречается ли b где-то в цепочке
// [[Prototype]] объекта c?
b.isPrototypeOf(c);

Object.getPrototypeOf(a) === Foo.prototype; // true

//Таким образом, когда мы обращаемся (получаем значение) a.__proto__, это скорее напоминает вызов a.__proto__()(вызов getфункции).
a.__proto__ === Foo.prototype; // true

//__Создание связей вызовом Create()
//Object.create(..) создает новый объект (bar), связанный с заданным объектом (foo). Таким образом, вы получаете всю мощьмеханизма[[Prototype]](делегирование), но без функций new, моделирующих классы, вызовов конструкторов, непонятныхссылок.prototype и.constructor, а также прочих ненужных сложностей.
var foo = {
  something: function () {
    console.log("Tell me something good...");
  }
};

var bar = Object.create(foo);

bar.something(); // Tell me something good...

//полифил для Object.create(..)
function createAndLinkObject(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

var anotherObject = {
  a: 2
};

var myObject = createAndLinkObject(anotherObject);
myObject.a; // 2

//можно спроектировать так, чтобы он был менее «волшебным»
var anotherObject = {
  cool: function () {
    console.log("cool!");
  }
};

var myObject = Object.create(anotherObject);

myObject.doCool = function () {
  this.cool(); // внутреннее делегирование!
};

myObject.doCool(); // "cool!"

//__Делегирование поведения
//вся суть механизма , заключается в связях одних объектов с другими объектам
//я называю такой стиль программирования OLOO
//Вместо того чтобы мысленновыстраивать объекты по вертикали(от верхних родителей к нижним потомкам), представьте себе объекты как расположенныерядом друг с другом на одном уровне; связи делегирования проходят между объектами в любом направлении так, как вам потребуется.

//__Сравнение моделей мышления
//(ОО против OLOO)

//ОО-стиль
function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function () {
  return "I am " + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function () {
  alert("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");
b1.speak();
b2.speak();

//в стиле OLOO
//мы просто настраиваем связи между объектами без всей запутанной шелухи
Foo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return "I am " + this.me;
  }
};

Bar = Object.create(Foo);

Bar.speak = function () {
  alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");
b1.speak();
b2.speak();

//__Классы и объекты
//классическую архитектуру «классов» на чистом JS
// Родительский класс
function Widget(width, height) {
  this.width = width || 50;
  this.height = height || 50;
  this.$elem = null;
}

Widget.prototype.render = function ($where) {
  if (this.$elem) {
    this.$elem.css({
      width: this.width + "px",
      height: this.height + "px"
    }).appendTo($where);
  }
};

// дочерний класс
function Button(width, height, label) {
  // "super" constructor call
  Widget.call(this, width, height);
  this.label = label || "Default";
  this.$elem = $("<button>").text(this.label);
}

// Заставить `Button` "наследовать" от `Widget`
Button.prototype = Object.create(Widget.prototype);

// переопределить базовую "унаследованную" версию `render(..)`
Button.prototype.render = function ($where) {
  // вызов "super"
  Widget.prototype.render.call(this, $where);
  this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick = function (evt) {
  console.log("Button '" + this.label + "' clicked!");
};

$(document).ready(function () {
  var $body = $(document.body);
  var btn1 = new Button(125, 30, "Hello");
  var btn2 = new Button(150, 40, "World");
  btn1.render($body);
  btn2.render($body);
});

//Классы в ES6
class Widget {
  constructor(width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }
  render($where) {
    if (this.$elem) {
      this.$elem.css({
        width: this.width + "px",
        height: this.height + "px"
      }).appendTo($where);
    }
  }
}

class Button extends Widget {
  constructor(width, height, label) {
    super(width, height);
    this.label = label || "Default";
    this.$elem = $("<button>").text(this.label);
  }
  render($where) {
    super($where);
    this.$elem.click(this.onClick.bind(this));
  }
  onClick(evt) {
    console.log("Button ‘" + this.label + "’ clicked!");
  }
}

$(document).ready(function () {
  var $body = $(document.body);
  var btn1 = new Button(125, 30, "Hello");
  var btn2 = new Button(150, 40, "World");
  btn1.render($body);
  btn2.render($body);
});

//с использованием делегирования в стиле OLOO
var Widget = {
  init: function (width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  },
  insert: function ($where) {
    if (this.$elem) {
      this.$elem.css({
        width: this.width + "px",
        height: this.height + "px"
      }).appendTo($where);
    }
  }
}

var Button = Object.create(Widget);

Button.setup = function (width, height, label) {
  // делегированный вызов
  this.init(width, height);
  this.label = label || "Default";
  this.$elem = $("<button>").text(this.label);
};

Button.build = function ($where) {
  // делегированный вызов
  this.insert($where);
  this.$elem.click(this.onClick.bind(this));
};

Button.onClick = function (evt) {
  console.log("Button '" + this.label + "' clicked!");
};

$(document).ready(function () {
  var $body = $(document.body);
  var btn1 = Object.create(Button);
  btn1.setup(125, 30, "Hello");
  var btn2 = Object.create(Button);
  btn2.setup(150, 40, "World");
  btn1.build($body);
  btn2.build($body);
});

//__Более приятный синтаксис
//сокращенный синтаксис объявления методов классо

//class в ES6
class Foo {
  methodName() { /* .. */ }
}

// OLOO
var LoginController = {
  errors: [],
  getUser() { // Смотрите, здесь нет `function`!
    // ...
  },
  getPassword() {
    // ...
  },
  // или такой подход
  bar: function (x) {
    if (x < 10) {
      return Foo.bar(x * 2);
    }
    return x;
  },
};

//__Интроспекция
//для получения информации о структуре/возможностях объекта на основании того, как он был создан
function Foo() {
  // ...
}
Foo.prototype.something = function () {
  // ...
}
var a1 = new Foo();

// он просто сообщает, связаны ли ...
if (a1 instanceof Foo) {
  a1.something();
}

// связывание `Foo` и `Bar` друг с другом
Bar.prototype instanceof Foo; // true

Object.getPrototypeOf(Bar.prototype)
  === Foo.prototype; // true

Foo.prototype.isPrototypeOf(Bar.prototype); // true

// связывание `b1` с `Foo` и `Bar`
b1 instanceof Foo; // true
b1 instanceof Bar; // true

Object.getPrototypeOf(b1) === Bar.prototype; // true

Foo.prototype.isPrototypeOf(b1); // true
Bar.prototype.isPrototypeOf(b1); // true

//к коду в стиле OLOO
var Foo = { /* .. */ };
var Bar = Object.create(Foo);
//Bar...
var b1 = Object.create(Bar);

Foo.isPrototypeOf(Bar); // true

Object.getPrototypeOf(Bar) === Foo; // true

// связывание `b1` с `Foo` и `Bar`
Foo.isPrototypeOf(b1); // true
Bar.isPrototypeOf(b1); // true

Object.getPrototypeOf(b1) === Bar; // true

//---------------------------------------
//---------------------------------------
//__Типы и грамматические конструкции__//
//Встроенные типы  примитивы - null  undefined boolean number  string object symbol
//Ссылочный тип - object
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { life: 42 } === "object"; // true
//Добавлен в ЕSб!
typeof Symbol() === "symbol"; // true

// является «ложным»
typeof null === "object"; // true
var а = null;
(!а && typeof а === "object"); // true 

//на самом деле ближе к «подтипу» object
typeof function а() {/* .. */ } === "function"; // true

typeof [1, 2, З] === "object"; // true

//__Значения как типы
//В языке JavaScript у переменных нет типов - типы есть у значений

//Переменные, на данный момент не имеющие значения, на самом деле имеют значение undefined.
var а;
typeof а; //undefined

//__typeof для необъявленных переменных 
//Безопасная проверка существования
if (typeof DEBUG !== "undefined") {
  console.log("Debugging is starting");
} 

if (window.DEBUG) {
  //..  
}

//__Значения 

//Массивы 
var а = [1, "2", [3]];
a.length;//3
а[0] === 1;//true
а[2][0] === 3;//true

//Подобие массивов 
//DOM возвращают списки элементов
function foo() {
  var arr = Array.prototype.slice.call(arguments);
  arr.push("bam");
  console.log(arr);
}
foo("bar", "baz"); // ["bar","baz","bam"] 

//тo же самое
var arr =  Array.from(arguments)

//Строки 
//CтpoкиjavaScript неизменяемы , надо возврощать новые значение
//обходное решение 
var с = а
  // разбиение ·а· на массив символов
  .split("")
  // переставить массив символов в обратном порядке
  .reverse()
  // снова объединить массив символов в строку
  .join("");
с; // "oof"

//Числа 
//42. 0 является таким же «целым» числом, как и 42.
var а = 0.42;
var Ь = .42;

//методы, встроенные в Number. prototype
var а = 42.59;
a.toFixed(0); // "43"
a.toFixed(1); // "42.6" 
a.toPrecision(1); // "4e+l" 
42 .toFixed(З); // "42.000" 
0xf3; // шестнадцатеричная запись для 243
0o363;// восьмеричная запись для 243

//Малые дробные значения
0.1 + 0.2 === 0.3; // false / (0,30000000000000004)

//Безопасные целочисленные диапазоны 
//Number. MAX_SAFE_INТEGER

//Проверка целых чисел
Number.isinteger(42); // true
Number.isinteger(42.000); // true 

//является ли значение безопасным целым числом, используйте метод Number. isSafeinteger( .. )
Number.isSafeinteger(Number.MAX_SAFE_INTEGER);//// true 

//Пустые значения 
// пull - пустое значение; 
// uпdefiпed - отсутствующее значение

//void
//стирает любое значение
var а = 42;
console.log(void а, а); // undefined 42

//NaN 
//Not А Number
//никогда не равно другому значению NaN 
var а = 2 / "foo"; // NaN

var а = 2 / "foo";
var Ь = "foo";
Number.isNaN(а); // true
Number.isNaN(Ь); // false 

//или
Object.is(а, NaN); // true 

//Бесконечности
var а = 1 / 0; // Infinity

//нули
// если вы хотите отличать -0 от 0 в своем коде,
function isNegZero(n) {
  n = Number(n);
  return (n === 0) && (1 / n === -Infinity)
}
isNegZero(-0);// true
isNegZero(0 / -3);// true
isNegZero(0);// false 

//или
Object.is(b, -0); // true 

//__Значения и ссылки 

//простые значения всегда передаються копированием
var а
var Ь = а; // 'Ь' все
Ь++;
Ь; // 3
а; // 2

//ссылочный тип по ссылке
//Чтобы передать составное значение (например, массив) посредством копирования значения, необходимо создать его копию вручную, чтобы переданная ссылка не продолжала указывать на оригинал.
var а = [1, 2, 3];
var Ь = а;
а; // [1,2,3]
Ь; // [1,2,3] 

//__Встроенные объекты(natives)
var а = new String("аЬс");
typeof а; // "object" ... не "String"
а instanceof String; // true
Object.prototype.toString.call(а); // "[object String]" 

// Примитивные значения не имеют свойств или методов, так что для обращения к . length и . tostring() вам понадобится объектная обертка для значения, JS автоматически упаковывает примитивные значения для обслуживания таких обращений
var а = "аЬс";
a.length; // З
a.toUpperCase(); // "

//Распаковка в примитивное значение
var а = пеw Striпg("аЬс");
var b = пеw Number(42);
var с = nеw Вооlеаn(true);
a.valueOf(); // "аЬс"
Ь.valueOf(); // 42
с.valueOf(); // true 

var а = пеw Striпg("аЬс");
var Ь = а + ""; // ·ь- содержит распакованное примитивное
// значение "аЬс"
typeof а;// "object"
typeof Ь;// "string"

//Встроенные объекты как конструкторы 

//Array(..)
var а = nеw Array(1, 2, З);
а; // [1, 2, З] 
var Ь = [1, 2, 3];
Ь; // [1, 2, 3]

var а = new Array(З);//пустые значения / [ ,  ,  ]
a.length; // З 

var а = Array.apply(null, { length: З });
а; // [ undefined, undefined, undefined ]

//Object( .. ), Function( .. ) и RegExp( .. ) 
// лучше избегать
var с = new Object();
c.foo =  "bar";
с; // { foo: "bar" } 

//Date( .. ) и Error( .. ) 
if (!Date.now) {
  Date.now = function () {
    return (new Date()).getTime();
  };
}

function foo(x) {
  if (!х) {
    throw new Error("х wasn't provided");
  }
}

//Symbol( .. ) 
// «уникальные»
var mysym = Symbol("my own symbol");
mysym; // Symbol(my own symbol)
mysym.toString(); // "Symbol(my own symbol)"
typeof mysym; // "symbol" 

var а = {};
a[mysym] = "foobar"; 
Object.getOwпPropertySymbols(а);// [Symbol(my оwп symbol)] 

//Встроенные прототипы
//Благодаря делегированию прототипов методы доступны
var а = " аЬс ";
a.indexOf("с"); // З 

//__Преобразование типов
//явное и неявное
var а  = 42;
var Ь = а + "" //неявное преобразование
var с = String(а); //явное преобразование

//ToString
var а = [1, 2, 3];
a.toString(); // "1,2,3"

//Преобразование JSON в строку 
JSON.stringify(42); // "42" 

var а = {
  Ь: 42,
  с: "42",
  d: [1, 2, 3]
};
JSON.stringify(а, ["Ь", "с"]); // "{"Ь":42,"с":"42"}" 

//отступ 3 пробела перед свойствам
JSON.stringify(а, null, З);

//ToNumber 
Number("42"); //42

//ToBoolean
//«ложные~значения - undefined nul false  +0, -0 и NaN ""

//Ложные объекты
//дают true
var а = new Boolean(false);
var Ь = new Number(0);
var с = new String(""); 
var d = Boolean(а && Ь && с); // true 

//Истинные значения 
//все отсальные

var а = "0";
!!а; // true

//_Явное преобразование типов
var а = 42;
var Ь = String(а);// "42"

var с = "3.14";
var d = +с;// 3.14

var d = new Date("Моп, 18 Aug 2014 08:53:06 CDT");
+d; // 1408369986000

~42; // -(42+1) ==> -43

Math.floor(-49.6); //- 50
~~- 49.6; //- 49

//_Неявное преобразование 
var а = "42";
var b = "0";
а + b// "420" 

var а = "3.14";
var Ь = а - 0;// 3.14

//__Операторы || и && 
var а = 42;
var Ь = "аЬс";
var с = null;
а || Ь; //42 / приблизительно эквивалентно а ? а : Ь;
а && Ь; //"аЬс"приблизительно эквивалентно а ? Ь : a

function foo() {
  console.log(а);
}
var а = 42;
а && foo(); // 42

if (!!а && (!!Ь || !!с)) {
  console.log("уер");
}

//_Равенство строгое и нестрогое 
//«== проверяет на равенство значения, а === проверяет на равенство как значения, так и тип
var а = 42;
var Ь = "42";
а === Ь; //false
а == Ь;//true

var х = true;
var у = "42";
х == у; // false / 1 == "42".

var а = "42";

//плохо(проверка не проходит!):
if (а == true) {
  // ..
}

//тоже плохо(проверка не проходит!):
if (а === true) {
  // ..
}

//достаточно хорошо(неявное преобразование):
if (а) {
  // ..
}

//лучше(явное преобразование):
if (!!а) {
  //..
}

//тоже хорошо(явное преобразование):
if (Вооlеап(а)) {
  //..
} 

// Я рекомендую использовать это преобраэование, чтобы null и undefined не различались в программе и интерпретировались как одно значения
if (a == null) {
  //..
} 

var а = 42;
var b = [42];
а == Ь; // true 

//Если в одной из частей сравнения может находиться значение true или false , [], '', никогда не использовать ==

//Абстрактное относительное сравнение
//cначало ToPrimitive , ToNumber
var а = ["42" ];
var Ь = ["043" ];
a < b //false

//если вам нужны гаранитии безопасности то лучше выполнить явное преобразование
Number(а) < Number(Ь);

//__Грамматика 
var а = 42;
а++; // 42
а·, // 43

++а; // 44
а; // 44

var а, Ь, с;
а = Ь = с = 42; 

true ? false : true ? true : true;//false

//----------------------------------
//----------------------------------
//____АСИНХРОННАЯ ОБРАБОТКА И ОПТИМИЗАЦИЯ___//

//Асинхронный вывод в консоль
console.log() //возможную асинхронность
var a = {
  index: 1
};
// потом
console.log(a); // ??
// еще позднее
a.index++;
//{ index: 2 }

//___Цикл событий
// `eventLoop` - массив, работающий по принципу очереди
// (первым пришел, первым вышел)
var eventLoop = [];
var event;
// продолжать "бесконечно"
while (true) {
  // отработать "квант"
  if (eventLoop.length > 0) {
    // получить следующее событие в очереди
    event = eventLoop.shift();
    // выполнить следующее событие
    try {
      event();
    }
    catch (err) {
      reportError(err);
    }
  }
}

//JS может обрабатывать только одно событие за раз
