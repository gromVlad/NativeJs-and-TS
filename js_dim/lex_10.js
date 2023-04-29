// //immutability, имутабельность

// let user = {
//   name:"Vlad",
//   hair:32,
//   addres: {
//     title: 'Minsk'
//   }
// }

// function hairAdress (u,number) {
//   //create copy
//   const copy = {
//     ...u,
//     hair: u.hair / number
//   }
//   //copy.hair /= number
//   return copy
// }
// console.log(hairAdress(user,2)) 
// //{ name: 'Vlad', hair: 16, addres: { title: 'Minsk' } }
// console.log(user)
// //{ name: 'Vlad', hair: 32, addres: { title: 'Minsk' } }

// // !!!создали поверхнострую копию ссылка  addres ссылаеться на оригинал

// //------------------------------------
// //change object
// let user2 = {
//   name: "Vlad",
//   hair: 32,
//   address: {
//     city: 'Minsk',
//     house:12
//   },
//   laptop:{
//     title: "ZenBook"
//   }
// }

// // fun change city
// function moveUser(u, place) {
//   //create copy
//   const copy = {
//     //...u
//     ...u,
//    address:{...u.address, city:place},
//    //

//   //можно было и воторой скопировать но так как мы его не меняли то мы его не трогали
//   //laptop: { ...u.laptop }
//   }

//   //copy.address = {...u.address, city:place}

//   return copy
// }

// let a = moveUser(user2,"kiev")
// console.log(a)
// /* {
//   name: 'Vlad',
//   hair: 32,
//   address: { city: 'kiev', house: 12 },
//   laptop: { title: 'ZenBook' }
// } */

// //fun upgrate laptop
// function upgrateUserlaptop (u, things) {
//   const copy = {
//     ...u,
//     laptop: { ...u.laptop, title:things }
//   }
//   return copy
// }
// let b = upgrateUserlaptop(user2, "macBook")
// console.log(b)
// /* {
//   name: 'Vlad',
//   hair: 32,
//   address: { city: 'Minsk', house: 12 },
//   laptop: { title: 'macBook' }
// } */

// //----------------------------------
// let user3 = {
//   name: "Vlad",
//   hair: 32,
//   address: {
//     city: 'Minsk',
//     house: 12
//   },
//   laptop: {
//     title: "ZenBook"
//   },
//   book:['css','html','js','react']
// }

// //add book user 
// function funAddBook (u,books){
//   const copy = {
//     ...u,
//     book:[...u.book,books]
//   }
//   return copy
// }
// a = funAddBook(user3,['ts','bootstrap'])
// console.log(a)
// /* {
//   name: 'Vlad',
//   hair: 32,
//   address: { city: 'Minsk', house: 12 },
//   laptop: { title: 'ZenBook' },
//   book: [ 'css', 'html', 'js', 'react', 'ts', 'bootstrap' ]
// } */

// //change old book on new book
// function funChangeBooks (u,old,newBook) {
//   const copy = {
//     ...u,
//     book: u.book.map(el => el === old ? newBook : el)
//   }
//   return copy
// }
// b = funChangeBooks(user3, "html", "puthon")
// console.log(b)
// /* {
//   name: 'Vlad',
//   hair: 32,
//   address: { city: 'Minsk', house: 12 },
//   laptop: { title: 'ZenBook' },
//   book: [ 'css', 'puthon', 'js', 'react' ]
// } */

// //filter book
// function filterBooks(u, filter) {
//   const copy = {
//     ...u,
//     book: u.book.filter(el => el === filter)
//   }
//   return copy
// }
// b = filterBooks(user3, "js")
// console.log(b)
// /* {
//   name: 'Vlad',
//   hair: 32,
//   address: { city: 'Minsk', house: 12 },
//   laptop: { title: 'ZenBook' },
//   book: [ 'js' ]
// } */

// //--------------------------
// let user4 = {
//   name: "Vlad",
//   hair: 32,
//   address: {
//     city: 'Minsk',
//     house: 12
//   },
//   laptop: {
//     title: "ZenBook"
//   },
//   book: ['css', 'html', 'js', 'react'],
//   company:[
//     {id:1, title:'Epam'},
//     {id:2, title:'it-int'},
//   ]
// }

