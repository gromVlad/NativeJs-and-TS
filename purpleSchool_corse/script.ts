//TypeScript курс (Антон Ларчев)
/* Почему TypeScript – нет строгой типизацией, не возможности рефакторинга, невозможно понять структуру данных. Open Sorse язык, разрабатывается Microsoft. 

//------------------
//Использование типов
Вся валидация происходит на уровне typescript */
let revenue: number = 1000;
let bonus: number = 500;
let bool: boolean = true;

let res: number = revenue + bonus;
console.log(res);

//---------------------
//Типы в функциях
//не использовать any
function getFullName(first: string, surname: string): string {
  return `${first} ${surname}`;
}

const getFullNameArrow = (first: string, surname: string): string => {
  return `${first} ${surname}`;
};

//--------------------
//Объекты
//не использовать any
function getFullName(anyObj: { name: string; surname: string }) {
  return `${anyObj.name} ${anyObj.surname}`;
}

const оbjects = {
  name: "Vlad",
  surname: "bodnar",
  city: "Minsk",
};

getFullName(оbjects); //Vlad bodnar

//-------------------------------
//Массивы
const skills = ["Dev", "DevOps", "Testing"];
for (const skill of skills) {
  console.log(skill.toLowerCase());
}
const res = skills
  .filter((s: string) => s !== "DevOps")
  .map((s) => s + "! ")
  .reduce((a, b) => a + b);

//------------------------
//Tuples (Кортежы)
//кортежы - типизорованный массив ограниченной длины
const skill: [number, string] = [1, "Dev"];

const [id, skillName] = skill;

const arr: [number, string, ...boolean[]] = [1, "sdf", true, true];

//------------------------------
//Readonly (кортеж не модифицируемый)

const skill: readonly [number, string] = [1, "Dev"];
//the same с джинерикам специальным альтернатива ReadonlyArray
const skills: ReadonlyArray<string> = ["Dev", "DevOps"];

//---------------------
//Enums
enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = "p",
  FAILED = "f",
}

const res = {
  message: "Платёж успешен",
  statusCode: StatusCode,
};

// 1 - успех
// 'p' - в процессе
// 'f' - отклонён

if (res.statusCode === StatusCode.SUCCESS) {
  //--------
}

//но надо использовать осторожно обычно просто используем объект с типизацией т.к enum вызывает некоторые неочевидные ошибки в приложении
const enum Roles {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles.ADMIN;

//-----------------------
//Упражнение - Типизируем функцию

// /* Запрос */
// {
//   "topicId": 5,
//   "status": "published" // "draft", "deleted"
// }
// /* Ответ */
// [
//   {
//     "question": "Как осуществляется доставка?",
//     "answer": "быстро!",
//     "tags": [
//       "popular",
//       "new"
//     ],
//     "likes": 3,
//     "status": "published"
//   }
// ]

enum QuestionStatus {
  Published = "published",
  Draft = "draft",
  Deleted = "deleted",
}

async function getFags(req: {
  topicId: number;
  status: QuestionStatus;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const res = await fetch("/fags", {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}

//------------------------
//Union(или)

//или |
function logId(id: string | number | boolean) {
  //сужения типов
  if (typeof id === "string") {
    console.log(id);
  } else if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id);
  }
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  //если объект включает ... (ключ)
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  //по равенству (редко используеться)
  if (a === b) {
  } else {
    console.log(a);
  }
}

//---------------------
//Literal Types
//Literal Types - method: 'post' | 'get' либо тот либо другой
function fetchWithAuth2(url: string, method: "post" | "get"): 1 | -1 {
  return 1;
}

fetchWithAuth("s", "post");

let method = "post"; //string - тут просто string
//также можно использовать константу const  method = "post" тогда as можно не использовать
//привели к методу post
fetchWithAuth("s", method as "post");

//-----------------------------
//Type Aliases

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = User | Role;

let user: UserWithRole = {
  name: "asd",
  age: 33,
  skills: ["1", "2"],
  id: 1,
};

//----------------------------
//Interfaces

interface User {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

interface Role {
  roleId: number;
}

//можно cсовмещать типизацию и добовлять дополниткльную это используеться только с interface
interface UserWithRole extends User, Role {
  createdAt: Date;
}

//с types
type User2 = {
  name: string;
  age: number;
  skills: string[];
  //типизируем функцию
  log: (id: number) => string;
};

let user: UserWithRole = {
  name: "asd",
  age: 33,
  skills: ["1", "2"],
  roleId: 1,
  createdAt: new Date(),

  log(id) {
    return "";
  },
};

//индексные свойства типизация {1:'user'}
interface UserDic {
  [index: string]: User;
}

//c types
type UserDic2 = {
  [index: number]: User;
};

//---------------------
//Types или Interfaces

interface User {
  name: string;
}

interface User {
  age: number;
}

//не может работать с простыми типами напрямую
//interface a = string // error

//interface cразу происходит merge 2 типов автоматический (но это вводит в заблуждения)
const user: User = {
  name: "as",
  age: 33,
};

//type можно определить только один раз, может работать с простыми типами напрямую

//Когда используеи объекты лучше ипользовать interface  а type с примитивными данными

//-------------------------
//Optional
//опциональность ? есть или нет or password: string | undefined
interface User {
  login: string;
  password?: string;
}

const user: User = {
  login: "a@a.ru",
  password: "1",
};

//second:number = 5 (по умолчанию можно также использовать)
function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
multiply(5); //25

//также есть ! это типо когда мы говорим что точно что-то будет аналог as

//----------------------
//Упражнение - Типизируем ответ сервера
// Запрос в виде платежа
// {
//   "sum": 10000,
//   "from": 2,
//   "to": 4
// }
// // Ответ
// {
//   "status": "success",
//   "data": {
//     "databaseId": 567,
//     "sum": 10000,
//     "from": 2,
//     "to": 4
//   }
// },
// {
//   "status": "failed",
//   "data": {
//     "errorMessage": "Недостаточно средств",
//     "errorCode": 4
//   }
// }

interface Payment {
  sum: string;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

//оставили так чтобы можно было потом расширять при необходимости
interface inPaymentReq extends Payment {}

interface IdataSuccess extends Payment {
  databaseId: number;
}

interface IdataFailed {
  errorMessage: string;
  errorCode: number;
}

//union по дате
interface IResponse {
  status: PaymentStatus;
  data: IdataSuccess | IdataFailed;
}

//воторой вариант - сделали union по ответу а не по дате это более правильно
interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IdataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IdataSuccess;
}

//------------------------
//Void
//void в функции- ничего не возврощает
function logId(id: string | number): void {
  console.log(id);
}
const a = logId(1); //void

function multiply(f: number, s?: number): number | undefined {
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void;
const f1: voidFunc = () => {};
const f2: voidFunc = () => {
  return true;
};
const b = f2(); //чтобы мы не вернули мы получим void / будет игнорироваться что мы возврощаем

const skills = ["Dev", "DevOps"];
const user = {
  s: ["s"],
};
skills.forEach((skill) => user.s.push(skill));

//-------------------------------
//Unknown(что-то придет но не занем что именно)
//unknown - что-то придет но не занем что именно, можем только помещать в unknown либо any
let input: unknown;

input = 3;
input = ["sf", "sdf"];

//делаем проверку в зависемости что будет лежать unknown
function run(i: unknown) {
  if (typeof i == "number") {
    i++;
  } else {
    i;
  }
}
run(input);

async function getData() {
  try {
    await fetch("");
    //в catch приходит не any a unknown поэтому мы должны явно проверять что к нам пришло
  } catch (error) {
    //делаем проверку
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

async function getDataForce() {
  try {
    await fetch("");
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}

type U1 = unknown | number; //тут береться сами широкий тип unknown
type I1 = unknown & string; // тут т.к. string может содержаться в unknown то string

//------------------------
// Never
// Типо блокируем ветку если не хотим туда попасть
// never - никогда такого не произойдет или не будет присвоено
//функция не возврощаеться
function genereateError(message: string): never {
  throw new Error(message);
}

//никогда не вернеться функция
function dumpError(): never {
  while (true) {}
}

//бесконечная рекурсия мы не вернемся
function rec(): never {
  return rec();
}

type paymentAction = "refund" | "checkout" | "reject";

function processAction(action: paymentAction) {
  switch (action) {
    case "refund":
      //...
      break;
    case "checkout":
      // ...
      break;
    case "reject":
      // ...
      break;
    default:
      //как средства проверки что мы никогда не зайдем сюда
      const _: never = action;
      throw new Error("Нет такого action");
  }
}

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  //типо исчерпывающая проверка ( но обычно мы с этим не работаем)
  genereateError("sdfsdf");
}

//----------------------
//Null
//ничего кроме any и null ложить в null нельзя если не менять в ручном режиме конфигурацию typescript
//null - явно заданный неопределенный объект
const n: null = null;
const n1: any = null;
/*
error 
const n2: number = null;
const n3: string = null;
const n4: boolean = null;
const n5: undefined = null; */

interface User {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "Вася",
    } as User;
  }
}

const user = getUser(); //null
if (user) {
  const n55 = user.name;
}

//если мы осознано хотим вернуть что этого объекта нет то используем null

//-----------------------------
//Приведение типов
let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf(); //new String это объект поэтому преобразовываем с помощью valueOf() в значения
let f: boolean = new Boolean(a).valueOf();

let c = "sdfs";
let d: number = parseInt(c);

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: "Вася",
  email: "vasiliy@yandex.ru",
  login: "vasia",
};

interface Admin {
  name: string;
  role: number;
}

//мы явно описали что должно быть name  c user берем и role но при преобразовании email и login также будут что может привести к некоторым сайд эффектам, поэтому так не надо преобразовывать
const admin: Admin = {
  ...user,
  role: 1,
};

//берем только необходимые свойства (так правильно использовать), функция мапинга переиспользование одного объекта в другой
function userToAdmin(user: User): Admin {
  return {
    name: user.login,
    role: 1,
  };
}

//------------------
//Type Guard
interface User {
  name: string;
  email: string;
  login: string;
}

interface Admin {
  name: string;
  role: number;
}

interface User {
  name: string;
  email: string;
}

function logId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

// _ is _ возврощает если проверка true
function isString(x: string | number): x is string {
  return typeof x === "string";
}

function isAdmin(user: User | Admin): user is Admin {
  return "role" in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("Пользователь не админ");
  }
}

//------------------------
//Упражнение - Делаем typeguard ответа
interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

type resType = IResponseSuccess | IResponseFailed;

//typeguard - но обычно это излишний код и логика проверки пишеться в основной ветке
function isSuccess(res: resType): res is IResponseSuccess {
  if (res.status === PaymentStatus.Success) {
    return true;
  } else {
    return false;
  }
}

function ifResult(res: resType): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error("error");
  }
}

