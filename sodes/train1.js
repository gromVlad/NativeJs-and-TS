//Разбор большой тренировки для Собеседований
//функцие кот орые возврощают  true или false это функции предикаты
let arr = [1, 2, 3];
let result = arr.some((n) => n === 3);
let result1 = arr.every((n) => n === 3);

let str = "fdnfdllfdgfdg fdgfd dfgdfg".indexOf("fd"); //3 (если не нашел то -1)
let str1 = "fdnfdllfdgfdg fdgfd dfgdfg".trim(); //обрезать что то

//bind call apply([]) - points this

//Promise
new Promise((res, rej) => {
  setTimeout(() => {
    res();
  }, 1000);
});

//reduse - акуммулирует значения
let red = arr.reduce((acc, el) => (acc += el), 0);
let red1 = arr.reduce((acc, el) => {
  acc[el] = el;
  return acc;
}, {});

let users = [
  { name: "vlad", age: 18 },
  { name: "fade", age: 28 },
];
let users3 = users
  .filter((u) => u.age === 18)
  .map((u) => ({ ...u, passed: true }));

// cравнение строки по символам
"a" > "z"; //false
"asda" > "z"; //false
//смотреть в таблице юникодов -Ю у кадлого свой номер

//copy state
let state = {
  address: {
    street: [{ name: "sdfsdf" }, { name: "xcvxcvxv" }],
  },
  age: 28,
};
let stateCopy = {
  ...state,
  address: {
    ...state.address,
    street: [...state.address.street, { hello: "vlad" }],
  },
};

//get and set
let man = {
  _name: "hi",
  get name() {
    return this._name;
  },
  age() {
    return 18;
  },
  set name(value) {
    this._name = value;
  },
};
man.name; //hi
man.name = "vlad";
man.name; //vlad

//у любого fun and class есть prototype
function hello(params) {}
function hello1(params) {}
//hello.__proto__ === hello1.__proto___ === Function.prototype
//hello.prototype === Object.prototype

//var - глобальная переменная и будет постоянно ровняться 10,чтобы исправить это надо поменять var на let // или использовать замыкание
for (var index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, index * 1000); // 10 , 10, 10, 10 ,10
}
//с замыканием
var i = 0;
for (i = 0; index < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })(i);
}

//
let a = 10;
function yo() {
  //доступен внутри функции
  var a = 100;
  if (true) {
    //это a перезатрет выше a в функции
    var a = 3;
  }
}
yo();

//
console.log(1)
let hello = new Promise ((res) => {
  console.log(2)
  res()
  console.log(3)
})
hello.then(() => {console.log(4)}) // макротаска
console.log(5)
//1 2 3 5 4

console.log(0)
setTimeout(() => {
  console.log(1)
}, 0);
setTimeout(() => {
  console.log(2)
}, 0);
console.log(3)
//0 3 1 2

let a1 = {name:'vlad'}
let names = ['vlad','ignat','dima']
names.forEach(n => a1[n] = 'hey ')
console.log(a1)//{name: 'vlad', vlad: 'hey ', ignat: 'hey ', dima: 'hey '}

//
function hello() { }// __proto__ === Function.prototype
let man = {} //__proto__ === Object.prototype

//
let man = {
  name:'dima',
  hello(){
    return alert(this.name)
  }
}
man.hello()

//
class Users {
  onClick(){}
  render(){
    return '<button onClick = {this.onClick}'
  }
}

//
(async () => {
  let hello = new Promise((res,rej) => {
    rej(10)
  })
  let res
  try {
    res = await hello
  } catch (error) {
    console.log(error) //error
  }
  console.log(res) //undefuned
})()

//
function count() {
  let value = 0
  return function(){
    return value++
  }
}
let f = count()
f() //0
f() //1
let f1 = count()

//
let man = {lastname:'vlad'}
function hello (firtsname){
  alert(firtsname + this.lastname)
}
const hell = hello.bind(man,'vlad')

//
let shit = () => () => () => 10
shit()()()

//
let ac = {name:'Dimish'}
ac[0] = "hey"
ac[1] = 'yo'
ac[{}] = 'yo'
ac[{name:'hell'}] = 'jhdsfsdf'
console.log(ac)//{0: 'hey', 1: 'yo', name: 'Dimish', [object Object]: 'jhdsfsdf'}

