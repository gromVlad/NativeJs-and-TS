//__ ЗАЧЕМ ПРОГРАММИРОВАТЬ В TYPESCRIPT
//TypeScript — это язык, компилируемый в JavaScript
//ошибки перехватываются до выполнения программы

//Включение опции noEmitOnError означает, что ранее сгенерированный файлне будет замещен, пока все ошибки в файлах TypeScript не будут устранены
// tsc main --noEmitOnError true

//Файл tsconfig.json
/* 
{
  "compilerOptions": {
  "baseUrl": "src", -> Транспилировать файлы .ts, расположенные в директории src
  "outDir": "./dist", ->  Сохранять сгенерированные файлы .js в директории dist
  "noEmitOnError": true,-> Если в каких-либо файлах есть ошибки компиляции не генерировать файлы JavaScript
  "target": "es5" -> Транспилировать файлы TypeScript в синтаксис ES5
 }
}
 */

//скомпилировать код в синтаксис ES5
//tsc --t ES5 main

let customerId: string;
//customerId = 123; // ошибка при компиляции
customerId = "A15BN"; // OK, customerId является строкой.

//___ТИПИЧНЫЕ РАБОЧИЕ ПРОЦЕССЫ TYPESCRIPT
//ts -> js -> bundle -> deploy

function getFinalPrice(price: number, discount: number) {
  return price - price / discount;
}
console.log(getFinalPrice(100, 10)); // Верный вызов функции
//console.log(getFinalPrice(100, "10%")); Ошибочный вызов функции

//--------------------------------------
//___Базовые и пользовательские типы__//

//___ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ С ТИПАМИ
//может быть присвоен переменной явно самим разработчиком либо неявно
let firstName: string;
let age: number;

/* 
TypeScript предлагает следующие аннотации типов:
 string — для текстовых данных;
 boolean — для значений true/false;
 number — для численных значений;
 symbol — уникальное значение, создаваемое вызовом конструктора Symbol;
 any — для переменных, способных содержать значения разных типов, которые
могут быть вам неизвестны в момент написания кода;
 unknown — аналог any, с которым нельзя производить никаких действий, не
утвердив или сузив его до более конкретного типа;
 never — для представления невозможного кода (вскоре будет приведен пример);
 void — отсутствие значения.
*/

//тип данных symbol, который всегда уникален и неизменен
const ord = Symbol("orderID"); // Создает новый символ
const myOrder = {
  // Использует символ как свойство объекта
  ord: "123",
};
console.log(myOrder["ord"]); // Эта строка выводит «123»

//Переменная, которой не было присвоено значение, имеет значение undefined
//Значение null представляет намеренное отсутствие значения

//объявить функцию, возвращающую либо number, либо null
function getPrice(price: number, discount: number): number | null {
  return price - price / discount;
}

//переменную типа any, то можете присвоить ей любое значение: численное, текстовое, логическое

//Тип never присваивается ничего не возвращающей функции, то есть той, которая либо выполняется бесконечно, либо просто выбрасывает ошибку

//void для объявления функции, не возвращающей значение
function logError(errorMessage: string): void {
  console.error(errorMessage);
}

//Следует избегать явных аннотаций типов там, где компилятор TypeScript сможет вывести их сам
let name1 = "John Smith"; //Объявляет и инициализирует переменную без явной аннотации типа
let name2: string = "John Smith"; //Объявляет и инициализирует переменную с аннотацией типа

//TypeScript также позволяет использовать в качестве типов литералы
let name3: "John Smith";

//___РАСШИРЕНИЕ ТИПОВ
//Если вы объявляете переменную, не инициализируя ее с конкретным значением, TypeScript использует внутренние типы null или undefined, которые преобразуются в any. Это называется расширением типов.
let productId;
productId = null;
productId = undefined;
//productId — это any

//___Типы в объявлениях функций
function calcTax(
  state: string,
  income: number,
  dependents: number
): number | undefined {
  if (state === "NY") {
    return income * 0.06 - dependents * 500;
  } else if (state === "NJ") {
    return income * 0.05 - dependents * 300;
  }
}

//___Объединенный тип
let padding: string | number;