//------------------------------
//__________Классы_________

//------------------
//Создание класса
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Вася");
console.log(user);
user.name = "Петя";
console.log(user);

class Admin {
  role: number;
}
const admin = new Admin();
admin.role = 1;

//----------------
//Конструктор
//constructor(age: number): _ - нельзя инецилизировать что возврощает конструктор и использовать джинерики

class User {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  //это импеминтация должна покрывать все констукторы выше (его типизацию)
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === "string") {
      this.name = ageOrName;
    } else if (typeof ageOrName === "number") {
      this.age = ageOrName;
    }
    if (typeof age === "number") {
      this.age = age;
    }
  }
}

const user = new User("Вася");
const user2 = new User();
const user3 = new User(33);
const user4 = new User("Вася", 33);

//-------------------
//Методы

enum PaymentStatus {
  Holded,
  Processed,
  Reversed,
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holded;
  createdAt: Date = new Date();
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment(): void {
    if (this.status == PaymentStatus.Processed) {
      throw new Error("Платёж не может быть возвращен!");
    }
    this.status = PaymentStatus.Reversed;
    this.updatedAt = new Date();
  }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
/* Payment: {
  "status": 2,
  "createdAt": "2023-10-18T14:59:51.420Z",
  "id": 1,
  "updatedAt": "2023-10-18T14:59:51.420Z"
}  
5*/
const time = payment.getPaymentLifeTime();
console.log(time); //5

//-----------------
//Упражнение - Перегрузка методов
class User {
  skills: string[];

  addSkill(skilL: string): void;
  addSkill(skilL: string[]): void;
  addSkill(skiLL: string | string[]): void {
    if (typeof skiLL === "string") {
      this.skills.push(skiLL);
    } else {
      this.skills.concat(skiLL);
    }
  }
}

function run(distanse: number): number;
function run(distanse: string): string;
function run(distanse: number | string): number | string {
  if (typeof distanse === "number") {
    return 1;
  } else {
    return "hello";
  }
}

//-----------------------
//Getter и setter
//они полезны когда мы деалем что то не асинхронное
//инкапсулируют внутрение свойство чтобы они были закрыты извне

class User {
  _login: string;
  _password: string;
  createdAt: Date;

  set login(l: string | number) {
    this._login = "user-" + l;
    this.createdAt = new Date();
  }

  get login() {
    return this._login;
  }

  async getPassword(p: string) {}

