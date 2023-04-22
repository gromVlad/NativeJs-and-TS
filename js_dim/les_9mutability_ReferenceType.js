//ссылочный тип такие как объекты и массивы меняют свой тип данных по ссылке
let user = {
  name:"vlad",
  age:24
}

function incrtment (user){
  user.age++
}
incrtment(user) //25

const superman = user
superman.age = 1000
console.log(user)//{ name: 'vlad', age: 1000 }
console.log(superman)//{ name: 'vlad', age: 1000 }

//-------------------
let users = [
  {name:"vlad", age:24},
  {name:"john", age:32}
]
let admin = users

//методы мутирует массив
admin.push({ name: "kate", age: 18 })
console.log(admin)
/* [
  { name: 'vlad', age: 24 },
  { name: 'john', age: 32 },
  { name: 'kate', age: 18 }
] */
console.log(users)
/* [
  { name: 'vlad', age: 24 },
  { name: 'john', age: 32 },
  { name: 'kate', age: 18 }
] */

//-------------------
//primitiv type - not mutation
//примитивы только можно переприсвоить 
let a = 1000
let b = a
b += 1
console.log(a)//1000
console.log(b)//1001

//------------------
//ссылаються на один и тот же объект
user = {
  name:'vlad',
  age:24,
  address: {
    title:"minsk"
  }
}

let adr = user.address

let user2 = {
  name:'natasha',
  age:24,
  address:user.address
}

user2.address.title = "Kanary"
console.log(user)
/* { name: 'vlad', age: 24, address: { title: 'Kanary' } } */
console.log(adr)//{ title: 'Kanary' }
console.log(user2)
/* { name: 'natasha', age: 24, address: { title: 'Kanary' } } */

//---------------------
//array 
//посредством одних даже вложенных ссылочных данных меняються другие
const arrUsers = [user,user2,{name:'Misha', age:26,address:"bali"}]
let admins = [user,user2]
admins[0].name = "Dmitry"
console.log(user)
/* { name: 'Dmitry', age: 24, address: { title: 'Kanary' } } */
console.log(arrUsers)
/* [
  { name: 'Dmitry', age: 24, address: { title: 'Kanary' } },
  { name: 'natasha', age: 24, address: { title: 'Kanary' } },
  { name: 'Misha', age: 26, address: 'bali' }
] */

//когда рабтает с react избегать методов массивов которые не создают новые объекты а меняют текущие (мутирует их)