function padLeft(value: string, padding: string | number): string | undefined {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
}
//Попытка применить условные инструкции для уточнения типа переменной называется сужением типа

console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says ")); //Возвращает «John says Hello world»
//console.log(padLeft("Hello world", true)); //compilation error

//___Использование type
type Foot = number;
type Pound = number;

type Patient = {
  //Объявляет тип Patient
  name: string;
  height: Foot; //Использует псевдоним Foot
  weight?: Pound; //Использует псевдоним Pound / Свойство weight опционально
};

let patient: Patient = {
  //Мы создаем экземпляр, используя нотацию объектного литерала
  //Переменная patient инициализирована без weight
  name: "Joe Smith",
  height: 5,
};

//псевдонимы типов для сигнатуры функции
type ValidatorFn = (c: FormControl) => { [key: string]: any } | null;

class FormControl {
  constructor(initialValue: string, validator: ValidatorFn | null) {}
}

//___Использование классов в качестве пользовательских типов

//TypeScript предлагает квалификаторы уровня доступа public, private и protected
class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number
  ) {}
}
//можем обозначив тип p явно
const p: Person = new Person("John", "Smith", 25);

//readonly - инициализированы либо в точке объявления либо в конструкторе класса после чего их значения уже не допускают изменения
class Block {
  //Это свойство инициализировано в конструкторе
  readonly nonce: number;
  readonly hash: string;

  //Значение для этого свойства предоставлено конструктором во время инстанцирования
  constructor(
    readonly index: number,
    readonly previousHash: string,
    readonly timestamp: number,
    readonly data: string
  ) {
    //Использует деструктуризацию дляизвлечения значений из объекта, возвращаемого методом mine()
    const { nonce, hash } = this.mine();
    this.nonce = nonce;
    this.hash = hash;
  }
  // Оставшаяся часть кода опущена в целях сокращения
  mine() {
    return { nonce: 25, hash: "hello" };
  }
}

//___Интерфейсы в качестве пользовательских типов

//сможете использовать его как значения
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function savePerson(params: Person): void {
  console.log("saving", params);
}

const p: Person = {
  firstName: "vlad",
  lastName: "bodnar",
  age: 25,
};

savePerson(p);
//используете ключевое слово interface, никакой соответствующий ему код в JavaScript создан не будет

//___КАКОЕ КЛЮЧЕВОЕ СЛОВО ИСПОЛЬЗОВАТЬ: TYPE, INTERFACE ИЛИ CLASS?
//Если этот тип не нужен для инстанцирования объектов в среде выполнения, используйте interface или type
//Определение пользовательского типа с ключевым словом type предлагает те же возможности, что и interface, плюс некоторые дополнительные

//___Структурная система типов против номинальной
class Person1 {
  //Объявляет класс Person (считайте «тип»)
  name: string;
}
class Customer {
  //Объявляет класс Customer
  name: string;
}
const cust: Customer = new Person1(); //Никаких ошибок: структуры типов совпадают
const cust2: Customer = { name: "Mary" };
const pers: Person1 = { name: "John" };

//Когда классы не одинаковы
//тип Person может быть присвоен типу Customer т.к. он дополняет этот класс как бы сверх нормы
class Person2 {
  name: String;
  age: number; //Мы добавили это свойство
}
class Customer2 {
  name: String;
}
const cust3: Customer2 = new Person2(); // по-прежнему нет ошибок

//___Пользовательские объединения типов
export class SearchAction {
  //Класс с actionType и payload
  actionType = "SEARCH";
  constructor(readonly payload: { searchQuery: string }) {}
}
export class SearchSuccessAction {
  //Класс с actionType и payload
  actionType = "SEARCH_SUCCESS";
  constructor(public payload: { searchResults: string[] }) {}
}
export class SearchFailedAction {
  //Класс с actionType, но без payload
  actionType = "SEARCH_FAILED";
}

//Использование объединения с дискриминантом для различения форм
export type SearchActions =
  | SearchAction
  | SearchSuccessAction
  | SearchFailedAction;

interface Rectangle {
  kind: "rectangle"; //Дискриминант;
  width: number;
  height: number;
}
interface Circle {
  kind: "circle"; //Дискриминант;
  radius: number;
}
type Shape = Rectangle | Circle;
//Объединение;

