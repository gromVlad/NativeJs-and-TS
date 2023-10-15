//---------------------------
//Переменные и значения
let a = 1;
console.log(a);
a = "test"; //переприсвоили
console.log(a);
const b = 10; // констатна она неизменна

//используем имена без user_name / UserName / 8my / my-var / без ничего

//можно userName/ myClass8 / $myVar / _name

//var устарел и не используеться

//---------------------------
//Арифметические операторы
// Базовые арифметические операторы
const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // 2 * 2 * 2
console.log(volume);

// Строки
const city = "Москва";
const street = "Новослободская";
console.log(city + ", " + street + " " + 5);

//-----------------------------
// Операторы присваивания
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1
console.log(age);

// Операторы сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

//----------------------------
//Порядок операторов
//СОГЛАСНО ТАБЛИЦЕ ПРИОРИТЕТОВ

const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

// 100 - (12) 10 > (10) 90 - (12) 5

const a = (6 + 10) / 2;
console.log(a);

let b;
let c;
c = b = 100 + 50 + 30;
console.log(c);
console.log(b);

//-----------------------------
//Типы данных
//ОБЪЕКТЫ И ПРИМИТИВЫ
//примитивы - неимутабельны
//объекты - мутабельны

//7 примитивов
4; // числа
("hello"); //string
true; // boolean
undefined; // ничего не положили
null; // пустое значения
Symbol("admin"); // уникальное неизменно значение
42n; // bigint

let a = 5;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = "строка";
console.log(typeof a);
e = "sdfsf";
console.log(typeof e);

let isAdmin = a > 10;
console.log(typeof isAdmin);

let c = undefined;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(typeof d == null);

//------------------------------
/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/
const payRateUsd = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;
console.log("смогу ли я сделать" + " " + availableHours > projectHours);
console.log("стоимость" + " " + projectHours * payRateUsd + "$");

//-----------------------------
//Шаблонные строки
const projectName = "Сайт магазина";
const price = 2000;
const author = "Василий Пупкин";

const template = author + " заказал " + projectName + " по цене " + price + "$";
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = "Проект \n" + "Цена: " + price + "$";
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);

//------------------------------
//Преобразование типов
const age = "18";
console.log(Number(age) + 5);
//неявное преобразование
console.log(age * 3);
const userName = "Вася";
console.log(Number(userName) + 5);
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean("") + 10);
console.log(true + 2);
const a = 2 + "10";
console.log(a - 10);

//----------------------------
//False из других типов
//все false
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//-----------------------------
//If else
const money = 100;

if (money > 50) {
  console.log("Может купить наш продукт");
} else if (money > 50) {
  console.log("Куплен mini продукт");
} else if (money > 50) {
  console.log("Куплен mini продукт");
} else {
  console.log("Не хватает баланса");
}

console.log("Итог");

//------------------------------
//Упражнение - Размещение депозита
/*
  Васи положил 12 000$ на вклад 7% годовых с
  капитализацией 1 раз в месяц.
  Вывести в консоль, сможет ли он купить дом за 13 500$
  через 2 года после снятия вклада. И остаток после покупки.
  Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const deposit = 10000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
  console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
} else {
  console.log(`Мы накопили: ${res}. Купить не сможем (((`);
}

//------------------------------
//Операторы равенства
//не строгое по значению , строгое и по значению и по типу
const secretNumber = "7";

if (Number(secretNumber) === 7) {
  console.log("Угадал строго");
}

if (secretNumber == 7) {
  console.log("Угадал не строго");
}

const q = Number(prompt("Введите число"));
if (q === 7) {
  console.log("!");
}

//-------------------------------
//Switch
const role = "manager";

switch (role) {
  case "manager":
    console.log("Менеджер");
    break;
  case "admin":
    console.log("Админ");
    break;
  case "ceo":
    console.log("CEO");
    break;
  default:
    console.log("Мы тебя не знаем!");
}

switch (role) {
  case "manager": // role === 'manager'
  case "admin":
    console.log("Не руководитель");
    break;
  case "ceo":
    console.log("Руководитель");
    break;
  default:
    console.log("Мы тебя не знаем!");
}

const num = 1;

switch (true) {
  case num > 0:
    console.log("Положительный");
    break;
  case num < 0:
    console.log("Отрицательный");
    break;
  default:
    console.log("Ноль!");
}

//-----------------------------
//Тернарные операторы
const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message = budget > bmwX3Price ? "BMW" : "Велосипед";

//--------------------------
/*
	Методом prompt получите ответ пользователя
	на вопрос "Сколько будет 7 + или - 15?".Если ответ верен
	выведите в консоле "Успех", если нет - "Вы робот!",
  а если он введёт "Я не робот", то тоже "Успех".
*/

const res = prompt("Сколько будет 7 + или - 15?");
switch (true) {
  case res === "Я не робот":
  case Number(res) === 22:
  case Number(res) === -8:
    console.log("Успех");
    break;
  default:
    console.log("Вы робот!");
}

if (res === "Я не робот") {
  console.log("Успех");
} else {
  const resNum = Number(res);
  switch (resNum) {
    case 22:
    case -8:
      console.log("Успех");
      break;
    default:
      console.log("Вы робот!");
  }
}

//----------------------------
//Логические операторы
const isAdmin = true;
const canWrite = true;

//---------------------------
//Операторы с другими типами
console.log("Вася" || "Олег"); // Вася
console.log(false || "Олег"); // Олег
console.log("Вася" || false); // Вася
console.log(false || false); // false

console.log("Вася" && "Олег"); // Олег
console.log(false && "Олег"); // false
console.log("Вася" && false); // false
console.log(false && false); // false

let a = "Марина";
const username = a || "Петя";
console.log(username); // Марина

const isAdmin = true;
const filename = isAdmin && "file.mp4";
console.log(filename); // file.mp4

//----------------------------
//Оператор нулевого слияния
let age = 0;
console.log(age || 18); // 18
//0 то же валидный
console.log(age ?? 18); // 0

//-------------------------
//Упражнение - Проверка прав
/*
  Пользователь хочет приобрести игру в магазине
  Он может это сделать отлько если:
  - Eго баланс больше 1000 (balance) 
  или число бонусов больше 100 (bonusBalance)
  - Он не забанен (isBanned)
  - Игра не кулена (isExist)
  - Игра в продаже (isSelling)
  Напишите условие для покупки и выведите в консоль
  результат
*/
const balance = 100;
const bonusBalance = 900;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy =
  (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
console.log(`Могу купить игру: ${canBuy ? "Да" : "Нет"}`);

//------------------------
//Введение в функции
//function - ключевое слова , logName - название, (name, surname) - аргумента , {} - возвращаемое значение
function logName(name, surname) {
  console.log(`Моё имя ${name} ${surname}`);
}
logName("Антон", "Ларичев");

//возврощает что-то
function countDepositSum(depositInUSD, month, rate) {
  return depositInUSD * (1 + rate / 12) ** month;
}
console.log(countDepositSum(1000, 48, 0.1));

//-----------------------
//Анонимные функции
function powerOfTwo(num) {
  return num * num;
}
console.log(powerOfTwo(5));

//нез название
const poft = function (num) {
  return num * num;
};
console.log(poft(6));

//---------------------
//Стрелочные функции
function powerOfTwo(num) {
  console.log(num);
  return num * num;
}
console.log(powerOfTwo(5));

const poft = (num) => num * num;
console.log(poft(6));

//-------------------
//Упражнение - Упрощение функции
/* Переписать функцию в стрелочную */

function toPower(num, power) {
  const res = num ** power;
  return res;
}

console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));

//----------------------
//Параметры по умолчанию
function toPower(num, power = 2) {
  const res = num ** power;
  return res;
}

console.log(toPower(2, 3));
console.log(toPower(2));

//--------------------
//Условия в функциях
function canAccessWebsite(age) {
  if (age < 18) {
    return "Нет";
  }
  return "Да";
}
console.log(canAccessWebsite(19));

const canAccessWebsite2 = (age) => (age < 18 ? "Нет" : "Да");
console.log(canAccessWebsite2(19));

//--------------------
//Функции в функциях
const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
  return present * KG_IN_USD;
}

function calculateKm(distance) {
  return distance * KM_IN_USD;
}

function getExchagePrice(present1, present2, distance) {
  const price1 = calculateW(present1);
  const price2 = calculateW(present2);
  const distancePrice = calculateKm(distance);
  return price1 + price2 + distancePrice;
}

console.log(getExchagePrice(1, 2, 10));

//-----------------------
//Упражнение - Кредит на MacBook
/*
  Пользователь:
  - Возраст
  - Наличие работы
  - Деньги
  Нужно проверить может ли он купить новый MacBook за 2000$?
  Он может брать не только свои деньги, но и взять кредит.
  Ему дадут 500$, только если ему больше 24-х лет и он
  имеет работу, 100$ если ему просто больше 24-х лет и 0 в
  ином случае.
  Напишите функцию, которая принимает данные пользователя
  и товара и возвращает true или false;
*/

function computeCredit(age, hasJob = false) {
  switch (true) {
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
    default:
      return 0;
  }
}

function canBuy(productPrice, age, money, hasJob = false) {
  const creditMoney = computeCredit(age, hasJob);
  return productPrice <= money + creditMoney;
}

console.log(canBuy(2000, 25, 1500, true));

//---------------------------
//Знакомство с массивами
const role1 = "admin";
const role2 = "user";
const role3 = "superuser";

const roles = ["admin", "user", "superuser"];
const userInfo = ["Аня", 25];
console.log(roles); // ['admin', 'user', 'superuser']
console.log(roles[0]); // 'admin'
console.log(roles.length); // 3
console.log(roles[roles.length - 1]); //last 'superuser'

console.log(roles.at(0)); // the same first element
console.log(roles.at(-1)); // the same last element

const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0];
console.log(usersAge); // [18, 5]

const userNames = new Array("Вася", "Петя", "Катя");
console.log(userNames); // ['Вася', 'Петя', 'Катя']

function square(el) {
  return el * el;
}
console.log(square([1, 2, 3])); // Error: Cannot multiply an array by itself

//---------------------------
//Управление элементами массива
const users = ["Аня", "Вика", "Катя"];
console.log(users); // Output: ['Аня', 'Вика', 'Катя']

//перезапись
users[2] = "Кристина";
console.log(users); // Output: ['Аня', 'Вика', 'Кристина']

//добавить элемент в конце
const arrLength = users.push("Никита");
console.log(users); // Output: ['Аня', 'Вика', 'Кристина', 'Никита']
console.log(arrLength); // Output: 4

//добавить в начале
users.unshift("Вася");
console.log(users); // Output: ['Вася', 'Аня', 'Вика', 'Кристина', 'Никита']

//удалить в конце плюс возврощает удаленный
const el = users.pop();
console.log(el); // Output: 'Никита'
console.log(users); // Output: ['Вася', 'Аня', 'Вика', 'Кристина']

//удалить в начале плюс возврощает удаленный
const el2 = users.shift();
console.log(el2); // Output: 'Вася'
console.log(users); // Output: ['Аня', 'Вика', 'Кристина']

//------------------------
//Поиск элемента
const roles = ["user", "admin", "manager"];

const elIndex = roles.indexOf("admin");
console.log(elIndex); // Output: 1

const elIndex2 = roles.indexOf("superuser");
console.log(elIndex2); // Output: -1

if (roles.indexOf("admin") >= 0) {
  console.log("Доступ есть"); // Output: Доступ есть
}

console.log(roles.includes("admin")); // Output: true
console.log(roles.includes("superuser")); // Output: false

if (roles.includes("admin")) {
  console.log("Доступ есть"); // Output: Доступ есть
}

//-------------------------
//Slice, splice, concat, reverse
const roles = ["user", "admin", "manager", "superuser"];

//не модифицирует исходный массив
const res = roles.slice(2);
console.log(res); // Output: ['manager', 'superuser']

const res2 = roles.slice(0, 2);
console.log(res2); // Output: ['user', 'admin']

const res3 = roles.slice(-1);
console.log(res3); // Output: ['superuser']

const res4 = roles.slice(1, -2);
console.log(res4); // Output: ['admin']
console.log(roles); // Output: ['user', 'admin', 'manager', 'superuser']

// const res5 = roles.splice(2)
// console.log(res5);
// console.log(roles);

// const res6 = roles.splice(2, 1)
// console.log(res6);

// const res7 = roles.splice(-1)
// console.log(res7);

const res8 = roles.reverse();
console.log(res8); // Output: ['superuser', 'manager', 'admin', 'user']
console.log(roles); // Output: ['superuser', 'manager', 'admin', 'user']

const newRoles = ["sysandmin", "developer"];
const res9 = roles.concat(newRoles);
console.log(res9); // Output: ['superuser', 'manager', 'admin', 'user', 'sysandmin', 'developer']

//-------------------------
//Из строки в массив и обратно
const roles = ["user", "admin", "manager", "superuser"];

const url = "auth/user/login";
const res = url.split("/");
console.log(res); // Output: ['auth', 'user', 'login']

console.log(roles.join("-")); // Output: 'user-admin-manager-superuser'

//------------------------
//Упражнение - Обновление списка задач
/*
  Дан список задач
  const tasks = ['Задача 1'];
  Сделать функции:
  - Добавление задачи в конец
  - Удаление задачи по названию
  - Перенос задачи в начало списка по названию 
  Всегда меняем исходный массив
*/

const tasks = ["Задача 1"];

function Add(task) {
  tasks.push(task);
}

function Remove(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  tasks.splice(index, 1);
}

function Prioritize(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  const oldTask = tasks[index];
  tasks.splice(index, 1);
  tasks.unshift(oldTask);
}

Add("Задача 2"); //['Задача 1', 'Задача 2'].
Add("Задача 3"); // ['Задача 1', 'Задача 2', 'Задача 3'].
console.log(tasks);
Remove("Задача 4"); //нету такой задачи
console.log(tasks); //: ['Задача 1', 'Задача 2', 'Задача 3'].
Prioritize("Задача 4");
console.log(tasks); // ['Задача 1', 'Задача 2', 'Задача 3']

//---------------------------
//Принцип DRY
//(Don't Repeat Yourself) - это принцип программирования, который рекомендует избегать дублирования кода в системе. Он подразумевает, что каждая часть знаний или функциональности должна иметь единственное источник и должна быть представлена единожды в системе.

//--------------------------
//Деструктуризация
const userData = ["Антон", 18, "Москва"];

function getData() {
  return ["Антон", 18, "Москва"];
}
// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

const [userName, _, city] = userData;

console.log(userName, city); //// Output: Антон Москва

//--------------------------
//Rest оператор
const data = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...others] = data;
console.log(one, two, others); // Output: 1 2 [3, 4, 5, 6, 7]

//------------------------
//Упражнение - Функция разбора URL
/*
  Дан произвольный url - 
  'https://purpleschool.ru/course/javascript'
  Нужно сделать функцию, которая выводит в консоль:
  - Протокол (https)
  - Доменное имя (purpleschool.ru)
  - Путь внутри сайта (/course/javascript)
*/

const url = "https://purpleschool.ru/course/javascript";

function getUrlParts(url) {
  const [protocol, _, host, ...path] = url.split("/");

  if (protocol === "https:" || protocol === "http:") {
    if (!host.includes(".")) {
      return;
    }

    console.log(protocol, _, host, path);

    console.log(`Протокол: ${protocol.split(":")[0]}`);

    console.log(`Доменное имя: ${host}`);

    console.log(`Путь внутри сайта: /${path.join("/")}`);
  }
}
getUrlParts(url);
// Output:
// https:  purpleschool.ru  [ 'course', 'javascript' ]
// Протокол: https
// Доменное имя: purpleschool.ru
// Путь внутри сайта: /course/javascript

//------------------------------
//Цикл for
// console.log('Наш баланс 1$');
// console.log('Наш баланс 2$');
// console.log('Наш баланс 3$');
// console.log('Наш баланс 4$');
// console.log('Наш баланс 5$');
// console.log('Наш баланс 6$');
// console.log('Наш баланс 7$');
// console.log('Наш баланс 8$');
// console.log('Наш баланс 9$');

for (let i = 1; i < 10; i++) {
  console.log(`Наш баланс ${i}$`);
}

//-------------------------------
//Break и continue
// Цикл с использованием continue:
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === "Задача 2") {
    continue;
  }
  console.log(tasks[i]);
}
// Output:
// Задача 1
// Задача 3

console.log("-----");

