//Как работают движки - читает код затем компилирует его в машинный код а далее уже машинный код по итогу запускаеться и работает

//Чего НЕ может JavaScript в браузере? явное разрешения пользователя к камере и микрофону, одна страница не имеет доступ к другой странице т.к. стоит ограничение безопасности, дополнительные разарешения при запросе

//Спецификация ECMA - содержит текущию информацию  о языке
//Справочники MDN (Mozilla)
//http://caniuse.com  -  таблицы с информацией о поддержке
//https://kangax.github.io/compat-tabl - таблица с возможностями языка

//Консоль разработчика - F12

//-------------------------
//__Привет, мир!__//

//JavaScript могут быть вставлены в любое место HTML - <script>

//Внешние скрипты
//<script src="/path/to/script.js"></script>

//-----------------------
//__Структура кода__//
//Инструкции – это синтаксические конструкции и команды, которые выполняют действия
//Инструкции могут отделяться точкой с запятой,точку с запятой можно не ставить, если есть переход на новую строк
alert("Привет");
alert("Мир");
alert("Привет");
alert("Мир");
//Мы рекомендуем ставить точку с запятой между инструкциями, даже если они отделены переносами строк

//----------------------------------
//__Строгий режим — "use strict"__//
("use strict");
//Современный JavaScript поддерживает «классы» и «модули» — продвинутые структуры языка которые автоматически включают строгий режим "use striсt

//---------------------------------
//___Переменные__//
//Переменная – это «именованное хранилище» для данных

let message;
message = "Hello"; // сохранить строку 'Hello' в переменной с именем message

//несколько переменных в одной строке
let user = "John",
  age = 25,
  message = "Hello";

//Имя переменной должно содержать только буквы, цифры или символы $ и _. / Первый символ не должен быть цифрой.

//обычно используется верблюжья нотация -> userName

//Существует список зарезервированных слов, которые нельзя использовать в качестве имён переменныx

//Переменные, объявленные с помощью const, называются «константами». Их нельзя изменить.
const myBirthday = "18.04.1982";
myBirthday = "01.01.2001"; // ошибка, константу нельзя перезаписать!

//Константы в верхнем регистре
const COLOR_ORANGE = "#FF7F00";

//!!Придумывайте правильные имена

//let – это современный способ объявления.
//var – это устаревший способ объявления
//const – похоже на let, но значение переменной не может изменяться

//-------------------
//__Типы данных__//

//_Число
//как целочисленные значения, так и числа с плавающей точкой

//Infinity - математическую бесконечность ∞
1 / 0; //Infinity

//NaN означает вычислительную ошибку
("не число"); //NaN, такое деление является ошибкой

//_BigInt
//безопасно работать с числами, большими, чем 9007199254740991
// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//_Строка
let str = "Привет";
let str2 = "Одинарные кавычки тоже подойдут";
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

//_Булевый (логический) тип
//true (истина) и false (ложь)
let isGreater = 4 > 1;
alert(isGreater); // true (результатом сравнения будет "да")

//_Значение «null»
//специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно»

//_Значение «undefined»
//«значение не было присвоено».
let age;
alert(age); // выведет "undefined"

//_Объекты и символы
//ссылочный тип данных

//_Оператор typeof
typeof 5; // Выведет "number"
//Результатом вызова typeof null является "object". Это официально признанная ошибка

//--------------------------------------------
//__Взаимодействие: alert, prompt, confirm__//

//сообщение
alert("Hello");

//prompt -  модальное окно с текстом
let age = prompt("Сколько тебе лет?", 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//confirm
//отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена
let isBoss = confirm("Ты здесь главный?");
alert(isBoss); // true, если нажата OK

//--------------------------------
//___Преобразование типов__//

//Строковое преобразование
value = String(value); // теперь value это строка "true"
alert(typeof value); // string

//Численное преобразование
let str = "123";
alert(typeof str); // string
let num = Number(str); // становится числом 123
alert(typeof num); // number

//Логическое преобразование
//!!Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
//Все остальные значения становятся true
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("Привет!")); // true
alert(Boolean("")); // false

//-----------------------------------
//__Базовые операторы, математика__//

//Операнд – то, к чему применяется оператор.В умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2
//Унарным называется оператор, который применяется к одному операнду

let x = 1;
x = -x;
alert(x); // -1, применили унарный минус

let x = 1,
  y = 3;
alert(y - x); // 2, бинарный минус вычитает значения

//Математика + - * Взятие остатка от деления % Возведение в степень **...
alert(5 % 2); // 1, остаток от деления 5 на 2
alert(2 ** 2); // 2² = 4
alert(4 ** (1 / 2)); // 2 (степень 1/2 эквивалентна взятию квадратного корня)

//Сложение строк при помощи бинарного +
let s = "моя" + "строка"; //// моястрка
"1" + 2; //"12"

//Приведение к числу
let apples = "2";
let oranges = "3";
// оба операнда предварительно преобразованы в числа
alert(+apples + +oranges); // alert( Number(apples) + Number(oranges) / 5

//Приоритет операторов
// таблицы приоритетов

//Присваивание по цепочке
a = b = c = 2 + 2;

//Сокращённая арифметика с присваиванием
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

//Инкремент/декремент
//тут же использовать результат, то нужна префиксная форма
let counter = 0;
alert(++counter); // 1
//Если нужно увеличить и при этом получить значение переменной до увеличения – нужна постфиксная форма
let counter = 0;
alert(counter++); // 0

//Побитовые операторы
//работают с 32-разрядными целыми числами
//AND(и) ( & ) / OR(или) ( | ) ...

//Оператор «запятая»
//до результат отбрасывается
let a = (1 + 2, 3 + 4); // 7 (результат вычисления 3

//---------------------------
//__Операторы сравнения__//
//> < >= <= == = !=

2 > 1; // true
2 != 1; // true

//Сравнение строк
//сравнения по внутренней таблице кодирования, которую использует JavaScript (Unicode)
"Я" > "А"; // true

//Сравнение разных типов
"2" > 1; // true, строка '2' становится числом 2

//Строгое сравнение
//Оператор строгого равенства === проверяет равенство без приведения типов
0 === false; // false, так как сравниваются разные типы

//Сравнение с null и undefined
null == undefined; //true

//null и 0
alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

//Несравненное значение undefined
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

//Как избежать проблем :
//Относитесь очень осторожно к любому сравнению с undefined/null, кроме случаев строгого равенства ===
//Не используйте сравнения >= > < <= с переменными, которые могут принимать значения null/undefined

//------------------------------------
//____Условное ветвление: if, '?'__//

let year = prompt(
  "В каком году была опубликована спецификация ECMAScript-2015?",
  ""
);
if (year < 2015) {
  alert("Это слишком рано...");
} else if (year > 2015) {
  alert("Это поздновато");
} else {
  alert("Верно!");
}

//Условный оператор „?“
let accessAllowed = year > 18 ? true : false;

//Несколько операторов „?“
let age = prompt("Возраст?", 18);

let message =
  age < 3
    ? "Здравствуй, малыш!"
    : age < 18
    ? "Привет!"
    : age < 100
    ? "Здравствуйте!"
    : "Какой необычный возраст!";

//---------------------------
//___Логические операторы__//
//|| (ИЛИ) / && (И) / ! (НЕ) / ?? (Оператор нулевого слияния) / ??= (Оператор нулевого присваивания

