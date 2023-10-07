//____________prototypes________//
//как бы наследуем одно из другого
const a = {
  inner: {},
};

const b = {
  inner: a.inner,
};
//ссылка на один и тот же объект
a.inner === b.inner; //this

//-----------
const alex = {
  name: "Alex",
  showName() {
    console.log(this.name);
  },
};

const hanna = {
  name: "hanna",
};

alex.showName.call(hanna); //hanna

//the same with proto / устанавливает prototype на alex / и если оно что то не найдет в hanne  он пойдет по ссылке proto в alex и найдет там метод
hanna.__proto__ = alex; //указали прототип чего hanna
hanna.showName(); ////hanna

//----------------------
const baseUser = {
  basename: "base",
};

const user = {
  showname() {
    console.log(this.name);
  },
};

const superuser = {
  name: "Super",
  isSuper: true,
};

const hanna2 = {
  name: "hanna",
};

user.__proto__ = baseUser;
superuser.__proto__ = user;
hanna2.__proto__ = superuser;
baseUser.__proto = null;
hanna2.basename; //'base'
hanna.age; // undefined

//----------------------------
function User(name) {
  this.name = name;
}
const alex2 = new User();

//внутри функции мы всегда найдем метод prototype явл. объектом у которого всегда есть свойство constructor  который ссылаеться на ту же функцию
const foo = {
  prototype: {
    constructor: foo,
  },
};

//-----------------------
const userPrototype = {
  shownames() {
    console.log(this.name);
  },
};

const alex3 = {
  name: "Alex",
};

const hanna3 = {
  name: "hanna",
};
alex3.__proto__ = userPrototype;
hanna3.__proto__ = userPrototype;

//создали с помощью кастомной функции
const userCreator = (name) => {
  const userPrototype = {
    shownames() {
      console.log(this.name);
    },
  };
  const newUser = {};
  newUser.__proto__ = userPrototype;
  newUser.name = name;
  return newUser;
};
const alexReturn = userCreator('Alex')
const hannaReturn = userCreator('Hanna')

//--------------------
//user.prototype -> {constructor: User}
function User (name) {
  this.name = name
}

//add метод in User
//тоесть этот метод не будет лежать в самом User а будет сидеть в prototype который также будет доступен из constructor другим наследникам как Alex и hanna
User.prototype.showName = function (){
  console.log(this.name)
}

//как аналог alex.__proto__ = User.prototype
const alexNew = new User('Alex')

// hanna3.__proto__ = userPrototype;
const hannaNew = new User('Hanna')
//также запись new User('Hanna') анолигично записи alex.constructor('Hanna')

//-----------------
//правило 
//по умолчанию дефолтное значение proto будет свойсвом прототипа 
//x.__proto__ ----> x constructor.prototype
({}).__proto__ === Object.prototype //true
([]).__proto__===Array.prototype // true
(() => {}).__proto__ === Function.prototype // true
Array.prototype.__proto__ === Object.prototype //true
Function.prototype.__proto__ === Object.prototype // true
(5).__proto__ === Number.prototype // true
Object.__proto__ === Function.prototype // true

//также мы можем в prototype создавть свои кастомны методы 
Array.prototype.test = () => {
  console.log('test')
}
[].test()//test

//1 -> прототип  объект на который у каких-то других есть скрытая ссылка prototype
//2 -> скрытое свойство указывает на какой то prototype
//3 -> у всех функции есть свойство prototype который будет объект по дефолту где есть свойства конструктора который равно этой же функции

BkBtGW5AJuDFc7J