//Защита типа in
interface A {
  a: number;
}
interface B {
  b: string;
}

function foo(x: A | B) {
  if ("a" in x) {
    //Проверяет наличие конкретного свойства с помощью in
    return x.a;
  }
  return x.b;
}

//Использование размеченного объединения
function area(shape: Shape): number {
  switch (
    shape.kind //Переключает значение дискриминатора
  ) {
    case "rectangle":
      return shape.height * shape.width;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}

//___ТИПЫ ANY И UNKNOWN, А ТАКЖЕ ПОЛЬЗОВАТЕЛЬСКИЕ ЗАЩИТЫ ТИПОВ

type Persons = {
  //Объявляет псевдоним типа
  address: string;
};

//Эта защита типа возвращает true, если передаваемый объект содержит свойство address
const isPerson = (object: any): object is Persons => "address" in object;

const pers1 = JSON.parse('{ "adress": "25 Broadway" }');

if (isPerson(pers1)) {
  //Применяет защиту типа
  console.log(pers1.address); // Безопасно обращается к свойству address
} else {
  console.log("person2 is not a Person");
}

//более безопасный вариант защиты
const isPerson2 = (object: any): object is Person =>
  !!object && "address" in object;

//другой вариатн
type PersonDop = {
  discriminator: "person";
  address: string;
};

const isPerson3 = (object: any): object is Person =>
  !!object && object.discriminator === "person";

//---------------------------------
//__МИНИ-ПРОЕКТ__//
class Dog {
  //Объявляет пользовательский тип Dog
  constructor(readonly name: string) {}
  sayHello(): string {
    return "Dog says hello!";
  }
}
class Fish {
  //Объявляет пользовательский тип Fish
  constructor(readonly name: string) {}
  dive(howDeep: number): string {
    return `Diving ${howDeep} feet`;
  }
}

type Pet = Dog | Fish; //Создает объединение Dog и Fish

function talkToPet(pet: Pet): string | undefined {
  if (pet instanceof Dog) {
    //Использует защиту типа
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return "Fish cannot talk, sorry.";
  }
}

const myDog = new Dog("Sammy"); //Создает экземпляр Dog
const myFish = new Fish("Marry"); //Создает экземпляр Fish
console.log(talkToPet(myDog));
console.log(talkToPet(myFish)); //Вызывает talkToPet(), передавая Pet
//talkToPet({ name: 'John' }); -> Не скомпилируется из-за неверного типа параметра

//----------------------------------------
//_____OOП с классами и интерфейсами____//

//___Знакомство с наследованием классов

class Mypers {
  firstName = "";
  lastname = "";
  age = 0;

  sayhello(): string {
    return `My name ${this.firstName} ${this.lastname}.`;
  }
}

class Employee extends Mypers {
  department = "";
}
const empl = new Employee();
empl.department;
empl.sayhello();

//___Модификаторы доступа public, private, protected

//public — к членам класса, отмеченным как public, можно обратиться как из внутренних методов класса, так и из внешних сценариев

//protected — к членам класса, отмеченным как protected, можно обратиться либо из внутреннего кода класса, либо из наследников этого класс

//private — члены класса private видимы только внутри класс

//___Статические переменные и пример Одиночки
class Gangsta {
  static totalBullets = 100; // Объявляет и инициализирует статическую переменную
  shoot() {
    Gangsta.totalBullets--; // Обновляет количество патронов после каждого выстрела
    console.log(`Bullets left: ${Gangsta.totalBullets}`);
  }
}
const g1 = new Gangsta(); // Создает новый экземпляр Gangsta
g1.shoot(); // Этот гангстер стреляет один раз
const g2 = new Gangsta(); //Создает новый экземпляр Gangsta
g2.shoot(); //Этот гангстер стреляет один раз

//Одиночки — паттерна проектирования, ограничивающего инстанцирование класса одним объектом
class AppState {
  //Это свойство представляет состояние приложения
  counter = 0;

  //Это свойство хранит ссылку на одиночный экземпляр AppState
  private static instanceRef: AppState;

  //Приватный конструктор препятствует использованию оператора new с AppState
  private constructor() {}

  //Это единственный способ получить экземпляр AppState
  static getInstance(): AppState {
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState();
    }
    return AppState.instanceRef;
  }
}
// const appState = new AppState(); // ошибка из-за private ➥ constructor