//|| (ИЛИ)
false || true; // true
let firstName = "";
let lastName = "";
let nickName = "Суперкодер";
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер

//||= (Логическое присваивание ИЛИ)
a ||= b; // a || (a = b);

//&& (И) / находит первое ложное значение
false && true; // false
1 && 2 && null && 3; // null
1 && 2 && 3; //3

let x = 1;
x > 0 && alert("x больше нуля!");

a &&= b; //a && (a = b);

//! (НЕ)
!true; // false

//!! используют для преобразования значений к логическому типу
!!"непустая строка"; //true

//---------------------------------------------------------
//__Операторы нулевого слияния : '??'__//

//возвращает первый аргумент, если он не null/undefined
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

let height = null;
let width = null;
// важно: используйте круглые скобки
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000

//(??=)
let userAge = null;
userAge ??= 18;
alert(userAge); // 18

//------------------------
//__Циклы while и for__//

//Цикл «while»
let i = 0;
while (i < 3) {
  // выводит 0, затем 1, затем 2
  alert(i);
  i++;
}

//Цикл «do…while»
//сначала выполнит тело, а затем проверит условие
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

//Цикл «for»
for (let i = 0; i < 3; i++) {
  // выведет 0, затем 1, затем 2
  alert(i);
}

//Пропуск частей «for»
let i = 0; // мы уже имеем объявленную i с присвоенным значением
for (; i < 3; i++) {
  // нет необходимости в "начале"
  alert(i); // 0, 1, 2
}

//Прерывание цикла: «break»
let sum = 0;
while (true) {
  let value = +prompt("Введите число", "");
  if (!value) break; // (*)
  sum += value;
}
alert("Сумма: " + sum);

//Переход к следующей итерации: continue
for (let i = 0; i < 10; i++) {
  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;
  alert(i); // 1, затем 3, 5, 7, 9
}

//Нельзя использовать break/continue справа от оператора „?“
//(i > 5) ? alert(i) : continue; // continue здесь приведёт к ошибке

