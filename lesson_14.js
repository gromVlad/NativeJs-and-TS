//class

function User(name) {
  //this
  this.name = name
  //return
}
//User.prototype --> {constructor:User}._proto_ --> Object.prototype._proto --> null

User.prototype.hello = function () {
  console.log(this.name)
}

const user = new User('Alex')//{name:'Alex'} [[Prototype]] --> {constructor:User} <--- User.prototype
console.log(User)
/* 
User {name: 'Alex'}
name: "Alex"
[[Prototype]]: Object
  hello: ƒ ()
  constructor: ƒ User(name)
  [[Prototype]]: Object
    constructor: ƒ Object() */

//----------------
//class - синтаксический сахар
class User1 {
  //свойство сразу попадет непосредствено в каждый экзэмпляр
  age = 23
  some =() => {}

  constructor(name){
    this.name = name
  }

  sayHi(){
    console.log(this.name)
  }
}
const user1 = new User1('Alex')//{name:'Alex'} 
console.log(user1);//{ age: 23, some: [Function: some], name: 'Alex' }

//----------------------
//1)[isClassConstructor] ->can not call without new

function Test(){}
Test()//this ---> undefined --> window

class Test {} // this ---> {}

//2) отличаеться строковым представлением в консоли 

//3) в классе все по дефолту use strict

//4) все методы класса являються неперечисляемые (смотреть дескрипторы свойст)

//----------------------
//статические методы -> сохраняеться в самом классе , функции. Они недоступны экземплярам. Обычно заносят для абстракции которая не должна быть доступна экземпляром
function User2(){}
User2.defaultName = 'Default'
User.hi = function (){}

class User2 {
  static defaultName = 'Default'
  static hi = function () { }
}

class User2 {
  static Max_name = 20
  
  constructor(name){
    //if (name.length > this.Max_name){
    if (name.length > User2.Max_name){
      throw new Error ('invalid name')
    }
    this.name = name
  }
}

//можно использовать в Dall
class TodoApi {
  static getTodos(){}

  static deleteTodo() {}
}
TodoApi.getTodos()

//-------------------------
//приватное поле - не можем снаружи обратиться а только внутри самгого класса по старой ситсеме _name  по новой #name  но с решеткой выдаст ошибку
class User {
  #name
  constructor(name){
    this.#name = name
  }

  getName (){
    return this.#name
  }
}

//------------------------
//get and set
class User {
  #name
  constructor(name) {
    this.#name = name
  }

  getName() {
    return this.#name
  }

  setname(value){
    return this.#name =  value
  }

  //the same
  get name(){
    return this.#name
  }

  set name(name){
    return this.#name = value
  }
}
const alex = new User('vlad')
alex.getName()
alex.setname('vlados')
//the same
alex.name
alex.name = 'vlados!'

//-----------------------
const a = {} //object.prototype
const b = {} // [[Prototype]] --> null
//занулили прототип и цепочка работать не будет поэтому использовать __proto__ опасно
b.__proto__ = null
b.__proto__ = a // {__proto__:a}

//поэтому используют другие методы
b.__proto__ === Object.getPrototypeOf(b) //показать прототип
b.__proto__ = a  === Object.setPrototypeOf(b,a)//установить прототип объекту b объект a

//----------------------------
//наслеование
function Car (){}
Car.prototype.run = function(){
  console.log(this.name + ' ' + 'running')
}

function Ford (model){
  this.model = model
}

const mondeo = new Ford('mondeo')
Car.prototype.run.call(mondeo)//mondeo running

//тоесть тут если не найдет какй то метод ford у себя он не пойдет по цепочке в object а пойдет в по новой цепочке по связи к car по факту также создан с помощью object   и поэтому мы сдесь ничего не ломаем
Ford.prototype.__proto__ = Car.prototype
console.log(mondeo)
/* 
Ford {model: 'mondeo'}
model: "mondeo"
[[Prototype]]: Car
  constructor: ƒ Ford(model)
    [[Prototype]]: Object
      run: ƒ ()
      constructor: ƒ Car()
      [[Prototype]]: Object */

//__with class__
class car {
  run(){
    console.log('car running')
  }
}

//extends --> Ford.prototype.__proto__ = Car.prototype, Ford.__proto__ = Car
class Ford extends Car{
  run(){
    console.log('ford running')
  }
}

const mondeo1 = new Ford('mondeo')

