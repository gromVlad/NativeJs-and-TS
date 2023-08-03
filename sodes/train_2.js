function hello() {
  console.log(this.name);
}
let name = hello.bind({ name: "vlad" });
name();
hello.call({ name: "vlad" });

//
let a = 10;
function yo() {
  a = 20;
}
yo();
console.log(a);

//
let a1 = { name: "vlados" };
a1[0] = " hey";
a2[1] = "hell";
console.log(a1);

//
class User {
  state = {
    counter: 1,
  };
  onChange = () => {
    console.log(this.state.counter);
    this.setState({ counter: 100 });
    console.log(this.state.counter);
  };
  render() {}
}

//
function hello() {}
function hello2() {}
//hello.__proto__ === hello2.__proto__
//hello.prototype === Object.prototype

//
let man = { name: "nik" };
man.call(this);

//
a = 10;
function yo(a) {
  a = 100;
}
yo(30);
console.log(a);

//
let hel = new Promise(() => {});
let res = hel.then(() => 6);

//
console.log(0);
setTimeout(() => {
  console.log(1);
}, 0);
console.log(2);

//
man = { name: "dim" };
//man.toString()

//
man = { lastName: "kuz" };
function hello(first) {
  alert(first + this.lastName);
}
hello(); //dmKuz

//
const a2 = 10;
function yo(a) {
  a = 100;
}
yo(30);
console.log(a);

//
let hello = new Promise(() => {});
let result = hello.catch(() => 15);

//
async function yo() {
  return 16;
}
res = yo();

//
let shit = () => () => () => () => 10;
shit()()()();

//
function hello() {}
man = {};
//man.prototypy?
//man.man?

//
man = {
  name: "jack",
  hello: () => {
    console.log(this.name);
  },
};
man.hello()// -

//
const a3 = 10
function yo (){
  a = 100
}
yo()
console.log(a)

//
(async() => {
  hello = new Promise((res, rej) => {
    rej(10)
  })
  let res = await hello
  console.log(res)
})()

//
man = {name:'fer', age:28}
man2 = {age:18}
let gog = {...man,...man2}

//
function makeCounter(){
  let count = 0
  return function(){
    return  count++
  }
}
makeCounter()

//
for (let i = 0;i < 10;i++){
  setTimeout(() => {
    console.log(i)
  }, i * 1000);
}

//
console.log(1)
let hello = new Promise((res) => {
  console.log(2)
  res()
  console.log(3)
})
hello.then(() => {console.log(4)})
console.log(5)

//
console.log(0)
setTimeout(() => {
  {console.log(1)}
}, 1);
setTimeout(() => {
  {console.log(2)}
}, 0);
console.log(3)

//
let a4 = {name:'Dimych'}
let names = ['tanya','ignat','dima']
names.forEach(n => a[n] = 'hey')
console.log(a4)

//
a5 = {}
names = ['tanya', 'ignat', 'dima']
a5 = names.reduce((total,el) => {
  total[el] = 'hey'
  return total
},{})
console.log(a5)//{tanya: 'hey', ignat: 'hey', dima: 'hey'}

//
let users=[
  {name:'fer',age:18},
  {name:'ign',age:21}
]
let users2 = users.map(el => el.age === 18 ? { ...el, passed: true } : { ...el, passed: false })
console.log(users2)
// { name: 'fer', age: 18, passed: true }
// { name: 'ign', age: 21, passed: false }

//
console.log('a' > 'z') //false
console.log('abcdz' > 'abcd') //true
console.log('abcdz' > 'abcd1') //true
console.log('abcdz' > 'z') //false

//
names = ['ignat','ignat z', 'dim','007']
res = names.sort()//['007', 'dim', 'ignat', 'ignat z

//
let state = {
  adress: {
    streets:[
      {name:'sh'},
      {name:'sy'}
    ]
  },
  age:{value:10}
}
let newsate = {
  ...state,
  adress: {
    ...state.adress, streets: state.adress.streets.map(el => el.name === 'sh'? {...el,name:'fg'} : el)},age:{...state.age}
}

// 
man = {
  get name(){
    return 'ft'
  }
}
man.name

//
names = ['tany','ignat','dima']
result = names.some(el => el === 'dima' )//true
result = names.every(el => el === 'dima')//false

//
res = 'abcdefg'.indexOf('b')//1
' abcdefg '.trim() === 'abcdefg' //true

//bind() call, ,  apply[]

//
new Promise ((rs,rj) => {
  setTimeout(() => {
    rj(1)
  }, 0);
  rs(2)
})
.then(value => console.log(value))//2
.catch(value => console.log(value))

//