//Метки для break/continue
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i},${j})`, "");
    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)
    // сделать что-нибудь со значениями...
  }
}
alert("Готово!");

//-------------------------------
//___Конструкция "switch"__//
let a = 3;
switch (a) {
  case 4:
    alert("Правильно!");
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert("Неправильно!");
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert("Результат выглядит странновато. Честно.");
}

//--------------
//__Функции__//

//_Локальные переменные
//Переменные, объявленные внутри функции, видны только внутри этой функции.
function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная
  alert(message);
}
showMessage(); // Привет, я JavaScript!
alert(message); // <-- будет ошибка, т.к. переменная видна только внутри функции

//_Внешние переменные
//Внешняя переменная используется, только если внутри функции нет такой локальной
let userName = "Вася";
function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную
  let message = "Привет, " + userName; // Петя
  alert(message);
}
// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();
alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную

//_Параметры
function showMessage(from, text = "текст не добавлен") {
  alert(from + ": " + text);
}
showMessage("Аня"); // Аня: текст не добавлен

//Альтернативные параметры по умолчанию
function showMessage(text) {
  // ...
  if (text === undefined) {
    // если параметр отсутствует
    text = "пустое сообщение";
  }
  alert(text);
}
showMessage(); // пустое сообщение

//_Возврат значения
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("А родители разрешили?");
  }
}

//_Выбор имени функции
/* 
showMessage(..)     // показывает сообщение
getAge(..)          // возвращает возраст (получая его каким-то образом)
calcSum(..)         // вычисляет сумму и возвращает результат
createForm(..)      // создаёт форму (и обычно возвращает её)
checkPermission(..) // проверяет доступ, возвращая true/false
*/

//!!Функции должны быть короткими и делать только что-то одно. Если это что-то большое, имеет смысл разбить функцию на несколько меньших

//Function Declaration
function sayHi() {
  alert("Привет");
}

//Function Expression
let sayHi = function () {
  alert("Привет");
};
let func = sayHi; // (2) копируем
func(); // Привет     // (3) вызываем копию (работает)!

//_Функции-«колбэки»
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("Вы согласны.");
}

function showCancel() {
  alert("Вы отменили выполнение.");
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
//the same
ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);

//_Function Expression в сравнении с Function Declaration

//Function Declaration может быть вызвана раньше, чем она объявлена / функция доступна везде внутри блока
sayHi("Вася"); // ошибка!
let sayHi = function (name) {
  // (*) магии больше нет
  alert(`Привет, ${name}`);
};

let age = prompt("Сколько Вам лет?", 18);
// в зависимости от условия объявляем функцию
if (age < 18) {
  function welcome() {
    alert("Привет!");
  }
} else {
  function welcome() {
    alert("Здравствуйте!");
  }
}
// ...не работает
welcome(); // Error: welcome is not defined

//Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.

//!!Как правило, если нам понадобилась функция, в первую очередь нужно рассматривать синтаксис Function Declaration

//_Стрелочные функции, основы
//использовать так же, как и Function Expression.
let sum = (a, b) => a + b;

//Многострочные стрелочные функции
let sum = (a, b) => {
  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
};
alert(sum(1, 2)); // 3

//-------------------
//__Качество кода__//

//Отладка – это процесс поиска и исправления ошибок в скрипте

//Выполнение кода можно также приостановить с помощью команды debugger / вызывается во время загрузки страницы
function hello(name) {
  let phrase = `Привет, ${name}!`;
  debugger; // <-- тут отладчик остановится
  say(phrase);
}
//Watch– показывает текущие значения для любых выражений.
//Call Stack – показывает цепочку вложенных вызовов.
//Scope показывает текущие переменные.
//Step - выполнить следующую команду
//Step over - выполнить следующую команду, но не заходя внутрь функции
//Step into - игнорирует асинхронные действия
//Step out - продолжить выполнение до завершения текущей функци

//Логирование
// чтобы увидеть результат, сначала откройте консоль
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}

//-----------------------------
//__Советы по стилю кода__//

//Точки с запятой должны присутствовать после каждого выражения
//Уровней вложенности должно быть немного.

//Автоматизированные средства проверки (линтеры)

//автоматически проверять стиль вашего кода и вносить предложения по его улучшению - ESLint
//конфигурации с именем .eslintrc

//_комментарии
//код должен быть таким, чтобы его можно было понять без комментариев
//Документируйте параметры и использование функций / специальный синтаксис JSDoc для документирования функци
/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
  console.log();
}

//_Тесты
//покрытый тестами, как правило, имеет лучшую архитектуру

//_Полифилы
//Babel – это транспилер. Он переписывает современный JavaScript-код в предыдущий стандарт

//-----------------
//-----------------
//____Объекты___//
//существует 8 типов данных , 7 примитивных

let user = new Object(); // синтаксис "конструктор объекта"
let user = {}; // синтаксис "литерал объекта"

let user = {
  // объект
  name: "John", // под ключом "name" хранится значение "John"
  age: 30, // под ключом "age" хранится значение 30
};
user.name; // John
user.age; // 30
user.isAdmin = true;
delete user.age;

//Объект, объявленный как константа, может быть изменён

//Квадратные скобки
let user = {};
// присваивание значения свойству
user["likes birds"] = true;
// получение значения свойства
alert(user["likes birds"]); // true
// удаление свойства
delete user["likes birds"];

//Вычисляемые свойства
let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};

//Свойство из переменной
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...другие свойства
  };
}
let user = makeUser("John", 30);
alert(user.name); // John

//короткие свойства
function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age, // то же самое, что и age: age
    // ...
  };
}

//_Проверка существования свойства, оператор «in»
let user = { name: "John", age: 30 };
alert("age" in user); // true, user.age существует
alert("blabla" in user); // false, user.blabla не существует

//Это когда свойство существует, но содержит значение undefined
let obj = {
  test: undefined,
};
alert(obj.test); //  выведет undefined, значит свойство не существует?
alert("test" in obj); // true, свойство существует!

//_Цикл "for..in"
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // ключи
  alert(key); // name, age, isAdmin
  // значения ключей
  alert(user[key]); // John, 30, true
}

//_Упорядочение свойств объекта
let user = {
  name: "John",
  surname: "Smith",
};
user.age = 25; // добавим ещё одно свойство

// не целочисленные свойства перечислены в порядке создания
for (let prop in user) {
  alert(prop); // name, surname, age
}
//«целочисленное свойство» означает строку, которая может быть преобразована в целое число и обратно без изменений
let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США",
};

for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}

//----------------------------------
//__Копирование объектов и ссылки__//
//объекты хранятся и копируются «по ссылке»

//Переменная, которой присвоен объект, хранит не сам объект, а его «адрес в памяти» – другими словами, «ссылку» на него.
let user = { name: "John" };
let admin = user; // копируется ссылка

let user = { name: "John" };

let admin = user;
admin.name = "Pete"; // изменено по ссылке из переменной "admin"
alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"

//_Сравнение по ссылке
let a = {};
let b = a; // копирование по ссылке
alert(a == b); // true, обе переменные ссылаются на один и тот же объект
alert(a === b); // true

let a = {};
let b = {}; // два независимых объекта
alert(a == b); // false

//_Клонирование и объединение, Object.assign

let user = {
  name: "John",
  age: 30,
};
let clone = {}; // новый пустой объект
// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}
// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные
alert(user.name); // все ещё John в первоначальном объекте

//dest — целевой объект / Остальные аргументы src1, ... / если скопированное имя свойства уже существует, оно будет перезаписано
Object.assign(dest, [src1, src2, src3]);

let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "John", canView: true, canEdit: true }

//также есть глубокое клонирование вложенных объектов друг в друга

//--------------------
//___Сборка мусора__//
//отслеживает все объекты и удаляет те, которые стали недоступным

//----------------------------
//__Методы объекта, "this"__//

let user = {
  name: "John",
  age: 30,
};
user.sayHi = function () {
  alert("Привет!");
};
user.sayHi(); // Привет!

//Ключевое слово «this» в методах
let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" - это "текущий объект".
    alert(this.name);
  },
};
user.sayHi(); // John

//«this» не является фиксированным

//_если вызывается obj.f(), то во время вызова f, this – это obj
let user = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  alert(this.name);
}
// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;
// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin["f"](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)

//Вызов без объекта
function sayHi() {
  alert(this);
}
sayHi(); // undefined (this -  глобальный объект ) / use strict - вызовет ошибку

//_У стрелочных функций нет «this»
//берётся из внешней «нормальной» функции
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};
user.sayHi(); // Ilya

//---------------------------------
//__Конструктор, оператор "new"__//

//_Функция-конструктор
//Имя - начинаться с большой буквы / выполняться с "new"
function User(name) {
  // this = {};  (неявно)
  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;
  // return this;  (неявно)
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

//Проверка на вызов в режиме конструктора: new.target
function User(name) {
  if (!new.target) {
    // в случае, если вы вызвали меня без оператора new
    return new User(name); // ...я добавлю new за вас
  }
  this.name = name;
}
let john = User("John"); // переадресовывает вызов на new User
alert(john.name); // John

//_Создание методов в конструкторе
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("Меня зовут: " + this.name);
  };
}
let john = new User("John");
john.sayHi(); // Меня зовут: John

//-------------------------------
//__Опциональная цепочка '?.'__//
//останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null
let user = {};
alert(user.address ? user.address.street : undefined);

//Не злоупотребляйте опциональной цепочкой

//Сокращённое вычисление
let userAdmin = {
  admin() {
    alert("Я админ");
  },
};
let userGuest = {};
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет (такого метода нет)

//-----------------------
//__Тип данных Symbol__//
//уникальный идентификатор

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

//позволяют создавать «скрытые» свойства объектов, к которым нельзя нечаянно обратиться и перезаписать их из других частей программы
let user = {
  name: "Вася",
};
let id = Symbol("id");
user[id] = 1;
alert(user[id]); // мы можем получить доступ к данным по ключу-символу

//Символы в литеральном объекте
let id = Symbol("id");
let user = {
  name: "Вася",
  [id]: 123, // просто "id: 123" не сработает
};

//Символы игнорируются циклом for…in / прямой доступ по символу работает
let id = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123,
};
for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)
// хотя прямой доступ по символу работает
alert("Напрямую: " + user[id]);

//Object.assign - копирует и строковые, и символьные свойства

//глобальный реестр символов
// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан
// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");
// проверяем -- это один и тот же символ
alert(id === idAgain); // true

// получаем имя по символу
Symbol.keyFor(idAgain); //id

//Системные символы
//например Symbol.toPrimitive позволяет описать правила для объекта, согласно которым он будет преобразовываться к примитиву

//------------------------------------------
//___Преобразование объектов в примитивы__//

//Symbol.toPrimitive
obj[Symbol.toPrimitive] = function (hint) {
  // вот код для преобразования этого объекта в примитив
  // он должен вернуть примитивное значение
  // hint = чему-то из "string", "number", "default"
};

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};
// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

//toString/valueOf
let user = {
  name: "John",
  money: 1000,
  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },
  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  },
};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

let obj = {
  // toString обрабатывает все преобразования в случае отсутствия других методов
  toString() {
    return "2";
  },
};
alert(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом

//----------------------------------
//----------------------------------
//_____Типы данных____//

//---------------------------
//____Методы примитивов___//

//Примитив
//7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint

//Каждый примитив имеет свой собственный «объект-обёртку», которые называются: String, Number, Boolean, Symbol и BigInt
let str = "Привет";
alert(str.toUpperCase()); // ПРИВЕТ
//В момент обращения к его свойству, создаётся специальный объект

//--------------------------
//___Числа__//
//числа с плавающей точкой
//BigInt - числами произвольной длины

//Способы записи числа
let billion = 1000000000;
let billion = 1_000_000_000;
let billion = 1e9; // 1 миллиард, буквально: 1 и 9 нулей
let mcs = 0.000001;
let ms = 1e-6;

//Шестнадцатеричные, двоичные и восьмеричные числа
0xff; //255
0b11111111; // двоичная (бинарная) форма записи числа 255
0o377; // восьмеричная форма записи числа 255

//toString(base)
//в системе счисления base
let num = 255;
num.toString(16); //// ff

//_Округление
//Math.floor - Округление в меньшую сторону
//Math.ceil - в большую сторону
//Math.round - до ближайшего целого
//Math.trun - удаление дробной части

//Неточные вычисления
0.1 + 0.2; // 0.30000000000000004

let sum = 0.1 + 0.2;
alert(+sum.toFixed(2)); // 0.3

//Проверка: isFinite и isNaN
//NaN представляет ошибку / Infinity -Infinity - бесконечность
//isNaN - принадлежит к типу number
isNaN(NaN); // true
isNaN("str"); //true

//isFinite - не NaN/Infinity/-Infinity
isFinite(Infinity); //true

//Существует специальный метод Object.is, который сравнивает значения примерно как ===
Object.is(a, b); // идентичен a === b

//parseInt и parseFloat
//parseInt возвращает целое число
//parseFloat возвращает число с плавающей точкой
parseInt("100px"); // 100
parseFloat("12.5em"); // 12.5
parseInt("a123"); // NaN, на первом символе происходит остановка чтения

//Другие математические функции
Math.random(); // 0.1234567894322
Math.max(3, 5, -10, 0, 1); // 5

//------------------------------
//____Строки___//

let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

function sum(a, b) {
  return a + b;
}
`1 + 2 = ${sum(1, 2)}.`; //// 1 + 2 = 3.

//Спецсимволы
let str1 = "Hello\nWorld"; //перевод строки
"I'm the Walrus!" //Длина строки // I'm the Walrus!
`My\n`.length; //3

//Доступ к символам
let str = `Hello`;
alert(str[0]); // H
str.at(0); // H
str[str.length - 1]; // o
str.at(-1); // o

//Строки неизменяемы
//Можно создать новую строку и записать её
let str = "Hi";
str = "h" + str[1]; // заменяем строку -> hi

//Изменение регистра
"Interface".toUpperCase(); // INTERFACE
"Interface".toLowerCase(); // interface

//Поиск подстроки
let str = "Widget with id";
str.indexOf("id"); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
str.indexOf("id", 2); // поиск с позиции 2 -> 12
// str.lastIndexOf - ищет с конца

//Трюк с побитовым НЕ
~2; // -3, то же, что -(2+1)

//includes, startsWith, endsWith
"Widget with id".includes("Widget"); // true
"Widget".startsWith("Wid"); // true
"Widget".endsWith("get"); // true

//Получение подстроки
let str = "stringify";
str.slice(0, 5); //символы от 0 до 5 (не включая 5)
str.slice(2); // ringify
//с конца строки
str.slice(-4, -1); // gif

//Сравнение строк
"a" > "Z"; // true
"Österreich".localeCompare("Zealand"); // -1

//-----------------------------
//____Массивы____//
//упорядоченная коллекция данных

let arr = new Array();
let arr = [];

let fruits = ["Яблоко", "Апельсин", "Слива"];
fruits[0]; // Яблоко
//заменить элемент
fruits[2] = "Груша"; // теперь ["Яблоко", "Апельсин", "Груша"]
//добавить новый
fruits[3] = "Лимон"; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
fruits.length; //4

let arr = [
  "Яблоко",
  { name: "Джон" },
  true,
  function () {
    alert("привет");
  },
];
arr[1].name; // Джон

let fruits = ["Apple", "Orange", "Plum"];
fruits[fruits.length - 1]; // Plum
fruits.at(-1); // Plum

//Методы pop/push, shift/unshift
//push добавляет элемент в конец
//shift удаляет элемент в начале, сдвигая очередь
//pop удаляет последний элемент
//unshift удаляет элемент в конце

//Внутреннее устройство массива
//особый подвид объектов
//копируется по ссылке

//неправильного применения массива - Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет / Заполнение массива в обратном порядке / Добавление нечислового свойства, например: arr.test = 5

//Эффективность
//Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
//Чем больше элементов содержит массив, тем больше времени потребуется для того, чтобы их переместить, больше операций с памятью

//_Перебор элементов
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

//for..of
let fruits = ["Яблоко", "Апельсин", "Слива"];
// проходит по значениям
for (let fruit of fruits) {
  alert(fruit);
}

//Технический можно использовать и вариант for..in
//плохая идея - 10-100 раз медленнее / выполняет перебор всех свойств объекта, а не только цифровых
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let key in arr) {
  alert(arr[key]); // Яблоко, Апельсин, Груша
}

//length
//автоматически обновляется при изменении массива
let arr = [1, 2, 3, 4, 5];
arr.length = 2; // укорачиваем до двух элементов
arr; // [1, 2]

//new Array()
let arr = new Array(2); // создастся ли массив [2]?
arr[0]; // undefined
arr.length; // length 2

//Многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix[1][1][ // 5
  //toString
  (1, 2)
] + 1; // "1,21"

//сравнения
//Не сравнивайте массивы при помощи ==
// сравните их по элементам в цикле или используя методы итерации

//---------------------------
//__Методы массивов__//

//Добавление/удаление элементов
/* 
arr.push(...items) – добавляет элементы в конец,
arr.pop() – извлекает элемент из конца,
arr.shift() – извлекает элемент из начала,
arr.unshift(...items) – добавляет элементы в начало
splice
delete
*/
let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // осталось ["Я", "JavaScript"]

//concat
let arr = [1, 2];
arr
  .concat([3, 4], 5, 6) // 1,2,3,4,5,6

  [
    //Перебор: forEach
    ("Бильбо", "Гэндальф", "Назгул")
  ].forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
  });

//_Поиск в массиве
let arr = [1, 0, false];
arr.indexOf(false); // 2
arr.includes(1); // true

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];
let user = users.find((item) => item.id == 1);
alert(user.name); // Вася

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Вася" },
];
// Найти индекс первого Васи
alert(users.findIndex((user) => user.name == "Вася")); // 0
// Найти индекс последнего Васи
alert(users.findLastIndex((user) => user.name == "Вася")); // 3

//filter
let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter((item) => item.id < 3);

//_Преобразование массива
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map((item) => item.length); //// 6,8,6

//sort(fn)
let arr = [1, 2, 15];
arr.sort(); // 1, 15, 2
arr.sort((a, b) => a - b);

let countries = ["Österreich", "Andorra", "Vietnam"];
countries.sort((a, b) => (a > b ? 1 : -1));
countries.sort((a, b) => a.localeCompare(b));

//reverse
let arr = [1, 2, 3, 4, 5];
arr.reverse(); // 5,4,3,2,1

//_split и join
let str = "тест";
str.split(""); // т,е,с,т

let arr = ["Вася", "Петя", "Маша"];
arr.join(";"); // Вася;Петя;Маша

//reduce/reduceRight
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0); // 15

//Array.isArray
Array.isArray([]); // true

//Большинство методов поддерживают «thisArg»
//Значение параметра thisArg становится this для func
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};
let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);

//-----------------------------------
//_______Перебираемые объекты______//

//Symbol.iterator
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

//Строка – перебираемый объект
for (let char of "test") {
  // срабатывает 4 раза: по одному для каждого символа
  alert(char); // t, затем e, затем s, затем t
}

//Array.from
//делает из него «настоящий» Array
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)

//---------------------------
//____Map и Set___//

//_Map – это коллекция ключ/значение
/* 
new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.
*/
let map = new Map();
map.set("1", "str1"); // строка в качестве ключа
map.get(1); // "num1"

//Map может использовать объекты в качестве ключей

//Цепочка вызовов
map.set("1", "str1").set(1, "num1").set(true, "bool1");

//_Перебор Map
/* 
map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант
*/
let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  alert(entry); // огурец,500 (и так далее)
}

//Object.entries: Map из Object
let obj = {
  name: "John",
  age: 30,
};
let map = new Map(Object.entries(obj));
map.get("name"); // John

//Object.fromEntries: Object из Map
let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
// готово!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2

//__Set
// каждое значение уникальное
/* 
new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
set.clear() – удаляет все имеющиеся значения.
set.size – возвращает количество элементов в множестве.
*/
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (потом Pete и Mary)
}

//----------------------------------
//________WeakMap и WeakSet_______//
//движок JavaScript хранит значения в памяти до тех пор, пока они достижимы

//_WeakMap
/* 
weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
*/
//предотвращает удаление объектов когда эти объекты выступают в качестве ключей
//ключи в WeakMap должны быть объектами
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // работает (объект в качестве ключа)

//не поддерживает перебор и методы keys(), values(), entries()

//WeakMap используется в качестве дополнительного хранилища данных

//WeakMap закешированные результаты будут автоматически удалены из памяти сборщиком мусора
// ...позже, когда объект больше не нужен: ..= null

//📁 cache.js
let cache = new WeakMap();
// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* вычисляем результат для объекта */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}
// 📁 main.js
let obj = {
  /* какой-то объект */
};
let result1 = process(obj);
let result2 = process(obj);
// ...позже, когда объект больше не нужен:
obj = null;

//_WeakSet
//аналогична Set но мы можем добавлять в WeakSet только объекты
//для учёта тех, кто посещал наш сайт
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
alert(visitedSet.has(john)); // true

// проверим, заходила ли Mary?
alert(visitedSet.has(mary)); // false

john = null;

// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)

//------------------------------------
//___Object.keys, values, entries___//
//Map Set Array
let user = {
  name: "John",
  age: 30
};
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]

//Трансформации объекта
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8

//------------------------------------
//__Деструктурирующее присваивание__//

//_Деструктуризация массива
let arr = ["Ilya", "Kantor"];
// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;

//Пропускайте элементы, используя запятые

//Работает с любым перебираемым объектом с правой стороны
let [one, two, three] = new Set([1, 2, 3]);

//Трюк обмена переменных
let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];

//Остаточные параметры
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

//Значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

//_Деструктуризация объекта
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
let {width: w, height: h, title:t} = options;
let {title, ...rest} = options;

//_Вложенная деструктуризация
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

//_Умные параметры функций
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width присваиваем в w
  height: h = 200, // height присваиваем в h
  items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

//---------------------------
//____Дата и время____//

let now = new Date();
let date = new Date(2011, 0, 1, 2, 3, 4, 567);//// 1.01.2011, 02:03:04.56

//Получение компонентов даты
// getFullYear() getMonth() getDate() getHours(), getMinutes(), getSeconds(), getMilliseconds() getDay() getTime() getTimezoneOffset()

//Установка компонентов даты
/* 
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds
*/
let today = new Date();
today.setHours(0, 0, 0, 0)// всё ещё выводится сегодняшняя дата, но время будет ровно 00:00:00.

//_Автоисправление даты
//Можно устанавливать компоненты даты вне обычного диапазона значений, а объект сам себя исправит.
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

//_Преобразование к числу, разность дат
let date = new Date();// количество миллисекунд, то же самое, что date.getTime()

//_Разбор строки с датой
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');// Fri Jan 27 2012 00:51:50 GMT+0400 (Москва, стандартное время)

//_Формат JSON, метод toJSON
//JSON.stringify для преобразования объектов в JSON.
//JSON.parse для преобразования JSON обратно в объект.

//Важное ограничение: не должно быть циклических ссылок.
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup ссылается на room
room.occupiedBy = meetup; // room ссылается на meetup

//_Исключаем и преобразуем: replacer
let json = JSON.stringify(value, [replacer, space])
/* 
value
Значение для кодирования.
replacer
Массив свойств для кодирования или функция соответствия function(key, value).
space
Дополнительное пространство (отступы), используемое для форматирования
*/
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

//Форматирование: space
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* отступ в 2 пробела:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* для JSON.stringify(user, null, 4) результат содержит больше отступов:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

//---------------------------------------
//---------------------------------------
//___Продвинутая работа с функциями__//

//___Рекурсия и стек__//

function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}
alert( pow(2, 3) ); // 8
//pow рекурсивно вызывает саму себя до n == 1
/* 
pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2
Когда функция заканчивается, контекст её выполнения больше не нужен, поэтому он удаляется из памяти, а из стека восстанавливается предыдущий
*/

//__Рекурсивные обходы
let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
alert(sumSalaries(company)); // 6700
//для объекта {...} используются рекурсивные вызовы, а массивы [...] являются «листьями» дерева рекурсии, они сразу дают результат

//__Связанный список
//Операции «удалить элемент» и «вставить элемент» являются дорогостоящими
let arr = [obj1, obj2, obj3];

//если нам действительно нужны быстрые вставка/удаление можем использовать связанный список
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//Альтернативный код для создания:
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
//можем вставить или удалить элементы из любого мест
list = { value: "new item", next: list };
//Чтобы удалить элемент из середины списка, нужно изменить значение next
list.next = list.next.next;

//------------------------------------------------
//__Остаточные параметры и оператор расширения__//

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Юлий Цезарь
  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  alert( titles[0] ); // Консул
  alert( titles[1] ); // Император
  alert( titles.length ); // 2
}
showName("Юлий", "Цезарь", "Консул", "Император");

//Переменная "arguments"
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // Объект arguments можно перебирать
  // for (let arg of arguments) alert(arg);
}
// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

//Стрелочные функции не имеют "arguments"

//Оператор расширения
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

//---------------------------------------------
//__Область видимости переменных, замыкание__//

//_Блоки кода
//Если переменная объявлена внутри блока кода {...}, то она видна только внутри этого блока.
if (true) {
  let phrase = "Hello";
  alert(phrase); // Hello
}
alert(phrase); // Ошибка, нет такой переменной!

//_Вложенные функции

//Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ
function makeCounter() {
  let count = 0;

  return function() {
    return count++; // есть доступ к внешней переменной "count"
  };
}
let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
/* 
когда код внутри counter() ищет переменную count, он сначала ищет ее в собственном лексическом окружении (пустом, так как там нет локальных переменных), а затем в лексическом окружении внешнего вызова makeCounter(), где находит count и изменяет ее.
*/

//_Лексическое окружение
//Внутреннее и внешнее лексическое окружение

//Function Declaration
//Function Declaration мгновенно инициализируется полностью

//Когда код хочет получить доступ к переменной – сначала происходит поиск во внутреннем лексическом окружении, затем во внешнем, затем в следующем и так далее, до глобального.

//_Возврат функции 
//Все функции помнят лексическое окружение, в котором они были созданы.Так функция запоминает, где она была создана, независимо от того, где она вызывается.
//Переменная обновляется в том лексическом окружении, в котором она существует.

//_Сборка мусора
//хранится в памяти только до тех пор, пока к нему можно обратиться
//Однако если существует вложенная функция, которая все еще доступна после завершения функции, то она имеет свойство [[Environment]], ссылающееся на лексическое окружение. В этом случае лексическое окружение остается доступным даже после завершения работы функции.
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}
let g = f(); // g.[[Environment]] хранит ссылку на лексическое окружение
// из соответствующего вызова f()

//------------------------------------
//__Устаревшее ключевое слово "var__//
//Для «var» не существует блочной области видимости.Область видимости переменных var ограничивается либо функцией, либо, если переменная глобальная, то скриптом. Такие переменные доступны за пределами блока.
if (true) {
  var test = true; // используем var вместо let
}
alert(test); // true, переменная существует вне блока if

//var допускает повторное объявление
var user = "Pete";
var user; // ничего не делает, переменная объявлена раньше
// ...нет ошибки
alert(user); // Pete

//«var» обрабатываются в начале запуска функции - Это поведение называется hoisting

//Объявления переменных «всплывают», но присваивания значений – нет.

//IIFE
//Здесь создаётся и немедленно вызывается Function Expression. Так что код выполняется сразу же и у него есть свои локальные переменные.Даже с var
(function() {
  var message = "Hello";
  alert(message); // Hello
})();

//------------------------------
//__Глобальный объект__//
//В браузере он называется window, в Node.js — global

//Если свойство настолько важное, что вы хотите сделать его доступным для всей программы
window.currentUser = {
  name: "John"
};

//Использование для полифилов
//проверить поддержку современных возможностей язык
if (!window.Promise) {
  alert("Ваш браузер очень старый!");
}

//-------------------------
//__Объект функции, NF__//
//JavaScript функции – это объекты

//Свойство «name»
function sayHi() {
  alert("Hi");
}
alert(sayHi.name); // sayHi

//Свойство «length»
function f2(a, b) {}
alert(f2.length); // 2

//Пользовательские свойства
function sayHi() {
  alert("Hi");
  // давайте посчитаем, сколько вызовов мы сделали
  sayHi.counter++;
}
sayHi.counter = 0; // начальное значение

//имя "func" локальное и находится внутри функции. Теперь оно взято не снаружи
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Теперь всё в порядке
  }
};
let welcome = sayHi;
sayHi = null;
welcome(); // Hello, Guest (вложенный вызов работает)

//------------------------------
//__Синтаксис "new Function"__//

let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

//_Замыкание
//new Function - такая функция имеет доступ только к глобальным переменным
function getFunc() {
  let value = "test";
  let func = new Function('alert(value)');
  return func;
}
getFunc()(); // ошибка: value не определено

//--------------------------------------------
//__Планирование: setTimeout и setInterval__//
/* 
setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
*/
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон

setTimeout(() => alert('Привет'), 1000);

//_Отмена через clearTimeout
let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера
clearTimeout(timerId);

//_setInterval
let timerId = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

//_Вложенный setTimeout
//Есть два способа запускать что-то регулярно. Один из них setInterval. Другим является вложенный setTimeout.Более гибкий метод, чем setInterval
//Метод setTimeout выше планирует следующий вызов прямо после окончания текущего (*).
/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

//_Вложенный setTimeout позволяет задать задержку между выполнениями более точно, чем setInterval.

//затраченное на выполнение func, использует часть заданного интервала времени.
let i = 1;
setInterval(function() {
  func(i);
}, 100);

//ВложенныйsetTimeout гарантирует фиксированную задержку (здесь 100 мс).
let i = 1;
setTimeout(function run() {
  func(i);
  setTimeout(run, 100);
}, 100);

//_setTimeout с нулевой задержкой
//планировщик будет вызывать функцию только после завершения выполнения текущего код
setTimeout(() => alert("Мир"));
alert("Привет");
//Привет Мир

//---------------------------------------------------
//__Декораторы и переадресация вызова, call/apply__//

//cachingDecorator – это декоратор, специальная функция, которая принимает другую функцию и изменяет её поведение
function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  alert(`Called with ${x}`);
  return x;
}
function cachingDecorator(func) {
  let cache = new Map();

  //обертка
  return function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }
    let result = func(x); // иначе, вызываем функцию
    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}
slow = cachingDecorator(slow);
alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша
alert( slow(2) ); // slow(2) кешируем
alert( "Again: " + slow(2) ); // возвращаем из кеша

/* 
func.call(context, arg1, arg2…) – вызывает func с данным контекстом и аргументами.
func.apply(context, args) – вызывает func, передавая context как this и псевдомассив args как список аргументов.
*/
let wrapper = function(original, arguments) {
  return original.apply(this, arguments);
};

//----------------------------------
//__Привязка контекста к функции__//

let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};
setTimeout(user.sayHi, 1000); // Привет, undefined!

//Решение 1: сделать функцию-обёртку
let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

//user достаётся из замыкания
setTimeout(function() {
  user.sayHi(); // Привет, Вася!
}, 1000);

//Решение 2: привязать контекст с помощью bind
// bind, который позволяет зафиксировать this

let user = {
  firstName: "Вася"
};
function func() {
  alert(this.firstName);
}
let funcUser = func.bind(user);
funcUser(); // Вася

//_Частичное применение
//Мы можем привязать не только this, но и аргументы. Это делается редко, но иногда может быть полезно
function mul(a, b) {
  return a * b;
}
let double = mul.bind(null, 2);
alert( double(3) ); // = mul(2, 3) = 6

//_Частичное применение без контекста
function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}
// использование:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};
// добавляем частично применённый метод с фиксированным временем
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow("Hello");
// Что-то вроде этого:
// [10:00] John: Hello!

//-----------------------------------
//__Повторяем стрелочные функции__//
//У стрелочных функций нет «this»
//Стрелочные функции не имеют «arguments»
//Не могут быть вызваны с new

//---------------------------------------
//---------------------------------------
//__Свойства объекта, их конфигурация__//

//__Флаги и дескрипторы свойств__//

//_Флаги свойств
//writable – если true, свойство можно изменить, иначе оно только для чтения.
//enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
//configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя

//Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* дескриптор свойства:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

//изменить флаги, мы можем использовать метод Object.defineProperty
let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

//метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

//Глобальное запечатывание объекта
//Object.freeze(obj) ...

//----------------------------------
//__Свойства - геттеры и сеттеры__//

let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// set fullName запустится с данным значением
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper

//-----------------------------
//-----------------------------
//__Прототипы, наследование__//

//------------------------------
//__Прототипное наследование__//

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal; // (*)
// теперь мы можем найти оба свойства в rabbit:
alert( rabbit.eats ); // true (**) / свойства называются «унаследованными
alert( rabbit.jumps ); // true

//Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу
//Значение __proto__ может быть объектом или null. Другие типы игнорируются.

let user = {
  name: "John",
  surname: "Smith",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};
alert(admin.fullName); // John Smith (*)
// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.name); // Alice
alert(admin.surname); // Cooper

//_Значение «this»
//При вызове метода this — всегда объект перед точкой,admin.fullName= в качестве this использует admin

//_Цикл for…in
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys возвращает только собственные ключи
alert(Object.keys(rabbit)); // jumps
// for..in проходит и по своим, и по унаследованным ключам
for(let prop in rabbit) alert(prop); // jumps, затем eats

//obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

//---------------------
//____F.prototype____//
//F.prototype содержится объект, оператор new

let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
alert( rabbit.eats ); // true

//По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор
function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }
alert( Rabbit.prototype.constructor == Rabbit ); // true

function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }
let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

//--------------------------
//__Встроенные прототипы__//
let obj = {};
alert(obj.__proto__ === Object.prototype); // true

//всё наследует от объектов
//null -> object.prototype -> Array.prototype / Function.../ Number -> ...
let arr = [1, 2, 3];
// наследует ли от Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true
// затем наследует ли от Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true
// и null на вершине иерархии
alert( arr.__proto__.__proto__.__proto__ ); // null

//_Примитивы
//если мы попытаемся получить доступ к их свойствам, то тогда будет создан временный объект-обёртка с использованием встроенных конструкторов String, Number и Boolean, который предоставит методы и после этого исчезнет

//_Изменение встроенных прототипов
String.prototype.show = function() {
  alert(this);
};
"BOOM!".show(); // BOOM!

//В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. Это создание полифилов.
if (!String.prototype.repeat) { // Если такого метода нет
  // добавляем его в прототип
  String.prototype.repeat = function(n) {
    // повторить строку n раз

    // на самом деле код должен быть немного более сложным
    // (полный алгоритм можно найти в спецификации)
    // но даже неполный полифил зачастую достаточно хорош для использования
    return new Array(n + 1).join(this);
  };
}
alert( "La".repeat(3) ); // LaLaLa

//_Заимствование у прототипов
//берём метод из одного объекта и копируем его в другого
//это будет невозможно, если obj уже наследует от другого объекта
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
obj.join = Array.prototype.join;
alert( obj.join(',') ); // Hello,world!

//-----------------------------------------------------
//__Методы прототипов, объекты без свойства __proto__//

let animal = {
  eats: true
};
// создаём новый объект с прототипом animal
let rabbit = Object.create(animal);
rabbit.eats // true

/* 
Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj (то же самое, что и геттер __proto__).
Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto (то же самое, что и сеттер __proto__).
*/

//---------------
//---------------
//____Классы___//

//_Синтаксис «class»
//Создаётся новый объект
//constructor запускается с заданным аргументом и сохраняет его в this...

class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// класс - это функция
alert(typeof User); // function

// ...или, если точнее, это метод constructor
alert(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
alert(User.prototype.sayHi); // sayHi() { alert(this.name); }

// в прототипе ровно 2 метода
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

//_Не просто синтаксический сахар
// - конструктор класса не может быть вызван без new
// - Методы класса являются неперечислимыми

//_Геттеры/сеттеры, другие сокращения
class User {
  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }
}

let user = new User("Иван");
user.name; // Иван

//-------------------------
//_Наследование классов__//

//_Ключевое слово «extends»
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} стоит неподвижно.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }
}
let rabbit = new Rabbit("Белый кролик");
rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!

//_Переопределение методов
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }

  // ...теперь это будет использоваться для rabbit.stop()
  // вместо stop() из класса Animal
  stop() {
    super.stop(); // вызываем родительский метод stop / стрелочные функции не имеют super
    this.hide(); // и затем hide
  }
}

//_Переопределение конструктора
class Rabbit extends Animal {
  // генерируется для классов-потомков, у которых нет своего конструктора
  constructor(...args) {
    super(...args);
  }
}

//_Устройство super
let animal = {
  name: "Животное",
  eat() {         // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} ест.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Кролик",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbit,
  name: "Длинноух",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// работает верно
longEar.eat();  // Длинноух ест.

//_Методы не «свободны»


//-----------------------------------
//__Статические свойства и методы__//

//то же самое, что присвоить метод напрямую
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // помним, что this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}
let article = Article.createTodays();
alert( article.title ); // Сегодняшний дайджест

//----------------------------------------------
//__Приватные и защищённые методы и свойства__//

//Внутренний интерфейс – методы и свойства, доступные из других методов класса, но не снаружи класса.
//Внешний интерфейс – методы и свойства, доступные снаружи класса.

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}
// создаём новую кофеварку
let coffeeMachine = new CoffeeMachine(100);
// устанавливаем количество воды
coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды

//_Приватное свойство «#..»
class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    if (value > this.#waterLimit) throw new Error("Слишком много воды");
  }
}
let coffeeMachine = new CoffeeMachine();
// снаружи  нет доступа к приватным методам класса
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error

//-----------------------------------
//__Расширение встроенных классов__//
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter(item => item >= 10);

// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

//-----------------------------------
//__Проверка класса: "instanceof"__//

class Rabbit {}
let rabbit = new Rabbit();
// это объект класса Rabbit?
alert( rabbit instanceof Rabbit ); // true

let arr = [1, 2, 3];
arr instanceof Array  // true
arr instanceof Objec // true

//--------------
//__Примеси__//

// примесь
let sayHiMixin = {
  sayHi() {
    alert(`Привет, ${this.name}`);
  },
  sayBye() {
    alert(`Пока, ${this.name}`);
  }
};
// использование:
class User {
  constructor(name) {
    this.name = name;
  }
}
// копируем методы
Object.assign(User.prototype, sayHiMixin);
// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!


let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};
let sayHiMixin = {
  __proto__: sayMixin, // (или мы можем использовать Object.setPrototypeOf для задания прототипа)
  sayHi() {
    // вызываем метод родителя
    super.say(`Привет, ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Пока, ${this.name}`); // (*)
  }
};
class User {
  constructor(name) {
    this.name = name;
  }
}
// копируем методы
Object.assign(User.prototype, sayHiMixin);
// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!

//_EventMixin
// Создадим класс
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Добавим примесь с методами для событий
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
// Добавим обработчик, который будет вызван при событии "select":
menu.on("select", value => alert(`Выбранное значение: ${value}`));
// Генерирует событие => обработчик выше запускается и выводит:
menu.choose("123"); // Выбранное значение: 123

//-----------------------
//__Обработка ошибок__//

//__Обработка ошибок, "try..catch"__//

//try..catch работает синхронно
try {
  // код...
} catch (err) {
  // обработка ошибки
}

//Чтобы поймать исключение внутри запланированной функции, try..catch должен находиться внутри самой этой функции:
setTimeout(function() {
  try {
    noSuchVariable; // try..catch обрабатывает ошибку!
  } catch {
    alert( "ошибка поймана!" );
  }
}, 1000);

//_Объект ошибки
try {
  lalala; // ошибка, переменная не определена!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)
  // Можем также просто вывести ошибку целиком
  // Ошибка приводится к строке вида "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

//_Генерация собственных ошибок
let error = new Error(message);
let error = new SyntaxError(message);
let error = new ReferenceError(message);

let error = new Error("Ого, ошибка! o_O");
alert(error.name); // Error
alert(error.message); // Ого, ошибка! o_O

//_Проброс исключения
//catch фактически обрабатывает только те ошибки, с которыми он знает, как справляться, и пропускает остальные
let json = '{ "age": 30 }'; // данные неполны
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }
  blabla(); // неожиданная ошибка
  alert( user.name );
} catch(e) {
  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // проброс (*)
  }
}

//_try…catch…finally
//блок finally срабатывает при любом выходе из try..catch, в том числе и return.
try {
  alert( 'try' );
  if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );//выполняем всегда
}

//_Глобальный catch
window.onerror = function(message, url, line, col, error) {
  alert(`${message}\n В ${line}:${col} на ${url}`);
};

//-----------------------------------------------
//__Пользовательские ошибки, расширение Error__//
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
    this.stack = ""//<стек вызовов>; // нестандартное свойство, но обычно поддерживается
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Упс!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Упс!
  alert(err.name); // ValidationError
  alert(err.stack); // список вложенных вызовов с номерами строк для каждого
}

//--------------------------
//--------------------------
//__Промисы, async/await__//

//__Промисы__//

let promise = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  //resolve(value) — если работа завершилась успешно, с результатом value
  //reject(error) — если произошла ошибка, error – объект ошибки
});

//state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject

//_Потребители: then, catch
promise.then().catch().finally();

//----------------------
//__Цепочка промисов__//
//вызов promise.then тоже возвращает промис, так что мы можем вызвать на нём следующий .then

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
  return result * 2;
});

// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
  // Загружаем данные в формате json
  .then(response => response.json())
  // Делаем запрос к GitHub
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  // Загружаем ответ в формате json
  .then(response => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => img.remove(), 3000); // (*)
  });

//-------------------------------
//__Промисы: обработка ошибок__//

//Самый лёгкий путь перехватить все ошибки – это добавить .catch в конец цепочки

//Неявный try…catch
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
}).catch(alert); // Error: Ошибка!

//Пробрасывание ошибок
// the execution: catch -> catch -> then
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
}).catch(function(error) { // (*)
  if (error instanceof URIError) {
    // обрабатываем ошибку
  } else {
    alert("Не могу обработать ошибку");
    throw error; // пробрасывает эту или другую ошибку в следующий catch
  }
}).then(function() {
  /* не выполнится */
}).catch(error => { // (**)
  alert(`Неизвестная ошибка: ${error}`);
  // ничего не возвращаем => выполнение продолжается в нормальном режиме
});

//Необработанные ошибки 
//JavaScript-движок отслеживает такие ситуации и генерирует в этом случае глобальную ошибку

//-----------------
//__Promise API__//

//Promise.all
//Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.
//если любой из этих объектов не является промисом, он передаётся в итоговый массив «как есть
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2,
  3
]).then(alert); // 1, 2, 3

//Promise.allSettled
//Метод Promise.allSettled всегда ждёт завершения всех промисов
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];
Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  })
//https://api.github.com/users/iliakan: 200
//https://api.github.com/users/remy: 200
//https://no-such-url: TypeError: Failed to fetch

//_Promise.race
//ждёт только первый выполненный промис

//_Promise.any
//ждёт только первый успешно выполненный промиc

//Promise.resolve
//создаёт успешно выполненный промис с результатом value
let promise = new Promise(resolve => resolve(value));

//Promise.reject
//создаёт промис, завершённый с ошибкой error
let promise = new Promise((resolve, reject) => reject(error));

//--------------------
//__Промисификация__//
let loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err)
      else resolve(script);
    });
  })
}
// использование:
// loadScriptPromise('path/script.js').then(...)

//-----------------
//__Микрозадачи__//
//microtask queue
//Обработка промисов всегда асинхронная, т.к. все действия промисов проходят через внутреннюю очередь
//Очередь определяется как первым-пришёл-первым-ушёл (FIFO)

//-----------------
//__Async/await__//
//«синтаксический сахар» для получения результата промиса
//функция всегда возвращает промис

//_Async
async function f() {
  return 1;
}
f().then(alert); // 1

//_Await
//await работает только внутри async
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });
  let result = await promise; // будет ждать, пока промис не выполнится (*)
  alert(result); // "готово!"
}
f();

//_Обработка ошибок
async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // перехватит любую ошибку в блоке try: и в fetch, и в response.json
    alert(err);
  }
}
f();

//--------------------------------------
//__Генераторы, продвинутая итерация__//

//__Генераторы__//

//Функция-генератор
//Основным методом генератора является next()
//По достижении yield выполнение функции приостанавливается
//Результатом метода next() - value: значение из yield / done: true, если выполнение функции завершено, иначе false
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();
let one = generator.next();
alert(JSON.stringify(one)); // {value: 1, done: false}
let two = generator.next();
alert(JSON.stringify(two)); // {value: 2, done: false}
let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}

//_Перебор генераторов
//генераторы являются перебираемыми объектами
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let generator = generateSequence();
for(let value of generator) {
  alert(value); // 1, затем 2, затем 3
}

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let sequence = [0, ...generateSequence()];
alert(sequence); // 0, 1, 2, 3

//_Использование генераторов для перебираемых объектов
let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5

//_Композиция генераторов
//yield*, который позволяет «вкладывать» генераторы один в другой 
function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence(48, 57);
  // A..Z
  yield* generateSequence(65, 90);
  // a..z
  yield* generateSequence(97, 122)
}
let str = '';
for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}
alert(str); // 0..9A..Za..z

//yield – дорога в обе стороны
function* gen() {
  let ask1 = yield "2 + 2 = ?";
  alert(ask1); // 4
  let ask2 = yield "3 * 3 = ?"
  alert(ask2); // 9
}
let generator = gen();
alert( generator.next().value ); // "2 + 2 = ?"
alert( generator.next(4).value ); // "3 * 3 = ?"
alert( generator.next(9).done ); // true

//_generator.throw
function* generate() {
  let result = yield "2 + 2 = ?"; // Ошибка в этой строке
}
let generator = generate();
let question = generator.next().value;
try {
  generator.throw(new Error("Ответ не найден в моей базе данных"));
} catch(e) {
  alert(e); // покажет ошибку
}

//----------------------------------------
//__Асинхронные итераторы и генераторы__//

async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    // ура, можно использовать await!
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}
(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();

let range = {
  from: 1,
  to: 5,
  async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
    for(let value = this.from; value <= this.to; value++) {
      // пауза между значениями, ожидание
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield value;
    }
  }
};

(async () => {
  for await (let value of range) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();

//_Пример из реальной практики
async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;
  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // GitHub требует заголовок user-agent
    });
    const body = await response.json(); // (2) ответ в формате JSON (массив коммитов)
    // (3) Ссылка на следующую страницу находится в заголовках, извлекаем её
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);//https://api.github.com/repositories/93253246/commits?page=2 ...
    nextPage = nextPage && nextPage[1];
    url = nextPage;
    for(let commit of body) { // (4) вернуть коммиты один за другим, до окончания страницы
      yield commit;
    }
  }
}

//------------------------------
//------------------------------
//___Модули__//
//Модуль – это просто файл
//В модулях всегда используется режим use strict

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import {sayHi} from './sayHi.js';
alert(sayHi); // function...
sayHi('John'); // Hello, John!

//defer - модули, даже если загрузились быстро, ожидают полной загрузки HTML документа
//async - не ждут другие скрипты или HTML-документ

//----------------------
//__Экспорт и импорт__//

// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}

//Экспорт отдельно от объявления
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
function sayBye(user) {
  alert(`Bye, ${user}!`);
}
export {sayHi, sayBye}; // список экспортируемых переменныx

//_Импорт * - всё сразу
// 📁 main.js
import {sayHi, sayBye} from './say.js';
sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// 📁 main.js
import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');

//_Импорт «как»
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';
hi('John'); // Hello, John!
bye('John'); // Bye, John!

//_Динамические импорты
let {hi, bye} = await import('./say.js');
hi();
bye();

//----------------------
//----------------------
//___Other__//

//__Proxy и Reflect__//
let target = {};
let proxy = new Proxy(target, {}); // пустой handler
proxy.test = 5; // записываем в прокси (1)
alert(target.test); // 5, свойство появилось в target!





