//-------------------------
class Car {
  constructor(model) {
   console.log('car constructor');
  }
}

class Ford extends Car {
  constructor(){
    console.log('car constructor before super');
    super()
    console.log('ford after constructor');
  }
}

const ford2 = new Ford('mondeo')
/* 
car constructor before super
car constructor
ford after constructor */

//__
class Car {
  constructor(name) {
    this.name = name
  }
}

//сначало проверяет в своем scope а дальше уже смотрит у родителя
class Ford extends Car {
  constructor(name) {
    super()
    console.log(this)//до нового вызова можно увидеть базовую логику родителя
    this.name = name
    console.log(this)
  }
}

const ford3 = new Ford('mondeo')
//Ford {name: undefined} 
//Ford {name: 'mondeo'}

//другой вариант
class Ford extends Car {
  constructor(name) {
    //передали в родительский конструктор параметр
    super(name)
  }
}

const ford4 = new Ford('mondeo')
//Ford {name: mondeo'}

//___Practice______
// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
class Student {
  constructor(firstName, lastName, groupNumber, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.groupNumber = groupNumber;
    this.grades = grades;
  }

  get averageGrade() {
    return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
  }

  hasOnlyHighGrades() {
    return this.grades.every(grade => grade >= 4);
  }
}

const students = [
  new Student("Ivan", "Ivanov", 1, [4, 5, 4, 3, 5]),
  new Student("Petr", "Petrov", 2, [5, 5, 5, 4, 5]),
  new Student("Sergey", "Sergeev", 1, [3, 4, 5, 4, 3]),
  new Student("Alexey", "Alexeev", 2, [4, 4, 3, 4, 3]),
  new Student("Dmitry", "Dmitriev", 1, [3, 3, 4, 5, 4]),
  new Student("Nikolay", "Nikolaev", 2, [5, 5, 5, 5, 5]),
  new Student("Vladimir", "Vladimirov", 1, [4, 3, 4, 4, 5]),
  new Student("Andrey", "Andreev", 2, [4, 4, 4, 4, 4]),
  new Student("Fedor", "Fedorev", 1, [3, 3, 3, 3, 3]),
  new Student("Semen", "Semenov", 2, [5, 4, 5, 4, 5])
];

students.sort((s1, s2) => s1.averageGrade - s2.averageGrade);

console.log("Students sorted by average grade:");
students.forEach(student => {
  console.log(`${student.lastName} ${student.firstName} (group ${student.groupNumber}): ${student.grades.join(" ")}`);
});
/* Fedorev Fedor (group 1): 3 3 3 3 3
Alexeev Alexey (group 2): 4 4 3 4 3 ... */

console.log("Students with grades only 4 or 5:");
students.filter(student => student.hasOnlyHighGrades())
  .forEach(student => console.log(`${student.lastName} ${student.firstName} (group ${student.groupNumber})`));
//Andreev Andrey (group 2)

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?
class MyClass {
  constructor(variable1 = 0, variable2 = "") {
    this.variable1 = variable1;
    this.variable2 = variable2;
  }

  deleteInstance() {
    // Метод на экземпляре класса для удаления самого экземпляра класса
    delete this;
  }

  static deleteInstance(instance) {
    // Статический метод класса для удаления экземпляра класса
    delete instance;
  }
}

const myObject = new MyClass(42, "Hello");
console.log(myObject.variable1, myObject.variable2); // 42 "Hello"

// Удаление экземпляра класса через метод на экземпляре
myObject.deleteInstance();
console.log(myObject); // MyClass { variable1: 42, variable2: 'Hello' }

// Удаление экземпляра класса через статический метод класса
MyClass.deleteInstance(myObject);
console.log(myObject); // MyClass { variable1: 42, variable2: 'Hello' }

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию
class Time {
  constructor(hours = 0, minutes = 0, seconds = 0) {
    this.set(hours, minutes, seconds);
  }