// Цикл с использованием break:
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === "Задача 2") {
    break;
  }
  console.log(tasks[i]);
}
// Output:
// Задача 1

//-------------------------------
//Упражнение - Цикл в обратном порядке
/*
  Задача вывести в консоль строку "Я люблю JS !" из массива,
  проходя циклом в обратном порядке, не используя метод reverse.
  const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ["!", "JS", "люблю", "Я"];
const resultArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
  resultArray.push(arr[i]);
}
console.log(resultArray.join(" "));
// Output: Я люблю JS !

console.log(arr.reverse().join(" "));
// Output: Я люблю JS !

//---------------------------------
// Цикл в цикле:
// for (let i = 1; i < 5; i++) {
//   console.log(`Цикл 1 - ${i}`);
//   for(let j = 1; j < 5; j++) {
//     console.log(`Цикл 2 - ${j}`);
//   }
// }
// Output:
// Цикл 1 - 1
// Цикл 2 - 1
// Цикл 2 - 2
// Цикл 2 - 3
// Цикл 2 - 4
// Цикл 1 - 2
// Цикл 2 - 1
// Цикл 2 - 2
// Цикл 2 - 3
// Цикл 2 - 4
// Цикл 1 - 3
// Цикл 2 - 1
// Цикл 2 - 2
// Цикл 2 - 3
// Цикл 2 - 4
// Цикл 1 - 4
// Цикл 2 - 1
// Цикл 2 - 2
// Цикл 2 - 3
// Цикл 2 - 4

const tasks = [
  [1, "Задача 1"],
  [2, "Задача 2"],
];
for (let i = 0; i < tasks.length; i++) {
  for (let j = 0; j < tasks[i].length; j++) {
    console.log(tasks[i][j]);
  }
}
// Output:
// 1
// Задача 1
// 2
// Задача 2

//---------------------------
//Цикл while
// Цикл for:
// for (let i = 1; i < 5; i++) {
//   console.log(`Вывод - ${i}`);
// }
// Output:
// Вывод - 1
// Вывод - 2
// Вывод - 3
// Вывод - 4

// Цикл while:
// let i = 1;
// while (i < 5) {
//   console.log(`Вывод - ${i}`);
//   i++;
// }
// Output:
// Вывод - 1
// Вывод - 2
// Вывод - 3
// Вывод - 4

const arr = [1, 4, 8, 7];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    break;
  }
  console.log(arr[i]);
}
// Output:
// 1
// 4

let i = 0;
while (arr[i] <= 5 && i < arr.length) {
  console.log(arr[i]);
  i++;
}
// Output:
// 1
// 4

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 0);
// Output:
// 0

//-----------------------
//do...while:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
/* 0
1
2
3
4 */
//В этом примере, цикл do...while будет выполняться до тех пор, пока условие i < 5 истинно. Блок кода внутри цикла будет выполнен хотя бы один раз, даже если условие не выполняется.

//-----------------------
//Циклы for of и for in
const arr = [1, 4, 8, 7, "ddfg"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Output:
// 1
// 4
// 8
// 7
// ddfg

for (let element of arr) {
  console.log(element);
}
// Output:
// 1
// 4
// 8
// 7
// ddfg

//with index
for (let index in arr) {
  console.log(arr[index]);
}
// Output:
// 1
// 4
// 8
// 7
// ddfg

//-------------------------
//Упражнение - Расчёт итогового баланса
/*
  Есть выгрузка операций пользователя
  const operations = [1000, -700, 300, -500, 10000];
  а так же начальный баланс в 100$
  Необходимо сделать функции расчёта:
  - Итогового баланса
  - Наличия отрицательного баланса (если после очередной операции
    баланс < 0, то выдавать false)
  - Расчёта среднего расхода и среднего дохода
*/
const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
  let balance = initialBalance;
  for (const element of arrayOfOperations) {
    balance += element;
  }
  return balance;
}

console.log(getBalance(operations, startingBalance));
// Output: 11100

function checkOperations(arrayOfOperations, initialBalance) {
  let balance = initialBalance;
  let isOk = true;
  for (const element of arrayOfOperations) {
    balance += element;
    if (balance < 0) {
      isOk = false;
      break;
    }
  }
  return isOk;
}

console.log(checkOperations(operations, startingBalance));
// Output: true

