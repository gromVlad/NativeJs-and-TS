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
console.log('смогу ли я сделать' + " " + availableHours > projectHours)
console.log('стоимость' + ' ' + projectHours * payRateUsd + "$")

//-----------------------------
//Шаблонные строки
const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);

