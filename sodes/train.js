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
console.log(1);
let hello = new Promise((res) => {
  console.log(2);
  res();
  console.log(3);
});
hello.then(() => {
  console.log(4);
}); // макротаска
console.log(5);
//1 2 3 5 4

console.log(0);
setTimeout(() => {
  console.log(1);
}, 0);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
//0 3 1 2

let a1 = { name: "vlad" };
let names = ["vlad", "ignat", "dima"];
names.forEach((n) => (a1[n] = "hey "));
console.log(a1); //{name: 'vlad', vlad: 'hey ', ignat: 'hey ', dima: 'hey '}

//
function hello() {} // __proto__ === Function.prototype
let man = {}; //__proto__ === Object.prototype

//
let man = {
  name: "dima",
  hello() {
    return alert(this.name);
  },
};
man.hello();

//
class Users {
  onClick() {}
  render() {
    return "<button onClick = {this.onClick}";
  }
}

//
(async () => {
  let hello = new Promise((res, rej) => {
    rej(10);
  });
  let res;
  try {
    res = await hello;
  } catch (error) {
    console.log(error); //error
  }
  console.log(res); //undefuned
})();

//
function count() {
  let value = 0;
  return function () {
    return value++;
  };
}
let f = count();
f(); //0
f(); //1
let f1 = count();

//
let man = { lastname: "vlad" };
function hello(firtsname) {
  alert(firtsname + this.lastname);
}
const hell = hello.bind(man, "vlad");

//
let shit = () => () => () => 10;
shit()()();

//
let ac = { name: "Dimish" };
ac[0] = "hey";
ac[1] = "yo";
ac[{}] = "yo";
ac[{ name: "hell" }] = "jhdsfsdf";
console.log(ac); //{0: 'hey', 1: 'yo', name: 'Dimish', [object Object]: 'jhdsfsdf'}

//_______Practice________//
//В массиве найти максимальное число
const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100];
let minValue = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minValue) {
    minValue = numbers[i];
  }
}
console.log(minValue);

const numbers2 = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100];
let maxValue = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
}
console.log(maxValue);

//Call, apply, bind
//bind (не выполняет функцию, возвращает другую функцию с навсегда заданным контекстом):
function foo() {
  console.log(this.name);
}

let a0 = { name: "Dima" };
let b0 = { name: "Viktor" };

const bindedFooA = foo.bind(a0);
const bindedFooB = foo.bind(b0);

bindedFooA(); // 'Dima'
bindedFooB(); // 'Viktor'

//bind * более сложный пример с параметрами:

function foo(age, city) {
  console.log(`${this.name}, ${age}, ${city}`);
}

let a2 = { name: "Dima" };
let b2 = { name: "Viktor" };

const bindedFooA1 = foo.bind(a2, 30);
const bindedFooB2 = foo.bind(b2, 18);

bindedFooA("Tbilisi"); // Dima, 30, Tbilisi
bindedFooB("Minsk"); // 'Viktor, 18, Minsk

//apply\call (сразу выполняют функцию, разница двух функций в том, как передавать параметры...    apply - array, call - comma (запятая))
function foo(age, city) {
  console.log(`this.name, ${age}, ${city}`);
}

a = { name: "Dima" };
b = { name: "Viktor" };

foo.apply(a, [31, "Tbilisi"]);
foo
  .call(b, 18, "Minsk")

  [
    //map, filter, reduce
    //map возвращает НОВЫЙ массив.map нужен, чтобы из массива, в котором содержаться элементы в оригинальном виде, получить массив той же длины, который сожержит "новые" элементы, полученные на основе элементов старого массива:
    ("1", "2", "3")
  ].map((el) => +el) // массив строк преобразовываем в массив чисел
  [(18, 20, 12)].map((age) => {
    if (age >= 18) {
      return { age: age }; //adult = true }
    } else {
      return { age }; //adult = false }
    }
  }) // из массива чисел получаем массив объектов, с полями: age и adult (взрослый): true\false в зависимости от того, возраст >= 18 или нет

  [
    //filter возвращает НОВЫЙ массив.filter нужен, чтобы получить новый отфильтрованный массив, в котором будет меньше элементов, чем в исходном, потому что мы фильтруем исходный, убираем ненужное:
    ("Minsk", "Moscow", "", "", "London", "")
  ].filter((el) => el !== ""); // пропускам в результирующий массив не пустые строки