function averageOperations(arrayOfOperations) {
  let positiveCount = 0;
  let positiveSum = 0;
  let negativeCount = 0;
  let negativeSum = 0;
  for (const element of arrayOfOperations) {
    if (element > 0) {
      positiveCount++;
      positiveSum += element;
    }
    if (element < 0) {
      negativeCount++;
      negativeSum += element;
    }
  }
  return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(averageOperations(operations));
// Output: [6000, -600]

//-----------------------
//Функции первого класса - это просто значения, и можем передовать в другие функции
//Функции высшего порядка - принимает и возврощает другие функции
//Callback
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function power(a, b) {
  return a ** b;
}

function calculate(a, b, fn) {
  console.log(fn.name);
  const res = fn(a, b);
  return res;
}

let res = calculate(3, 5, add);
console.log(res);
// Output: add
//         8

res = calculate(3, 5, subtract);
console.log(res);
// Output: subtract
//         -2

res = calculate(3, 5, power);
console.log(res);
// Output: power
//243

//---------------------------
//Возврат функции
function power(pow) {
  return function (num) {
    return num ** pow;
  };
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
// Output: 25
console.log(powerOfTwo(10));
// Output: 100

const powerOfThree = power(3);
console.log(powerOfThree(5));
// Output: 125

console.log(power(5)(4));
// Output: 1024

//------------------------
//Упражнение - Стрелочные функции
const power = (pow) => (num) => num ** pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
// Output: 25

//---------------------
//ForEach
//Цикл forEach перебирает каждый элемент массива
const score = [5, 10, 0, 15];

score.forEach((el, i) => {
  console.log(`Раунд ${i + 1}: ${el}`);
});
// Output:
// Раунд 1: 5
// Раунд 2: 10
// Раунд 3: 0
// Раунд 4: 15

//-------------------
//map
//возврощает новый массив
const transactionInUSD = [10, 20, 30, 40];

const transactionInRUB2 = transactionInUSD.map((transaction, i) => {
  console.log(i);
  return transaction * 60;
});
// Output:
// 0
// 1
// 2
// 3

console.log(transactionInRUB2);
// Output: [600, 1200, 1800, 2400]

//-------------------
//Filter
const operations = [10, -5, 20, -15, 30, 0, 40];

const positiveRUBOperations = operations
  .filter((operation) => {
    return operation > 0;
  })
  .map((operation) => operation * 60);

console.log(positiveRUBOperations);
// Output: [600, 1200, 1800, 2400]

//------------------
//Упражнение - вывод изменений цен
const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const result = prices
  .map((product) => product[1] - product[0])
  .filter((price) => price > 0);
console.log(result);
// Output: [100, 20, 150]

//----------------
//Reduce
const operations = [10, -5, 20, -15, 30, 0, 40];

const finalBalance = operations.reduce((acc, operation, i) => {
  console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`);
  return (acc += operation);
}, 0);

console.log(finalBalance);
// Output:
// Итерация 0, acc: 0, operation 10
// Итерация 1, acc: 10, operation -5
// Итерация 2, acc: 5, operation 20
// Итерация 3, acc: 25, operation -15
// Итерация 4, acc: 10, operation 30
// Итерация 5, acc: 40, operation 0
// Итерация 6, acc: 40, operation 40
// 80

const minElement = operations.reduce((acc, operation) => {
  if (operation > acc) {
    return acc;
  } else {
    return operation;
  }
}, 0);
console.log(minElement);
// Output:
// -15

//-------------------------
//Упражнение - среднее значение
const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, el, i) => {
  if (i !== arr.length - 1) {
    return acc + el;
  } else {
    return (acc + el) / arr.length;
  }
}, 0);
console.log(avg);
// Output: 5

//-----------------------
//find и findIndex
const arr = [2, 4, 4, 10, 20];

let elGT5;

//ищет первый элемент удоволетворяющий условию
elGT5 = arr.find((el) => el > 5);

//возврощает индекс элемента удоволетворяющий условию
elGT5Index = arr.findIndex((el) => el < 0);
console.log(elGT5);
console.log(elGT5Index);
// Output:
// 10
// -1

//------------------------
//some
const arr = [2, 4, 4, 10, 20];

function some(array, element) {
  const res = array.find((el) => el === element);
  return res == undefined ? false : true;
}

console.log(some(arr, 0));
// Output: false

console.log(arr.some((el) => el === 0));
// Output: false

//-----------------------
//Flat и flatMap
const prices = [
  [2, 4],
  [3, 4],
  [10, [20, 50]],
];
//значения глубины соединения массива
const res = prices.flat(10);
//map + flat (глубины соединения массива 1)
const res2 = prices.flatMap((el) => el.concat([1]));
console.log(res);
console.log(res2);
// Output:
// [2, 4, 3, 4, 10, 20, 50]
// [2, 4, 1, 3, 4, 1, 10, [20, 50], 1]

//---------------------
//sort
//мутирует существующий массив
const users = ["Вася", "Маша", "Катя", "Аня"];
console.log(users);
// Output: ["Вася", "Маша", "Катя", "Аня"]

users.sort();
console.log(users);
// Output: ["Аня", "Вася", "Катя", "Маша"]

//чтобы не сортировались как строки то нужно написать условие
const operations = [100, -300, -100, 50, 480];
// < 0 - a, b - сохраняем порядок
// > 0 - b, a - меняем порядок
operations.sort((a, b) => a - b);
console.log(operations);
// Output: [-300, -100, 50, 100, 480]

operations.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});
console.log(operations);
// Output: [480, 100, 50, -100, -300]

//---------------------
//Быстрое создание массивов
const arr = [1, 2, 3, 4, 5];

console.log(new Array(1, 2, 3, 4, 5));
// Output: [1, 2, 3, 4, 5]

const arr2 = new Array(5);
console.log(arr2);
// Output: [empty × 5]

arr2.fill(1, 0, 3);
//2 с позиции 3 до 5
arr2.fill(2, 3, 5);
console.log(arr2);
// Output: [1, 1, 1, 2, 2]

const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(arr3);
// Output: [1, 2, 3, 4, 5]

//-------------------
//Базовые методы Строки
const userName = "Вася Пупкина";
console.log(userName);
// Output: "Вася Пупкина"

console.log(userName[0] + userName[1]);
// Output: "Ва"

console.log(userName.charAt(2));
// Output: "с"

console.log(userName.length);
// Output: 12

console.log(userName.indexOf("уп"));
// Output: 6

console.log(userName.lastIndexOf("а"));
// Output: 11

console.log(userName.includes("уп"));
// Output: true

console.log(userName.includes("упd"));
// Output: false

console.log(userName.slice(5));
// Output: "Пупкина"

console.log(userName.slice(5, 8));
// Output: "Пуп"

//-----------------------------
//Упражнение - выделение имени
const fullUserName = "Вася aka Terminator Perdinator Пупкин";

const userName = fullUserName.slice(0, fullUserName.indexOf(" "));
console.log(userName);
// Output: "Вася"

const userSurname = fullUserName.slice(
  fullUserName.lastIndexOf(" ") + 1,
  fullUserName.length
);
console.log(userSurname);
// Output: "Пупкин"

//------------------------
//Преобразование строки
const str = "Вася Пупкина";
console.log(str.includes("а"));
// Output: true

console.log(str.startsWith("В"));
// Output: true

console.log(str.endsWith("н"));
// Output: true

console.log(str.toLowerCase());
// Output: "вася пупкина"

console.log(str.toUpperCase());
// Output: "ВАСЯ ПУПКИНА"

console.log(str.replace("В", "Ф"));
// Output: "Фася Пупкина"

console.log(str.replace("П", "Д"));
// Output: "Вася Дупкина"

console.log(str.replaceAll("а", "и"));
// Output: "Вися Пупкини"

console.log(str.replace(/а/g, "и"));
// Output: "Вися Пупкини"

const str2 = " Вася Пупкина   \n";
console.log(str2.trimStart());
// Output: "Вася Пупкина   \n"

//--------------------------
//Упражнение - проверка номера
///* проверить является ли это номером телефона России */
const num1 = "89103235356";
const num2 = "+79103235356";
const num3 = "+7(910)3235356";
const num4 = "+7(910) 323-53-56";
const num5 = "  +7(910) 323-53-56  ";
/* не верные */
const num1Error = "89103235";
const num2Error = "+7d910d323-53-56";
const num3Error = "9+7103235356";
const num4Error = "89103g35356";

function isPhoneNumber(num) {
  num = num.trim();
  num = num.replace("+7", "8");
  if (!num.startsWith("8")) {
    return false;
  }
  num = num.replaceAll("(", "");
  num = num.replaceAll(")", "");
  num = num.replaceAll(" ", "");
  num = num.replaceAll("-", "");
  if (num.length != 11) {
    return false;
  }
  let onlyNumber = true;
  for (const char of num) {
    //true если string - если в номере есть строка а не цифра
    if (isNaN(Number(char))) {
      onlyNumber = false;
      break;
    }
  }
  return onlyNumber;
}

const num1 = "89103235356";
console.log(isPhoneNumber(num1));
// Output: true

const num2 = "+79103235356";
console.log(isPhoneNumber(num2));
// Output: true

const num3 = "+7(910)3235356";
console.log(isPhoneNumber(num3));
// Output: true

const num4 = "+7(910) 323-53-56";
console.log(isPhoneNumber(num4));
// Output: true

const num5 = "  +7(910) 323-53-56  ";
console.log(isPhoneNumber(num5));
// Output: true

const num1Error = "89103235";
console.log(isPhoneNumber(num1Error));
// Output: false

const num2Error = "+7d910d323-53-56";
console.log(isPhoneNumber(num2Error));
// Output: false

const num3Error = "9+7103235356";
console.log(isPhoneNumber(num3Error));
// Output: false

const num4Error = "89103g35356";
console.log(isPhoneNumber(num4Error));
// Output: false

//--------------------
//Строки и массивы
const userFullName = "Вася Пупкин Васильевич";
console.log(userFullName.split(" "));
// Output: ["Вася", "Пупкин", "Васильевич"]

const [firstName, familyName, lastName] = userFullName.split(" ");
console.log(firstName);
// Output: "Вася"
console.log(familyName);
// Output: "Пупкин"
console.log(lastName);
// Output: "Васильевич"

const arr = ["Ты", "знаешь", "JS"];
console.log(arr.join(" "));
// Output: "Ты знаешь JS"

//--------------------
//Дополнение строк
const film = "Звёздные Воины";
console.log(film.padStart(50, "*"));
// Output: "********************************Звёздные Воины"
console.log(film.padEnd(50, "*"));
// Output: "Звёздные Воины********************************"
console.log(film.repeat(10));
// Output: "Звёздные ВоиныЗвёздные ВоиныЗвёздные ВоиныЗвёздные ВоиныЗвёздные ВоиныЗвёздные ВоиныЗвёздные ВоиныЗвёздные ВоиныЗвёздные ВоиныЗвёздные Воины"

//-------------------
//Упражнение - маскировка карты
const card = "2342834503458353";
console.log(card.slice(-4).padStart(16, "*"));
// Output: "************8353"

//-------------------
//Знакомство с объектами / Обращение к элементам
const user = {
  name: "Вася",
  surname: "Пупкин",
  age: 24,
  skills: ["Программирование", "Готовка"],
  eduBasic: "Школа 10",
  eduPro: "МФТИ",
};

console.log(user.city);
// Output: undefined

console.log(user.skills);
// Output: ["Программирование", "Готовка"]

console.log(user["skills"]);
// Output: ["Программирование", "Готовка"]

const level = "Pro";
console.log(user["edu" + level]);
// Output: "МФТИ"

//add
user.city = "Москва";
user["city"] = "Москва";
console.log(user.city);
// Output: "Москва"

//change
user.age = 30;
user["age"] = 30;
console.log(user);
/*
Output:
{
  name: 'Вася',
  surname: 'Пупкин',
  age: 30,
  skills: ['Программирование', 'Готовка'],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ',
  city: 'Москва'
}
*/

//--------------------
//Упражнение - сортировка пользователей
/* отсортировать пользователей по возрасту */
const users = [
  { name: "Вася", age: 30 },
  { name: "Катя", age: 18 },
  { name: "Аня", age: 40 },
  { name: "Петя", age: 25 },
];
console.log(users.sort((a, b) => a.age - b.age));
/*
Output:
[
  { name: 'Катя', age: 18 },
  { name: 'Петя', age: 25 },
  { name: 'Вася', age: 30 },
  { name: 'Аня', age: 40 }
]
*/

//--------------------
//Упражнение - преобразование объектов
const users = [
  {
    name: "Вася",
    surname: "Пупкин",
    age: 30,
    skills: ["Разработка", "DevOps"],
  },
  {
    name: "Катя",
    surname: "Белова",
    age: 18,
    skills: ["Дизайн"],
  },
];

const userData = users.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillNum: user.skills.length,
  };
});
console.log(userData);
/*
Output:
[
  { fullName: 'Вася Пупкин', skillNum: 2 },
  { fullName: 'Катя Белова', skillNum: 1 }
]
*/

//--------------------
//Методы объектов
const user = {
  name: "Вася",
  surname: "Пупкин",
  age: 24,
  //this - контекст вызова
  getFullName: function () {
    return this.name + " " + this.surname;
  },
};

console.log(user.getFullName());
// Output: "Вася Пупкин"

//-------------------
//Упражнение - кошелёк
const wallet = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance += sum;
    this.operations.push({
      reason: reason,
      sum: sum,
    });
    return true;
  },
  decrease: function (sum, reason) {
    if (this.balance < sum) {
      console.log("Недостаточно баланса");
      return false;
    }
    this.balance -= sum;
    this.operations.push({
      reason: reason,
      sum: -sum,
    });
    return true;
  },
  getOperationLenght: function () {
    return this.operations.length;
  },
};

console.log(wallet.increase(1000, "Зарплата"));
// Output: true

console.log(wallet.getOperationLenght());
// Output: 1

console.log(wallet.decrease(2000, "Покупка ноутбука"));
// Output: Недостаточно баланса
// false

console.log(wallet.getOperationLenght());
// Output: 1

console.log(wallet.decrease(500, "Покупка телефон"));
// Output: true

console.log(wallet.getOperationLenght());
// Output: 2

console.log(wallet.balance);
// Output: 500

console.log(wallet.operations);
/*
Output:
[
  { reason: 'Зарплата', sum: 1000 },
  { reason: 'Покупка телефон', sum: -500 }
]
*/

//------------------------
//Enhance object literals
/* const wallet = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance += sum;
    //можем опустить описание значения т.к. оно совподает
    this.operations.push({
      reason,
      sum
    })
    return true;
  }, */

//-------------------------
//Итерирование по объекту
const cities = {
  msk: {
    let: 200,
    temp: 25,
  },
  spb: {
    lt: 100,
    temp: 20,
  },
};

let sumTemp = 0;
let citiesCount = Object.keys(cities).length;

// for (const key in cities) {
// 	sumTemp += cities[key].temp;
// }
// console.log(sumTemp / citiesCount);

for (const key of Object.keys(cities)) {
  sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount);
// Output: 22.5

//----------------------
//Деструктуризация и rest
const user = {
  name: "Вася",
  age: 40,
  city: "Moscow",
};

const { age, ...userWithoutAge } = user;

console.log(age);
// Output: 40

console.log(userWithoutAge);
// Output: { name: 'Вася', city: 'Moscow' }

const additionalData = {
  skills: ["Разработка", "Дизайн"],
  creditCard: "2342-2345-2734-2356",
};

user.test = "sdfs";

// user = {
// 	...user,
// 	...additionalData
// }

console.log(user);
// Output: { name: 'Вася', age: 40, city: 'Moscow', test: 'sdfs' }

//----------------------
//Optional chaining
const cities = {
  msk: {
    temp: {
      celsius: 25,
    },
  },
  spb: {},
};

const city = "msk";

if (cities[city] != undefined && cities[city].temp != undefined) {
  console.log(cities[city].temp.celsius);
}
// Output: 25

console.log(cities[city]?.temp?.celsius);
// Output: 25

//-----------------------
//Упражнение - склад
/*
  Сделать объект склад с методами добавления на склад, поиска
  по складку товара и расчёт веса
*/
const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((g) => g.id == id);
  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);
    if (existedGood) {
      console.log("Этот товар уже есть на складе");
      return;
    }
    this.goods.push(good);
  },
  getWeightKg: function () {
    return this.goods.reduce(
      (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
      0
    );
  },
};

const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: "Ford",
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: "red",
};

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);

let findedItem = warehouse.findGoodById(6);
console.log(findedItem);
// Output: undefined

findedItem = warehouse.findGoodById(1);
console.log(findedItem);
// Output: { id: 1, weight: { kg: 1000 }, brand: 'Ford' }

const w = warehouse.getWeightKg();
console.log(w);
// Output: 1002

//---------------------
//Раздел Как работает JS под капотом
//Высокоуровневый, компилируемый, мультипарадигменный, однопоточный, динамический типизированный

//Высоуровневый языки - автоматическое управления реурсами (js,go,python).
//Низкоуровневый языки - ручное управления ресурсами (оперативкой и т.д.) (C Pust C++)

//Компилируемый из байт код потом а машинный код по ходу

//Мультипарадигменный
//Парадигма - подход к тому как структурируем код, какие используем техники и стиль кода (процедупрные, ООП, функциональный)

//Работает в одном потоке, Event Loop - позволяет асинхронные задачи исполнять в фоновом режиме

//------------------------
//Процесс исполнение
//Движок исполнения (3 основный движка)
//Есть Call Stack вызова это контекст исполнения
//Heap - объекты в памяти

//Компилируемый код - файл кода (портируемый) - исполнения
//Интерпритация - исходный код - исполнения (прочитали и исполнили, построчно)
//JIT - исходный код который сразу компилируем (но не будет портируемым а сразу исполняемым) а потом исполняем

//Как работает движок
//JS - AST(абстрактное дерево которое удобно для восприятие машины) - Компиляция (преобразуем в байт код а потом в машинныйко) - исполения. Также есть оптимизация (позволяет код сделать более эффективным)

//Среда исполнения JS
//Сам движок (Call Stack / Heap)
//Web API / Node (DOM, Timers, Fetch,Geo)
//Callback Queue - очередь callback (асинхронщина)
//Управляет всем Event Loop (бесконечный цикл) - обеспечивает совместную работу всех трех компонент

//-------------------
//Контекст исполнения и stack вызова
//Сначало создаеться глобальный контекст, потом выполения - берем верхний уровень кода и начинаем ее исполнять

//Внутри контестка находиться 3 блока
//- окружения перемнных (let,const,var, function,arguments)
//- Scope Chains - ссылки на переменные вне текущего контекста
//- this

const user = {
  name: "vlad",
  roles: ["admin"],
};

function isUserAdmin(user) {
  return user.roles.includes("admin");
}

const createYserWithAge = (user, age) => {
  const newUser = {
    ...user,
    age,
  };
  return newUser;
};
//Clobal -> user, isUserAdmin,createYserWithAge
//Scope isUserAdmin
//Scope createYserWithAge

//--------
const a = 5;
function double(a) {
  return a * a;
}

function logDouble(a) {
  console.log(double(a));
}

console.log("Old value ", a);
logDouble(a);

//_stack
// _Global
//const a = 5
//double()
//logDouble()
//console.log()

//_logDouble stack - фактический когда попали в эту функцию то перешли в новый контекст этой функции
//double()
//console.log()

//когда закончили исполнения этой функции у нас уходит контекст и со стэка берем следующий элемент (благодоря такому устройству у js нету возможности потеряться)

//--------------------
//Пример работы call stack
const sum = 1;
console.log("start");
console.log(sum);

function add5(n) {
  n = n + 5;
  if (n > 100) {
    return n;
  }
  console.log(n);
  return add5(n);
}

add5(sum);
console.log("ended");
/* start
1
6
11
16
21
26
31
36
41
46
51
56
61
66
71
76
81
86
91
96
101
ended */

//--------------------
//Примитивы и объекты
//примитивы - number,string,boolean,undefined,null,symbol,bigint
let firstName = "vlad"; //в call stake ссылка 0001 'vlad'
let firstName2 = firstName; // ссылка 0001 'vlad' - указывают на одну и ту же значения в пямяти
firstName = "new"; //// ссылка 0002 'new' -> новая область памяти с новым значением
console.log(firstName); // new
console.log(firstName2); //vlad

//объекты - arrays, objects,functions ...
//cсылочный тип данных находяться в куче(heap)
//не находяться в call stake т.к. они могут быть очень большие а heap фактический неограничено
const user1 = {
  name: "vlad",
}; //в call stake ссылка 0003 -> ccылка на кучу в определенную область памяти {name:'vlad'}
const user2 = user1; //ссылка также на 0003
user.name = "vlados"; // в куче где был vlad появляеться vlados / не создаем новый объект а просто поменяли структуру нашего объекта а ссылка продолжает ссылаться туда же
console.log(user1); // vlados
console.log(user2); // vlados

//_пример
const user = {
  name: "vlad",
  id: 2,
  roles: ["admin"],
};
//хоть и const но все равно можем изменять структуру объекта
user.name = "newUser";
console.log(user);

//метода создание нового объекта на основании другого
//берет новый объект(1) и объединяет с текущем (2)
const newUser = Object.assign({}, user);

//spred
//не полностью скопировали объект т.к. произошло неглубое копирование и roles будет указывать на оригинал
//можно использовать глубое копирование
const newuser2 = {
  ...user,
};

//------------------
//______Scope и this_____
//scope - область видемости перемнной, где переменные будут доступны

//Lexical Scoping - в js используем лексический scope то есть scope объявляя переменную внутри функции мы помещаем ее в scope этой функции и т.д.

//3 вида scope
//глобальный scope
const b = 10;

//scope функций внутри функций
function a() {
  const c = 5;
}

//блочный scope внутри блока
if (b < 10) {
  const d = "yes";
}

//!!!var не ограничиваеться scope она сразу же путает scope, не использовать, всегда использовать строгий режим

//scope chain
//позволяет строить цепочки
//глобальный scope доступен везде т.к по цепочке вверху и поэтому везде доступен

//stack не будет равен scope
function one() {
  function two() {
    three();
  }
  two();
}
function three() {}
one();
//stack -> three() / two() / one() / global
//scope -> global -> ((one() -> two()) and three())

//---------------
//Strict mode
//ограничить страе ошибки и методы js
("use strict");
//нельзя без let и const объявить переменную
//функции ограничиваються scope  без этого всплывают наружу

let myCoolVariable = 1;

if (true) {
  myCoolVariable = 3;
}
console.log(myCoolVariable); //3

function a(b, b) {
  console.log(b);
}
a(1, 1); //error дублирующий параметр поэтому ошибка при использований use strict
//3 1

//----------------
//Пример scope chain
("user strict");

let successMessage = "Успех";
const user = {
  name: "Вася",
  roles: [],
};

function addRole(user, role) {
  //if scope
  if (role == "admin") {
    const message = "Ошибка";
    console.log(message); //'Ошибка
    return user;
  }

  user.roles.push(role);
  let successMessage = "Ура";
  console.log(successMessage); //"ypa"

  //fun scope
  function logRoles() {
    console.log(user.roles); //['admsin']
  }
  logRoles();

  return user;
}

console.log(addRole(user, "admsin")); //{name: 'Вася', roles: Array(1)}
console.log(successMessage); //Успех

//---------------------
//Пример поднятия
//functions -> всплытие да / начальное значение сама функция
//var -> да / undefined
//let,const -> нет / uninitialized
//arrow func -> зависит от var,let,const / -//-//-

//TDZ -> зона где перемнные не доступны тоесть обращаемся к ним до их объявление

//_пример
function addUser() {
  console.log("User added");
}

let arr1 = () => {
  console.log("arr1");
};

addUser(); // User added
console.log(b); //undefined
let a = 3;
var b = 2;
console.log(b); //2

arr1(); //arr1

addUser(); //User added

//-------------------
//this
//Переменная которая создаеться при исполнении контекста вызова, не статичен, принимает значения только когда мы его вызываем
//метод - на объект этого метода
//function - undefined
//arrow func - this родительского scope
//event listener - dom элемент к которому он прикреплен

("use strict");

// console.log(this); //window

function addNum(num1, num2) {
  console.log(this); //undefined
  return num1 + num2;
}

const addNum2 = (num1, num2) => {
  console.log(this); //window
  return num1 + num2;
};

const user = {
  name: "Вася",
  surname: "Пупкин",
  getFullName: function () {
    console.log(this); //// { name: 'Вася', surname: 'Пупкин', getFullName: [Function: getFullName] }
    return this.name + " " + this.surname;
  },
};
user.getFullName();

const user2 = {
  name: "Марина",
  surname: "Катц",
};

user2.getFullName = user.getFullName;
user2.getFullName(); // { name: 'Марина', surname: 'Катц', getFullName: [Function: getFullName] }

//забрали метод
const getFullName = user2.getFullName;
getFullName(); //error undefined

//----------------------
//Контекст в методах
("use strict");

const user = {
  firstName: "Вася",
  lastName: "Пупкин",
  age: 20,
  getUserInfo: function () {
    console.log(this); //{firstName: 'Вася', lastName: 'Пупкин', age: 20, getUserInfo: ƒ, getUserInfoArrow: ƒ}
    console.log(`${this.firstName} ${this.lastName}`); //Вася Пупкин

    const canDrink = () => {
      if (this.age >= 18) {
        console.log("Может уже пить!");
      } else {
        console.log("Не может пить!");
      }
    };

    //старый способ передачи контекста
    // const self = this;
    // function canDrink() {
    // 	if (self.age >= 18) {
    // 		console.log('Может уже пить!');
    // 	} else {
    // 		console.log('Не может пить!');
    // 	}
    // }

    canDrink(); //Может уже пить!
  },
  getUserInfoArrow: () => {
    console.log(this); // window
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

user.getUserInfo(); // undefined
user.getUserInfoArrow(); //undefined

//----------------------
//Arguments
("use strict");
// let, var, const, func, arguments
// Scope chain
// this

function sumNum(num1, num2) {
  console.log(this); //undefined
  console.log(arguments);
  return num1 + num2;
}
console.log(sumNum(1, 4, 3, 7)); //Arguments(4) [1, 4, 3, 7, callee: (...), Symbol(Symbol.iterator): ƒ]

//arguments не работает в arrow functions
const sumNumArr = (num1, num2) => {
  console.log(this);
  console.log(arguments); //Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
  return num1 + num2;
};
console.log(sumNumArr(1, 4, 3, 7));

//-----------------------
//Упражнение - объект в объекте
("use strict");
/* 
  дополнить объект методами для получения имени:
  - компании
  - ceo
  - сотрудника
*/

const company = {
  name: "ООО Агро",
  employees: [
    {
      name: "Света",
      getName: function () {
        return this.name;
      },
    },
  ],
  ceo: {
    name: "Вася",
    getName: function () {
      return this.name;
    },
  },
  getName: function () {
    return this.name;
  },
};

console.log(company.getName()); //ООО Агро
console.log(company.ceo.getName()); //Вася
console.log(company.employees.map((employee) => employee.getName())); // ['Света']

//----------------------
//____Управление this____

//EOL для методов
("use strict");
const b = 1;

const a = {
  b,
  getB: function () {
    return this.b;
  },
  //короче запись метода у объектов
  getBAlt() {
    return this.b;
  },
};

console.log(a.getBAlt());

//-------------------
//Call, apply
//cразу вызывает функции с переданным объектом

("use strict");

const audi = {
  make: "Audi",
  model: "A3",
  year: 2021,
  damages: [],
  addDamage(part, rate) {
    console.log(
      `У авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`
    );
    this.damages.push({
      part,
      rate,
    });
  },
};
// audi.addDamage('Капот', 1);

const bmw = {
  make: "BMW",
  model: "X5",
  year: 2022,
  damages: [],
};

bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2);

//вытасчили метод но у него нету своего this
const addDamageFunc = audi.addDamage;

addDamageFunc.call(bmw, ...["Бампер", 2]); //У авто BMW X5 2022 добавлено: повреждение Бампер со степенью 2
addDamageFunc.call(audi, "Бампер", 2); //У авто Audi A3 2021 добавлено: повреждение Бампер со степенью 2

//the same in array
addDamageFunc.apply(bmw, ["Бампер", 2]); //У авто BMW X5 2022 добавлено: повреждение Бампер со степенью 2
addDamageFunc.apply(audi, ["Бампер", 2]); //У авто Audi A3 2021 добавлено: повреждение Бампер со степенью 2

//-------------------
//Bind
//cвязывает this с функцией

const audi = {
  make: "Audi",
  model: "A3",
  damages: [],
};

const carManipulation = {
  addDamage(part, rate) {
    this.damages.push({ part, rate });
    console.log(`Добавить повреждение на ${this.make} ${this.model}`);
  },
};

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi("Крыло", 3); //Добавить повреждение на Audi A3

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, "Крыша");
//можно недостающие параметры дополнить после
addDamageAudiRoof(5); //Добавить повреждение на Audi A3
addDamageAudiRoof(3); //Добавить повреждение на Audi A3
console.log(audi); //{make: 'Audi', model: 'A3', damages: Array(3)}

//---------------------
//Упражнение - управление this
("use strict");
/*
  Создайте объект пользователя с паролем.
  С помощью функции ниже удалить пароль сделав
  функцию сброса пароля
 */

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = "1";
  }
}

const user = {
  login: "a@a.ru",
  password: "12345",
};

const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user); //{login: 'a@a.ru', password: undefined}

//----------------------
//IIFE
("use strict");
// IIFE

function init() {
  console.log("Start");
}
init(); //Start

(function () {
  console.log("Start IIFO");
  const a = 1;
})(); //Start IIFO

console.log(a); //Uncaught ReferenceError: a is not defined

//-----------------------
//Замыкание
//Cвязь того окружения в котором была создана функция (постоянно носит за собой scope в котором был создан)
//То есть функция помнит в каком контексте она была создана и может использоваться
//замыкание имеет более высокий приоритет чем глобальные

("use strict");

function changeBalance() {
  let balance = 0;
  let key = "asd";
  return function (sum) {
    balance += sum;
    key = "adsf";
    console.log(`Баланс: ${balance}`);
  };
}

const change = changeBalance();
change(100); //Баланс: 100
change(-50); //Баланс: 50
change(200); //Баланс: 250
console.dir(change); //выводит все свойства объекта в котором можем видеть scope в котором лежит сlosure
//Closure(changeBalance) { balance: 250, key: 'adsf' }

//независимые друг от друга свой scope
const change2 = changeBalance();
change2(100); //Баланс: 100
console.dir(change2); // Closure(changeBalance) { balance: 100, key: 'adsf' }

//-------------------
//Упражнение - работа с замыканиями
("use strict");
/* 
  Сделать функицю пользовтеля, которая берёт за основу
  userInfo и за счёт замыкания создаёт новый объект, с
  котором можно работать как user1().increse(100)
*/

const userInfo = {
  balance: 0,
  operations: 0,
  increse(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function user() {
  //сonst userObj = userInfo - если использовать передачу по ссылке мы не сможем создать незаисимые объекты а один который будет меняться поэтому создаем прототип объекта который мы будем использовать независимо
  const userObj = {
    balance: 0,
    operations: 0,
    increse(sum) {
      this.balance += sum;
      this.operations++;
    },
  };
  return function () {
    return userObj;
  };
}

const user1 = user();
user1().increse(100);
user1().increse(100);
console.log(user1());

const user2 = user();
user2().increse(100);
console.log(user2());

//--------------------
//_______Document Object Model_________
//Благодоря ему мы можем манипулировать елементы на странице
//DOM не часть JS а API - существут только в браузере

//Выбор и манипуляции с элементами
/* <div class="panel">I love this!</div>
    <input class="input" />
    <button class="button">Change</button>
    <script src="./app.js"></script> */
("use strict");
const panelText = document.querySelector(".panel").innerText;
console.log(panelText); //I love this!
document.querySelector(".panel").innerText = "New text";
document.querySelector(".input").value = "Text";

//-----------------------
//Обработка нажатий
/* <div class="panel">I love this!</div>
    <input class="input" 
    <button class="button" onclick="changeClick()">Change</button>/> */

// document.querySelector('.button').addEventListener('click', function() {
// 	const input = document.querySelector('.input').value;
// 	if (!input) {
// 		return;
// 	}
// 	document.querySelector('.panel').innerText = input;
// 	document.querySelector('.input').value = '';
// });

//функция changeClick() в html документе
function changeClick() {
  const input = document.querySelector(".input").value;
  if (!input) {
    return;
  }
  document.querySelector(".panel").innerText = input;
  document.querySelector(".input").value = "";
}

//--------------------------
//Обработка событий клавиатуры
/* <div class="panel">I love this!</div>
    <input class="input" onkeydown="inputChanged(event)" />
    <button class="button" onclick="submitForm()">Change</button> */
function submitForm() {
  const input = document.querySelector(".input").value;
  if (!input) {
    return;
  }
  document.querySelector(".panel").innerText = input;
  document.querySelector(".input").value = "";
}

function inputChanged(e) {
  if (e.code == "Enter") {
    submitForm();
  }
}

// document.querySelector('.input').addEventListener('keydown', (e) => {
// 	if (e.code == 'Enter') {
// 		submitForm()
// 	}
// });

//-------------------
//Работа со стилями и классами
/* <div class="panel">I love this!</div>
    <input class="input" onkeydown="inputChanged(event)" />
    <button class="button" onclick="submitForm()">Change</button>
    <div class="notification notification_hidden">Changed!</div> */

/* .notification {
	font-size: 16px;
	color: white;
	margin: 20px;
}

.notification_hidden {
	display: none;
} */

("use strict");

function submitForm() {
  const input = document.querySelector(".input").value;
  if (!input) {
    return;
  }
  document.querySelector(".panel").innerText = input;
  document.querySelector(".input").value = "";
  // document.querySelector('.notification').classList.add('notification_active');
  document
    .querySelector(".notification")
    .classList.remove("notification_hidden");
}

function inputChanged(e) {
  if (e.code == "Enter") {
    submitForm();
  }
}

//--------------------
//Установка атрибутов

//получили атрибут
console.log(document.querySelector(".notification").getAttribute("class"));

//замена атрибута
document.querySelector(".notification").setAttribute("class", "notification");

//создать
document.querySelector(".notification").setAttribute("key", 1); // class ='notification' key=1
document.querySelector(".notification").setAttribute("user-id", 1);
console.log(
  Number(document.querySelector(".notification").getAttribute("user-id"))
); //1

//----------------------
//Упражнение - получение DOM элементов
/* <div class="one">
      <span>Элемент 1</span>
    </div>
    <div class="one">
      <span>Элемент 2</span>
    </div>
    <div id="two">Элемент 3</div>
    <div>
      <span user-id="4">Элемент 4</span>
    </div> */

console.log(document.querySelectorAll(".one")[0].innerText);
console.log(document.querySelectorAll(".one")[1].innerText);

// console.log(document.querySelector('#two').innerText);
console.log(document.getElementById("two").innerText);
console.log(document.getElementsByClassName("one"));
console.log(document.querySelector('[user-id="4"]').innerText);

//------------------------
//Добавление html на лету
//создать элемент
const newElement = document.createElement("div");

//добавили атрибут
newElement.setAttribute("user-id", 1);

//добавили класс
newElement.classList.add("panel");

//добавели наш созданный элемент как дочерний элемента с классом '.test'
document.querySelector(".test").appendChild(newElement);

//добавии текст
newElement.innerText = "Кнопка";

//альтернативный способ создание через шаблонные строки
const panelText = "Панель";
const panelClass = "button";

newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;

//----------------------
//Local storage (API)
//Local storage - локальное хранилище данный для авторизиционных токенов
//найти -> application -> storage -> Local storage в консоли разработчика

//установить ключ значения
localStorage.setItem("token", "sfgsdkf");
localStorage.setItem("token1", 1);
localStorage.setItem("token1", true);

//получить значение
const token1 = localStorage.getItem("token1");

//все что кладем переводиться в строки
console.log(typeof token1); //string

//удалить по ключу
localStorage.removeItem("token1");

//очистить весь storage
localStorage.clear();

//----------------------
//JSON
//объект к которому мы можем обратиться

//распарсить json в объект
const obj = JSON.parse('{ "a": 1 }');
console.log(obj.a);

//берет объект и преобразует его в строку
const str = JSON.stringify(obj);
console.log(str);

//-----------------------
//Упражнение - сохранение JSON
("use strict");

/* key: 'text', value: { text: 'sdfsdf' } */

function submitForm() {
  const input = document.querySelector(".input").value;
  if (!input) {
    function submitForm() {
      document.querySelector(".panel").innerText = input;
      document.querySelector(".input").value = "";
      document
        .querySelector(".notification")
        .classList.remove("notification_hidden");

      //конвертирует в строку
      const textString = JSON.stringify({
        text: input,
      });

      //кладем строку в local storage
      localStorage.setItem("text", textString);
    }

    function inputChanged(e) {
      if (e.code == "Enter") {
        submitForm();
      }
    }
  }
}

//-----------------------
//_____Раздел 18 Проект - трекер привычек______

//Загрузка и сохранение данных
[
  {
    id: 1,
    icon: "sport",
    name: "Отжимания",
    target: 10,
    days: [
      { comment: "Первый подход всегда даётся тяжело" },
      { comment: "Второй день уже проще" },
    ],
  },
  {
    id: 2,
    icon: "food",
    name: "Правильное питание",
    target: 10,
    days: [{ comment: "Круто!" }],
  },
];

("use strict");

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";

//load
function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
}

//save
function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

//render
(() => {
  loadData();
})();

//--------------------
//Работа меню
const page = {
  menu: document.querySelector(".menu__list"),
};

function rerenderMenu(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!existed) {
      const element = document.createElement("button");
      element.setAttribute("menu-habbit-id", habbit.id);
      element.classList.add("menu__item");
      element.addEventListener("click", () => rerender(habbit.id));
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
      if (activeHabbit.id === habbit.id) {
        element.classList.add("menu__item_active");
      }
      page.menu.appendChild(element);
      continue;
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add("menu__item_active");
    } else {
      existed.classList.remove("menu__item_active");
    }
  }
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  rerenderMenu(activeHabbit);
}

/* init */
(() => {
  loadData();
  rerender(habbits[0].id);
})();

//-------------------------
//Рендер шапки

const page = {
  menu: document.querySelector(".menu__list"),
  header: {
    h1: document.querySelector(".h1"),
    progressPercent: document.querySelector(".progress__percent"),
    progressCoverBar: document.querySelector(".progress__cover-bar"),
  },
};

function rerenderHead(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  page.header.h1.innerText = activeHabbit.name;
  const progress =
    activeHabbit.days.length / activeHabbit.target > 1
      ? 100
      : (activeHabbit.days.length / activeHabbit.target) * 100;
  page.header.progressPercent.innerText = progress.toFixed(0) + "%";
  page.header.progressCoverBar.setAttribute("style", `width: ${progress}%`);
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
}

//------------------------
//рендер дней
const page = {
  menu: document.querySelector(".menu__list"),
  header: {
    h1: document.querySelector(".h1"),
    progressPercent: document.querySelector(".progress__percent"),
    progressCoverBar: document.querySelector(".progress__cover-bar"),
  },
  content: {
    daysContainer: document.getElementById("days"),
    nextDay: document.querySelector(".habbit__day"),
  },
};

function rerenderContent(activeHabbit) {
  page.content.daysContainer.innerHTML = "";
  for (const index in activeHabbit.days) {
    const element = document.createElement("div");
    element.classList.add("habbit");
    element.innerHTML = `<div class="habbit__day">День ${
      Number(index) + 1
    }</div>
              <div class="habbit__comment">${
                activeHabbit.days[index].comment
              }</div>
              <button class="habbit__delete">
                <img src="./images/delete.svg" alt="Удалить день ${
                  index + 1
                }" />
              </button>`;
    page.content.daysContainer.appendChild(element);
  }
  page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`;
}

//-----------------
//FormData API
/* <form class="habbit__form" onsubmit="addDays(event)">
    <input
      name="comment"
      class="input_icon"
      type="text"
      placeholder="Комментарий"
    />
    <img
      class="input__icon"
      src="/images/comment.svg"
      alt="Иконка комментария"
    />
    <button class="button" type="submit">Готово</button>
  </form> */

/* work with days */
function addDays(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  //получили значения input c name="comment"
  console.log(data.get("comment"));
}

//--------------------
//Добавление дня
let globalActiveHabbitId;

/*function rerender(activeHabbitId) {
	   globalActiveHabbitId = activeHabbitId
     . . .*/

function addDays(event) {
  const form = event.target;
  event.preventDefault();
  const data = new FormData(form);
  const comment = data.get("comment");
  form["comment"].classList.remove("error");
  if (!comment) {
    form["comment"].classList.add("error");
  }
  habbits = habbits.map((habbit) => {
    if (habbit.id === globalActiveHabbitId) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment }]),
      };
    }
    return habbit;
  });
  form["comment"].value = "";
  rerender(globalActiveHabbitId);
  saveData();
}

