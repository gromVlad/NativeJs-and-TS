//immutability, имутабельность

let user = {
  name:"Vlad",
  hair:32,
  addres: {
    title: 'Minsk'
  }
}

function hairAdress (u,number) {
  //create copy
  const copy = {
    ...u,
    hair: u.hair / number
  }
  //copy.hair /= number
  return copy
}
console.log(hairAdress(user,2)) 
//{ name: 'Vlad', hair: 16, addres: { title: 'Minsk' } }
console.log(user)
//{ name: 'Vlad', hair: 32, addres: { title: 'Minsk' } }

// !!!создали поверхнострую копию ссылка  addres ссылаеться на оригинал

//------------------------------------
//change object
let user2 = {
  name: "Vlad",
  hair: 32,
  address: {
    city: 'Minsk',
    house:12
  },
  laptop:{
    title: "ZenBook"
  }
}

// fun change city
function moveUser(u, place) {
  //create copy
  const copy = {
    //...u
    ...u,
   address:{...u.address, city:place},
   //

  //можно было и воторой скопировать но так как мы его не меняли то мы его не трогали
  //laptop: { ...u.laptop }
  }

  //copy.address = {...u.address, city:place}

  return copy
}

let a = moveUser(user2,"kiev")
console.log(a)
/* {
  name: 'Vlad',
  hair: 32,
  address: { city: 'kiev', house: 12 },
  laptop: { title: 'ZenBook' }
} */

//fun upgrate laptop
function upgrateUserlaptop (u, things) {
  const copy = {
    ...u,
    laptop: { ...u.laptop, title:things }
  }
  return copy
}
let b = upgrateUserlaptop(user2, "macBook")
console.log(b)
/* {
  name: 'Vlad',
  hair: 32,
  address: { city: 'Minsk', house: 12 },
  laptop: { title: 'macBook' }
} */

//----------------------------------
let user3 = {
  name: "Vlad",
  hair: 32,
  address: {
    city: 'Minsk',
    house: 12
  },
  laptop: {
    title: "ZenBook"
  },
  book:['css','html','js','react']
}

//add book user 
function funAddBook (u,books){
  const copy = {
    ...u,
    book:[...u.book,books]
  }
  return copy
}
a = funAddBook(user3,['ts','bootstrap'])
console.log(a)
/* {
  name: 'Vlad',
  hair: 32,
  address: { city: 'Minsk', house: 12 },
  laptop: { title: 'ZenBook' },
  book: [ 'css', 'html', 'js', 'react', 'ts', 'bootstrap' ]
} */

//change old book on new book
function funChangeBooks (u,old,newBook) {
  const copy = {
    ...u,
    book: u.book.map(el => el === old ? newBook : el)
  }
  return copy
}
b = funChangeBooks(user3, "html", "puthon")
console.log(b)
/* {
  name: 'Vlad',
  hair: 32,
  address: { city: 'Minsk', house: 12 },
  laptop: { title: 'ZenBook' },
  book: [ 'css', 'puthon', 'js', 'react' ]
} */

//filter book
function filterBooks(u, filter) {
  const copy = {
    ...u,
    book: u.book.filter(el => el === filter)
  }
  return copy
}
b = filterBooks(user3, "js")
console.log(b)
/* {
  name: 'Vlad',
  hair: 32,
  address: { city: 'Minsk', house: 12 },
  laptop: { title: 'ZenBook' },
  book: [ 'js' ]
} */

//--------------------------
let user4 = {
  name: "Vlad",
  hair: 32,
  address: {
    city: 'Minsk',
    house: 12
  },
  laptop: {
    title: "ZenBook"
  },
  book: ['css', 'html', 'js', 'react'],
  company:[
    {id:1, title:'Epam'},
    {id:2, title:'it-int'},
  ]
}

//add new company
function addnewCompany(u,id, company) {
  const copy = {
    ...u,
    company:[...u.company, {id:id, title:company}]
   
  }
  return copy
}
b = addnewCompany(user4, 3, 'frostBy')
console.log(b)
/* {
  name: 'Vlad',
  hair: 32,
  address: { city: 'Minsk', house: 12 },
  laptop: { title: 'ZenBook' },
  book: [ 'css', 'html', 'js', 'react' ],
  company: [
    { id: 1, title: 'Epam' },
    { id: 2, title: 'it-int' },
    { id: 3, title: 'frostBy' }
  ]
} */

//fun update company
function funUpdateCompany (u, id, company) {
  const copy = {
    ...u,
    company: u.company.map(el => el.id === id ? {...el,title:company} : el)
  }
  return copy
}
let c = funUpdateCompany(user4, 1, 'IT-INT')
console.log(c)
/* {
  name: 'Vlad',
  hair: 32,
  address: { city: 'Minsk', house: 12 },
  laptop: { title: 'ZenBook' },
  book: [ 'css', 'html', 'js', 'react' ],
  company: [ { id: 1, title: 'IT-INT' }, { id: 2, title: 'it-int' } ]
} */

//------------------------------
let companies = {
  "Vlad": [{ id: 1, title: 'IT-INT' }, { id: 2, title: 'yandex' }],
  "Alex": [{ id: 1, title: 'Epam' },
    { id: 2, title: 'google' },
    { id: 3, title: 'meta' }]
}

//update company 
function updateCompany (company,userNames,id,newTitle) {
  let copyCompany = {
    ...company,
    [userNames]:company[userNames].map(el => el.id === id ? {...el,title:newTitle} : el)
  }
  return copyCompany
}
a = updateCompany(companies, "Vlad",2,"google")
console.log(a)
/* {
  Vlad: [ { id: 1, title: 'IT-INT' }, { id: 2, title: 'google' } ],
  Alex: [
    { id: 1, title: 'Epam' },
    { id: 2, title: 'google' },
    { id: 3, title: 'meta' }
  ]
} */

//------------------------------------------
let newObj = {
  name:'it-kam',
  protocol:'https',
  maxStudents:10,
  isDone:true,
  students: ['ivan','andrey','farid'],
  classroom:{
    teatcher : {
      name:'wew',
      age:18
    }
  }
}

//copy objects , shallow copy -> copy primitiv, objects not copy
let copyNewObj = {
  ...newObj
}
console.log(newObj === copyNewObj)//false
//({} === {}) // false

//ссылочный тип равен друг другу
console.log(newObj.students === copyNewObj.students)//true
console.log(newObj.classroom === copyNewObj.classroom)//true

//Если хотим сделать полную копию то нам надо сначлло сделать поверхностную копию а далее добовлять внутреннию копию при копировании целого объекта
//пример отдельной копии ссылочного типа
newObj.students = [...copyNewObj.students]
console.log(newObj.students === copyNewObj.students)//false


