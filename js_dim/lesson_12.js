// __This__
//если не срогий режим то this равен объкту
//строгий режим могут быть чем угодно

//__________Global Scope_____________
//not use strict
console.log(this); //global scope -> window
console.log(this === window); //true
this.hello = "hello";
console.log(window.hello);

//in function (not arrow!!!)
function foo() {
  console.log(this.name);
}

//______________Function (not arrow) _____________
const user = () => {
  console.log(this);
};
foo();
new foo();
foo.call();
foo.bind();
foo.apply();
//функция может быть по разному по контектсу определенному

//__вызов функции от имени объекта - что будет стоять слева от точки будет this
const user2 = {
  name: "Alex",
  showname() {
    console.log(this);
  },
};
user2.showname(); //user2

const user3 = {
  name: "Hanna",
  showname: user.showname,
};
user3.showname(); //user3

function foo() {
  console.log(this.name);
}

// __функции с помощью методов функции (call,bind,apply)
function f001(a, b) {
  console.log(this);
  console.log(a, b);
}
//передаем this первым аргументом
//call передаем через запятую параметры фуекции
foo.call({ name: 1 }, 1, 2); //{name:1}
foo.call({ name: 2 }, 1, 2); //{name:2}
foo.call({ name: 3 }, 1, 2); //{name:3}

//то же самое только параметры через массив
foo.apply({ name: "Hanna" }, [1, 2]);

//то же самое только оборачивает все в обертку  и обращаемся уже через обертку , и параметры можно разносить по двух разным вызовам
//foo.bind({ name: 'John' })() -> альтернативный сппособ вызова
const bindFoo = foo.bind({ name: "John" }, 1, 2);
bindFoo();
//те параметры что уже передали уже нельзя поменять они как бы дальше идут при вызове если например 4 параметра функции а передали только 2 то остальные потом при вызове передаем
const bindFoo2 = foo.bind({ name: "John" }, 1, 2);
bindFoo2(3, 4);

//__вызвана с помощью ключевого слова new -> this новый бъект
function foo12() {
  console.log(this);
}
new foo12(); //вызвана как конструктор //const this = {} return this -> новый объект котрый сразу возвращаеться

function userConstructor(name, age) {
  const newUser = {};

  newUser.name = name;
  newUser.age = name;

  return newUser;
}
const alex = userConstructor("alex", 23);
const hanna = userConstructor("hanna", 28);
console.log(alex); //{name:"alex",age:23}
console.log(hanna); //{name:"hanna",28}

//при использовании new можно опускать create and return такие функции пишем с большой буквы
function UserConstructor(name, age) {
  //const this = {}
  this.name = name;
  this.age = name;
  //return this
}
const alex1 = new UserConstructor("alex", 23);
const hanna2 = new UserConstructor("hanna", 28);
console.log(alex); //{name:"alex",age:23}
console.log(hanna); //{name:"hanna",28}

//!!!правила new приоритней методов, а методы приоритетней вызовов объекта

//обычный вызов функции
function foo() {
  console.log(this);
}
foo(); //this -- > undefined --> window
foo.call(undefined); //foo.call() --> window

// ___Arrow function ___
//нет внешенго scope выпрыгивает наверх
const fooArrow = () => {
  console.log(this);
};
fooArrow(); //window

const fooArrow2 = () => {
  hi: () => {
    console.log(this);
  };
};
fooArrow(); //window

const userArr = {
  hi() {
    //this -->

    const foo = () => {
      console.log(this);
    };

    foo();
  },
};
user.hi(); //userrArr

const userArr2 = {
  hi() {
    //this -->

    const foo = () => {
      console.log(this);
    };

    foo.call({ hello: "hello" });
  },
};
user.hi(); //user /  arrow не применит this а пойдет во внешний scope

//Примеры
//
const userEx = {
  age: 23,
  showAge() {
    //this -> {age:20}

    const foo = () => {
      console.log(this.age);
    };
    foo.call({ age: 12 });
  },
};
user.showAge.call({ age: 20 }); //age 20

//
const a = {
  msg: "hello world",

  getMsg() {
    const msg = "hello";
    return this.msg;
  },
  getMsg2: () => {
    const msg = "hello";
    return this.msg;
  },
};
a.getMsg(); //hello world
a.getMsg2(); //window -> undefined

//
const a2 = {
  name: "a",
  getname() {
    console.log(this.name);
  },
};

const b = {
  name: "b",
};

