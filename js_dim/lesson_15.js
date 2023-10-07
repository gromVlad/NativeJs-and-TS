//__proto__//

class User {
  constructor(name){
    this.name = name
    this.state = {}
    this.someMethod = function (){}
  }
  render(){
    return 'My name is ' + this.name
  }

  //идет сразу в constructor обычно используем react чтобы не использовать bind
  blabala = () => {}
}
const user1 = new User('alex')
const user2 = new User('alex')
user1 === user2 //false
user1.name === user2.name //false
user1.state === user2.state //false
user1.render === user2.render //true
user1.someMethod === user2.someMethod  //false

//prototype -> сидят общие методы которые могут доставать из этого прототипа
User.prototype // {constructor:f, render:f}
//не использовать __proto__ в реальных проектах (они специалтно сделали их приватными) --> ccылка на прототип класса родительского c помощью чего он был создан
user1.__proto__ === User.prototype //true
user1.__proto__ === user2.__proto__ //true

let a ={}
a.proto__ === Object.prototype // true
let b =[]
a.proto__ === Array.prototype // true
function hello(){}
hello.__proto__ === Function.prototype // true
//и сам уже Function.prototype будет происходить от
Function.__proto__ === Function.prototype

//1) если это объект то он полюбому был создан с помощью какого-то класса
//2)и вот __proto__ этого объекта будет ссылаться на prototype этого класса

//---------------------
class User2 {}
class Superuser {}
const newUS = new User2()
newUS.__proto__ === User2.prototype // true
a = new Object()
a.__proto__ === Object.preventExtensions // true
a = () =>{}
a.__proto__ === Function.prototype // true
a = new String()
a.__proto__ === String.prototype //true
//по факт примитив но когда мы начинаем к нему обращаться с методами то она под капотом начинает мутировать как бы в объект
a = 'hello'
a.__proto__ === String.prototype // true
a = 4
a.__proto__ === Number.prototype //true
a = class{}
a.__proto__ === Function.prototype // true
Function.__proto__ === Function.prototype // true
a = Promise.resolve()
a.__proto__ == Promise.prototype // true
//тут мы вызываем класс а он всегда будет функцией т.к классы можно вызвать ()
Number.__proto__ === Function.prototype // true
a = []
a.__proto__.prototype === Array.prototype //true
Array.prototype.__proto__ === Object.prototype // true
Object.prototype.__proto__ //null

//-------------------
//fun constructor
function User3(name) {
  //неявно this и return если с new
  //this
  this.name = name
  this.state = {}
  this.someMethod = function () { }
  //return 
}
User3.prototype.render = function (){
  return 'hello friends'
}

const u1 = new User3('alex')
const u2 = new User3('vlad')
console.log(u1.render())//hello friends
console.log(u2.render())//hello friends

//------------------
a = []
a.__proto__.constructor === Array //true
function foo () {}
foo.__proto__.__proto__ === Object.prototype // true

//___prototype и __proto__ / JavaScript для собеседований 01__//
//proto есть у всех объектов . Почти всегда это объект.При том разные proto разных по типу объектов совершенно независимые,у одинаковых по типу объектов они равны.
let man = {} // man._proto___
let users = [] // userd._proto___
let age = 18 // age._proto___
let hello = 'hello' // hello ._proto___
function sub() { } // sub._proto___
let click = () => { } // click._proto___
let bool = true // bool._proto___

let man1 = {}
let man2 ={}
man1.__proto__ === man2.__proto__ // true

//созданны с помощью класса конструктора
let promise = new Promise (() => {}) // new Promise
let man3 = {} // new Object
let arr = [] //new Array 
let str = 'hell' // new String
let you = 25 //new Number
let hard = true // new Boolean
class youChannel{} // new Function
function gog (){} // new Function

//у любого объекта есть свойство proto
//Чтобы понимать точно нужно знать с помощью какой функции конструктора создан данный объект
class Sam {}
function Component () {}
const API = function (){}

Sam.prototype
Component.prototype
API.prototype
//каждый protoype это незаивисемый объект сам по себе с определенными набором свойст и методов

//__proto___ есть у любого объекта 
// prototype есть у class либо function
//__proto__ любого объекта ссылаеться на prototype  класса (функции конструктора), с помощью которой этот объект был создан

let promise1 = new Promise(() => { }) 
promise1.__proto__ === Promise.prototype // true
man1 = {}
man1.__proto__ === Object.prototype // true
age = 18
age.__proto__ === Number.prototype // true
let youtube = 'it-kam'
youtube.__proto__ === String.prototype // true
class Hell {}
Hell.__proto__ === Function.prototype // true
let chanell = new Hell()
chanell.__proto__ === Hell.prototype // true

let dimch = {name:'dim'} 
dimch.prototype //not prototype
dimch.__proto__ //yes Object.prototype
let num = [1,2,3,4,5]
num.prototype //not
num.__proto__ //yes Numbers.prototype

class Sam {
  constructor(name){
    this.name = name
  }
  hello (){
    alert(this.name)
  }
}
Sam.prototype //yes 
Sam.__proto__ //yes Function.prototype
let shogun = new Sam('vlad')
let shogun2 = new Sam('alex')
shogun.prototype // not
shogun.__proto__ === Sam.prototype
shogun.__proto__ === shogun2.__proto__ //true

const CompFun = () => {return 'hi !!!'}
CompFun.prototype // no
CompFun.__proto__  === Function.prototype //true

//Зачем классу нужен ptototype ? Если мы пытаемся прочитать свойство объета либо вызвать его методы а данного свойство нет, то объект полезет искать через сслыку proto в prototype класс с помощью которого он был создан
function Samurai (name) {
  this.name = name

}
Samurai.prototype.hello = function(){
  alert(this.name)
}

let sh = new Samurai('vlad')
sh.hello() // sh.__ptoto__ === Samurai.prototype  и там находиться hello