//-----------------------
//Удаление дня
//<button class="habbit__delete" onclick="deleteDay(${index})">

function deleteDay(index) {
  habbits = habbits.map((habbit) => {
    if (habbit.id === globalActiveHabbitId) {
      habbit.days.splice(index, 1);
      return {
        ...habbit,
        days: habbit.days,
      };
    }
    return habbit;
  });
  rerender(globalActiveHabbitId);
  saveData();
}

//--------------------------
//Появление попап окна
/* popup: {
		index: document.getElementById('add-habbit-popup')
	}
  . . . 
  
  <div class="cover cover_hidden" id="add-habbit-popup">
  <button class="menu__add" onclick="togglePopup()">
  <button class="popup__close" onclick="togglePopup()">*/

function togglePopup() {
  if (page.popup.index.classList.contains("cover_hidden")) {
    page.popup.index.classList.remove("cover_hidden");
  } else {
    page.popup.index.classList.add("cover_hidden");
  }
}

//-----------------------
//Select выбора иконки
/* <button class="icon icon_active" onclick="setIcon(this, 'sport')"> 

popup: {
		index: document.getElementById('add-habbit-popup'),
		iconField: document.querySelector('.popup__form input[name="icon"]')
	}*/

function setIcon(context, icon) {
  page.popup.iconField.value = icon;
  const activeIcon = document.querySelector(".icon.icon_active");
  activeIcon.classList.remove("icon_active");
  context.classList.add("icon_active");
}

//------------------------
//Упражнение - форма добавления привычки

//универсальная цункций сброса формы
function resetForm(form, fields) {
  for (const field of fields) {
    form[field].value = "";
  }
}

//универсальная цункций добовления формы
function validateAndGetFormData(form, fields) {
  const formData = new FormData(form);
  const res = {};
  for (const field of fields) {
    const fieldValue = formData.get(field);
    form[field].classList.remove("error");
    if (!fieldValue) {
      form[field].classList.add("error");
    }
    res[field] = fieldValue;
  }
  let isValid = true;
  for (const field of fields) {
    if (!res[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return;
  }
  return res;
}

//добовления данных из формы в стэйт
function addHabbit(event) {
  event.preventDefault();
  const data = validateAndGetFormData(event.target, ["name", "icon", "target"]);
  if (!data) {
    return;
  }
  const maxId = habbits.reduce(
    (acc, habbit) => (acc > habbit.id ? acc : habbit.id),
    0
  );
  habbits.push({
    id: maxId + 1,
    name: data.name,
    target: data.target,
    icon: data.icon,
    days: [],
  });
  resetForm(event.target, ["name", "target"]);
  togglePopup();
  saveData();
  rerender(maxId + 1);
}

//-----------------------------
//id привычки в url
/* document.location.replace(document.location.pathname + '#' + activeHabbitId); */

(() => {
  loadData();
  const hashId = Number(document.location.hash.replace("#", ""));
  const urlHabbit = habbits.find((habbit) => habbit.id == hashId);
  if (urlHabbit) {
    rerender(urlHabbit.id);
  } else {
    rerender(habbits[0].id);
  }
})();

//-------------------------------
//____________Javascript-advanced____________________

//------------------
//Sets
//Множество - совокупность объектов, уникальных
("use strict");

const flights = ["Russia", "USA", "London", "London", "USA"];

const setFlights = new Set(flights);
console.log(setFlights); // Set { 'Russia', 'USA', 'London' }
console.log(setFlights.size); //3
console.log(setFlights.has("Russia")); //true
setFlights.add("Paris");
setFlights.delete("London");
console.log(setFlights); // Set { 'Russia', 'USA', 'Paris' }

for (const flight of setFlights) {
  console.log(flight);
}
//Russia
// USA
// Paris

console.log([...setFlights]); //['Russia', 'USA', 'Paris' ]

const setObj = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]);
console.log(setObj); //Set { { a: 1 }, { b: 2 }, { b: 2 } } - уникакализации не получаем т.к. объекты
console.log(new Set("abcd")); //Set { 'a', 'b', 'c', 'd' }

