//`Promise.all` - статический метод (нет у экземпляра объектов а есть у классов) в JavaScript, который принимает итерируемый объект (обычно массив) промисов в качестве входных данных и возвращает новый промис, который разрешается, когда все промисы во входном итерируемом объекте разрешаются, или отклоняется, если какой-либо из промисов в итерируемом объекте отклоняется.

//
let man = {
  say (){
    console.log(this.name)
  },
  name:'slava'
}
let say = man.say
say()//windows

//
var props = {
  say:man.say,
  name:'Dim'
}
props.say()//Dim

//
//promise может вызван один раз если он был уже resolve то уже не будет reject
new Promise ((res,rej) => {
  setTimeout(() => {
    rej(1)
  }, 0);
  res(2)
}).then(value => console.log(value)).catch(value = console.log(value))//2

//
man1 ={name:'d'}
man2 ={name:'s'}
let men = {}
men[man1] = 1
men[man2] = 2
//будет одинаковое свойство поэтому перезатрем его и будет последний [object Object] ...
console.log(men)//[object Object]:2

//
function getName(name){
  return this.name 
}
function getAge(name){
 return  this.age 
}
function createClass(prop = []){
  return prop.reduce((acc,prop) => {
    acc[prop] = prop
    return acc
  })
}
function craeteInstance(base) {
  return Object.create(base)
}

//
//методы функции bind call apply - привязать контекста
function setName(name) {
  this.name = name
}
function setAge(age) {
  this.age = age
}
setName('vlad')//windows -> 'vlad
let names = {name:'newNames'}
setName.call(names,'frank')
setName.apply(names,['frank'])
let bindFun = setName.bind(names)
bindFun('frank')

//
[1,2,3,4].reduce((acc,el) => acc += el,0)//10

//
//прототип объекта
let a = Object.create({})

//
//нет prototype есть только __proto__
a = []
b = []
a.prototype = b.prototype //undefined === undefined -> true

//
class Samurai {
  name ='yo'
  hello(){}
}
let s = new Samurai()
s.__proto__//Samurai.prototype
//1.17 