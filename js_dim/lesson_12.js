// __This__
//если не срогий режим то this равен объкту
//строгий режим могут быть чем угодно

//__________Global Scope_____________
//not use strict
console.log(this);//global scope -> window
console.log(this === window) //true
this.hello = 'hello'
console.log(window.hello)

//in function (not arrow!!!)
function foo() {
  console.log(this.name)
}

//______________Function (not arrow) _____________
const user = ()=> {
  console.log(this)
}
foo()
new foo()
foo.call()
foo.bind()
foo.apply()
//функция может быть по разному по контектсу определенному

//__вызов функции от имени объекта - что будет стоять слева от точки будет this
const user2 = {
  name:'Alex',
  showname(){
    console.log(this)
  }
}
user2.showname()//user2

const user3 = {
  name:"Hanna",
  showname:user.showname
}
user3.showname()//user3

function foo () {
  console.log(this.name)
}

// __функции с помощью методов функции (call,bind,apply)
function f001(a,b){
  console.log(this)
  console.log(a,b)
}
//передаем this первым аргументом
//call передаем через запятую параметры фуекции
foo.call({name:1},1,2)//{name:1}
foo.call({ name: 2 }, 1, 2)//{name:2}
foo.call({ name: 3 }, 1, 2)//{name:3}

//то же самое только параметры через массив 
foo.apply({name:"Hanna"},[1,2])

//то же самое только оборачивает все в обертку  и обращаемся уже через обертку , и параметры можно разносить по двух разным вызовам
//foo.bind({ name: 'John' })() -> альтернативный сппособ вызова
const bindFoo = foo.bind({name:'John'},1,2)
bindFoo()
//те параметры что уже передали уже нельзя поменять они как бы дальше идут при вызове если например 4 параметра функции а передали только 2 то остальные потом при вызове передаем 
const bindFoo2 = foo.bind({ name: 'John' }, 1, 2)
bindFoo2(3,4)

//__вызвана с помощью ключевого слова new -> this новый бъект
function foo12() {
  console.log(this)
}
new foo12()//вызвана как конструктор //const this = {} return this -> новый объект котрый сразу возвращаеться

function userConstructor(name,age){
  const newUser = {}

  newUser.name = name
  newUser.age = name

  return newUser
}
const alex = userConstructor("alex",23)
const hanna = userConstructor("hanna",28)
console.log(alex)//{name:"alex",age:23}
console.log(hanna)//{name:"hanna",28}

//при использовании new можно опускать create and return такие функции пишем с большой буквы
function UserConstructor(name, age) {
  //const this = {}
  this.name = name
  this.age = name
  //return this
}
const alex1 = new UserConstructor("alex", 23)
const hanna2 = new UserConstructor("hanna", 28)
console.log(alex)//{name:"alex",age:23}
console.log(hanna)//{name:"hanna",28}

//!!!правила new приоритней методов, а методы приоритетней вызовов объекта

//обычный вызов функции
function foo(){
  console.log(this)
}
foo() //this -- > undefined --> window
foo.call(undefined)//foo.call() --> window

// ___Arrow function ___
//нет внешенго scope выпрыгивает наверх
const fooArrow = () => {
  console.log(this)
}
fooArrow()//window

const fooArrow2 = () => {
  hi:() => {
    console.log(this)
  }
}
fooArrow()//window

const userArr = {
  hi(){
    //this --> 

    const foo = () => {
      console.log(this)
    }

    foo()
  }
}
user.hi() //userrArr

const userArr2 = {
  hi() {
    //this --> 

    const foo = () => {
      console.log(this)
    }

    foo.call({hello:"hello"})
  }
}
user.hi()//user /  arrow не применит this а пойдет во внешний scope

//Примеры
//
const userEx = {
  age:23,
  showAge() {
    //this -> {age:20}

    const foo = () => {
      console.log(this.age)
    }
    foo.call({age:12})
  }
}
user.showAge.call({age:20})//age 20

//
const a = {
  msg:'hello world',

  getMsg(){
    const msg = 'hello'
    return this.msg
  },
  getMsg2:() =>{
    const msg = 'hello'
    return this.msg
  }
}
a.getMsg()//hello world
a.getMsg2()//window -> undefined

//
const a2 = {
  name:'a',
  getname() {
    console.log(this.name)
  },
}

const b = {
  name:'b'
}

const c = {
  name:'c'
}

a2.getname() //{name:'a'}

//если первый раз контект вызвали дальше уже второй раз не действуют
a2.getname() 
  .bind(b)
  .call(c)//b

a2.getname()//{name:'a'}
a2.getname.call(b)//{ name: 'b' }

//
this.name = 'global'
const aEx = {
  name:'a',
  go: function() {
    console.log(this.name)
  },

  run:() => {
    console.log(this.name)
  },

  stop:function () {
    (() => {
      console.log(this.name)
    }).call({name:'call'})
  }
}
a.go()//{name:a}
a.run()//'global'
a.stop()//{name:a}

//
const userEx2 = {
  name:'Alex',
  showname(){
    console.log(this.name)
  }
}

const foo = (cb) => {
  cb()
}
foo(user.showname)//window
setTimeout(user.showname.bind(user), 1000);//{name:"Alex"}

//
class Header extends React.Component {
  state = {
    count:0
  }

  //поэтому чтобы постоянно не передовать контектст мы пишем стрелочную функцию onClick =  () => {
  onClick () {
    this.setState ({
      count:this.state.count++
    })
  }

  render() {
    return (
      //передаем контектс чтобы не потерялся если стрелка то не надо будет this.onClick
      <Avatar onClick={this.onClick.bind(this)}/>
    )
  }
}

const Avatar = ({ onClick }) => {
  return (
    <div onClick={onClick}></div>
  )
}

//
const userEx3 = {
  group: "Samurai",
  students:['hanna','alex'],
  showname() {
    //this in foreach undefined - нет вызова контектса внутри
    this.students.forEach(function(students) {
      console.log(this.group + " " + students)
    })
    //this obj 
    this.students.forEach((students) => {
      console.log(this.group + " " + students)
    })
  }
}
setTimeout(userEx3.showname, timeout);

// __ Strict mode ___
//this может быть все что угодно а в нестрогом режиме this всегда объект
function foo () {
  console.log(this)
}
//что передаем то и будет this
foo.call(undefined)

//!!!Правило 
//1)global scope - this = global objects

//2.function (not arrow!!!) ---> смотри как вызываеться
 //вызвана с помощью new новый объект
 //вызвана с помощью методов функции (call,bind,apply)
 //вызвана от имени какого объекта ---> this то что слева от точки
 //обычный вызов функции --- undefined (use strict --> window)