  // set password(p: string) {
  // 	// sync
  // }
}

const user = new User();
user.login = "myLogin"; //setter
console.log(user);
/* User: {
  "_login": "user-myLogin",
  "createdAt": "2023-10-18T15:28:58.999Z"
}  */
console.log(user.login); // user-myLogin / Getter

//----------------------
//Implements

interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Looger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async error(...args: any[]): Promise<void> {
    // Кинуть во внешнюю систему
    console.log(...args);
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

//можно не целиком использовать имплементацию т.к. price необязательный параметр
class User implements IPayable {
  pay(paymentId: number | string): void {
    ///
  }
}

//-----------------------
//Extends (расширить)

type PaymentStatus = "new" | "paid";

class Payment {
  id: number;
  status: PaymentStatus = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

//PersistedPaymen уже имеет свойства Payment т.к наследуеться от него
class PersistedPayment extends Payment {
  databaseId: number;
  paidAt: Date;

  //если конструктор переопределяеться то обязательно super() указывать
  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    // Сохраняет в базу
  }

  //также с помощью метода super()  можно расширять и свойства , такие свойства называються override (при новом синтаксисе добовляем override)
  override pay(date?: Date) {
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

new PersistedPayment();

//--------------------
//Особенности наследования

class User {
  name: string = "user";

  constructor() {
    console.log(this.name);
  }
}

class Admin extends User {
  name: string = "admin";

  constructor() {
    super();
    console.log(this.name);
  }
}

new Admin(); // user / admin

// new Error('');

//кастомный класс ошибки который базируеться на базовом классе
class HttpError extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}

//---------------------
//Композиция против наследования

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//наследование
class Users extends Array<User> {
  searchByName(name: string) {
    return this.filter((u) => u.name === name);
  }

  override toString(): string {
    return this.map((u) => u.name).join(", ");
  }
}

const users = new Users();
users.push(new User("Вася"));
users.push(new User("Петя"));
console.log(users.toString());

//композиция, такой более приоритетней использовать
class UserList {
  users: User[];

  push(u: User) {
    this.users.push(u);
  }
}

//наследование
class Payment {
  date: Date;
}

//жесткая связь при наследовании при которой нам придеться всюду тащить с собой
class UserWithPayment extends Payment {
  name: string;
}

//композиция - благодоря композиции не нарушаем объект пользователя и Payment , у каждого своя доменая область
class UserWithPayment2 {
  user: User;
  payment: Payment;

  constructor(user: User, payment: Payment) {
    this.payment = payment;
    this.user = user;
  }
}

//Наследование лучше использовать когда мы работаем в рамках одной доменной области , не добовляем ничего лишнего а просто расширяем класс
//Композиция когда используем несколько доменных областей которые никак не связаны между собой

//------------------------
//Видимость свойств
class Vehicle {
  public make: string;
  //private - доступно исключительно внутри (в ts)
  private damages: string[];
  private _model: string;
  //protected - то же самое что и private но доступно наследникам
  protected run: number;
  //# приватное свойство (в js)
  #price: number;

  set model(m: string) {
    this._model = m;
    this.#price = 100;
  }

  get model() {
    return this._model;
  }

  addDamage(damage: string) {
    this.damages.push(damage);
  }

  //обратились к внешнему объекту приватному и сравнили с приватным внутреннем свойствам это возможно
  isPrice(v: any) {
    this.#price === v.#price;
  }
}

//приватные свойства недоступны наследникам
class EuroTruck extends Vehicle {
  setRun(km: number) {
    this.run = km / 0.62;
    // this.damages - error
  }
}

new Vehicle();
new EuroTruck();

//при работе на бэк - работает с приватными свойствами ts на фронте js

//--------------------
//Упражнение - Делаем корзину товаров
/* Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина) */

class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public deleteProduct(id: number) {
    this.products = this.products.filter((el: Product) => el.id !== id);
  }

  public getSum(): number {
    return this.products
      .map((el: Product) => el.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public chekout() {
    if (this.products.length == 0) {
      throw new Error("Нет продуктов");
    }
    if (!this.delivery) {
      throw new Error("Не указан способ доставки");
    }
    return true;
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, "банан", 10));
cart.addProduct(new Product(2, "торт", 30));
cart.addProduct(new Product(3, "пиво", 15));
cart.deleteProduct(3);
console.log(cart);
/* Cart: {
  "products": [
    {
      "id": 1,
      "title": "банан",
      "price": 10
    },
    {
      "id": 2,
      "title": "торт",
      "price": 30
    }
  ]
}  */
cart.setDelivery(new HomeDelivery(new Date(), "независемости 33"));
console.log(cart.getSum()); //40

//----------------------
//Статические свойства
//асинхронные функции не можем использовать, можем сразу обращаться к этим методам без new как к объектам можно к ним достучаться через обычные методы наследование

class UserService {
  // static name: string = 'sdf';
  private static db: any;

  static getUser(id: number) {
    return UserService.db.findById(id);
  }

  constructor(id: number) {}

  create() {
    UserService.db;
  }

  //при инициализации сразу сработает
  static {
    UserService.db = "sdf";
  }
}

UserService.getUser(1);
const inst = new UserService(1);
//через метод посредника можно достучаться до static метода
inst.create();

//---------------------
//Работа с this

class Payment {
  private date: Date = new Date();

  //в ts при this в параметрах метода он подсказывет при что надо передать контекст
  getDate(this: Payment) {
    return this.date;
  }

  //чтобы не терять контекст можно использовать стрелочную функцию
  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment();

const user = {
  id: 1,
  //чтобы не потерять контекст нужно его сохранить с помощью bind
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDateArrow,
};

// console.log(p.getDate());
// console.log(user.paymentDate());
// console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
  save() {
    //return super.getDateArrow(); - не работает со стрелочной функцией т.к. в prototype Payment не будет стрелочной функции и мы не можем получить из исходного объекта а втекущей функции есть
    return this.getDateArrow();
  }
}

console.log(new PaymentPersistent().save());

//-----------------------
//Типизация this

class UserBuilder {
  name: string;

  //когда мы возврощаем этот же объект и не возникало колизии мы используем this,помогает сослаться на возвращаемый тип
  setName(name: string): this {
    this.name = name;
    return this;
  }

  //__is__ Typegard
  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[];
}

const res = new UserBuilder().setName("Вася");
const res2 = new AdminBuilder().setName("Вася");

//проверка на исходный объект или тот кто его наследует
let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
  console.log(user);
} else {
  console.log(user);
}

//если наследники одинаковые Typegard будет работать некректно т.к. в run time будет считать что это тот же объект

//---------------------
//Абстрактные классы
//мы не можем сделать new __()
//extends можно
//abstract классы могут включать методы которые мы можем использовать у наследников
//Некоторая база на которой можно наслаивать некторую реализацию

abstract class Contoller {
  abstract handle(req: any): void;

  handleWithLogs(req: any) {
    console.log("Start");
    this.handle(req);
    console.log("End");
  }
}

class UserController extends Contoller {
  handle(req: any): void {
    console.log(req);
  }
}

// new Contoller() - error
const c = new UserController();
c.handleWithLogs("Request");

//----------------------
//Делаем абстрактный logger
/* Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение */

abstract class Logger {
  abstract log(message: any): void;

  printDate(date: Date) {
    this.log(date.toString());
  }
}
class RealLogger extends Logger {
  log(message: any): void {
    console.log(message);
  }

  logWithDate(mes: string) {
    this.printDate(new Date());
    this.log(mes);
  }
}

//------------------------
//______Компилятор TypeScript_____
//Есть core typescript compiler (основные библиотеки которые позволяют компилировать)
//Над ним есть TSC (standolone compiler) - файл и настройки
//Language Service - валидация
//Над ним IDE

//------------------------
//Включение и исключение файлов
//в ts config указываем так же файлы подключить "file":['app.js']
//"includes":["app*"] - то же самое но подерживает патерны
//'excludes':[] - исключает файлы
//"extends" : './' - базовый путь к конфигу
//конфигурация чтобы работать в старом проекте на js  и потихоньку переводить его в ts "allowJS", "checksJs"

// "allowJs": true,
// "checkJs": true,
// "include": [
// 		"app*"
// 	],
// 	"exclude": [
// 		"app.ts"
// 	]

//------------------------
//Вывод компиляции
// "outDir": "./build/", -указываем куда будет билдиться проект
// "removeComments": true, - позволяет удалять коментарии если они были
// "noEmit": true - не имитит файлы не куда
// "noEmitOnError": true, - если будет ошибка ничего не соберет
// "sourceMap": true, - показывает связь js и ts удобно при отладке ошибки
// "inlineSourceMap": true, - как sourceMap только не создает отдельный файл с путями а добовляет просто пути в виде коментария
// "declaration": true, - описание кода для ts

//-------------------------
//Язык и окружение
//"target": "ES2016" - версия
//"lib": [
// 	"DOM",
// 	"ES2016"
// ], - добовляем библиотеки которые должны быть включены
// "jsx": "", - компиляция в jsx используем в react

//----------------------
//Модули

//"module": "commonjs",  - добовления модулей
//"rootDir": "./src",  - папка корневая

//использовать базовые alias пути
// "baseUrl": "./", /* Specify the base directory to resolve non-relative module names. */
// "paths": {
// 	"@lib": ["./lib/my-lib"]
// },

//------------------
//Strict режим
//на true

// "noImplicitAny": false  -неявное задание any
// "strictNullChecks": false, - жесткая проверка на null
// "strictFunctionTypes": false, - проверка на тип
// "strictBindCallApply": false - проверяет соответсвие сигнатуры функции и что мы в нее передаем
//"strictPropertyInitialization": false, - использовать классы в качестве интерфейсов на false
// "noImplicitThis": false, - коректно видим this в контейнере
//"useUnknownInCatchVariables": false, - вклчючения unknown
// "alwaysStrict": true, - strict режим для js

//---------------------
//Проверка кода

//"noUnusedLocals": true, - подчеркивает неиспользованные переменные
//"noUnusedParameters": true,- подчеркивает неиспользованные параметры
//"exactOptionalPropertyTypes": true, - явно проверяет значения которое присутствует в вариантах типизации а не рандомное
//"noFallthroughCasesInSwitch": true,- нет проваливание на следующий элемент внутри switch
//"allowUnreachableCode": true, - показывает недостижимый код
//"noUncheckedIndexedAccess": true, - если что то нечетко заданно то возврощает undefined т.к. такого значения не задано явно
//"noImplicitOverride": true, - включать Override при измнении наследованого метода обязательно

//----------------------
//_____Generics______
//Помогает писать легко переиспользованный код

//------------------------
//Пример встроенных generic

//описали массив внутри которого передали тип number
const num: Array<number> = [1, 2, 3];

async function test() {
  //Promise то же можно передать generic (передаем дополнительную информацию)
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

//Record - типизация неограниченного числа строк
const check: Record<string, boolean> = {
  drive: true,
  kpp: false,
};

//-----------------
//Пишем функцию с generic

//обобщенная универсальная функция с любым типом массива
function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

//можем указывать или не указывать типизацию передаваемого значения
const res = logMiddleware<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getSplitedHalf<number>([1, 3, 4]);

//--------------------
//Упражнение - Функция преобразования в строку
/* Необходимо написать функцию toString которая принимает любой тип и вовзрощает его строковое преобразование, если не может то возврощаеет undefined */

function toString<T>(params: T): string | undefined {
  if (Array.isArray(params)) {
    return params.toString();
  }
  switch (typeof params) {
    case "string":
      return params;
    case "number":
    case "symbol":
    case "bigint":
    case "boolean":
      return params.toString();
    case "object":
      return JSON.stringify(params);
    default:
      return undefined;
  }
}

//---------------------
//Использование в типах

function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getSplitedHalf<number>([1, 3, 4]);

//можно использовать generic для описание функции
const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;

//можно использовать generic для описание объектов
interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

//------------------------
//Ограничение generic

interface Vehicle {
  run: number;
}

//ограничивает что можем использовать только Vehicle
function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

interface LCV extends Vehicle {
  capacity: number;
}

// const vehicle = kmToMiles(new Vehicle());
// const lcv = kmToMiles(new LCV());
//kmToMiles({ run: 1 }); также можно использовать подобный объект Vehicle

//также можно сделать extends примитивных типов
function logId<T extends string | number, Y>(
  id: T,
  additionalData: Y
): { id: T; data: Y } {
  console.log(id);
  console.log(additionalData);
  return { id, data: additionalData };
}

//--------------------
//Упражнение - Функция сортировки id
/* Необходимо написать функцию сортировки любых
объектов, которые имеют id по убыванию и по возрастанию

``` js*/
const data = [
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Надя" },
];

interface SortType {
  id: number;
}

function sort<T extends SortType[]>(
  params: T,
  type: "asc" | "desc" = "asc"
): T {
  return params.sort((a, b) => {
    switch (type) {
      case "asc":
        return a.id - b.id;
      case "desc":
        return b.id - a.id;
    }
  });
}

sort(data, "asc");
/* [{
  "id": 1,
  "name": "Вася"
}, {
  "id": 2,
  "name": "Петя"
}, {
  "id": 3,
  "name": "Надя"
}]  */

//----------------------
//Generic классы
//можно использовать generic в классах, полезны когда есть универсальные значения в классе

class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }
    if (error) {
      this.error = error;
    }
  }
}

const res = new Resp<string, number>("data");

class HTTPResp<F> extends Resp<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const res2 = new HTTPResp();

//--------------------
//Mixins

type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accordion {
  isOpened: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

//просто наследование
class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

//то же самое но используем миксин
//миксин - функция / динамический можем подстовлять объект который удоволетвояет нашей типизации в функции / возврощает класс который extends переданный класс
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}

class AccordionList {
  isOpened: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const res = new list(["first", "second"]);
console.log(res.first());

//------------------------
//______Продвинутый TS______
//______Манипуляция с типами____

//------------------
//Keyof
//позволяет вытащить ключи и присвоить его

interface IUser {
  name: string;
  age: number;
}

type KeysOfUser = keyof IUser;

const key: KeysOfUser = "age";

//чтобы присвоить ключ от нашего
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: IUser = {
  name: "Вася",
  age: 30,
};

const userName = getValue(user, "name");

//-----------------------
//Упражнение - Пишем функцию группировки
/* Необходимо написать функцию групировки котопая принимает массив объектов и его ключ, производит групировку по указанному ключу и возврощает групированный объект */
interface Data {
  group: number;
  name: string;
}

const data: Data[] = [
  { group: 1, name: "a" },
  { group: 2, name: "b" },
  { group: 1, name: "c" },
];

type key = string | number | symbol;

interface Group<T> {
  [key: string]: T[];
}

function grouping<T extends Record<key, any>>(
  item: T[],
  key: keyof T
): Group<T> {
  return item.reduce<Group<T>>((acc: Group<T>, el) => {
    const keyItems = el[key];
    let currentElement = acc[keyItems];
    if (Array.isArray(currentElement)) {
      currentElement.push(el);
    } else {
      currentElement = [el];
    }
    acc[keyItems] = currentElement;
    return acc;
  }, {});
}

//---------------------
//Typeof

let strOrNum: string | number;

if (Math.random() > 0.5) {
  strOrNum = 5;
} else {
  strOrNum = "str";
}

//js typeof
if (typeof strOrNum === "string") {
  console.log(strOrNum);
} else {
  console.log(strOrNum);
}

//возьми тип который был у strOrNum , для переиспользование
let str2: typeof strOrNum;

const user = {
  name: "vlad",
};

//берем ключи от типа user
type KeyUser = keyof typeof user;

//также работает и на enum
enum Direction {
  Up,
  Down,
}
type d = keyof typeof Direction;

//---------------------
//Indexed Access Types

interface Role {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface User {
  name: string;
  roles: Role[];
  permission: Permission;
}

const user: User = {
  name: "Вася",
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

const nameUser = user["name"];
let roleNames: "roles" = "roles";

//и в типах можно получить типизацию конкретную по ключу, нужно помнить что мы должны работать с типами
type rolesType = User["roles"];
type rolesType2 = User[typeof roleNames];

type roleType = User["roles"][number];
//можно проходиться по уровнем в глубь
type dateType = User["permission"]["endDate"];

//преобразовали в строковый тип
const roles = ["admin", "user", "super-user"] as const;
type roleTypes = (typeof roles)[number];

//-----------------------
//Conditional Types

const a1: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends "success" | "failed"> {
  code: number;
  //с  onditional
  data: T extends "success" ? string : Error;
}

const suc: HTTPResponse<"success"> = {
  code: 200,
  data: "done",
};

const err: HTTPResponse<"failed"> = {
  code: 200,
  data: new Error(),
};

class User {
  id: number;
  name: string;
}

class UserPersistend extends User {
  dbId: string;
}

function getUser(id: number): User;
function getUser(dbId: string): UserPersistend;
function getUser(dbIdOrId: string | number): User | UserPersistend {
  if (typeof dbIdOrId === "number") {
    return new User();
  } else {
    return new UserPersistend();
  }
}

type UserOrUserPersistend<T extends string | number> = T extends number
  ? User
  : UserPersistend;

function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
  if (typeof id === "number") {
    return new User() as UserOrUserPersistend<T>;
  } else {
    return new UserPersistend() as UserOrUserPersistend<T>;
  }
}

const res = getUser2(1);
const res2 = getUser2("sdfsfd");

//--------------------
//Infer

function runTransaction(transaction: { fromTo: [string, string] }) {
  console.log(transaction);
}

const transaction: GetFirstArg<typeof runTransaction> = {
  fromTo: ["1", "2"],
};

runTransaction(transaction);

//infer вытаскивает любое первое зачения тип First и использует дальше по коду в .. ? First
type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

//-------------------
//Mapped Types

type Modifier = "read" | "update" | "create";

type UserRoles = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
};

//проходиться по ключам и значения должно меняем на boolean
type ModifierToAccess2<Type> = {
  [Property in keyof Type]: boolean;
};
type UserAccess3 = ModifierToAccess2<UserRoles>;

type ModifierToAccess<Type> = {
  //+readonly преобразовали и добавили, также -? все значения обязательны указали
  //`canAccess${string & Property}` - изменить ключи
  //Exclude -исключить какое то свойство
  +readonly [Property in keyof Type as Exclude<
    `canAccess${string & Property}`,
    "canAccessadminPanel"
  >]-?: boolean;
};

type UserAccess2 = ModifierToAccess<UserRoles>;

type UserAccess1 = {
  customers?: boolean;
  projects?: boolean;
  adminPanel?: boolean;
};

//------------------
//Упражнение - Валидация форм
/* Необхдимо сделать тип для результата валидации формы основываясь на типе формы */
interface Form {
  name:string,
  password:string
}

const form:Form = {
  name:'Vlad',
  password:'123'
}

const formValid = {
  name:{isvalid:true},
  password:{isvalid:false, errorMes:'не длинее 5 символов'}
}

//
type Valid<T> = {
  [k in keyof T]:{
    isvalid:true
  }  | {
    isvalid:false,
    errorMes:string
  }
}

type formValidType = Valid<Form>

//--------------------
//Template Literal Types
//преобразование типов с помощью шаблонных строк
//также есть типо методы которые изменяют капитализацию и т.д. типо Capitaliz
//можно совмешать получиться Union типы

type ReadOrWrite = "read" | "write";

type Access = `can${Capitalize<ReadOrWrite>}`;
//сanread | canwrite

//наооборот с помощью infer убрали приставку can, infer достало значения и вернуло
type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadOrWriteBulk<Access>;

type ErrorOrSuccess = "error" | "success";

type ResponseT = {
  result: `http${Capitalize<ErrorOrSuccess>}`;
};

const a2: ResponseT = {
  result: "httpSuccess",
};

//---------------------
//_____Служебные типы______

//-----------------
//Partial, Required, Readonly

interface User {
  name: string;
  age?: number;
  email: string;
}

//Partial - делаем все поля необязательными
type patrial = Partial<User>;
const p: patrial = {};//пустой объект лучше не использовать

//Required - все обязательные
type required = Required<User>;
//Readonly - все редонли
type readonly = Readonly<User>;
type requiredAndReadonly = Required<Readonly<User>>;

//--------------------
//Pick, Omit, Extract, Exclude

interface PaymentPersistent {
  id: number;
  sum: number;
  from: string;
  to: string;
}

//Omit - исключения (2 параметр что будем исключать)
type Payment = Omit<PaymentPersistent, "id">;
//Pick - берет то что необходимо
type PaymentRequisits = Pick<PaymentPersistent, "from" | "to">;

//из данного типа "from" | "to" | Payment вытащить те которые являються string
type ExtractEx = Extract<"from" | "to" | Payment, string>;

//исключает из from" | "to" | Payment все string
type ExcludeEx = Exclude<"from" | "to" | Payment, string>;

//-------------------
//ReturnType, Parameters, ConstructorParameters

class User {
  constructor(public id: number, public name: string) {}
}

function getData(id: number): User {
  return new User(id, "Вася");
}

//ReturnType - получили то что функция возврощает
type RT = ReturnType<typeof getData>;
type RT2 = ReturnType<() => void>;//void
type RT3 = ReturnType<<T>() => T>;//unknown - заранее не знаем что вернеться
type RT4 = ReturnType<<T extends string>() => T>;//string

//Parameters - позволяет вытащить тип параметра функции (кортеж)
type PT = Parameters<typeof getData>[0];

//ConstructorParameters - параметры конструктора класса также в виде кортежа
type CP = ConstructorParameters<typeof User>;
type IT = InstanceType<typeof User>;

//----------------------
//Awaited
//Передаем Promise и ожидает что вернет ...

type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
  name: string;
  url: string;
}

async function getMenu(): Promise<IMenu[]> {
  return [{ name: "Аналитика", url: "analytics" }];
}

//можно получить то что возврощает getMenu()
type R = Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
  return [await x];
}