//Эта переменная получает ссылку на экземпляр AppState
const appState1 = AppState.getInstance();
appState1.counter++;

//___Метод super() и ключевое слово super
class PersonOne {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {} //Конструктор суперкласса Person
}
class Employee1 extends PersonOne {
  //Подкласс Employee

  //Конструктор подкласса; Employee;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public department: string
  ) {
    super(firstName, lastName, age); // Вызывает конструктор суперкласса
  }
}
const empl1 = new Employee1("Joe", "Smith", 29, "Accounting");

//Использование ключевого слова super
class PersonTwo {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}
  sellStock(symbol: string, numberOfShares: number) {
    //Метод sellStock() в предке
    console.log(`Selling ${numberOfShares} of ${symbol}`);
  }
}

//С помощью ключевого слова super мы повторно использовали функциональность из метода, объявленного в суперклассе, и, помимо этого, добавили новую
class Employee2 extends PersonTwo {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public department: string
  ) {
    super(firstName, lastName, age); //Вызывает конструктор предка
  }
  sellStock(symbol: string, shares: number) {
    //Метод sellStock() в потомке
    super.sellStock(symbol, shares); //Вызывает sellStock() для предка

    //вызываем приватный метод
    this.reportToCompliance(symbol, shares);
  }

  //Приватный метод reportToCompliance();
  private reportToCompliance(symbol: string, shares: number) {
    console.log(
      `${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`
    );
  }
}
const empl3 = new Employee2("Joe", "Smith", 29, "Accounting");
empl3.sellStock("IBM", 100);
//Selling 100 of IBM
//Smith from Accounting sold 100 shares of IBM

//___Абстрактные классы

abstract class PersonABS {
  //Объявляет абстрактный класс
  constructor(public name: string) {}
  changeAddress(newAddress: string) {
    //Объявляет и реализует метод
    console.log(`Changing address to ${newAddress}`);
  }
  giveDayOff() {
    //Объявляет и реализует метод
    console.log(`Giving a day off to ${this.name}`);
  }
  promote(percent: number) {
    //Объявляет и реализует метод
    this.giveDayOff();
    this.increasePay(percent); //«Вызывает» абстрактный метод
  }
  abstract increasePay(percent: number): void; //Объявляет абстрактный метод
}

//Потомки класса PersonABS
class EmployeeThree extends PersonABS {
  increasePay(percent: number) {
    //Реализует метод increasePay() для сотрудников
    console.log(`Increasing the salary of ${this.name} by ${percent}%`);
  }
}

class Contractor extends PersonABS {
  increasePay(percent: number) {
    //Реализует метод increasePay() для подрядчиков
    console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
  }
}

// Запуск кампании по повышению
const workers: PersonABS[] = [];
workers[0] = new EmployeeThree("John");
workers[1] = new Contractor("Mary");
workers.forEach((worker) => worker.promote(5));
/* 
Giving a day off to John
Increasing the salary of John by 5%
Giving a day off to Mary
Increasing the hourly rate of Mary by 5%
*/

//___Перегрузка метода

class ProductService {
  getProducts(): void; //Объявляет допустимую сигнатуру метода
  getProducts(id: number): void; //Объявляет допустимую сигнатуру метода
  getProducts(id?: number) {
    //Реализует метод
    if (typeof id === "number") {
      console.log(`Getting the product info for ${id}`);
    } else {
      console.log(`Getting all products`);
    }
  }
}
const prodService = new ProductService();
prodService.getProducts(123);
prodService.getProducts();

//Различные аргументы и возвращаемые типы
interface Product {
  //Определяет тип Product
  id: number;
  description: string;
}