  set(hours, minutes, seconds) {
    if (hours < 0 || hours > 23) {
      throw new Error("Invalid hours value");
    }
    if (minutes < 0 || minutes > 59) {
      throw new Error("Invalid minutes value");
    }
    if (seconds < 0 || seconds > 59) {
      throw new Error("Invalid seconds value");
    }
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  addHours(hours) {
    const newHours = (this.hours + hours) % 24;
    this.set(newHours, this.minutes, this.seconds);
  }

  addMinutes(minutes) {
    const totalMinutes = this.hours * 60 + this.minutes + minutes;
    const newHours = Math.floor(totalMinutes / 60) % 24;
    const newMinutes = totalMinutes % 60;
    this.set(newHours, newMinutes, this.seconds);
  }

  addSeconds(seconds) {
    const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    const newHours = Math.floor(totalSeconds / 3600) % 24;
    const newMinutes = Math.floor(totalSeconds / 60) % 60;
    const newSeconds = totalSeconds % 60;
    this.set(newHours, newMinutes, newSeconds);
  }

  toString() {
    const padZero = n => n < 10 ? "0" + n : n;
    return `${padZero(this.hours)}:${padZero(this.minutes)}:${padZero(this.seconds)}`;
  }
}

const time = new Time(10, 30, 0);
console.log(time.toString()); // "10:30:00"

time.addHours(3);
console.log(time.toString()); // "13:30:00"

time.addMinutes(90);
console.log(time.toString()); // "15:00:00"

time.addSeconds(120);
console.log(time.toString()); // "15:02:00"


// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
class Customer {
  constructor(lastName, firstName, address, accountNumber) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.address = address;
    this.accountNumber = accountNumber;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setAddress(address) {
    this.address = address;
  }

  setAccountNumber(accountNumber) {
    this.accountNumber = accountNumber;
  }

  getLastName() {
    return this.lastName;
  }

  getFirstName() {
    return this.firstName;
  }

  getAddress() {
    return this.address;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  getInfo() {
    return `${this.lastName} ${this.firstName}, Адрес: ${this.address}, Номер банковского счета: ${this.accountNumber}`;
  }
}

const customers = [
  new Customer("Иванов", "Иван", "Москва, ул. Пушкина, д. 1", "1234567890123456"),
  new Customer("Петров", "Петр", "Санкт-Петербург, ул. Лермонтова, д. 2", "2345678901234567"),
  new Customer("Сидоров", "Сидор", "Новосибирск, ул. Гоголя, д. 3", "3456789012345678"),
  new Customer("Кузнецов", "Иван", "Екатеринбург, ул. Толстого, д. 4", "4567890123456789"),
  new Customer("Смирнов", "Петр", "Казань, ул. Пушкина, д. 5", "5678901234567890"),
];

// Сортировка покупателей в алфавитном порядке
customers.sort((a, b) => a.getLastName().localeCompare(b.getLastName()));

console.log("Список покупателей в алфавитном порядке:");
customers.forEach(customer => console.log(customer.getInfo()));

// Поиск покупателей по номеру банковского счета в заданном диапазоне
const MIN_ACCOUNT_NUMBER = "3000000000000000";
const MAX_ACCOUNT_NUMBER = "5000000000000000";
const filteredCustomers = customers.filter(customer => {
  const accountNumber = customer.getAccountNumber();
  return accountNumber >= MIN_ACCOUNT_NUMBER && accountNumber <= MAX_ACCOUNT_NUMBER;
});

console.log(`\nСписок покупателей с номером банковского счета в диапазоне от ${MIN_ACCOUNT_NUMBER} до ${MAX_ACCOUNT_NUMBER}:`);
filteredCustomers.forEach(customer => console.log(customer.getInfo()));

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
class Car {
  constructor(brand, cylinders, power) {
    this.brand = brand;
    this.cylinders = cylinders;
    this.power = power;
  }

  printInfo() {
    console.log(`Марка: ${this.brand}, Число цилиндров: ${this.cylinders}, Мощность: ${this.power}`);
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

class Truck extends Car {
  constructor(brand, cylinders, power, payloadCapacity) {
    super(brand, cylinders, power);
    this.payloadCapacity = payloadCapacity;
  }

  printInfo() {
    console.log(`Марка: ${this.brand}, Число цилиндров: ${this.cylinders}, Мощность: ${this.power}, Грузоподъемность: ${this.payloadCapacity}`);
  }

  setPayloadCapacity(payloadCapacity) {
    this.payloadCapacity = payloadCapacity;
  }
}

const myTruck = new Truck("Volvo", 6, 300, 10000);
myTruck.printInfo(); // Марка: Volvo, Число цилиндров: 6, Мощность: 300, Грузоподъемность: 10000
myTruck.setBrand("Scania");
myTruck.setPayloadCapacity(12000);
myTruck.printInfo(); // Марка: Scania, Число цилиндров: 6, Мощность: 300, Грузоподъемность: 12000