async function getArray2<T>(x: T): Promise<T[]> {
  return [await x];
}

//------------------------
//_______Декораторы_______
//просто функция

//--------------------------
//Патерн декоратора

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

//декоратор принимает класс и модифицирует его
function nullUser(obj: IUserService) {
  obj.users = 0;
  return obj;
}

//2 декоратор
function logUsers(obj: IUserService) {
  console.log("Users: " + obj.users);
  return obj;
}

console.log(new UserService().getUsersInDatabase());
console.log(nullUser(new UserService()).getUsersInDatabase());
//оборачиваем один декоратор в другой декоратор последовательность применения влияет на результат
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());

//------------------
//Декоратор класса 
//Разрешение использование декораторов

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

//разрешение использование декораторов поменять разрешение на true в конфиге

//применили декоратор
@threeUserAdvance
class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

//обычно переименовывают параметр в target
//При таком использовании все равно в UserService элемент присваивание и поэтому функция nullUser вернет 0 а потом вернеться в сам класс и вернет 1000, работает некоректно
function nullUser(target: Function) {
  target.prototype.users = 0;
}

//другой способ работы с который работает правильно, независимо эта функция вызываеться после и переприсваивает 
function threeUserAdvanced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 3;
  };
}

console.log(new UserService().getUsersInDatabase());//3

