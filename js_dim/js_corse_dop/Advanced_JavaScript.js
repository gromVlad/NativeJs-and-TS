//__Scope___//
//block, fun, global scope
//Nested function
let a = 10;
function name() {
  let b = 20;
  function name2(params) {
    let c = 30;
    console.log(a, b, c);
  }
  name2();
}
name();
//10 20 30 - > поиск начинаються снутри наружу

//___Clousere___//
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer(); //1 - > если внутри нету ничего то js переходи наверх и провереяет нет ли ее вверху снаружи
outer(); //1
outer(); //1
//всегда 1 т.к. всегда береться значение вверху снаружи и она определена как 0 поэтому начинаем всегда с нуля

function outer2() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer2();
fn(); //1
fn(); //2
//когда возвращаем функции из другой функции мы возвращаем комбинацию определения функции вместе с областью действия функции это позволило определению функции иметь связанную постоянную память в которой могли бы храниться оперативные данные между исполнением, такое сочетание функции и цепочки областей и есть замыкание. Тоесть она запоминает при возвращении уже новое значение переменной counter.

//___Currying Function___//(перенос)
//f(a,b,c) => f(a)(b)(c)
function sum(a, b, c) {
  return a + b + c;
}
sum(2, 3, 5); //10

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const currySum = curry(sum);
console.log(currySum(2)(3)(5)); //10

//the same
// const add2 = currySum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5())//10

//___this___//
//чтобы многоразо использовать что то
function sayname(name) {
  console.log(`My name is ${name}`);
}
sayname("Vlad");
sayname("Jack");

//_неявная привязка
const person = {
  name: "Vlad",
  sayname() {
    console.log(`My name is ${this.name}`);
  },
};
person.sayname(); //My name is Vlad // то что будет до точки то и this

//_явная привязка
function sayname2() {
  console.log(`My name is ${this.name}`);
}
sayname2.call(person); //My name is Vlad

//_новая привязка - c помощью функции конструктора
//с помощью new
function Person(name) {
  //this = {} -> this ссылается всегда на новый объект
  this.name = name;
}
const p1 = new Person("Vlad");
const p2 = new Person("batman");
console.log(p1.name, p2.name); // Vlad batman

//_обязательная привязка по умолчанию
sayname2(); //My name is undefined -> если ничего не определенно js будет использовать глобальную область видимости и установит в качестве глобального объекта если не находит то  undefined
globalThis.name = "Superman"; //global
sayname2(); //My name is Superman

//приоритет - новая привязка, явная привязка, неявная привязка, привязка по умолчанию

//___Prototype___//
function Person2(firstnameVar, LastnameVar) {
  this.firstname = firstnameVar;
  this.lastname = LastnameVar;
}
const person3 = new Person2("bruce", "wayne");
const person4 = new Person2("clark", "kent");

//add new methods
person3.getFullname = function () {
  return this.firstname + " " + this.lastname;
};
console.log(person3.getFullname()); //bruce wayne
//console.log(person4.getFullname())//error

//свойства proto указывает на объект и мы можем один один объект использовать для определение общих свойств чтобы получили оба прототипа функции добавим его в главный прототип
Person2.prototype.getFullname = function () {
  return this.firstname + " " + this.lastname;
};
//теперь оба наследника имеют эту функцию
console.log(person3.getFullname()); //bruce wayne
console.log(person4.getFullname()); //clark kent

//_proto наследование
function Person3(firstnameVar, LastnameVar) {
  this.firstname = firstnameVar;
  this.lastname = LastnameVar;
}
Person3.prototype.getFullname = function () {
  return this.firstname + " " + this.lastname;
};

function SuperHero(fName, Lname) {
  //this = {}
  Person3.call(this, fName, Lname);
  this.isSuper = true;
}
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime");
};
//объекта SuperHero прототипа нету это функция но по цепочке находит объект человека -> цепочка прототипов
SuperHero.prototype = Object.create(Person3.prototype);

const batman = new SuperHero("vlad", "bodnar");
console.log(batman); //{ firstname: 'vlad', lastname: 'bodnar', isSuper: true }
console.log(batman.getFullname()); //vlad bodnar

//что конструктор будет от SuperHero а не от человека
SuperHero.prototype.constructor = SuperHero;

//_____Сlass____//
class Persons {
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }

  getFullname() {
    return this.firstname + " " + this.lastname;
  }
}
const classOne = new Persons("vlados", "grom");
console.log(classOne.getFullname()); //vlados grom

class SuperHeros extends Persons {
  constructor(fname, lname) {
    super(fname, lname); //class Person
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fighting crime");
  }
}
const batmanWayne = new SuperHeros('Bruce',"wayne")
console.log(batmanWayne.fightCrime())//Fighting crime

//___Iterables and iterators - why?___//
//до этого было 3 цикла
const str = "vlad"
for (let index = 0; index < str.length; index++) {
  console.log(str.charAt(index))
} // v l a d

const arr = ['v','l','a','d']
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index])
}// v l a d

//чтобы итерировать единоообразно
//for of
const str1 = "vlad"
for (const char of str1){
  console.log(char)
}

const arr1 = ['v', 'l', 'a', 'd']
for (const item of str1) {
  console.log(item)
}

//итеративный протокол реализует нтеративность и он решает что являеться итератором а что нет -> итератором являеться объектом с методом next который возврощает объект с двумя свойствами и предстовляющими логические последовательности элементов которые можно было повторить.
//тут итератор объект которму мы присволили метод 
const obj = {
  [Symbol.iterator]:function(){
    let step = 0
    const iterator = {
      next:function(){
        step++
        if (step === 1){
          return { value:'Hello', done:"false"}
        } else if (step === 2){
          return { value: 'world', done: "false" }
        }
        return {value:undefined,done:true}
      }
    }
    return iterator
  }
}
for (const word of obj){
  console.log(word)
} // Hello World
//вот также примерно js пд капотом с помощью методов реализует логику итераторов

//___Generators___//
//особый класс функции который упрощает нам работу создание итераторов
function normFun() {
  console.log('hello')
  console.log('world')
}
normFun()//hello world

//функция генератора может отсановиться на пол пути а потом пролжить свое движение с точки на которой прервалось
function* generatorsFun() {
  yield 'Hello'
  yield 'World'
}
//возврощаем объект генератора котрый являеться итератором 
const genFunReturnObjects = generatorsFun() 
for (const word of genFunReturnObjects){
  console.log(word)
} // hello world