[
  { age: 18, sex: "f", name: "Sveta" },
  { age: 17, sex: "f", name: "Sashka" },
  { age: 19, sex: "m", name: "Andrew" },
]
  .filter((person) => {
    return person.age >= 18 && person.sex === "f";
  }) // пропускаем на вечеринку только тех, кто девочка и кому 18+}

  [
    //reducer пробегается по всему массиву и на выход выдаёт какое-то одно обобщённое значение. Это может быть как новый массив, так и простое значение примитив или объект:
    ("Minsk", "Moscow", "", "", "London", "")
  ].reduce((acc, el) => {
    if (el !== "") acc++;
    return acc;
  }, 0) // подсчитываем, сколько у нас в массиве не пустых строк

  [
    ({ age: 18, sex: "f", name: "Sveta" },
    { age: 17, sex: "f", name: "Sashka" },
    { age: 19, sex: "m", name: "Andrew" })
  ].reduce((acc, person) => {
    if (person.age >= 18 && person.sex === "f") {
      acc.push(person);
    }
    return acc;
  }, []) // на выходе получаем новый массив, состоящий из людей, кто девочка и кому 18+ (но лучше эту задачу решать с помощью filter, но и так можно)

  [(1, 4, 6, 66, -12)].reduce((acc, number) => {
    acc += number;
    return acc;
  }, 0); // подсчёт суммы всех чисел в массиве

//Замыкание: counter
function makeCounter() {
  var currentCount = 1;
  return function () {
    // (**)
    return currentCount++;
  };
}
var counter = makeCounter(); // (*)

// каждый вызов увеличивает счётчик и возвращает результат
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3

// создать другой счётчик, он будет независим от первого
var counter2 = makeCounter();
alert(counter2()); // 1

//Наследование, пример на class\extends
class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    alert("I walk: " + this.name);
  }
  eat() {
    alert("I can eat");
  }
}

class Rabbit extends Animal {
  walk() {
    super.walk();
    alert("...and jump!");
  }
}

var rabbit = new Rabbit("Bunny");
rabbit.walk();
rabbit.eat();

// Промисификация, setInterval, setTimeout
doItAfter(2).then(() => console.log());

function doItAfter(seconds) {
  let promise = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, seconds * 1000);
  });
  return promise;
}

//Рекурсия: фибоначчи, факториал, сумма чисел от 0 до N ***
//Рекурсия
//1
const surfaceAreaCalculator = (radius) => {
  return 4 *3.14 * radius * radius
}
//2 функция вызыветься другой функцией
const sq = (radius) => {
  return radius * radius
}

const surfaceAreaCalculator2 = (radius) => {
  return 4 * 3.14 * sq(radius)
}

const mars = surfaceAreaCalculator2(3390)

//3 ищем факториал
const fact = (n) => {
  if (n === 1){
    return 1
  } else {
    return n * fact(n-1)
  }
}
//идем по коду т.к мы не знаем число в функции то он выполняет 3 - 1
// const fact = (3) => {
//   if (3 === 1) {
//     return 1
//   } else {
//     return 3 * fact(3 - 1)
//   }
// }

// т.к мы не знаем второе число в функции то он выполняет 2 - 1
// const fact = (2) => {
//   if (2 === 1) {
//     return 1
//   } else {
//     return 2 * fact(2 - 1)
//   }
// }

//и когда мы возвращаем число 1 то он мгновенно нам возвращает 1
// const fact = (1) => {
//   if (1 === 1) {
//     return 1
//   } else {
//     return n * fact(n - 1)
//   }
// }

// и далее 1 возврощаеться в предыдущий ящик с 2
// const fact = (2) => {
//   if (2 === 1) {
//     return 1
//   } else {
//     return 2 * 1
//   }
// }

// и далее 2 возврощаеться в предыдущий ящик с 3
// const fact = (3) => {
//   if (3 === 1) {
//     return 1
//   } else {
//     return 3 * 2
//   }
// }

// и далее возрощаеться во внешний мир и возрощаеться с ответом 6
//по итогу вызов такой функции со значенияем 3: 
fact(3)//6

//Требование к рекурсии 
//- простой базовый случай или сценарий (точка в которой нужно отсановиться)
//- правило погружения в рекурсии (сценарий углублением до базового случая)
//fact(3)
//3 * fact(2)
//3 * 2 * fact(1)
//3 * 2 * 1
//3 * 2
//6

//Вычислить факториал
//Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
//n! = n * (n - 1) * (n - 2) * ...*1
/* 1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}
alert(factorial(5)) // 120"

//Числа Фибоначчи
//Последовательность чисел Фибоначчи определяется формулой Fn = Fn - 1 + Fn - 2. То есть, следующее число получается как сумма двух предыдущих.Первые два числа равны 1, затем 2(1 + 1), затем 3(1 + 2), 5(2 + 3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
fib(3); // 2
fib(7); // 13
// fib(77); // не запускаем, подвесит браузер"
//посмотрим на отрывок вычислений 
/* ...
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)
... */
//Здесь видно, что значение fib(3) нужно одновременно и для fib(5) и для fib(4). В коде оно будет вычислено два раза, совершенно независимо.

//Сумма n чисел
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
console.log(sumTo(100));