//---------------------
//Основы работы с Map
//примитивная структура данных но очень производительная
//-пустой по умолчанию
//-любой ключ
//-получения size
//-оптимизирован для частых операций
//-По умолчанию нет stringify / parse

//создать
const wetherMap = new Map();

//наполнить (можно использовать цепочку)
wetherMap.set("London", "10").set("Moscow", "7");

//получить
console.log(wetherMap.get("Moscow")); // '7'
console.log(wetherMap.get("not found")); // undefined

//есть ли
console.log(wetherMap.has("Moscow")); // true
console.log(wetherMap.has("not found")); // false

//удаление
console.log(wetherMap.delete("London")); // true

//очистить wetherMap.clear()

//можем использовать что угодно вместо ключа если элементы одинаковый то будет сохранен последний как в  объекте
wetherMap
  .set(1, 5)
  .set(true, "yes")
  .set(false, "no")
  .set(arr, "array")
  .set({ a: 1 }, { b: 1 });

console.log(wetherMap);

//размер
console.log(wetherMap.size); // 7

//не использует значения в качестве ключа поэтому нам надо его сначало отдельно создать а потом уже вызвать
const arr = [1, 2, 3];
console.log(wetherMap.get(arr)); // 'array'
console.log(wetherMap.get({ a: 1 })); // undefined

//----------------------
//Быстрое создание Map из Объекта
const wetherMap = new Map([
  ["London", "10"],
  ["Moscow", "7"],
]);
console.log(wetherMap); // Map { 'London' => '10', 'Moscow' => '7' }

const wetherObject = {
  london: 10,
  moscow: 7,
  paris: 14,
};

console.log(Object.entries(wetherObject));
const wetherMap2 = new Map(Object.entries(wetherObject)); //// [ [ 'london', 10 ], [ 'moscow', 7 ], [ 'paris', 14 ] ]
console.log(wetherMap2.size); //3

//--------------------
//Итерация по Map
("use strict");

const weatherMap = new Map([
  ["London", 10],
  ["Moscow", 7],
  ["Paris", 14],
]);

for (const [key, value] of weatherMap) {
  console.log(key);
  console.log(value);
}
// London
// 10
// Moscow
// 7
// Paris
// 14

//in Arrray
console.log([...weatherMap]); //[ ['London', 10], ['Moscow', 7], ['Paris', 14] ]
console.log([...weatherMap.keys()]); //[ 'London', 'Moscow', 'Paris' ]
console.log([...weatherMap.values()]); //[ 10, 7, 14 ]

//-----------------
//Упражнение - swap ключей и значений
("use strict");
/* Необходимо поменять местами ключи и значения в следующем Map */
let weatherMap = new Map([
  ["London", 10],
  ["Moscow", 7],
  ["Paris", 14],
]);

weatherMap = new Map([...weatherMap].map((el) => el.reverse()));
console.log(weatherMap);

// Результат:

// Map { 10 => 'London', 7 => 'Moscow', 14 => 'Paris' }

//------------------
//WeakMap
("use strict");
let a = { a: 1 };
let b = { b: 1 };

const map = new WeakMap();

//установить в кчестве ключа только объекты и массивы
map.set(a, "testA");
map.set(b, "testB");

//получить
console.log(map.get(a)); // 'testA'
console.log(map.has(a)); // true
console.log(map); // WeakMap { [Object: null prototype] { a: 1 } => 'testA', { b: 1 } => 'testB' }

//удалил тот елемент т.к. он уже не явл. объектом
a = null;
setTimeout(() => {
  console.log(map); // WeakMap { { b: 1 } => 'testB' }
}, 1000);

let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1; /* сложные вычисления ))) */
    cache.set(obj, res);
  }
  return cache.get(obj);
}

const res = getValue(b);
console.log(res); // 1
const res2 = getValue(b);
console.log(res2); // 1

//-----------------------
//WeakSet
//похожи на WeakMap
("use strict");

let a = { a: 1 };
let b = { b: 2 };
const set = new WeakSet([a, b]);
a = null;
setTimeout(() => {
  console.log(set);
}, 1000);

// Результат (после 1 секунды):

// WeakSet { { b: 2 } }

//---------------------
//Конвертация и проверка чисел
("use strict");

console.log(10 === 10.0); // true
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(Number("10")); // 10
console.log(+"20"); // 20

//получить число в определенной системе исчеслений
console.log(Number.parseInt("11", 10)); // 11
console.log(Number.parseInt("11 sec", 10)); // 11
console.log(Number.parseInt("sec 11", 10)); // NaN

console.log(Number.parseFloat("11.5", 10)); // 11.5
console.log(Number.parseFloat("11.5 sec", 10)); // 11.5
console.log(Number.parseFloat("sec 11.5", 10)); // NaN

//если не число то true
console.log(Number.isNaN(Number("10sdfs"))); // true
console.log(Number.isNaN(10 / 0)); // false

//если только число вернет true  / не число и бесконечность вернет false
console.log(Number.isFinite(10 / 0)); // false
console.log(Number.isFinite(Number("10sdfs"))); // false
console.log(Number.isFinite(10)); // true

//если целое число то true
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.4)); // false

//---------------------
//Библиотека Math
("use strict");

console.log(Math.sqrt(36)); // 6
//the same
console.log(36 ** (1 / 2)); // 6
console.log(Math.cbrt(27)); // 3
//the same
console.log(16 ** (1 / 4)); // 2

console.log(Math.sign(-100)); // -1
console.log(Math.sign(35)); // 1

//абсолютный
console.log(Math.abs(-100)); // 100
console.log(Math.abs(100)); // 100

//экспонента
console.log(Math.exp(3)); // 20.085536923187668

//max
console.log(Math.max(1, -2, 10, 0, 19)); // 19
console.log(Math.max(1, -2, "10", true, "19")); // 19
console.log(Math.max(1, -2, "10", true, 1.2)); // 10
console.log(Math.min(1, -2, 10, 0, 19)); // -2

const arr = [1, -2, 10, 0, 19];
console.log(Math.max(...arr)); // 19

console.log(Math.random()); // Random number between 0 and 1

//--------------------
//Округление
("use strict");

//до ближайщего целого
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.6)); // 2
console.log(Math.round(1.499999)); // 1

//до верхнего значения
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1)); // 1
console.log(Math.ceil(0.1)); // 1

//до нижнего значения
console.log(Math.floor(0.1)); // 0
console.log(Math.floor(2.9)); // 2

//обрезать число
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(2.1)); // 2
console.log(Math.trunc(1.1111)); // 1

//округляет оптиционально (получаем строку)
console.log((1.499999).toFixed(1)); // "1.5"
console.log(Number((1.499999).toFixed(1))); // 1.5

//------------------
//Упражнение - Функция случайного числа
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(1, 20)); //7

//-----------------
//Оператор остатка от деления
("use strict");

console.log(15 / 2); // 7.5
console.log(15 % 2); // 1 (остаток от деления 15 на 2)
console.log(14 % 2); // 0 (остаток от деления 14 на 2)

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;
function isEvenFunc(n) {
  return n % 2 === 0;
}

console.log(isEven(17)); // false (17 нечетное число)
console.log(isEven(12)); // true (12 четное число)
console.log(isOdd(17)); // true (17 нечетное число)
console.log(isOdd(12)); // false (12 четное число)

//---------------
//Разделитель чисел
("use strict");

//the same
const bigNum1 = 350_500_000;
const bigNum2 = 350500000;

//the same
const payment = 20_10;
const paymentInR = 20.1;
const paymentInR2 = 2_0.1_0;

console.log(Number("350_500_000")); // NaN
console.log(Number("350500000")); // 350500000
//работает некоректно
console.log(Number.parseInt("350_500_000")); // 350
console.log(Number.parseFloat("350_500_000.10")); // 350500000.1

//---------------
//Работа с BigInt
//позволяет работать с большими числами чем максимальное в js
("use strict");

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(max); // 9007199254740991
//дальше максимального числа нормально не будет показываться
console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992
console.log(max + 3); // 9007199254740994

console.log(2342342343524623465745345345n); // 2342342343524623465745345345n
//не передовать число а строку т.к. может работать некоректно
console.log(BigInt(2342342343524623465745345345)); // 2342342343524623465745345345n
console.log(BigInt("2342342343524623465745345345")); // 2342342343524623465745345345n

//можем только работать BigInt и BigInt / BigInt и число работает некоректно
console.log(10n + 10n); // 20n
console.log(10n + BigInt(10)); // 20n
console.log(10n * 10n); // 100n
console.log(2342342343524623465745345345n * 2342342343524623465745345345n); // 5485912915480688668270610812899933662610025n

console.log(10n * BigInt(10)); // 100n
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335

//сравнение работает и с обычными числами
console.log(10n < 20); // true
console.log(10n == 10); // true
console.log(10n === 10); // false
console.log(typeof 10n); // bigint

//------------------
//Интернационализация чисел
//с помощью Intl API

("use strict");

const options1 = {
  style: "currency",
  currency: "RUB",
};

const options2 = {
  style: "currency",
  currency: "USD",
};

const options3 = {
  style: "decimal",
};

const options4 = {
  style: "percent",
};

const options5 = {
  style: "unit",
  unit: "celsius",
};

console.log(new Intl.NumberFormat("ru-RU", options1).format(23000)); // "23 000,00 ₽"
console.log(new Intl.NumberFormat("en-US", options2).format(23000)); // "$23,000.00"
console.log(new Intl.NumberFormat("ru-RU", options3).format(10000)); // "10 000"
console.log(new Intl.NumberFormat("ru-RU", options4).format(0.1)); // "10%"
console.log(new Intl.NumberFormat("ru-RU", options5).format(25)); // "25°C"

//---------------------
//Упражнение - Конвертер валют
("use strict");
/*
  Напишите функцию, которая принимает 3 параметра:
  - Сумма
  - Валюта исходная
  - Валюта для конвертации
  И возвращает строку уже сконвертированной суммы с постфиксом
  валюты. Если не смог, то null.
  Для примера 3 валюты.
*/

function convert(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    { name: "USD", mult: 1 },
    { name: "RUB", mult: 1 / 60 },
    { name: "EUR", mult: 1.1 },
  ];
  const initial = allCurrencies.find((c) => c.name === initialCurrency);
  if (!initial) {
    return null;
  }
  const convert = allCurrencies.find((c) => c.name === convertCurrency);
  if (!convert) {
    return null;
  }
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: convert.name,
  }).format((sum * initial.mult) / convert.mult);
}

console.log(convert(10000, "RUB", "USD")); // "$166.67"
console.log(convert(10000, "RUB", "EUR")); // "€153.85"
console.log(convert(100, "USD", "RUB")); // "6000 ₽"
console.log(convert(100, "USD", "EUR")); // "€91.74"
console.log(convert(100, "EUR", "RUB")); // "6600 ₽"
console.log(convert(100, "TG", "RUB")); // null
console.log(convert(100, "EUR", "TG")); // null

//----------------------
//Создание дат
("use strict");

const now = new Date();

console.log(now); // Current date and time

//прочитать определенную дату
console.log(new Date("02-01-2023")); // Thu Feb 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(new Date("02/01/2023")); // Thu Feb 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(new Date("2023/01/02")); // Mon Jan 02 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(new Date("10 Jan 2023")); // Tue Jan 10 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(new Date("10 янв 2023")); // Tue Jan 10 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(new Date("Dec 22 2022 20:40:03")); // Thu Dec 22 2022 20:40:03 GMT+0000 (Coordinated Universal Time)

//числовые данные передаем
console.log(new Date(2024, 11, 31, 10, 5, 10)); // Wed Dec 31 2024 10:05:10 GMT+0000 (Coordinated Universal Time)
console.log(new Date(2024, 12, 10 + 100)); // Invalid Date (January has an index of 0, so 12 is out of range)

//стартовая дата (юникс время)
console.log(new Date(0)); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
console.log(new Date(1 * 24 * 60 * 60 * 1000)); // Fri Jan 02 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

//милисекунды которые прошли с начало старта юникс времени
console.log(Date.now()); // Current timestamp
console.log(new Date(Date.now())); // Current date and time - текущую дату

//методы даты получения
console.log(now.getFullYear()); // Current year (e.g., 2023)
console.log(now.getMonth()); // Current month (0-11, where 0 is January and 11 is December)
console.log(now.getDate()); // Current day of the month (1-31)
console.log(now.getDay()); // Current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
console.log(now.getHours()); // Current hour (0-23)
console.log(now.getMinutes()); // Current minute (0-59)
console.log(now.getTime()); // Current timestamp in milliseconds since January 1, 1970

//получения будущей даты
console.log(new Date(now.setFullYear(2030))); // Updated date with the year set to 2030
console.log(new Date(now.setMonth(10))); // Updated date with the month set to November (index 10)

//--------------------------
//Операции с датами
("use strict");

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date1)); // 1742889600000 (timestamp in milliseconds)
console.log(date2 - date1); // 2592000000 (difference in milliseconds)

function getDaysBetweenDates(dateFirst, dateSecond) {
  return Math.abs(dateSecond - dateFirst) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2)); // 30 (number of days between the two dates)

//---------------------------
//Сравнение дат
("use strict");

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 4);

console.log(first < second); // false
console.log(first == second); // false
console.log(first === second); // false

//нам нужно конвертировать в милисекунды либо в число
console.log(first.getTime() == second.getTime()); // true
console.log(first.getTime() === second.getTime()); // true
console.log(Number(first) === Number(second)); // true
console.log(+first === +second); // true

//---------------------------
//Упражнение - Проверка на день рождения
("use strict");

/*
    Сделать функцию, которая принимает пользователя и
    проверяет, есть ли у него сегодня день рождения или нет
*/

const user1 = {
  name: "Vasia",
  birthday: "12/22/2022",
};

function isBirthday(user) {
  const birthdayDate = new Date(user.birthday);
  const now = new Date();
  if (
    birthdayDate.getMonth() === now.getMonth() &&
    birthdayDate.getDate() === now.getDate()
  ) {
    return true;
  }
  return false;
}

console.log(isBirthday(user1)); //false

//--------------------
//Интернационализация дат
//

("use strict");

const date = new Date();

console.log(date); //[Текущая дата и время] Wed Oct 11 2023 13:41:12 GMT+0300 (Москва, стандартное время)
console.log(new Intl.DateTimeFormat("ru-RU").format(date)); //[Дата и время в формате ru - RU] 11.10.2023

const options1 = {
  hour: "numeric",
  minute: "numeric",
};

console.log(new Intl.DateTimeFormat("ru-RU", options1).format(date)); //[Дата и время в формате ru - RU с опциями] 13:41

const options2 = {
  hour: "numeric",
  minute: "numeric",
  month: "long",
  weekday: "short",
  year: "2-digit",
};

console.log(new Intl.DateTimeFormat("en-US", options2).format(date)); //[Дата и время в формате en - US с опциями] October 23 Wed at 1:41 PM
console.log(new Intl.DateTimeFormat("ru-RU", options2).format(date)); //[Дата и время в формате ru - RU с опциями] октябрь 23 г. ср в 13:41

console.log(navigator.language); //[Язык браузера] ru-RU
console.log(new Intl.DateTimeFormat(navigator.language, options1).format(date)); //[Дата и время в формате, соответствующем языку браузера с опциями] 13:41

//------------------------
//Создание таймеров
setTimeout(
  () => {
    console.log("hello");
  },
  3000,
  "finish"
); //3c

setTimeout(
  (mes) => {
    console.log(mes);
  },
  3000,
  "finish"
); // 3s -> 'finish'

setTimeout(
  (mes, mes2) => {
    console.log(mes);
    console.log(mes2);
  },
  3000,
  "finish",
  "!!!"
); // 3s -> 'finish' "!!!"

const timer = setTimeout(
  (mes, mes2) => {
    console.log(mes);
    console.log(mes2);
  },
  3000,
  "finish",
  "!!!"
); //1 получили id таймера а потом отменили его

//отменить таймер
clearTimeout(timer);

//---------------------
//Таймеры и Event Loop
console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);

//1 stack
//console.log(1);

//2 stack -> web API
//setTimeout -> web API пошел запрос в web API, передалось функция отложенная

//3 stack
//console.log(3);

//4 Callback Queue
//ждем секунду а далее setTimeout -> Callback Queue

//5 stack
/* (() => {
  console.log(2);
} */
//помещаеться в стэк и выполняеться

