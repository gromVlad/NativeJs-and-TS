import { userArray } from './le8';
let userArr = {
  name:'vlad',
  age:23,
  adress: {
    city : {
      title:'Minsk'
    }
  }
}
console.log( userArr['adress']['city']['title']) //Minsk

//------------------------------------
//можно доставать вот так методы с помощью такого синтаксиса
userArr['map']((e) => e.toUppercase()) //userArr.map(e => e.toUppercase())

//------------------------------
//сделали что-то похожие на массив (асоциотивный массив)
let userObj = {
  '0': 'Vlad',
  '1': 'kate',
  '2': 'son',
  '3': 'people'
}
userObj["0"];//'Vlad'
//get keys
Object.keys(userArr) //["0","1","2","3"]

//get values
Object.keys(userArr) //["Vlad","kate","son","people"]

//----------------------------------------
type UserType = {
  [key: string]: { id: string; name: string };
};

//к ассоциатовному массиву обращаться проще так как не надо чтобы найти значения его этирировать а просто по id начинаем с элементам работать
export const users: UserType = {
  "1": { id: "10", name: "Cristian" },
  "2": { id: "20", name: "david" },
  "3": { id: "30", name: "joe" },
  "4": { id: "40", name: "tom" },
  "5": { id: "50", name: "qwe" },
  "6": { id: "60", name: "op" },
  "7": { id: "70", name: "name" },
  "8": { id: "80", name: "guy" },
};
//show el
users[2]//{ id: "20", name: "david" }

//add new user
let user = { id: "100", name: "new user" };
users[user.id] = user;

//delete user
delete users[user.id]


users[user.id].name = "hello world";
console.log(users);

//------------------------------
//обычный массив надо этирировать его
export const userArray = [
  { id: "10", name: "Cristian" },
  { id: "20", name: "david" },
  { id: "30", name: "joe" },
  { id: "40", name: "tom" },
  { id: "50", name: "qwe" },
  { id: "60", name: "op" },
  { id: "70", name: "name" },
  { id: "80", name: "guy" },
];
//add new user
let userArrayCopy = [...userArray,user]

//change find -> change
userArray.find((user) => user.id === "10");

//del el -> filter -> change
userArray.filter((user) => user.id === "10");

//