class ProductService2 {
  getProducts(description: string): Product[];
  getProducts(id: number): Product;
  getProducts(product: number | string): Product[] | Product {
    if (typeof product === "number") {
      console.log(`Getting the product info for id ${product}`);
      return { id: product, description: "great product" };
    } else if (typeof product === "string") {
      console.log(`Getting product with description ${product}`);
      return [
        { id: 123, description: "blue jeans" },
        { id: 789, description: "blue jeans" },
      ];
    } else {
      return {
        id: -1,
        description:
          "Error: getProducts() accept only number or string as args",
      };
    }
  }
}
const prodService2 = new ProductService2();
console.log(prodService2.getProducts(123));
console.log(prodService2.getProducts("blue jeans"));

//Перегрузка конструкторов
class Product {
  id: number;
  description: string;
  constructor(); //Объявление конструктора без аргументов
  constructor(id: number); //Объявление конструктора с одним аргументом
  constructor(id: number, description: string); //Объявление конструктора с двумя аргументам
  constructor(id?: number, description?: string) {
    // Constructor implementation goes here
  }
}

//можете объявить один интерфейс для представления всех возможных параметров конструктора
interface ProductProperties {
  id?: number;
  description?: string;
}
class Products {
  id: number;
  description: string;
  constructor(properties?: ProductProperties) {
    // Constructor implementation goes here
  }
}

//___РАБОТА С ИНТЕРФЕЙСАМИ
//объявление класса может включать ключевое слово implements, сопровождаемое именем интерфейса

//Объявляет сигнатуру метода, который должен быть реализован классом
interface MotorVehicle {
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number): void;
  honk(howLong: number): void;
}
class Car implements MotorVehicle {
  startEngine(): boolean {
    return true;
  }
  stopEngine(): boolean {
    return true;
  }
  brake(): boolean {
    return true;
  }
  accelerate(speed: number): void {
    console.log(`Driving faster`);
  }
  honk(howLong: number): void {
    console.log(`Beep beep yeah!`);
  }
}
const car = new Car(); //Инстанцирует класс Car
car.startEngine();

//интерфейс для машины Джеймса Бонда
interface Flyable {
  fly(howHigh: number);
  land();
}
interface Swimmable {
  swim(howFar: number);
}
class CarBond implements MotorVehicle, Flyable, Swimmable {
  // Реализуйте здесь все методы из трех интерфейсов.
}

//_Расширение интерфейсов
interface Flyable extends MotorVehicle {
  //Один интерфейс расширяет другой
  fly(howHigh: number);
  land(); //Объявляет сигнатуру метода для реализации в классе
}

//_Программирование через интерфейсы
//Используйте ключевое слово interface вместо class,отпечаток JavaScript будет меньше
interface Product {
  //Объявляет пользовательский тип с помощью интерфейса
  id: number;
  description: string;
}
interface IProductService {
  //Объявляет API как интерфейс
  getProducts(): Product[];
  getProductById(id: number): Product;
}
class ProductService3 implements IProductService {
  //Реализует интерфейс
  getProducts(): Product[] {
    // здесь идет код для получения продукта
    // из реального источника данных.
    return [];
  }
  getProductById(id: number): Product {
    // здесь идет код для получения продукта по id.
    return { id: 123, description: "Good product" };
  }
}

class MockProductService implements IProductService {
  // Здесь идет другая конкретная реализация методов интерфейса.
}

//Фабричная функция
//Фабричная функция, использующая в качестве возвращаемого типа интерфейс
function getProductService(isProduction: boolean): IProductService {
  if (isProduction) {
    return new ProductService3();
  } else {
    return new MockProductService();
  }
}

//--------------------------------------------
//_______Перечисления и обобщенные типы___//

//___ИСПОЛЬЗОВАНИЕ ENUMS
//определять ограниченный набор констант

enum Weekdays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}
let dayOff = Weekdays.Tuesday;

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
  //Инициализирует член enum со строковым значением
}

//___ИСПОЛЬЗОВАНИЕ ОБОБЩЕНИЙ

const values1: string[] = ["Mary", "Joe"];
const values2: Array<string> = ["Mary", "Joe"];
const values4: Array<string | number> = ["Joe", 123, 567];

//___Создание собственных обобщенных типов

//без обобщенных типов
interface Comparator {
  compareTo(value: any): number;
}

interface Comparator2<T> {
  compareTo(value: T): number;
}

