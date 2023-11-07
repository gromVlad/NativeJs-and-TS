//`Promise.all` - статический метод (нет у экземпляра объектов а есть у классов) в JavaScript, который принимает итерируемый объект (обычно массив) промисов в качестве входных данных и возвращает новый промис, который разрешается, когда все промисы во входном итерируемом объекте разрешаются, или отклоняется, если какой-либо из промисов в итерируемом объекте отклоняется.

//
let man = {
  say() {
    console.log(this.name);
  },
  name: "slava",
};
let say = man.say;
say(); //windows

//
var props = {
  say: man.say,
  name: "Dim",
};
props.say(); //Dim

//
//promise может вызван один раз если он был уже resolve то уже не будет reject
new Promise((res, rej) => {
  setTimeout(() => {
    rej(1);
  }, 0);
  res(2);
})
  .then((value) => console.log(value))
  .catch((value = console.log(value))); //2

//
man1 = { name: "d" };
man2 = { name: "s" };
let men = {};
men[man1] = 1;
men[man2] = 2;
//будет одинаковое свойство поэтому перезатрем его и будет последний [object Object] ...
console.log(men); //[object Object]:2

//
function getName(name) {
  return this.name;
}
function getAge(name) {
  return this.age;
}
function createClass(prop = []) {
  return prop.reduce((acc, prop) => {
    acc[prop] = prop;
    return acc;
  });
}
function craeteInstance(base) {
  return Object.create(base);
}

//
//методы функции bind call apply - привязать контекста
function setName(name) {
  this.name = name;
}
function setAge(age) {
  this.age = age;
}
setName("vlad"); //windows -> 'vlad
let names = { name: "newNames" };
setName.call(names, "frank");
setName.apply(names, ["frank"]);
let bindFun = setName.bind(names);
bindFun("frank")[
  //
  (1, 2, 3, 4)
].reduce((acc, el) => (acc += el), 0); //10

//
//прототип объекта
let a = Object.create({});

//
//нет prototype есть только __proto__
a = [];
b = [];
a.prototype = b.prototype; //undefined === undefined -> true

//
class Samurai {
  name = "yo"; //Samurai.prototype.name не в прототипе
  hello() {} //Samurai.prototype.hello - есть в прототипе // если hello => то также не было в prototype
}
let s = new Samurai();
s.__proto__; //Samurai.prototype

//
const a = 10;
function yo() {
  a = 100;
}
yo(); //error ->TypeError: Assignment to constant variable.

//
let a = 10;
var b = 10;
function yo(a) {
  a++;
  b--;
  c++;
}
yo();
console.log(a, b, c); //10 9 NaN -> error

//
function hello(s, s2) {
  console.log(this.name + s + s2);
}
let av = { name: "dima" };
var hello2 = hello.bind(av, "4");
hello2("h"); //dima4h

//
//нарушения имутабельности - нельзя изменять props
function User(props) {
  props.books.shift({ title: "выбери книгу" });

  return (
    <select>
      {props.book.sort().map((b) => (
        <option key={b}></option>
      ))}
    </select>
  );
}

//
function say(name) {
  console.log(name); //Dimych
}
function bla(yo) {
  say(yo);
}
function hey(props) {
  bla(props.name);
}
hey({ name: "Dimych" });

//
function dispatch(action) {
  console.log(action.type); // add
  console.log(action.title); //vlados
}
let a2 = (title) => ({ type: "add", title });
dispatch(a2("vlados"));

//
let a3 = 20;
function hell() {
  a3 = 10;
}
hell();
console.log(a3); //10

//
let dim = {
  name: "dim",
  toString() {
    return "чувак ";
  },
};
console.log("hello " + dim); //hello чувак
dim.__proto__ === Object.prototype;

//
let mans = {
  name: "gog",
  hello: () => {
    console.log(this.name);
  },
};
mans.hello(); // -- windows

//
let mans2 = {
  name: "gog",
  hello() {
    button.onclick = () => {
      console.log(this.name);
    };
  },
};
let hello = mans2.hello;
hello();

//
let pr1 = new Promise(() => {});
//каждый then возврощает новый promise
let xxx = pr1.then();
let yyy = pr1.then();
xxx === yyy; //false

//
let pr2 = new Promise((res) => {
  res(6);
});
xxx = pr2
  .then(() => 100)
  .catch(() => {})
  .then((res) => console.log(100)); //100 

