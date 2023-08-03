function hello() {
  console.log(this.name);
}
let name = hello.bind({ name: "vlad" });
name();//vlad
hello.call({ name: "vlad" });//vlad

//
let a = 10;
function yo() {
  a = 20;
}
yo();
console.log(a);//20

//
let a1 = { name: "vlados" };
a1[0] = " hey";
a2[1] = "hell";
console.log(a1);//{0: ' hey', name: 'vlados'}

//
class User {
  state = {
    counter: 1,
  };
  onChange = () => {
    console.log(this.state.counter);//1
    //setState асинхронный и нельзя ожидать что он будет изменен и чтобы словить свежее значения надо передать callback 2 параметром ({ counter: 100 }, () => ...)
    this.setState({ counter: 100 });
    console.log(this.state.counter);//1
  };
  render() {}
}

//
// у любого function и class есть proto
function hello() {}
function hello2() {}
console.log((hello.__proto__ === hello2.__proto__) === Function.prototype); // true
console.log(hello.prototype === Object.prototype); // false

//
let man = { name: "nik" };
//не функция а объект поэтому ошибка
man.call(this);//TypeError: man.call is not a function

//
a = 10;
function yo(a) {
  a = 100;
}
yo(30);
console.log(a);//10

//
let hel = new Promise(() => { });
let res = hel.then(() => { });//return Promis

//
console.log(0);
setTimeout(() => {
  console.log(1);
}, 0);
console.log(2);
//0 2 1

//
man = { name: "dim" };
man.toString()//'[object Object]'

//
man = { lastName: "kuz" };
function hello(first) {
  alert(first + this.lastName);
}
//const hello12 = hello.bind(man,'dm' )
const hello12 = hello.bind(man)
hello12('dm'); //dmKuz

//
const a2 = 10;
function yo(a) {
  a = 100;
  return a
}
yo(30);
console.log(a2);//10

//
let hello = new Promise(() => {});
//будет дожидаться пока Promise res или rej но т.к. мы ничего не передали поэтому и ничего и не получим
let result = hello.catch(() => 15);

//
//асинхронная функция всегда возврощает promise да же если мы ничего не передали в нее async function yo() {}
async function yo() {
  return 16;
}
res = yo();//Promise
res.then(r => console.log(r)) //16

//
let shit = () => () => () => () => 10;
shit()()()();//10

//
function hello() {}
man = {};
//man.prototypy === Function.prototype
//man.man === Object.prototype

//
man = {
  name: "jack",
  //т.к мы создаем только объект поэтому мы не можем к нему обращаться сразу поэтому  windows scope у hello(), если бы создавали сразу бы в классе class man то тогда класс сразу же создаеться и можно так к нему обращаться
  hello: () => {
    console.log(this.name);
  },
  hello2(){
    let bla = () => {
      console.log(this.name);
    }
    bla()
  }
};
man.hello(); // - windows scope
man.hello2(); // jack

//
const a3 = 10;
function yo() {
  a3 = 100;
}
yo();
console.log(a3)//TypeError: Assignment to constant variable.

//
(async () => {
    hello = new Promise((res, rej) => {
      rej(10);
    });
    try {
      let res = await hello;
    } catch (error) {
      console.log('error ', error)
    }
    console.log(res);//undefined
  } 
)();

//
man = { name: "fer", age: 28 };
man2 = { age: 18 };
let gog = { ...man, ...man2 };//{ name: "fer", age: 18 }

//
function makeCounter(start = 0) {
  let count = start
  console.log(count)
  return function () {
    return count++;
  };
}
let f = makeCounter();
f();//0
f();//1
// 1 () - внутреннея функци, 2() - примитивное число , 3 () - не может вызввать у примитива () поэтому error
makeCounter()()()//error

//
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
// After 1 second: prints "0"
// After 2 seconds: prints "1"
// After 3 seconds: prints "2"
// After 4 seconds: prints "3"
// After 5 seconds: prints "4"
// After 6 seconds: prints "5"
// After 7 seconds: prints "6"
// After 8 seconds: prints "7"
// After 9 seconds: prints "8"
// After 10 seconds: prints "9"
//if var 10 / 10 / 10 ...

//with work with var
var i = 0;
for (i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })(i);
}

//
console.log(1);
let hello = new Promise((res) => {
  console.log(2);
  res();
  console.log(3);
});
hello.then(() => {
  console.log(4);
});
console.log(5);
//2 3 1 5 4

//
console.log(0);
setTimeout(() => {
  {
    console.log(1);
  }
}, 1);
setTimeout(() => {
  {
    console.log(2);
  }
}, 0);
console.log(3);
//0 3 2 1

//
let a4 = { name: "Dimych" };
let names = ["tanya", "ignat", "dima"];
let newArr = names.forEach((n) => (a4[n] = "hey"));
console.log(a4);//{name: 'Dimych', tanya: 'hey', ignat: 'hey', dima: 'hey'}