// //add new company
// function addnewCompany(u,id, company) {
//   const copy = {
//     ...u,
//     company:[...u.company, {id:id, title:company}]
   
//   }
//   return copy
// }
// b = addnewCompany(user4, 3, 'frostBy')
// console.log(b)
// /* {
//   name: 'Vlad',
//   hair: 32,
//   address: { city: 'Minsk', house: 12 },
//   laptop: { title: 'ZenBook' },
//   book: [ 'css', 'html', 'js', 'react' ],
//   company: [
//     { id: 1, title: 'Epam' },
//     { id: 2, title: 'it-int' },
//     { id: 3, title: 'frostBy' }
//   ]
// } */

// //fun update company
// function funUpdateCompany (u, id, company) {
//   const copy = {
//     ...u,
//     company: u.company.map(el => el.id === id ? {...el,title:company} : el)
//   }
//   return copy
// }
// let c = funUpdateCompany(user4, 1, 'IT-INT')
// console.log(c)
// /* {
//   name: 'Vlad',
//   hair: 32,
//   address: { city: 'Minsk', house: 12 },
//   laptop: { title: 'ZenBook' },
//   book: [ 'css', 'html', 'js', 'react' ],
//   company: [ { id: 1, title: 'IT-INT' }, { id: 2, title: 'it-int' } ]
// } */

// //------------------------------
// let companies = {
//   "Vlad": [{ id: 1, title: 'IT-INT' }, { id: 2, title: 'yandex' }],
//   "Alex": [{ id: 1, title: 'Epam' },
//     { id: 2, title: 'google' },
//     { id: 3, title: 'meta' }]
// }

// //update company 
// function updateCompany (company,userNames,id,newTitle) {
//   let copyCompany = {
//     ...company,
//     [userNames]:company[userNames].map(el => el.id === id ? {...el,title:newTitle} : el)
//   }
//   return copyCompany
// }
// a = updateCompany(companies, "Vlad",2,"google")
// console.log(a)
// /* {
//   Vlad: [ { id: 1, title: 'IT-INT' }, { id: 2, title: 'google' } ],
//   Alex: [
//     { id: 1, title: 'Epam' },
//     { id: 2, title: 'google' },
//     { id: 3, title: 'meta' }
//   ]
// } */

// //------------------------------------------
// //Практика на глубокое копирование
// let newObj = {
//   name:'it-kam',
//   protocol:'https',
//   maxStudents:10,
//   isDone:true,
//   students: ['ivan','andrey','farid'],
//   classroom:{
//     teatcher : {
//       name:'wew',
//       age:18
//     }
//   }
// }

// //copy objects , shallow copy -> copy primitiv, objects not copy
// let copyNewObj = {
//   ...newObj
// }
// console.log(newObj === copyNewObj)//false
// //({} === {}) // false

// //ссылочный тип равен друг другу
// console.log(newObj.students === copyNewObj.students)//true
// console.log(newObj.classroom === copyNewObj.classroom)//true

// //Если хотим сделать полную копию то нам надо сначлло сделать поверхностную копию а далее добовлять внутреннию копию при копировании целого объекта
// //пример отдельной копии ссылочного типа
// newObj.students = [...copyNewObj.students]
// console.log(newObj.students === copyNewObj.students)//false


// //__full object copy полная копия объекта ___
// //библиотека работает на основе копировании данных

// //копия примитива - примитивы копируються легко (создали поверхностную копию)
// a = {
//   name:'2324',
//   age:12
// }
// b = {
//   ...a
// }

// //ссылочный тип надо при копировании остовляет ссылку старую и если хотим скопировать с новой ссылкой надо его перезаписать как бы 
// state = {
//   name: 'it',
//   age:24,
//   school: {
//     address:'kiev',
//     director: 'Andrey'
//   }
// }

// b = {
//   ...state, school: { ...state.school, director: "leva" }
// }
// console.log(b)//{ name: 'it', age: 24, school: { address: 'kiev', director: 'leva' } }

// //with array one element new copy 
// a = [{name:'V'},{name:"B"}]
// b = a.map(el => el.name === "V" ? {name:"K"} : el)
// console.log(b)//[ { name: 'K' }, { name: 'B' } ]