//-----------------
//Точность таймеров
("use strict");
//не совсем точен в измерениях т.к. Event Loop надо время обхода и вот это дельта дает погрешность

const mark1 = performance.now(); //число милисекунд с начало запуска приложения

setTimeout(() => {
  const mark2 = performance.now();
  console.log(mark2 - mark1);
}, 1000); //103 ,20 / 1104,30 -> разница больше 1 cекунды
//1002

//-----------------
//Работа с интервалами
("use strict");

const interval = setInterval(() => {
  console.log(new Date());
}, 1000);

//интервал прекратился через 5 секунд
const timer = setTimeout(() => {
  clearInterval(interval);
}, 5000);

//индефикаторы не пересекаються

console.log(interval); // Output: <intervalId> 5
console.log(timer); // Output: <timerId> 6
/* Wed Oct 11 2023 14:02:07 GMT+0300 (Москва, стандартное время)
VM46:3 Wed Oct 11 2023 14:02:08 GMT+0300 (Москва, стандартное время)
VM46:3 Wed Oct 11 2023 14:02:09 GMT+0300 (Москва, стандартное время)
VM46:3 Wed Oct 11 2023 14:02:10 GMT+0300 (Москва, стандартное время)
VM46:3 Wed Oct 11 2023 14:02:11 GMT+0300 (Москва, стандартное время) */

//---------------------
//Упражнение - Таймер пиццы
("use strict");

/* 
  Таймер пиццы
  Сделать таймер пиццы (функцию, принимающую время),
  который будет выводить в консоль секунды,
  оставшиеся до готовности пиццы и сообщение по готовности.
  00:04
  00:03
  00:01
  00:00
  🍕!!!
*/

function pizzaTimer(ms) {
  const end = new Date().getTime() + ms;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat("ru-RU", {
        minute: "numeric",
        second: "numeric",
        //убираем погрешность Event Loop (+100)
      }).format(end + 100 - new Date())
    );
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("🍕!!!");
  }, ms);
}

pizzaTimer(5000);
/* 00:04
00:03
00:02
00:01 
🍕!!!*/

//---------------
//Объектно ориентированное программирование
//-Парадигма програмирование, основанного на концепции объектов
//-Объекты мы описываем реальные модели из жизни
//-Мы складываем все данные об объектах и его поведении внутри
//-Из них мы строим приожения, позволяя им взаиможействовать между собой

//Благдоря ООП более структурироваый код, легче его подерживать и читать

//Классы и его instances
//Class - определяет структуру
//Обеспечивает простое взаимодействие -> new Objects

//Принципы ООП
//-Абстракция - выделение для решений задачи важного, скрывая несуществующие
//-Инкапсуляция - обеспечивает возможность приватных методов которые не досупны извне
//Наследование - возможность переиспользовать логику, перенаследовать данные
//Полиморфизм - позволяет использовать объекты с одинаковыми интерфейсам без информации о типе и внутренней структуре

//-------------
//Реализация ООП в JS
//С помощью наследования прототипов объекта
//все наследованные объекты имеет доступ к прототипу, и не копирует все методы а использует прототип. Объект -> Прототип

("use strict");

const a = [1];
console.dir(a);
//[[Prototype]]:Array(0) -> прототип массива с его всеми методами они не копируються а просто доступны (как будто получаем ссылку на исходник который можем потом использовать у себя в коде), поэтому мы далее можем пользоваться всеми методами.

//Прототипное наследование это основа благодоря чему мы можем создовать instances объекта

//Существует 3 метода создание
//-Constructor functions
//-ES6 Classes
//-Objects.create()

//-----------------------
//Оператор new
("use strict");

//функция конструктор
const User = function (email, password) {
  this.email = email;
  this.password = password + "%%%";
};

const user1 = new User("a@a.ru", "123");
console.log(user1); // Output: User { email: 'a@a.ru', password: '123%%%' }

const user2 = new User("a2@a.ru", "1234");
console.log(user2); // Output: User { email: 'a2@a.ru', password: '1234%%%' }

console.log(user2 instanceof User); // Output: true

//Когда говорим new то:
// Создаётся пустой объект
// Вызывается User функция
// this = пустому объекту / не undefined а пустой объект в котором мы можем что-то добовлять
// объект связывается с prototype
// возвращается объект

//----------------------
//Prototype
("use strict");

//функция конструктор
const Book = function (title, author) {
  this.author = author;
  this.title = title;
  this.isRead = false;
  //не пишем функцию внутри т.к. функция создаться сразу внутри всех наследников
};

//добавить методы в prototype который будет доступен наследникам но не будет находиться в них
Book.prototype.read = function () {
  this.isRead = true;
};

//и в дополнении мы говорим что не у книги самой будет этот prototypе а создаем для будущих instances которые будут созданы из нашей книги
Book.prototype.cover = "Paper";

const lordOftheRing = new Book("Lord of the Rings", "Tolkien");
lordOftheRing.read();

console.log(lordOftheRing); //{author: 'Tolkien', title: 'Lord of the Rings', isRead: true}
console.log(lordOftheRing.cover); //Paper
console.log(lordOftheRing.hasOwnProperty("cover")); // Output: false
console.log(lordOftheRing.hasOwnProperty("author")); // Output: true

//proto - увидеть что находиться в prototype
console.log(lordOftheRing.__proto__); //{cover: 'Paper', read: ƒ, constructor: ƒ}

console.log(lordOftheRing.__proto__ === Book.prototype); // Output: true
//the same
console.log(Book.prototype.isPrototypeOf(lordOftheRing)); // Output: true
console.log(Book.prototype.isPrototypeOf(Book)); // Output: false

//добавли метод в исходный конструктор
Array.prototype.first = function () {
  // Custom prototype method
};
const a = [5];
console.log(a.first); // Output: [Function: first]

// Создаётся функция-конструктор Book
// Внутри функции присваиваются свойства author, title и isRead объекту через this
// Book.prototype содержит методы read и свойство cover
// Создаётся экземпляр lordOftheRing с помощью конструктора Book
// Вызывается метод read на экземпляре lordOftheRing
// Выводятся свойства и методы экземпляра lordOftheRing
// Выводится значение свойства cover через прототип
// Выводится информация о принадлежности свойств к экземпляру или прототипу
// Проверяется прототип объекта lordOftheRing и его соответствие Book.prototype
// Проверяется прототип Book.prototype и его отношение к объекту Book
// Добавляется пользовательский метод first в прототип Array
// Выводится значение свойства first для массива a

//---------------------
//Упражнение - Корзина товаров

/*
  Реализовать на функциях и прототипах корзину товаров с методами
  - Добавить товар
  - Увеличить число товаров
  - Уменьшить число товаров (удалить если их 0)
*/
const product = { id: 1, name: "Bread", count: 1 };

const Cart = function () {
  this.products = [];
};

//Добавить товар
Cart.prototype.addProduct = function (product) {
  //если вдруг есть такой же продукт о ничего добовляем
  if (this.products.find((product) => product.id === product.id)) {
    return;
  }
  this.products.push(product);
};

//Увеличить число товаров
Cart.prototype.increaseAmount = function (id) {
  this.products = this.products.map((product) => {
    if (product.id == id) {
      product.count++;
      return product;
    }
    return product;
  });
};

//Уменьшить число товаров
Cart.prototype.decreaseAmount = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id == id) {
        product.count--;
        return product;
      }
      return product;
    })
    //убирем тем что стали 0
    .filter((product) => product.count > 0);
};

const cart = new Cart();
cart.addProduct(product); //{id: 1, name: 'Bread', count: 1}
cart.increaseAmount(1);
cart.decreaseAmount(1);
cart.decreaseAmount(1);
console.log(cart); //{id: 1, name: 'Bread', count: 0}

const cart2 = new Cart();
cart2.addProduct(product);
console.log(cart2); //{id: 1, name: 'Bread', count: 1}

//---------------------
//Цепочки prototype
("use strict");

const Book = function (title, author) {
  this.author = author;
  this.title = title;
};
Book.prototype.isRead = false;

const lordOfTheRings = new Book("1", "1");

//если что то не найдет в самой Book то он пойдет по цепочке дальше в поисках нужного свойства или метода по цепочке (hasOwnProperty метод objects)
console.log(lordOfTheRings.hasOwnProperty("title")); //true

//Book.prototype есть прототип Objects , тоесть ссылка на исходный прототип нашей Book (new Objects)
//Book (Book.prototype) <- __proto__ <-  Objects(Objects.prototype) <- null (последнее звено всегда null)
console.log(Book.prototype.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} / методы объекта

//Это цепочка выше и есть prototype цепочка

//1)Пустой объект lordOfTheRings
//2)Вызов конструктора и создание свойств author / title
//3)Связывание с Book.prototype через ___proto__
//4)Возврат вновь созданного объекта

//-----------------------
//Классы
//основано на функции конструктора
//классы не поднимаються наверх
//да же если 'use strict'; мода нет все равно все будет работать как будто он включен

//функция конструктор
const Book = function (title, author) {
  this.author = author;
  this.title = title;
  this.isRead = false;
};
Book.prototype.read = function () {
  this.isRead = true;
};

//class
class BookClass {
  //сразу свойства со значением
  isRead = false;

  //по сути воспроизводит функцию конструктор
  constructor(title, author) {
    this.author = author;
    this.title = title;
  }

  //добавляем методы
  read() {
    this.isRead = true;
  }
}

const lotr = new BookClass("lotr", "Tolkien");
console.log(lotr); //BookClass {isRead: false, author: 'Tolkien', title: 'lotr'}
console.log(lotr instanceof BookClass); //true
lotr.read(); //BookClass {isRead: true, author: 'Tolkien', title: 'lotr'}
console.log(lotr.__proto__); // constructor:class BookClass и функция read: ƒ read()

//----------------------
//Setters и getters
//возможность использовать методы как свойства

("use strict");

const task = {
  title: "Task1",
  dueTo: new Date("2023/01/01"),

  //получать значение
  get isOverdue() {
    return this.dueTo < new Date();
  },

  //присваивает значение обеспечивает дополнительную валидацию
  set isOverdue(isOverdueTask) {
    if (!isOverdueTask) {
      this.dueTo = new Date();
    }
  },
};

//обращаемся как к свойсту
console.log(task.isOverdue); // Output: true, since the current date is after the due date (2023/01/01)
task.isOverdue = false; // This sets the task as not overdue, so it updates the dueTo date with the current date
console.log(task); // Output: { title: 'Task1', dueTo: <current date> }

class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }

  get isOverdue() {
    return this.dueDate < new Date();
  }

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._dueDate = date;
  }
}

const newTask = new Task("Task2", new Date("2023/1/1"));
// console.log(newTask.dueDate = new Date('2024/1/1'));
console.log((newTask._dueDate = new Date())); // Output: <current date>, since it sets the _dueDate property directly

//----------------------
//Static
//объявление не на ptototype  а в самом классе. Они не находяться в prototype
("use strict");

class Test {
  static a = 1;
  static hello() {
    console.log("Hello");
  }

  static {
    let b = 5;
    this.a = 5;
  }
}

Test.hello(); // Output: "Hello", as it calls the static method hello() that logs "Hello"
console.log(Test.a); // Output: 5, as the static block in the class sets the value of static property a to 5

//------------------------
//Приватные методы и свойства
//Приватные поля доступны только внутри

("use strict");

class Car {
  #vin; // Private field
  speed; // Instance property
  #test2;

  constructor() {
    //не можем сразу присвоить что то приватному методу нужно сначало объявить его в конструктора
    this.#test2 = 5; // Private field
    this.test3 = 5; // Instance property
  }

  //доступен только при помощи публичного метода
  #changeVin() {
    // Private method
    console.log("changed");
  }

  test() {
    this.#changeVin(); // Calling the private method
  }

  //напрямую не можем никак повлиять
  static #field = 3; // Private static field

  //можем изменить через метод неприватный
  static {
    // Static block
    this.#field = 5; // Updating the private static field
  }
}

const car = new Car(); // Creating a new instance of Car

car.test(); // Output: "changed", as the test() method calls the private method #changeVin()

//----------------------
//Упражнение - класс пользователя
("use strict");
/*
  Реализовать класс пользователя, со свойствами
  - логин
  - пароль
  Причём пароль при установке должен переворачиваться
  и в таком виде храниться.
  Пароль и логин после создания изменить нельзя. Так же у
  класса добавить методы
  - Смены пароля (передаём старый и новый пароль)
  - Сверки пароля
*/

class User {
  #login; // Private field for login
  #_passWord; // Private field for password

  constructor(login, password) {
    this.#login = login;
    this.#passWord = password;
  }

  //для изменения this.#passWord
  set #passWord(pass) {
    this.#_passWord = pass.split("").reverse().join(""); // Reverse the password and store it
  }

  //получить this.#passWord
  get #passWord() {
    return this.#_passWord.split("").reverse().join(""); // Reverse the stored password and return it
  }

  get login() {
    return this.#login;
  }

  checkPassword(pass) {
    return this.#passWord === pass;
  }

  changePassword(oldPass, newPass) {
    if (!this.checkPassword(oldPass)) {
      return false;
    }
    this.#passWord = newPass;
    return true;
  }
}

const user = new User("a@a.ru", "123"); // Create a new user instance
console.log(user.checkPassword("234")); // Output: false, as the provided password doesn't match the stored password
console.log(user.checkPassword("123")); // Output: true, as the provided password matches the stored password
console.log(user.changePassword("123", "234")); // Output: true, as the old password matches and the password is successfully changed
console.log(user); // Output: User object with login and password properties (password is reversed)

//--------------------
//Object.create
("use strict");

const User = {
  init(email, password) {
    this.email = email;
    this.password = password;
  },
  log() {
    console.log("Log");
  },
};

//фактический вручную создали цепочку прототипов
const user = Object.create(User);
//Объект на основании которого мы создаем кладеться в prototype
console.log(user.__proto__ === User); //true
user.log(); //'Log'

user.init("a@a.ru", "123");
console.log(user);
/*
Output:
{
  email: 'a@a.ru',
  password: '123'
}
*/

//Получили цепочку User -> user -> admin / в его prototype есть {email: 'a@a.ru',password: '123'} и также методы init() и log()
//Получили механизм наследований информаций одного объекта в другое
const admin = Object.create(user);
console.log(admin);
/*
Output:
{
  email: 'a@a.ru',
  password: '123'
}
*/
admin.log(); // Output: Log
console.log(admin.email); // Output: 'a@a.ru'

//----------------------
//Абстракция и инкапсуляция
("use strict");
/* Абстракция VS Инкапсуляция
  - Название
  - Режисёр
  - Наш рейтинг
  - Длительность
  - Страна производства
  - Актёры
  - Трейлер
  ...
*/

//Инкапсуляция #name; #author; #length;

class Film {
  #name;
  #author;
  rating;
  #length;

  constructor(name, author, length) {
    this.#name = name;
    this.#author = author;
    this.#length = length;
  }

  get name() {
    return this.#name;
  }

  get author() {
    return this.#author;
  }

  get length() {
    return this.#length;
  }
}

const film = new Film("Avatar", "Cameron", 240);
console.log(film); //{rating: undefined, #name: 'Avatar', #author: 'Cameron', #length: 240}

//--------------------
//Наследование
("use strict");
//Objects (Objects.prototype) -> Book (Book.prototype) -> Audiobook (Audiobook.prototype)

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.buy = function () {
  console.log("Buy");
};

const AudioBook = function (title, author, lenMin) {
  //наследуем свойство с Book только передаем this AudioBook
  Book.call(this, title, author);
  this.lenMin = lenMin;
};

//очередь важна - сначало связываем цепочку а далее указываем контруктор
//связываем цепочку прототипов
AudioBook.prototype = Object.create(Book.prototype);
//дополнительно указываем что конструктор будет равно AudioBook т.к. сейчас он указывает на Book
AudioBook.prototype.constructor = AudioBook;

AudioBook.prototype.log = function () {
  console.log(`${this.title} - ${this.lenMin}`);
};

const book = new AudioBook("Lord Of The Rings", "Tolkien", 20 * 60);
book.log(); // Output: "Lord Of The Rings - 1200"
book.buy(); // Output: "Buy" - Logs "Buy"
console.log(book);
/*
Output:
{
  title: 'Lord Of The Rings',
  author: 'Tolkien',
  lenMin: 1200
}
*/
console.log(book instanceof AudioBook); // Output: true
console.log(book instanceof Book); // Output: true

//----------------------
//Наследование в ES6
("use strict");