//-----------------------
//Фабрика декораторов

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

//фабрика декораторов возникает последовательно одно зависит от другого, порядок важен
// @nullUser
@log()
@setUsers(2)
// @threeUserAdvanced
// @setUserAdvanced(4)
class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUser(target: Function) {
  target.prototype.users = 0;
}

//дальше идет и использует nullUser у себя
function setUsers(users: number) {
  console.log("setUsers init");
  return (target: Function) => {
    console.log("setUsers run");
    target.prototype.users = users;
  };
}

function log() {
  console.log("log init");
  return (target: Function) => {
    console.log("log run");
    console.log(target);
  };
}

function threeUserAdvanced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 3;
  };
}

//функция которая возврощает threeUserAdvanced только присваивает ей значения
function setUserAdvanced(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users;
    };
  };
}

console.log(new UserService().getUsersInDatabase());//2

//-----------------------
//Упражнение -  Декоратор CreatedAt

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt
class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

//лучше декораторы объявлять с большой буквы
function CreatedAt<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
    createdAt  = new Date()
  };
}

//обратиться к методу CreatedA не можем т.к. создано анонимно
new UserService() 

//чтобы появилось
type CreatedAt = {
  createdAt:Date
};

//теперь будет метод
(new UserService() as CreatedAt & IUserService).createdAt()

