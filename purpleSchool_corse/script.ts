//TypeScript курс (Антон Ларчев)
/* Почему TypeScript – нет строгой типизацией, не возможности рефакторинга, невозможно понять структуру данных. Open Sorse язык, разрабатывается Microsoft. 

//------------------
//Использование типов
Вся валидация происходит на уровне typescript */
let revenue:number = 1000
let bonus:number= 500
let bool:boolean = true
 
let res:number = revenue + bonus
console.log(res)

//---------------------
//Типы в функциях
//не использовать any
function getFullName(first: string, surname: string): string {
  return `${first} ${surname}`;
}

const getFullNameArrow = (first: string, surname: string): string => {
  return `${first} ${surname}`;
}

//--------------------
//Объекты
//не использовать any
function getFullName(anyObj:{name:string,surname:string}) {
  return `${anyObj.name} ${anyObj.surname}`;
}

 const оbjects = {
  name:'Vlad',
  surname:"bodnar",
  city:'Minsk'
 }

getFullName(оbjects);//Vlad bodnar

//-------------------------------
//Массивы
const skills = ["Dev", "DevOps", "Testing"];
for (const skill of skills) {
  console.log(skill.toLowerCase());
}
const res = skills
  .filter((s:string) => s !== "DevOps")
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
  statusCode: StatusCode.SUCCESS,
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
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted'
}

async function getFags(req:{
  topicId:number,
  status:QuestionStatus
}) :Promise<{
  question:string,
  answer:string,
  tags:string[],
  likes:number,
  status:QuestionStatus
}[]>{
  const res = await fetch('/fags',{
    method:"POST",
    body:JSON.stringify(req)
  })
  const data = await res.json()
  return data
}

//------------------------
//Union(или)

//или |
function logId(id: string | number | boolean) {
  //сужения типов
  if (typeof id === 'string') {
    console.log(id);
  } else if (typeof id === 'number') {
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
function fetchWithAuth2(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1;}

fetchWithAuth("s", "post");

let method = "post";//string - тут просто string
//также можно использовать константу const  method = "post" тогда as можно не использовать
//привели к методу post
fetchWithAuth("s", method as 'post');

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

type UserWithRole = User | Role

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
multiply(5);//25

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
  sum:string;
  from:number;
  to:number
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed'
}

//оставили так чтобы можно было потом расширять при необходимости
interface inPaymentReq extends Payment{
}

interface IdataSuccess extends Payment {
  databaseId: number
  
}

interface IdataFailed {
  errorMessage: string
  errorCode: number
}

//union по дате
interface IResponse {
  status:PaymentStatus;
  data: IdataSuccess | IdataFailed
}

//воторой вариант - сделали union по ответу а не по дате это более правильно
interface IResponseSuccess {
  status:PaymentStatus.Success
  data: IdataSuccess 
}

interface IResponseFailed {
  status:PaymentStatus.Failed
  data: IdataSuccess 
}

//------------------------
//Void
//void в функции- ничего не возврощает
function logId(id: string | number): void {
  console.log(id);
}
const a = logId(1);//void

function multiply(f: number, s?: number):number | undefined {
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void;
const f1: voidFunc = () => {};
const f2: voidFunc = () => {
  return true;
};
const b = f2();//чтобы мы не вернули мы получим void / будет игнорироваться что мы возврощаем

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

type U1 = unknown | number;//тут береться сами широкий тип unknown
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

const user = getUser();//null
if (user) {
  const n55 = user.name;
}

//если мы осознано хотим вернуть что этого объекта нет то используем null

//-----------------------------
//Приведение типов
let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();//new String это объект поэтому преобразовываем с помощью valueOf() в значения
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
  return typeof x === 'string';
}

function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error('Пользователь не админ');
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
function isSuccess(res: resType):res is IResponseSuccess {
  if (res.status === PaymentStatus.Success) {
    return  true 
  } else {
    return false
  }
}

function ifResult (res:resType): number {
  if (isSuccess(res)){
    return res.data.databaseId
  } else {
    throw new Error("error");
  }
}