//Objects (Objects.prototype) -> Book (Book.prototype) -> Audiobook (Audiobook.prototype)

//то же самое только с классами
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log("Buy");
  }
}

class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author);
    this.lenMin = lenMin;
  }

  log() {
    console.log(`${this.title} - ${this.lenMin}`);
  }
}

const book = new AudioBook("Lord Of The Rings", "Tolkien", 60 * 20);
book.log(); // Output: "Lord Of The Rings - 1200"
book.buy(); // Output: "Buy"

//-------------------------
//Override методов

("use strict");
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(`${this.title} - ${this.author}`);
  }
}

const book1 = new Book("Lord Of The Rings", "Tolkien");
book1.info(); // Output: Lord Of The Rings - Tolkien

class EBook extends Book {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  //хотим поменять поведения метода, получить расширенную версию
  info() {
    console.log(`${this.title} - ${this.author} - ${this.pages}`);
  }
}

const book2 = new EBook("Lord Of The Rings", "Tolkien", 100);
book2.info(); // Output: Lord Of The Rings - Tolkien - 100

//-----------------------------
//Упражнение - Удар по орку
/*
Сделать класс врага со здоровьем и методом получения урона
Сделать класс меча, который имеет силу и метод нанесения
урона.
Сделать класс орка, который в 50% случаев не получает урон.
*/

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  recieveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage;
  }

  strike(enemy) {
    enemy.recieveDamage(this.#damage);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  //Override метода но все свойства оригинала должны быть публичные
  recieveDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    console.log(this.health);
  }
}

const enemy = new Orc(10);
const sword = new Sword(3);
sword.strike(enemy); // Orc's health: 7
sword.strike(enemy); // Orc's health: 4 (50% chance to receive damage)
sword.strike(enemy); // Orc's health: 1 (50% chance to receive damage)

//------------------
//Полиморфизм
//Ad - hock  полиморфизм - возможность по разному исполнять функцию в зависемости от типов данных
2 + 4; //6
2 + "4"; //6
//Параметрический полиморфизм - можем исполнять одну и ту же функцию только с разным типом аргументов
console.log(1);
console.log("1");
//Полиморфизм подтипов (OOП)

class Troll extends Enemy {}

const enemy2 = new Troll(20);
sword.strike(enemy); // Orc's health: 7
sword.strike(enemy); // Orc's health: 4 (50% chance to receive damage)
sword.strike(enemy); // Orc's health: 1 (50% chance to receive damage)

sword.strike(enemy2); // Troll's health: 17
sword.strike(enemy2); // Troll's health: 14 (50% chance to receive damage)
sword.strike(enemy2); // Troll's health: 11 (50% chance to receive damage)

//---------------------
//Паттерн Builder и chaining
("use strict");

class Wallet {
  balance = 0;

  //реализуем цепочку с помощью возвращения объекта this
  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
const res = wallet.add(100).remove(10).add(10);
console.log(res.balance); // 100

class Builder {
  house = {};

  addRoof() {
    this.house.roof = "Roof";
    return this;
  }

  addFloor() {
    this.house.floor = "Floor";
    return this;
  }

  execute() {
    return this.house;
  }
}

const res2 = new Builder().addRoof().addFloor().execute();
console.log(res2); // { roof: 'Roof', floor: 'Floor' }

///---------------
//Принцип едино ответствености
//Не должен брать дополнительную ответственость то что ему не принадлежит

//выполняет функции которые относиться конкретно ему
class Character {
  #inventory = [];
  #health = 10;

  pickItem(item) {
    this.#inventory.push(item);
  }

  recieveDamage(damage) {
    this.#health -= damage;
  }
}

//работу с данными вынесены в отдельный класс
class DB {
  save(item) {
    localStorage.setItem("char", item);
  }

  load() {
    ///...
  }
}

//-----------------------------
//Принцип открытости и закрытости
("use strict");

class Treasure {
  value = 0;
}

class Coin extends Treasure {
  value = 1;
}

class Crystal extends Treasure {
  value = 10;
}

class Brilliant extends Treasure {
  value = 20;
}

//то есть в незаисемости сколько еще добавиться других классов с разными value  наш класс inventor подстоиться под это и не надо будет опять дописыфвать логику в Inventory , то есть модифицировать код уже не требуеться и поэтому мы соблюдаем правило открытости и закрытости
class Inventory {
  #score;
  pick(treasure) {
    this.#score += treasure.value;
  }
}

//------------------------
//Принцип подстановки Барбары Лисков
//если сделать частный класс от общего то его безболезнено можно заменять общий класс на него
class User {
  #role = "user";

  getRole() {
    return this.#role;
  }
}

//расширели функциональность
class Admin extends User {
  #role = ["user", "admin"];

  //чтобы не нарушать этот принцип нам нужно преоброзовать массив чтобы его мог обработать logRole()
  getRole() {
    return this.#role.join(", ");
  }
}

function logRole(user) {
  console.log("Role: " + user.getRole().toUpperCase());
}

logRole(new User()); //Role: USER
logRole(new Admin()); //Role: USER, ADMIN

//-------------------------
//Принцип разделения интерфейса
//какой то класс не должен зависеть от методов которые на практике ем у не нужны

class Weapon {
  cost;

  dealDamage() {}
}

//залажили только те методы которые действительны нужны нашем классам и будет использоваться , не нужна пихать в классы то что мы не используем

class Rifle extends Weapon {
  shoot() {
    this.dealDamage();
  }
}

class Sword extends Weapon {
  strike() {
    this.dealDamage();
  }
}

//---------------------------
//Принцип инверсии зависимостей
//должны зависеть от обстракций а не от конкретных реализации, то есть одни модули которые высокоуровневые не должны зависеть от более низкоуровневых а должны зависеть только от интерфейсных абстракций и их реализации

//база данных
class DB {
  save(items) {
    console.log(`Saved: ${items}`);
  }
}

class MongoDB extends DB {
  save(items) {
    console.log(`Saved to Mongo: ${items}`);
  }
}

class ToDoList {
  items = [1, 2, 3];
  db;

  //наш todolist должен принять некоторую базу данных а не конкретную , то есть не зависит о  конкретной реализации
  constructor(db) {
    this.db = db;
  }

  saveToDb() {
    this.db.save(this.items);
  }
}

const list1 = new ToDoList(new DB());
list1.saveToDb(); //Saved: 1,2,3
const list2 = new ToDoList(new MongoDB());
list2.saveToDb(); //Saved: 1,2,3

//----------------------
//_____Асинхронный JavaScript_______
//wep api обеспечивает нам асинхроность

//конкурентность - определнные задачи за определенный промежуток времени
//параллельность -выполняеться кем-то еще
//мегапоточность -  способ конкурентного выполнения выделением рабочих потоков
//асинхронная операция - передача операций для выполнения на стороне

//ajax -  позволяет нам асинхронно взаимодействовать с удаленным сервером для получения или отправки данных. Клиент (браузер) -> запрос -> сервер. Далее ответ сервера JSON файл.

//простая модель запроса без шифрование
//'https://dummyjson.com/products' - > https: (протокол) , dummyjson.com (хост), products (путь).Но пока он не понимает куда пойти по каму адресу, по умолчанию неизвестно. Значет адреса DNS сервер , и прежде чем делать какой то запрос наш клиент обращаеться DNS серверу и по этому адресу что написали выше хотит заполучить информацию. И DNS сервер возврощает определенный api aдрес  ('18.159.80.129.443'). B поэтому адресу наш клиент устанавливает соединения с сервером (TCP/IP socket). И при положиетльном соединении клиент и сервер может ощаться. И далее клиент кидает запрос (https://dummyjson.com/products) на получения данных:
/* 
get(метод запроса) /product HTTP/2(стандарт - конвенция взаимодействия клиента и сервера) 
Host: dummyjson.com (путь)
user-agent:insomnia/2022.7.2 (набор дополнительных header)
accept:* / *  
body: (дополнительные данные для сервера)*/

// Дальше сервер обробатывает и возврощает назад ответ:
/* HTTP/2 200(код ответа) и разные другие парметры
body:(тела ответа) */

//Внутри при передаче данных TCP разбивает данные на некоторые маленькие пакеты и эти уже маленькие пакеты уже отпровляет по сети.TCP обеспечивает доставку и если пакет потерялся то он попробуем доставить этот пакет еще раз.

//С шифрованием принцип работы более сложный

//------------------------
///Пример работы с Insomnia
//типо postman
//выбираем тела запроса (обычно JSON)  и header

//----------------------
//JSON
//Формат описание объектов в js
//ключ (строка): значения
/* {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true
} */

//+ Хорошая читаемость кода
//- не сжатый формат

//----------------------
//Получение данных
function req(id) {
  //старый способ
  const request = new XMLHttpRequest();
  //запрос
  request.open("GET", "https://dummyjson.com/products/" + id);
  //отпровляем
  request.send();

  //подписка когда он пришел
  request.addEventListener("load", function () {
    //this.responseText - ответ сервера
    const data = JSON.parse(this.responseText);
    console.log(data);
  });
}
req(1);
console.log("End");
/* 
  "End"
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "...", "..."]
    },
   . . .
} */

//------------------------
//Упражнение - Получение каждого продукта
/*
  Получить среднюю цены товаров из API
  https://dummyjson.com/products
*/

const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products");
request.send();

request.addEventListener("load", function () {
  const { products } = JSON.parse(this.responseText);
  const sum = products.reduce((acc, p) => (acc += p.price), 0);
  console.log(sum / products.length);
});
//379

//-------------------
//Проблемы callback
//callback Hell - неудобная поддержка кода, ухудшает читаемость

const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products");
request.send();

request.addEventListener("load", function () {
  const { products } = JSON.parse(this.responseText);
  console.log(products);

  //repeat
  const request = new XMLHttpRequest();
  request.open("GET", "https://dummyjson.com/products/" + products[0].id);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    //repeat
    const request = new XMLHttpRequest();
    request.open("GET", "https://dummyjson.com/products/" + products[1].id);
    request.send();

    request.addEventListener("load", function () {
      const data = JSON.parse(this.responseText);
      console.log(data);
    });
  });
});

//-------------------
//_______Promises_________
//Promises - контейнер для значений котрый вернеться в будущем
//Не нужно использовать callback  и события
//pending - в ожидании
//settled (обработка) - (fullfield (+), rejected (-))

const res = fetch("https://dummyjson.com/products/1");
console.log(res); // Promise /"rejected" / TypeError: Failed to fetch at <anonymous>:1:13

//--------------------
//Обработка promises
//then положительный результат
//json также возврощает promise