//--------------------
//Декоратор метода
//позволяет изменять методы

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  users: number = 1000;

  @Log()
  getUsersInDatabase(): number {
    throw new Error("Ошибка");
  }
}

//target - цель на метод , propertyKey - название метода, descriptor - джинерик который описывает нашу функцию
function Log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    console.log(target);//{}
    console.log(propertyKey);//getUsersInDatabase
    console.log(descriptor);//value: fun, writable:true. enumerable:  false, configurable:true
    descriptor.value = () => {
      console.log("no error");
    };
  };
}

console.log(new UserService().getUsersInDatabase());//no error

//---------------------
//Упражнение - Декоратор перехвата ошибок

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  users: number = 1000;

  @Catch()
  getUsersInDatabase(): number {
    throw new Error("Ошибка");
  }
}

function Catch(rethrow:boolean = false) {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value 

    descriptor.value = async (...args: any[]) => {
      try {
        const res = await method?.apply(target, args);
        return res;
      } catch (e) {
        if (e instanceof Error) {
           console.log(e.message);
          if (rethrow) {
            throw e
          }
        }
      }
    };
  };
}

//-----------------------
//Декоратор свойства
// на этапе присвоение ао умолчанию свойств декораторы сразу начианют работать

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  @Max(100)
  users: number;

  getUsersInDatabase(): number {
    throw new Error("Ошибка");
  }
}