const c = {
  name: "c",
};

a2.getname(); //{name:'a'}

//если первый раз контект вызвали дальше уже второй раз не действуют
a2.getname().bind(b).call(c); //b

a2.getname(); //{name:'a'}
a2.getname.call(b); //{ name: 'b' }

//
this.name = "global";
const aEx = {
  name: "a",
  go: function () {
    console.log(this.name);
  },

  run: () => {
    console.log(this.name);
  },

  stop: function () {
    (() => {
      console.log(this.name);
    }).call({ name: "call" });
  },
};
a.go(); //{name:a}
a.run(); //'global'
a.stop(); //{name:a}

//
const userEx2 = {
  name: "Alex",
  showname() {
    console.log(this.name);
  },
};

const foo = (cb) => {
  cb();
};
foo(user.showname); //window
setTimeout(user.showname.bind(user), 1000); //{name:"Alex"}

//
class Header extends React.Component {
  state = {
    count: 0,
  };

  //поэтому чтобы постоянно не передовать контектст мы пишем стрелочную функцию onClick =  () => {
  onClick() {
    this.setState({
      count: this.state.count++,
    });
  }

  render() {
    return (
      //передаем контектс чтобы не потерялся если стрелка то не надо будет this.onClick
      <Avatar onClick={this.onClick.bind(this)} />
    );
  }
}

const Avatar = ({ onClick }) => {
  return <div onClick={onClick}></div>;
};

//
const userEx3 = {
  group: "Samurai",
  students: ["hanna", "alex"],
  showname() {
    //this in foreach undefined - нет вызова контектса внутри
    this.students.forEach(function (students) {
      console.log(this.group + " " + students);
    });
    //this obj
    this.students.forEach((students) => {
      console.log(this.group + " " + students);
    });
  },
};
setTimeout(userEx3.showname, timeout);

// __ Strict mode ___
//this может быть все что угодно а в нестрогом режиме this всегда объект
function foo() {
  console.log(this);
}
//что передаем то и будет this
foo.call(undefined);

//!!!Правило
//1)global scope - this = global objects

//2.function (not arrow!!!) ---> смотри как вызываеться
//вызвана с помощью new новый объект
//вызвана с помощью методов функции (call,bind,apply)
//вызвана от имени какого объекта ---> this то что слева от точки
//обычный вызов функции --- undefined (use strict --> window)

//__Practice___
// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
  name: string,
  age: number,
};

let someObj: someObjType = {
  name: "Eugene",
  age: 32,
  greeting() {
    return `My name is ${this.name}. I am ${this.age}`;
  },
};
someObj.greeting();

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
const counter = {
  currentCount: 0,
  getCurrentCount() {
    return this.currentCount;
  },
  increment() {
    this.currentCount++;
    return this;
  },
  decrement() {
    this.currentCount--;
    return this;
  },
  setCurrentCount(value) {
    this.currentCount = value;
    return this;
  },
  restCurrentCount() {
    this.currentCount = 0;
    return this;
  },
};

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
counter
  .setCurrentCount(10)
  .increment()
  .increment()
  .increment()
  .decrement()
  .getCurrentCount(); // вернет 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

function myFirstConstructorFunc(name, age) {
  return {
    name,
    age,
    greeting: someObj.greeting.bind({ name, age }),
  };
}

const newObj = myFirstConstructorFunc("Elena", 35);
console.log(newObj.greeting()); // "My name is Elena. I am 35"

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = { name: "One" };
let Two = {
  name: "Two",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
let a = Two.sayHello.bind(One)
console.log(a())

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
let helperObj = {
  name: "Helper",
  age: null,
  changeName: function (newName) {
    this.name = newName;
    return this;
  },
  setAge: function (newAge) {
    this.age = newAge;
    return this;
  },
  greeting() {
    two.sayHello.bind(this)();
  }
};

helperObj.changeName("John").setAge(25).greeting(); // "Hello, my name is John"

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a, b) {
  return a + b;
}

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call
function setObjectName(obj, helper) {
  return function (name) {
    obj.name = name;
    return obj;
  }
}

let setOneName = setObjectName(One, helperObj);
setOneName('Alex');
console.log(One); // { name: 'Alex' }

helperObj.setAge.call(Two, 30);
console.log(Two); // { name: 'Two', sayHello: [Function: sayHello], age: 30 }

One.hi = function () {
  helperObj.greeting.call(Two);
}

One.hi(); // "Hello, my name is Two"