// //copy absolution array
// a = [{ name: 'V' }, { name: "B" }]
// b = a.map(el => ({...el}))
// console.log(a[0] === b[0])//false

// //копируем еще вложенные объекты
// a = [{ name: 'V',a:{name:"D"} }, { name: "B" }]
// b = a.map(el => ({...el,a:{...el.a}}))

// //если в массиве сидят объекты то мы для копирование используем map перебирая каждый элемент при необходимости изменяя его
// // если сидят примитивы то можно с помощью дисктруризации их скопировать [...a]

// //все методы копированиия объекта дополнительно
// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };


// // using spread ...
// let p1 = {
//   ...person
// };

// // using  Object.assign() method
// let p2 = Object.assign({}, person);

// // using JSON
// let p3 = JSON.parse(JSON.stringify(person));

// //также есть в дополнениий библиотека immutable.js которая может менять объекты с большой вложенностью , копирует то что мы будем изменять в данных


// -------------------
//___practice____
// 1. Simple object
let man = {
  name: 'John',
  age: 28
};

let manFullCopy = {...man} //  your code
console.log(manFullCopy)//{ name: 'John', age: 28 }


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers] //  your code
console.log(numbersFullCopy)//[ 1, 2, 3 ]


// 3. Object inside an object
let man1 = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50
  }
};

let man1FullCopy = {...man1, mother:{...man1.mother}} // your code
console.log(man1FullCopy)//{ name: 'John', age: 28, mother: { name: 'Kate', age: 50 } }


// 4. Array of primitives inside an object
let man2 = {
  name: 'John',
  age: 28,
  friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2,friends:[...man2.friends]} // your code
console.log(man2FullCopy)//{ name: 'John', age: 28, friends: [ 'Peter', 'Steven', 'William' ] }


// 5 Array of objects
let people = [
  { name: "Peter", age: 30 },
  { name: "Steven", age: 32 },
  { name: "William", age: 28 }
];


let peopleFullCopy = people.map(el => ({...el})) // your code
console.log(peopleFullCopy)//+

// 6 Array of objects inside object
let man3 = {
  name: 'John',
  age: 28,
  friends: [
    { name: "Peter", age: 30 },
    { name: "Steven", age: 32 },
    { name: "William", age: 28 }
  ]
};

let man3FullCopy = { ...man3, friends: man3.friends.map(el => ({ ...el }))}//  your code
console.log(man3FullCopy)//+

// 7 Object inside an object, inside an object
let man4 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    }
  }
};

let man4FullCopy = {...man4,mother:{...man4.mother,work:{...man4.mother.work}}}//  your code
console.log(man4FullCopy)//+

// 8 Array of objects inside object -> object
let man5 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      { name: "Kevin", age: 80 },
      { name: "Jennifer", age: 78 },
    ]
  }
};

let man5FullCopy  = {...man5,mother:{...man5.mother,work:{...man5.mother.work},parents:man5.mother.parents.map(el => ({...el}))}}//  your code
console.log(man5FullCopy)//+

// 9 Object inside an object -> array -> object ->  object
let man6 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht"
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi"
        }
      },
    ]
  }
};

let man6FullCopy = {...man6, mother:{...man6.mother,work:{...man6.mother.work},parents:{...man6.mother.parents.map(el => ({...el,favoriteDish:{...el.favoriteDish}}))}}}  //  your code
console.log(man6FullCopy) // + 


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
          ingredients: [
            { title: "beet", amount: 3 },
            { title: "potatoes", amount: 5 },
            { title: "carrot", amount: 1 },
          ]
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
          ingredients: [
            { title: "fish", amount: 1 },
            { title: "rise", amount: 0.5 }
          ]
        }
      },
    ]
  }
};

let man7FullCopy = { ...man7, mother: { ...man7.mother, work: { ...man7.mother.work }, parents: { ...man7.mother.parents.map(el => ({ ...el, favoriteDish: { ...el.favoriteDish,ingredients:el.favoriteDish.ingredients.map(el => ({...el})) } })) } } } // + //  your code
