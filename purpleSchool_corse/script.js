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
  console.log(data.get('comment'));
}

//--------------------
//