//target - цель на метод , propertyKey - название метода,set ,get
function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`);
      } else {
        value = newValue;
      }
    };

    const getter = function () {
      return value;
    };

    //переопределяет объекты
    //Object.defineProperty - принимает объект и ключ, параметры
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}
const userService = new UserService();
userService.users = 1;
console.log(userService.users);//1
userService.users = 1000;
console.log(userService.users);//Нельзя установить значение больше

//--------------------
//Декоратор accessor
//декораторы на getter и setter

interface IUserService {
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  private _users: number;

  @Log()
  set users(num: number) {
    this._users = num;
  }

  get users() {
    return this._users;
  }

  getUsersInDatabase(): number {
    throw new Error("Ошибка");
  }
}

//target - цель на метод , propertyKey - название метода,descriptor - информацию для методов
function Log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const set = descriptor.set;
    descriptor.set = (...args: any) => {
      console.log(args);
      set?.apply(target, args);
    };
  };
}

const userService = new UserService();
userService.users = 1;
console.log(userService.users);

//------------------------
//Декоратор параметра

interface IUserService {
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  private _users: number;

  getUsersInDatabase(): number {
    return this._users;
  }

  setUsersInDatabase(@Positive() num: number, @Positive() _: number): void {
    this._users = num;
  }
}

//target - цель на метод , propertyKey - название метода,parameterIndex - позиция параметра
function Positive() {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    console.log(target); //{}
    console.log(propertyKey); //setUsersInDatabase
    console.log(parameterIndex); //0
  };
}

const userService = new UserService();

//польза параметров декоратора будет видна в методанных

//------------------------
//Метаданные
//некоторый объекты с разными методами

//использовать библиотеку
import "reflect-metadata";

const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA_KEY");

interface IUserService {
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  private _users: number;

  getUsersInDatabase(): number {
    return this._users;
  }

  @Validate()
  setUsersInDatabase(@Positive() num: number): void {
    this._users = num;
  }
}

function Positive() {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {

    //получили типизацию и можем на основе ее делать валидацию параметров (ключ из библиотеки,....)
    console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));//function:function
    console.log(
      Reflect.getOwnMetadata("design:paramtypes", target, propertyKey)
    );//[[function:Number]]
    console.log(
      Reflect.getOwnMetadata("design:returntype", target, propertyKey)
    );//undefined

    //делаем свои параметры, свои ключи делаем
    let existParams: number[] =
      Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
    
    //доволяем свой параметр из декоратора
    existParams.push(parameterIndex);

    //определяем новые методанные по ключу , что хотим положить
    Reflect.defineMetadata(
      POSITIVE_METADATA_KEY,
      existParams,
      target,
      propertyKey
    );
  };
}

function Validate() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
    let method = descriptor.value;
    descriptor.value = function (...args: any) {
      
      //получи список парметров из декоратора
      let positiveParams: number[] = Reflect.getOwnMetadata(
        POSITIVE_METADATA_KEY,
        target,
        propertyKey
      );

      if (positiveParams) {
        for (let index of positiveParams) {
          if (args[index] < 0) {
            throw new Error("Число должно быть больше нуля");
          }
        }
      }
      return method?.apply(this, args);
    };
  };
}

const userService = new UserService();
console.log(userService.setUsersInDatabase(10));
console.log(userService.setUsersInDatabase(-1));//"Число должно быть больше нуля"


//сделали валидацию передоваемых параметров в run time 

//---------------------
//Порядок декораторов

function Uni(name: string): any {
  console.log(`Инициализация: ${name}`);
  return function () {
    console.log(`Вызов: ${name}`);
  };
}

@Uni("Класс1")
@Uni("Класс2")
class MyClass {
  @Uni("Метод")
  method(@Uni("Параметр метода") _: any) {}

  constructor(@Uni("Параметр конструктора") _: any) {}

  @Uni("Свойство 3")
  props3?: any;

  @Uni("Свойство 1")
  props?: any;

  @Uni("Свойство static")
  static prop2?: any;

  @Uni("Метод static")
  static method2(@Uni("Параметр метода static") _: any) {}
}

//сначало иницилизируеться статические декораторы а потом статические,класс , далее конструктор, порядки влияют только на однинаковые уровни инициализации

//------------------------
//Namespaces и reference

//в один объект помещаем все что хотим импортировать
namespace A {
  export const a = 5;

  export interface B {
    c: number;
  }
}

//использование
/// <reference path="./module/app2.ts" />
console.log(A.a);

//-------------------
//Модульность на backend
export const a = 5;

export interface B {
  c: number;
}

import { a } from "./module/app2.js";

console.log(a);

//----------------
//Модульность на frontend

//Добавить type="module" 
// <script src="./build/app.js" type="module"></script>;

export const a = 5;

export interface B {
  c: number;
}

import { a } from "./module/app2.js";

console.log(a);

//----------------
//Import и export
//можно импортировать и переменные и типы

//app2.ts
export const a = 5;

export class Test {}

export const Obj = {};

export default function run() {
  console.log("run");
}

export interface B {
  c: number;
}

export type MyType = string | number;
export type MyType2 = string | number;

//app.ts;
//default import, и конкретные объекты
import run, { a, type MyType2 } from "./module/app2";
//default import
import running from "./module/app2";
//все + default import
import * as all from "./module/app2";
//переименовываем
import { Test as Cl } from "./module/app2";
//будет импортировать только тип
import { type MyType } from "./module/app2";

running();
run();
new Cl();
console.log(a);
console.log(all.a);

//---------------------
//Типизация сторонних библиотек

import { toJson } from "really-relaxed-json";
const rjson = "[ one two three {foo:bar} ]";
const json = toJson(rjson);
console.log(json);

//типизация дополнительная
//src/types.d.ts
declare module "really-relaxed-json" {
  export function toJson(rjsonString: string, compact?: boolean): string;
}

//------------------
//_____Порождающие паттерны_______
//пораждают новые объекты

//-------------------
//Фабрика
//Создает что-то без самоповторения
//Есть универсальный тип (интерфейс) один на все далее идет реализация интерфейсов, создаеться общий абстактный класс, далее на основе этого абстрактного класса мы создаем фабрики в которых заключены реализации интрефейсов и использование универсального типа 

//универсальный интерфейс который будет использоваться везде 
interface IInsurance {
  id: number;
  status: string;
  setVehicle(vehicle: any): void;
  submit(): Promise<boolean>;
}

//реализация интерфейса 
class TFInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch("", {
      method: "POST",
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();
    return data.isSuccess;
  }
}

//реализация интерфейса 
class ABInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch("ab", {
      method: "POST",
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();
    return data.yes;
  }
}

//абстрактный класс фабрики
abstract class InsuranceFactory {
  db: any;

  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}

//фабрика
class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new TFInsurance();
  }
}

//фабрика
class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);

//----------------------
//Singleton
//одиночка
//будем работать всегда с одним объектом (один раз созданным) и уже все следующие наследники будут работать только с ним одним, не создавая множество других объектов

//Singleton
class MyMap {
  private static instance: MyMap;

  map: Map<number, string> = new Map();

  //конструктор в ts может быть приватным
  private constructor() {}

  clean() {
    this.map = new Map();
  }

  public static get(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return MyMap.instance;
  }
}

class Service1 {
  addMap(key: number, value: string) {
    const myMap = MyMap.get();
    myMap.map.set(key, value);
  }
}

class Service2 {
  getKeys(key: number) {
    const myMap = MyMap.get();
    console.log(myMap.map.get(key));
    myMap.clean();
    console.log(myMap.map.get(key));
  }
}

new Service1().addMap(1, "Работает!");
new Service2().getKeys(1);

//-----------------------
//Прототип
//клонирование объекта с помощью метода

interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;

  constructor(public email: string, public name: string) {
    this.createdAt = new Date();
  }

  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}

let user = new UserHistory("a@a.ru", "Антон");
console.log(user);

//клонируем оьъект , они полностью равны но он являеться клонам (разные объекты)
let user2 = user.clone();
user2.email = "b@b.ru";
console.log(user2);
console.log(user);

//--------------------
//Builder
//строительный патерн - вынести логику в рамках класса builder (строит, устанавливает что-то)

enum ImageFormat {
  Png = "png",
  Jpeg = "jpeg",
}

interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

//Builder
class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];

  addPng() {
    if (this.formats.includes(ImageFormat.Png)) {
      return this;
    }
    this.formats.push(ImageFormat.Png);
    return this;
  }

  addJpeg() {
    if (this.formats.includes(ImageFormat.Jpeg)) {
      return this;
    }
    this.formats.push(ImageFormat.Jpeg);
    return this;
  }

  addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }

  build(): IImageConversion[] {
    const res: IImageConversion[] = [];
    for (const r of this.resolutions) {
      for (const f of this.formats) {
        res.push({
          format: f,
          width: r.width,
          height: r.height,
        });
      }
    }
    return res;
  }
}

console.log(
  new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build()
);
/* [{
  "format": "jpeg",
  "width": 100,
  "height": 50
}, {
  "format": "png",
  "width": 100,
  "height": 50
}, {
  "format": "jpeg",
  "width": 200,
  "height": 100
}, {
  "format": "png",
  "width": 200,
  "height": 100
}] */

//-----------------------
//_____Структурные паттерны______
//Иерархия класса

//----------------------
//Мост
//есть некоторый управляющий класс который взаимодействует через interface с определенным провайдером

//interface
interface IProvider {
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconnect(): void;
}

//провайдер 1 
class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("Disconnected TG");
  }
}

//провайдер 1 
class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("Disconnected WU");
  }
}

//управляющий класс
class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect("connect");
    this.provider.sendMessage("message");
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }
  sendDelayed() {}
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();

//-------------------
//Фасад
//скрыть всю внутреннию реализацию за простым API

class Notify {
  send(template: string, to: string) {
    console.log(`Отправляю ${template}: ${to}`);
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}

class Tempate {
  private templates = [{ name: "other", template: "<h1>Шаблон!</h1>" }];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

//Фасад
class NotificationFacade {
  //private- внешнему пользователю не обязательно знать про них
  private notify: Notify;
  private logger: Log;
  private template: Tempate;

  constructor() {
    this.notify = new Notify();
    this.template = new Tempate();
    this.logger = new Log();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log("Не найден шаблон");
      return;
    }
    this.notify.send(data.template, to);
    this.logger.log("Шаблон отправлен");
  }
}

const s = new NotificationFacade();
s.send("a@a.ru", "other");

//-----------------------
//Адаптер
//Позволяет недопходящий с ходу объект использовать в данной среде

class KVDatabase {
  private db: Map<string, string> = new Map();
  save(key: string, value: string) {
    this.db.set(key, value);
  }
}

class PersistentDB {
  savePersistent(data: Object) {
    console.log(data);
  }
}

//Адаптер
class PersistentDBAdaper extends KVDatabase {
  constructor(public database: PersistentDB) {
    super();
  }

  override save(key: string, value: string): void {
    this.database.savePersistent({ key, value });
  }
}

function run(base: KVDatabase) {
  base.save("key", "myValue");
}

run(new PersistentDBAdaper(new PersistentDB()));

//------------------------
//Proxy
//Добовляет дополнительный слой (с дополнительной логикой)

interface IPaymentAPI {
  getPaymentDetail(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
  id: number;
  sum: number;
}

class PaymentAPI implements IPaymentAPI {
  private data = [{ id: 1, sum: 10000 }];
  getPaymentDetail(id: number): IPaymentDetail | undefined {
    return this.data.find((d) => d.id === id);
  }
}

//Proxy
//типо реализовали безопаность доступа к PaymentAPI
class PaymentAccessProxy implements IPaymentAPI {
  constructor(private api: PaymentAPI, private userId: number) {}

  getPaymentDetail(id: number): IPaymentDetail | undefined {
    if (this.userId === 1) {
      return this.api.getPaymentDetail(id);
    }
    console.log("Попытка получить данные платежа!");
    return undefined;
  }
}

const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1));
/* {
  "id": 1,
  "sum": 10000
}  */

const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(1));
//"Попытка получить данные платежа!" 

//---------------
//Composite
//Упрощает древовидные структуры приложения
//Некий абстрактный класс или interface, есть набор items, и просто дергая метод абстрактного класса она будет расчитывать стоимость и т.д. в наследниках.

//abstract класс
abstract class DeliveryItem {
  items: DeliveryItem[] = [];

  addItem(item: DeliveryItem) {
    this.items.push(item);
  }

  getItemPrices(): number {
    return this.items.reduce(
      (acc: number, i: DeliveryItem) => (acc += i.getPrice()),
      0
    );
  }

  abstract getPrice(): number;
}

export class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }

  getPrice(): number {
    return this.getItemPrices() + this.deliveryFee;
  }
}

export class Package extends DeliveryItem {
  getPrice(): number {
    return this.getItemPrices();
  }
}

export class Product extends DeliveryItem {
  constructor(private price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

const shop = new DeliveryShop(100);
shop.addItem(new Product(1000));

const pack1 = new Package();
pack1.addItem(new Product(200));
pack1.addItem(new Product(300));
shop.addItem(pack1);

const pack2 = new Package();
pack2.addItem(new Product(30));
shop.addItem(pack2);

console.log(shop.getPrice());

//-----------------------
//____14 Поведенческие паттерны____
//Эффективное взимодейтсвия, легко расширяемая и подерживаемая 

//---------------------
//Chain of Command

interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;
  handle(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;

  next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid;
    return mid;
  }

  handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request);
    }
    return;
  }
}

class AuthMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    console.log("AuthMiddleware");
    if (request.userId === 1) {
      return super.handle(request);
    }
    return { error: "Вы не авторизованы" };
  }
}

class ValidateMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    console.log("ValidateMiddleware");
    if (request.body) {
      return super.handle(request);
    }
    return { error: "Нет body" };
  }
}

class Controller extends AbstractMiddleware {
  override handle(request: any) {
    console.log("Controller");
    return { success: request };
  }
}

const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller);

console.log(
  auth.handle({
    userId: 1,
    body: "I am OK!",
  })
);