//
a5 = {};
names = ["tanya", "ignat", "dima"];
a5 = names.reduce((total, el) => {
  total[el] = "hey";
  return total;
}, {});
console.log(a5); //{tanya: 'hey', ignat: 'hey', dima: 'hey'}

//
let users = [
  { name: "fer", age: 18 },
  { name: "ign", age: 21 },
];
let users2 = users.map((el) =>
  el.age === 18 ? { ...el, passed: true } : { ...el, passed: false }
);
console.log(users2);
// { name: 'fer', age: 18, passed: true }
// { name: 'ign', age: 21, passed: false }

//
console.log("a" > "z"); //false
console.log("abcdz" > "abcd"); //true
console.log("abcdz" > "abcd1"); //true
console.log("abcdz" > "z"); //false

//
names = ["ignat", "ignat z", "dim", "007"];
res = names.sort(); //['007', 'dim', 'ignat', 'ignat z

//
let state = {
  adress: {
    streets: [{ name: "sh" }, { name: "sy" }],
  },
  age: { value: 10 },
};
let newsate = {
  ...state,
  adress: {
    ...state.adress,
    streets: state.adress.streets.map((el) =>
      el.name === "sh" ? { ...el, name: "fg" } : el
    ),
  },
  age: { ...state.age },
};

//
let man1 = {
  _name: "gt",
  get name() {
    return this._name;
  },
  set name(val) {
    this._name = val;
  },
};
console.log(man1.name); // 'gt'
man1.name = "new name";
console.log(man1.name); // 'new name'

//
names = ["tany", "ignat", "dima"];
result = names.some((el) => el === "dima"); //true
result = names.every((el) => el === "dima"); //false

//
res = "abcdefg".indexOf("b"); //1
" abcdefg ".trim() === "abcdefg"; //true

//bind() call, ,  apply[]

//
new Promise((rs, rj) => {
  setTimeout(() => {
    rj(1);
  }, 0);
  rs(2);
})
  .then((value) => console.log(value)) //2
  .catch((value) => console.log(value));

//
let A = 1
try {
  A = sum(A,1)
} catch (error) {
  A += 2
} finally{
  A ++
}//4 

//
//виртуальный DOM: html parse-> DOM (совокупность объектов) напрямую взаимодействовать с DOM сложно поэтому React создал виртуальный DOM (более упрощеннные объекты по сравнению с оригинальным DOM). На любое измнение я буду создавать новую копию DOM виртуального и сравнивать со старой версией виртуального DOM. 

//React создает виртуальный DOM на основе JSX.JSX поподая в браузер становиться js -> далее React create.Element. и на основе их будет сравнения а потом уже перерисовка. 

//
var a1
var b1
let d = 1
let c
console.log(a1) // undefined
console.log(b1) //0
console.log(c) //undefined
console.log(d) // 1 
console.log(e1) //error is not defined
console.log(f1) // undefined
console.log(g1) // undefined
console.log(yo()) // function
console.log(yo2()) // is not a function

function yo(){}
var yo2 = () => {}

let e1
var f1 = 16
var g1

//
function sum(a,b) {
  return a + b
}
sum(10,12)
sum(10,1234)
sum(10,12422)
sum(10,12242424)

//корированая функция
function addto10(b) {
  return sum(10,b) 
}
addto10(1234)
addto10(12422)
addto10(12)
addto10(12242424)

//the same
//let addto10 = sum.bind(null,10)

//
function arrN (...num){console.log(num)}
arrN(1)//[1]
arrN(10)//[10]

//
function hello (a,b,c){console.log(a,b,c)}
hello(...[1, 2, 3])//1 2 3

//
function hello(a,b,c){
  return `${a} ${b} ${c}`
}

function carry(fun,...prms) {
  return (...param) => {
    return f(...prms,...param)
  }
}
let helloDK = carry(hello,'d','k')
helloDK('!',"&")

//
//target - непосредственный элемент, с которого было сработано событие.

//current target - узел элемента, к которому прикреплено обработчик события при всплытии. То есть currentTarget всегда ссылается на элемент, к которому прикреплен обработчик события, а target - на элемент, непосредственно спровоцировавший событие.
//e.stopPropogation() - не дает всплывать событию дальше
//e.preventDefault() - отменить дефолтное поведение, не обновляеться браузер

//
function hello(){
  console.log(this.name)
}
//у стрелочной функции нет prototype
let hello2 = () => {
  console.log(this.name)
}
hello.__proto__ === hello2.__proto__ //true === Function.prototype
//прототип есть у функции и у классов
hello.prototype === hello2.prototype//false

//
function hello(sign) {
  console.log(this.name + sign)
}
man = {name:'dim'}
//4.06