fetch("https://dummyjson.com/products/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//------------------
//Цепочка promise

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then(({ products }) => {
    return fetch("https://dummyjson.com/products/" + products[0].id);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//--------------------
//Обработка reject

fetch("https://dummyjsons.com/productss")
  .then((response) => {
    console.log(response);
    return response.json();
    //обработка ошибки локально
    //error => console.log(error)
  })
  .then(({ products }) => {
    console.log(products);
    return fetch("https://dummyjson.com/products/" + products[0].id);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  //ловит ошибку выше по коду независемо на каком этапе она произошла
  .catch((error) => console.log(error));

//------------------
//Finally
//независимо от того запрос успешный или нет он все равно выполниться

fetch("https://dummyjson.com/productss").then((response) => {
  console.log(response);
  fetch("https://dummyjsons.com/productss")
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      console.log("Finally");
    });
});

//------------------
//Упражнение - Select выбора категорий
/*
  Сделать запрос на https://dummyjson.com/products/categories,
  получить список категорий и отобразить <select> выбора категорий.
*/

function createSelect(array) {
  const el = document.querySelector(".filter");
  el.innerHTML = `<select>
		${array.map((arrEl) => `<option value=${arrEl}>${arrEl}</option>`)}
	</select>`;
}

function getCategories() {
  fetch("https://dummyjson.com/products/categories")
    .then((response) => response.json())
    .then((data) => createSelect(data))
    .catch((error) => console.error(`Ошибка: ${error}`));
}
getCategories();

//-------------------
//Ручная обработка ошибок

fetch("https://dummyjson.com/productss")
  .then((response) => {
    //генерим ошибку если вернеться отрицательный результат
    if (!response.ok) {
      throw new Error(`Is error ${response.status}`);
    }
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch("https://dummyjson.com/products/" + products[0].id);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Is error ${response.status}`);
    }
    response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    const el = document.querySelector(".filter");
    el.innerHTML = error.message;
  });

//--------------------------
//Упражнение - Функция запросов
/*
  Сделать функцию, которая принимает строку и текст ошибки и
  возвращает уже Promise с JSON из тела запроса
*/

function getData(url, errorMessage, method = "GET") {
  return fetch(url, {
    method,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
}

getData("https://dummyjson.com/products", "Can not get products")
  .then(({ products }) => {
    console.log(products);
    return getData(
      "https://dummyjson.com/products/" + products[0].id,
      "Can not get product"
    );
  })
  .then((data) => {
    console.log(data);
  });

//-----------------------
//_______Event Loop_____
//У нас ест ь движок js у которого есть call stack и heap.Сам движок являеться однопоточным
//Чтобы асинхронные операции не заблокировали движок нужно их делегировать wep api / node api. Здесь благодоря им мы можем выполнять операции запросов,таймеры, взоимоействия с DOM,геолокация и т.д.
//Результат асинхронных операций мы получаем через Callback Queue - последовательность callback которые выполняються по мере добовления асинхронных операций.
//Менеджерит все Event Loop который с Callback Queue по мере исполнения основного стэка перебрасвает асинхронные функции.

document.querySelector("btn").addEventListener("click", () => {
  console.log("click");
});

setTimeout(() => {
  console.log("time");
}, 1000);

fetch("https://dummyjson.com/productss").then((res) => console.log(res));

console.log("end");

//1) click -> wep api
//2) setTimeout -> wep api
//3) fetch -> wep api
//4) console.log('end') выполнил

//5) кликнули по кнопке click (wep api) -> Callback Queue
//6) setTimeout (через 1с) (wep api) -> Callback Queue
//7) Первый попал click в Callback Queue и Event Loop переместил задачу в stack ->  console.log('click') выполнил
//8) далее после setTimeout -> console.log('time') выполнил

//9)c fetch пришел запрос и он ложит ее в очередь Microtask Queue (очередь которая содержит сallback promise, приоритетней чем Callback Queue)
//10) далее из Microtask Queue -> console.log(res) выполняеться

//Microtask Queue приоритетней чем Callback Queue и сделаны чтобы не забивать Callback Queue если запрос долго приходит

//-------------------
//Пример работы Event Loop

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(3).then((res) => {
  console.log(res);
  for (let i = 0; i < 10000000000; i++) {}
});

console.log(4);

//синхронная операция
for (let i = 0; i < 10000000000; i++) {}

//1 4 (через 10с ) 3 (через 10с ) 2

//------------------------
//Создание простого Promise
//Promise -> resolve + / reject -

const prom = new Promise((resolve, reject) => {
  if (new Date() < new Date("01/01/2024")) {
    reject(new Error("Error"));
  }
  resolve("Success");
});

//вызываем promise
prom.then((data) => console.log(data)).catch((error) => console.log(error));

function timeout(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
}

//цепочка вызовов
timeout(1)
  .then(() => {
    console.log(1);
    return timeout(1);
  })
  .then(() => {
    console.log(1);
    return timeout(1);
  })
  .then(() => {
    console.log(1);
    return timeout(1);
  })
  .then(() => {
    console.log(1);
  });

//---------------------------
//Статические методы Promise

const prom = new Promise((resolve) => {
  console.log("Constuctor");
  setTimeout(() => {
    resolve("Timer");
  }, 1000);
});
prom.then((data) => console.log(data));

////сразу возврощает reject
Promise.reject(new Error("Error")).catch((error) => console.error(error));

//сразу возврощает resolve
Promise.resolve("Instant").then((data) => console.log(data));

//-------------------------
//Упражнение - создание fetch
/*
  Сделать функцию myFetch, которая выполняет внутри
  XMLHttpRequest
*/

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    //успешная загрузка
    request.addEventListener("load", function () {
      if (this.status > 400) {
        reject(new Error(this.status));
      }
      resolve(this.responseText);
    });

    //неуспешная загрузка
    request.addEventListener("error", function () {
      reject(new Error(this.status));
    });

    //если долго не отвечает
    request.addEventListener("timeout", function () {
      reject(new Error("Timeout"));
    });
  });
}

myFetch("https://dummyjson.com/productss")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

//-------------------------
//_____Современный Асинхронный JavaScript_____

//------------------
//Async await
//пишем так как будто наш код синхронный

//делаем функцию асинхронной -> async
async function getProducts() {
  // fetch('https://dummyjson.com/products')
  // 	.then(response => response.json())
  // 	.then(data => console.log(data))

  //в асинхронный запрос добавить await
  const productsResponse = await fetch("https://dummyjson.com/products");
  const { products } = await productsResponse.json();
  console.log(products);

  const productResponse = await fetch(
    "https://dummyjson.com/products/" + products[0].id
  );
  const product = await productResponse.json();
  console.log(product);
}

//-------------------
//Try catch
//обработка ошибок

async function getProducts() {
  try {
    const productsResponse = await fetch("https://dummyjson.com/products");
    if (!productsResponse.ok) {
      throw new Error(productsResponse.status);
    }
    const { products } = await productsResponse.json();
    console.log(products);

    const productResponse = await fetch(
      "https://dummyjson.com/products/" + products[0].id
    );
    const product = await productResponse.json();
    console.log(product);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("Finally");
  }
}
getProducts();

//------------------------
//Упражнение - Мой город
/*
  Получить геолокацию пользователя через
  Geolocation.getCurrentPosition() (WEB API)
  и по координатам определить город, отправив запрос:
  https://api.bigdatacloud.net/data/reverse-geocode-client?
  latitude=00&longitude=00
*/

//navigator.geolocation.getCurrentPosition(success, error, options); - принимает в результате фунекцию при успехе или не успехе также принимает параметры

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.city);
  } catch (e) {
    console.error(e);
  }
}
getMyCity();

//----------------------------
//Асинхронные методы

//в классе
class ProductRepository {
  async getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    console.log(await response.json());
  }
}
const repo = new ProductRepository();
repo.getProducts();

//асинхронные стрелочные функции
const asyncArrow = async () => {
  const response = await fetch("https://dummyjson.com/products");
  console.log(await response.json());
};
asyncArrow();

//--------------------------
//Последовательность выполнения

//мы внутри уже обрабатываем ошибки
const asyncArrow = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);

    //перебрасываем ошибку чтобы не было выше undefined
    throw e;
  }
};

//не делать так т.к. миксуем async с then
// console.log('1');
// asyncArrow()
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(e => console.error(e))
// 	.finally(() => console.log('2'));

//т.к. уже ошибку перебросили выше а до этого обработали то просто отображаем как обычный код
//функция которую мы мгновенно вызываем
(async () => {
  console.log("1");
  const res = await asyncArrow();
  console.log(res);
  console.log("2");
})();

//-------------------
//Параллельное выполнение

async function gatAllProducts() {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
}

async function getProduct(id) {
  const response = await fetch("https://dummyjson.com/products/" + id);
  return response.json();
}

async function getProductError(id) {
  const response = await fetch("https://dummyjsons.com/products/" + id);
  return response.json();
}

async function main() {
  const { products } = await gatAllProducts();

  //Promise.all принимает массив Promise который мы хотим запустить паралельно, если все запросы успешны
  /*getProduct(1)  */
  /*getProduct(2)  */
  /*getProduct(3)  */
  const res = await Promise.all(
    products.map((product) => getProduct(product.id))
  );
  console.log(res);

  //не паралельно а последовательно
  // for (const product of products) {
  // 	const res = await getProduct(product.id);
  // 	console.log(res);
  // }
}
main();

//------------------------
//Другие комбинации Promise

async function getProduct(id) {
  const response = await fetch("https://dummyjson.com/products/" + id);
  return response.json();

  async function getProductError(id) {}

  async function main() {
    //если все запросы успешный
    const res1 = await Promise.all([getProduct(1), getProduct(2)]);
    console.log(res1);

    //возврощает массив со статусом resolve и reject  и со значением
    const res2 = await Promise.allSettled([getProduct(1), getProductError(2)]);
    console.log(res2);

    //самый быстрый promise
    const res3 = await Promise.race([getProduct(1), getProductError(2)]);
    console.log(res3);
  }
}
main();

//----------------------
//Все возможности fetch

async function main() {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    //в заголовке передаем разные опции, в этом случае задаем тип контента
    headers: {
      "Content-Type": "application/json",
    },
    //тело запроса что передаем в post
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
    }),
  });
  const data = await res.json();
  console.log(data);
}
main();

//--------------------------
//Упражнение - Генератор активностей
/*
  Сделать генератор 3х идей от скуки
  https://www.boredapi.com/api/activity
  с отображением на странице
*/

/*  
<div class="wrapper"></div>
<button class="button" onclick="generate()">Generate</button> */

const wrapper = document.querySelector(".wrapper");

async function getActivity() {
  const res = await fetch("https://www.boredapi.com/api/activity");

  return res.json();
}

async function generate() {
  try {
    wrapper.innerHTML = "";

    const data = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity(),
    ]);
    console.log(data);

    for (const el of data) {
      const element = document.createElement("div");
      element.innerHTML = `${el.activity}`;
      wrapper.appendChild(element);
    }
  } catch (e) {
    console.error(e);
  }
}

//------------------------
//______Продвинутый DOM и Events_______

//----------------
//Как работает DOM

//Объект для управления HTML элементами, соединяющий мост между js  и browser. Это часть WEP API который доступен только в браузере

//Представления DOM -> Document -> HTML -> Head (meta : (htttp , name, charset ... )) | Body (img, p ,div ..._)

//Как все работает?
//объект с цепочками наследовании который позволяет нам нам от элемента дойти до самой Node
//1) EventTarget(елементы обработчика событий) -> Node | Window
//2) Node являеться всем чем угодна элемент нашего дерева (cloneNode(), parentNode(), childNode(),textContent()... ) , есть элемент подклассов которые extends Node ->  Element (append(), innerHtml(), classList()...) | Text | Comment | Document (guerySelector() ...)
//3)Element еще дальше детализируються -> HTMLElement -> HTMLDivElement | HTMLInputElement | ...

//----------------------
//Работа с элементами

console.log(document); //корневую Node документа
console.log(document.documentElement); //Element
console.log(document.head); //head
console.log(document.body); //body

const el = document.querySelector(".wrapper"); //добавить элемент
const el2 = document.querySelectorAll("meta"); //несколько элементов / массив NodeList
const el3 = document.getElementsByClassName("wrapper"); //по классу
const el4 = document.getElementsByTagName("meta"); //по тэгу / колекци html элементов

//работа с класами
el.classList.add;

const button = document.createElement("button");
button.innerHTML = "тест";

const button2 = document.createElement("button");
button2.innerHTML = "тест2";

//добавить елемент на страницу
el.append(button); //в конец
// el.prepend(button2);//в начало
// el.before(button2); //перед элементам
el.after(button2); // после элементма

function generate() {
  console.log(el.parentNode);
  el.remove(); //удаление элемента
}

//-------------------------
//Визуальное положение элементов

function generate(event) {
  //выводит параметры нажатого элемента , высота, ширина, относительно нашего положения
  console.log(event.target.getBoundingClientRect());

  //где находиться пользователь, отступы на странице
  console.log(`X offset: ${window.pageXOffset}`); //X offset: 0 / X offset: 0
  console.log(`Y offset: ${window.pageYOffset}`); //Y offset: 0 / Y offset: 168

  //ширина окна клиента
  console.log(`clientWidth: ${document.documentElement.clientWidth}`); //clientWidth:710
  console.log(`clientHeight: ${document.documentElement.clientHeight}`); //clientHeight:340

  //также можно получить параметры (высота, ширина, относительно нашего положения) непосредственно выбрав элемент
  const el = document.querySelector(".down");
  const rect = el.getBoundingClientRect();

  //скролл до определенного места на странице
  window.scrollTo({
    left: window.pageXOffset + rect.left,
    top: window.pageYOffset + rect.top,
    behavior: "smooth",
  });
}

//---------------------------
//Типы событий и обработчики

//ограниченное число событий можем добавить
//<button class="button" onClick ='eventHandler()'>Generate</button >
const button = document.querySelector(".button");
const eventHandler = function (event) {
  console.log("Event 1");
};

//при использовании addEventListener можем добовлять неограниченное число событий
button.addEventListener("mouseover", eventHandler);
button.addEventListener("click", (event) => {
  console.log("Event 2");

  //удалить отписку у event
  button.removeEventListener("click", eventHandler);
});

//существует множество событий на формы на жесты и т.д.

//----------------------------
//Всплытие событий

{
  /* 
<body style="background-color: #1c1b21; text-align: center">
  <img src="./logo.svg" alt="" />
  <div class="wrapper"></div>
  <div class="test">
    <p>
      Нажмите на кнопку
      <button class="button">Generate</button>
    </p>
  </div>
</body> 
*/
}

//когда мы нажимаем на кнопку у нас генериться event, но оно генериться не на кнопке сразу а сначало вверху документа (Document) далее опускаеться по дерееву к тому элементу на котором события произошло - захват события.

//событие после того как произошло начинает идти вверх по дереву до самого вверха и затрагивает все элементы которые он прошел - всплытие события
// !!! и если на родительских элементах также присутвует обработчики он также будет их тригерить при всплытии
//Всплытием можем управлять.

//По умолчанию обработчики реагируют только на всплытие элементов

//-----------------------
//Пример всплытия событий

{
  /* <body style="background-color: #1c1b21; text-align: center">
  <img src="./logo.svg" alt="" />
  <div class="wrapper">
    <div class="inner">
      <button class="button">Generate</button>
    </div>
  </div>
</body> */
}

const button = document.querySelector(".button");
const inner = document.querySelector(".inner");
const wrapper = document.querySelector(".wrapper");

button.addEventListener("click", function (event) {
  console.log("button");
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = "purple";
});

inner.addEventListener("click", function (event) {
  console.log("inner");
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = "blue";

  //можем остановить всплытие
  // event.stopPropagation();
});

wrapper.addEventListener(
  "click",
  function (event) {
    console.log("wrapper");
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = "green";

    //поймали событие до того как оно погрузилось на фазе захвата
  },
  true
);

//Демонтрация всплытие
//1) button , 2) inner, 3)wrapper

//Event target (на какой элемент произошло нажатие)
//1) button (button), inner (button) , wrapper (button)

//currentTarget
//1)button (button), inner (inner) , wrapper (wrapper)

//-------------------------
//Делегирование событий

const wrapper = document.querySelector(".wrapper");

for (let i = 0; i < 100; i++) {
  const el = document.createElement("div");
  el.innerHTML = `User id ${i}`;
  el.setAttribute("data-id", i);

  //добовлять к каждому элементу свой обработчик событий нерационально
  // el.addEventListener('click', () => {
  // 	console.log(`Deleted user ${i}`);
  // })

  wrapper.append(el);
}

//С помощью делегирование обращаемся к родительскому элементу и через него стучимся к нужному элементу
wrapper.addEventListener("click", (e) => {
  const i = e.target.getAttribute("data-id");
  console.log(`Deleted user ${i}`);
});

//------------------------
//Перемещение по DOM

//querySelector ищет вниз по дереву от document
const wrapper = document.querySelector(".wrapper");
const inner = wrapper.querySelector(".inner");
const button = inner.querySelector(".button");

console.log(inner.childNodes); //возврощает все дочерние элементы Node
console.log(inner.children); //возврощает все элементы типа Element / обычно используем его

console.log(inner.parentElement); //получить родителя
console.log(inner.parentNode);

//ищет только вверх по дерееву
console.log(button.closest(".wrapper")); //найти определенный элемент от button у которой ближайщий родитель с классом wrapper - > <div class="wrapper">...

//блищайщий элемент впереди
console.log(button.previousElementSibling);
console.log(button.previousSibling);

//блищайщий элемент сзади
console.log(button.nextElementSibling);
console.log(button.nextSibling);

//получить все элементы button - сначало пощли вверх к родителю а далее у родителя получили колекцию всех элементов
console.log(button.parentElement.children);

//--------------------
//Жизненный цикл событий DOM

//DOMContentLoaded -> DOM element загрузился, DOM распарсился и построил дом дерево
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("DOMContentLoaded");
  console.log(e);
});

//load -> Когда загрузился весь документ
window.addEventListener("load", function (e) {
  console.log("load");
  console.log(e);
});

//модальное окно при закрытии страницы
// window.addEventListener('beforeunload', function(e) {
// 	e.preventDefault();
// 	e.returnValue = '';
// });

//----------------------
//Упражнение - Поиск по в списку

/* 
  Динамически создать N элементов с текстом и поле
  для поиска. При вводе в поле, выделять элементы,
  которые содержат введённый текст
*/

{
  /* 
<input type="text" onchange="search(event)" />
<div class="wrapper"></div> 
*/
}

const wrapper = document.querySelector(".wrapper");
for (let i = 0; i < 100; i++) {
  const el = document.createElement("div");
  el.innerHTML = i;
  wrapper.append(el);
}

function search(event) {
  const inputValue = event.target.value;
  for (const el of [...wrapper.children]) {
    if (el.innerHTML.includes(inputValue)) {
      el.classList.add("yellow");
      continue;
    }
    el.classList.remove("yellow");
  }
}

//-------------------------
//Загрузка скриптов defer и async

//Загрузка страницы - по умолчанию
//парсинг HTML
//Выполнения JS -> стоять в конце html файла, т.к. сначало должны отрисоваться html элементы чтобы мы могли с ними работать
//<script src="./calc.js" ></script>

//Загрузка async - как только встретили код загружйте его, асинхронно загружаеться и парсинг html продолжаеться но как только загрузились сразу исполнили и во время исполнения парсинг html прерветься. Пишем в head
//<script src="./calc.js" async ></script>
//Минус если загрузка HTML занимает больше врмени чем js то можем получить ошибку

//Загрузка defer -  почти то же самое что и с async но исполни только после того как загрузиться весь html.
//Используем Defer !!!
//<script src="./calc.js" defer></script>

//----------------------------
//_______Модули в JavaScript______

//-Повторное использование
//-Возможности комплновки
//-Удобство разработки
//-Изоляция
//-Организация проекта

//История
//IIFE -> Common JS (bundle) c помощью ключевого слова require ,загрузка всего модуля, нет асинхроности, можно использовать в условии, в люблм месте -> ES Modules (export / import) импорт на верхнем уровне, нельзя использовать в условии, выборочная загрузка, асинхронное подключение

//-------------------------
//IIFE в модулях
//очередь подключения регулируем вручную, возникают много конфликтов

/* 
<script src="./calc.js" defer></script>
<script src="./app.js" defer></script> 
*/

//app.js
(function () {
  const a = 1;
  console.log(APP.calc.add(1, 3));
  console.log(APP.calc.sub(1, 3));
})();

//calc.js
const APP = {};

(function () {
  const a = 1;
  function add(f, s) {
    return f + s;
  }

  function sub(f, s) {
    return f - s;
  }

  APP.calc = {
    add,
    sub,
  };
})();

//-------------------------
//Модули commonjs
//Чтобы конкретно работал нужно bundle для сборки

/* 
<script src="./calc.js" defer></script>
<script src="./app.js" defer></script> 
*/

//app.js
const { add, sub } = require("./calc.js");

console.log(add(1, 3));
console.log(sub(1, 3));

//calc.js
function add(f, s) {
  return f + s;
}

function sub(f, s) {
  return f - s;
}

//test также исполниться т.к commonjs полное сиполнение файлов
console.log("test");
module.exports = { add, sub };

//--------------------
//ES6 модули

//Переменные ограничены модулем, режим strict mode, this - undefined, испорты  - да, использование - type="module", загрузка -асинхронная

//type="module" - объявили модули
//<script src="./app.js" type="module"></script>

//app.js
import { add, sub } from "./calc.js";

console.log(sub(1, 3));

//calc.js
export function add(f, s) {
  return f + s;
}

export function sub(f, s) {
  return f - s;
}

//-----------------------
//Await на верхнем уровне
//можно использовать асинхронные модули в функциях

//app.js
import { add, sub, res } from "./calc.js";

console.log(sub(1, 3));
console.log(res);
console.log(1);

//calc.js
export function sub(f, s) {
  return f - s;
}

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export const res = await getProducts();

//------------------------
//Процесс сборки

//App.js / calc.js / пакеты -> сборка (сборщик) -> транспиляция , полифилы -> bundle

//используем rollup сборщик для примера
//# compile to a CommonJS module('cjs')
//rollup main.js--file bundle.js--format cjs

//----------------------
//_______Работа с NPM_____

//npm / yarn / pnpm ...