class Rectangle implements Comparator2<Rectangle> {
  constructor(private width: number, private height: number) {}
  compareTo(value: Rectangle): number {
    return this.width * this.height - value.width * value.height;
  }
}
const rect1: Rectangle = new Rectangle(2, 5);
const rect2: Rectangle = new Rectangle(2, 3);
rect1.compareTo(rect2) > 0
  ? console.log("rect1 is bigger")
  : rect1.compareTo(rect2) == 0
  ? console.log("rectangles are equal")
  : console.log("rect1 is smaller");

//ПРЕДУСТАНОВЛЕННЫЕ ЗНАЧЕНИЯ ОБОБЩЕННЫХ ТИПОВ
class A<T = any> {
  // объявление предустановленного параметра типа.
  value: T;
}

//Обобщенная функция
//Использует тип T для функции, параметра и возвращаемого значения
function printMe<T>(content: T): T {
  console.log(content);
  return content;
}
const a = printMe("Hello");
class Per {
  constructor(public name: string) {}
}
const b = printMe(new Per("Joe"));

//Использование обобщенных типов в стрелочных функциях
const printMe2 = <T>(content: T): T => {
  console.log(content);
  return content;
};
//можете вызвать эти функции, указав типы явно
const a1 = printMe<string>("Hello");

class Pair<K, V> {
  //Объявляет класс с двумя параметризованными типами
  key: K; //Объявляет свойство обобщенного типа K
  value: V; //Объявляет свойство обобщенного типа V
}

//Отображение строчных перечислений
interface User {
  //Объявляет пользовательский тип User
  name: string;
  role: UserRole;
}

enum UserRole { //Объявляет строчное перечисление
  Administrator = "admin",
  Manager = "manager",
}

function loadUser<T>(): T {
  //Объявляет обобщенную функцию
  return JSON.parse('{ "name": "john", "role": "admin" }');
}

const user = loadUser<User>();

switch (
  user.role //Переключает роль пользователя с помощью строчного enum
) {
  case UserRole.Administrator:
    console.log("Show control panel");
    break;
  case UserRole.Manager:
    console.log("Hide control panel");
    break;
}

//_Обеспечение возвращаемого типа функциивысшего порядка

//Использование функции высшего порядка
const outerFunc = (someValue: number) => (multiplier: number) =>
  someValue * multiplier;
const innerFunc = outerFunc(10);
let result = innerFunc(5); // Вызывает возвращаемую функцию
console.log(result); // Выводит в консоль 50

//объявления обобщенной функции, которая может получать обобщенный тип T, но возвращает функцию (c: number) ? number
type numFunc<T> = (arg: T) => (c: number) => number;

//Вызывает функцию без аргументов
const noArgFunc: numFunc<void> = () => (c: number) => c + 5;

//Вызывает функцию с численным аргументом
const numArgFunc: numFunc<number> =
  (someValue: number) => (multiplier: number) =>
    someValue * multiplier;

//Вызывает функциюсо строчным аргументом
const stringArgFunc: numFunc<string> =
  (someText: string) => (padding: number) =>
    someText.length + padding;

//const createSumString: numFunc<number> = () => (x: number) => "Hello"; -> Ошибка компиляции: numFunc ожидает другую сигнатур

//------------------------------------------
//_______Декораторы и продвинутые типы____//

//___ДЕКОРАТОРЫ
//декоратор — особый вид объявления, который может быть прикреплен к объявлению класса, метода, аксессора, свойства или параметра,добавляет дополнительные данные о других данных.

function whoAmI(target: Function): void {
  console.log(`You are: \n ${target}`);
}

// Applying the decorator whoAmI to the class
@whoAmI
class Friend {
  constructor(private name: string, private age: number) {}
}
/* 
You are:
function Friend(name, age) {
 this.name = name;
 this.age = age;
}
*/

function UIcomponent(html: string) {
  //У этой фабрики декораторов есть аргумент
  console.log(`The decorator received ${html} \n`);
  return function (target: Function) {
    //Это функция-декоратор
    console.log(`Someone wants to create a UI component from
 \n ${target} `);
  };
}

@UIcomponent('<h1>Hello Shopper!</h1>')// Передает декоратору HTML
class Shopper {
 constructor(private name: string) {}
}
