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
  if (tasks[i] === 'Задача 2') {
    continue;
  }
  console.log(tasks[i]);
}
// Output:
// Задача 1
// Задача 3

console.log('-----');

// Цикл с использованием break:
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 2') {
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

const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
  resultArray.push(arr[i]);
}
console.log(resultArray.join(' '));
// Output: Я люблю JS !

console.log(arr.reverse().join(' '));
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

const tasks = [[1, 'Задача 1'], [2, 'Задача 2']];
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
const arr = [1, 4, 8, 7, 'ddfg'];

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
  }
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
const power = pow => num => num ** pow;

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

//-------------------ы



