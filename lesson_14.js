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
