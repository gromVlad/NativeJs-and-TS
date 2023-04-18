//____________Lesson 1______________

//primitive
//number,string,boolean, null, undefined, NaN, Symbol, BigInt.


//-------------------------------------
//objects
//arrays, objects,function.
//difficult structure then primitive
//includes property and method
//ссылочный тип данных

//Object.create()
let person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

//new Object()
const person2 = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 
console.log(person2)

const user = {
  name: "vlad",
  age: 26
} // literal objects -> литерал объекта эта набор символов чтенения и выполнения которые представляют собой команду для интерпритатора на создание объектов в оперативной памяти браузера.Виртуальная сущность. Не есть объект а доин из способов на создание объектов.Также инструкцию на создание объектов также можем дать еще другими способами (New object, object create).
//Особенность что будет записоваться ссылка  в переменной user.

const user2 = user //две переменные имеют ссылку на один и тот же объект(на номер ячейки в памяти)
user2.name = "Alex"
console.log(user)//{ name: 'Alex', age: 26 }
console.log(user2)//{ name: 'Alex', age: 26 }


//--------------------------------------
//делаем копию объекта но ссылка будет разная
//1
const user3 = {
  name:user.name,
  age:user.age,
}
console.log(user === user3) //false 

//2 with help spread
const usercopy = {...user} 
console.log(usercopy === user)//false 

const users = [
  {
    id:1,
    name:"vlad",
    isstudent:true,
  },
  {
    id:2,
    name:"Andor",
    isstudent:false,
  },
  {
    id:3,
    name:"Jack",
    isstudent:true,
  }
]
const usersCopy = [...users]
console.log(usercopy === users)//false


//-----------------------------------
//!!!В react мы будем работать с данными но неизменяя старые, то есть если мы хотим совершить мутацию то мы должны сделать копию с данными, далее внести изменения в копию, оригинал останеться без изменений, используем копию с изменением.Это назыветься имнитабельно работать с данными!!!

//C(R)UD - все манипуляции с даными -> create data, update data, delete data.

//new arrays
const newUser ={
  name:'John',
  isStudent:true,
  id:2
}

//copy new arrays in new arr with all users
const adduser = [...users, newUser]
//adduser.push(newUser)
console.log(adduser)
/*[
  { id: 1, name: 'vlad', isstudent: true },
  { id: 2, name: 'Andor', is student: false },
  { id: 3, name: 'Jack', isstudent: true },
  { name: 'John', isStudent: true, id: 2 }
]*/

let a = [25,26,27]
let b = [26, 58, 69, ...a]
// b.concat(a)
console.log(b)//[ 26, 58, 69, 25, 26, 27 ]


//-------------------------------------
//Method map return new arrays

//create
const uptUser = adduser.map(user => user.name == "John" ? { ...user, isStudent: false} : user)
console.log(uptUser)
//мы возвращаем ...user весь, а далее затираем isStudent на false (т.к ключ может быть один с тем же именем он просто затирает, как в css последние изменения остаються старые затираються)}.Можно далее писать через запятую что хотим изменить а что хотим добавить {...user, key: ...,key: ...}
/* [
  { id: 1, name: 'vlad', isstudent: true },
  { id: 2, name: 'Andor', isstudent: false },
  { id: 3, name: 'Jack', isstudent: true },
  { name: 'John', isStudent: false, id: 2 }
]*/

//add
//add new key:value in all array
const addismarried = uptUser.map(user => ({...user,isMarried:true}))
console.log(addismarried)
/* [
  { id: 1, name: 'vlad', isstudent: true, isMarried: true },
  { id: 2, name: 'Andor', isstudent: false, isMarried: true },
  { id: 3, name: 'Jack', isstudent: true, isMarried: true },
  { name: 'John', isStudent: false, id: 2, isMarried: true }
]*/

//delete user with id 3  
const deleteUser = addismarried.filter (user => user.id !== 3)
console.log(deleteUser)
/* [
  { id: 1, name: 'vlad', isstudent: true, isMarried: true },
  { id: 2, name: 'Andor', isstudent: false, isMarried: true },
  { name: 'John', isStudent: false, id: 2, isMarried: true }
]*/

//------------------------------
