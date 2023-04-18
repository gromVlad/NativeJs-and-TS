//___________Lesson 2____________
const userArr = [
  {
    age: 18,
    name: "vlad",
    isMarried: true,
    scores: 85
  },
  {
    age: 89,
    name: "Andor",
    isMarried: false,
    scores: 120
  },
  {
    age: 20,
    name: "Jack",
    isMarried: true,
    scores: 250
  },
  {
    age: 45,
    name: "Jack",
    isMarried: true,
    scores: 100
  },
]
//-----------------
// _work map method_ 

//get name arrays
const getnames = (arr) => {
  let res = []
  const get = ar => ar.name
  for (let i = 0; i < arr.length;i++){
    let newvalue = get(arr[i])
    res[i] = newvalue
  }
  console.log(res)
}
getnames(userArr)//[ 'vlad', 'Andor', 'Jack', 'Jack' ]

//get scores
const getscores = (arr) => {
  const res = []
  const get = ar => ar.scores
  for (let i = 0; i < arr.length; i++) {
    let newvalue = get(arr[i])
    res[i] = newvalue
  }
  console.log(res)
}
getscores(userArr)//[ 85, 120, 250, 100 ]

//create fun universal 
const get = ar => ar.age

const funMap = (arr,func) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    let newvalue = func(arr[i])
    res[i] = newvalue
  }
  console.log(res)
}
funMap(userArr, get)//[ 18, 89, 20, 45 ]
//alternative with map

//the same with method map
const mapArr = userArr.map(get)
console.log(mapArr)// [18, 89, 20, 45 ]

//-----------------
// _work filter method_ 

const getFiter = ar => ar.age > 50

const mFilter = (arr, func) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true){
      res.push(arr[i])
    }
  }
  console.log(res)
}
mFilter(userArr, getFiter)//[ { age: 89, name: 'Andor', isMarried: false, scores: 120 } ]

//the same with method filter
const filterFun = userArr.filter(getFiter)
console.log(filterFun)//[ { age: 89, name: 'Andor', isMarried: false, scores: 120 } ]

//------------------------
// _alt method pop_

const arrCopy = [...userArr]

const funPop = (arr) => {
  const a = arr[arr.length -1]
  const res = []
  for (let i = 0; i < arr.length - 1; i++) {
    res[i] = arr[i]
  }
  arr = res
  console.log(a)
  console.log(arr)
}
funPop(arrCopy)
//{ age: 45, name: 'Jack', isMarried: true, scores: 100 }
/* [
  { age: 18, name: 'vlad', isMarried: true, scores: 85 },
  { age: 89, name: 'Andor', isMarried: false, scores: 120 },
  { age: 20, name: 'Jack', isMarried: true, scores: 250 }
]  */

const funPop2 = (arr) => {
  const last = arr[arr.length-1]
  arr.length = arr.length -1
  return last
}

//--------------------
// _alt method join_

let arr = [1,2,3,4]
const c = '-'

const sJoin = (arr,c = ",") => {
  let str = ""
  for (let i = 0; i < arr.length ; i++) {
    i === 0 ? str += arr[i] : str += `${c}${arr[i]}`
  }
  console.log(str)
}
sJoin(arr, c) //1-2-3-4
sJoin(arr) //1,2,3,4

//--------------------------
// __alt method find__
arr = [1, 2, 3, 4, 5, 5, 6 ,7, 5]

const funFind = (arr, fun ) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    //if (fun(arr[i])){}
    if (fun(arr[i]) === true ){
      res = [...res,arr[i]]
    }
  }
  return res
}
console.log(funFind(arr, el => el === 5))//[ 5, 5 ]

//-------------------------------
// __alt method push __
arr = [1, 2, 3, 4, 5]

const funPush = (arr, any) => {
   arr = [...arr, any]
   return arr
}
console.log(funPush(arr,{id:1,name:"Vlad",age:28}))
//[ 1, 2, 3, 4, 5, { id: 1, name: 'Vlad', age: 28 } ]

const funPush2 = (arr, any) => {
  arr[arr.length] = any
  return arr
}
console.log(funPush2(arr, { id: 1, name: "Vlad", age: 28 }))
//[ 1, 2, 3, 4, 5, { id: 1, name: 'Vlad', age: 28 } ]


//---------------------------
//array _proto_

// Когда пишем [] под капотом вызываетья функция new Array().Который являюься прототипом для создание массивов всех.И у этого прототипа есть разные методы которые будут вызываться через точечный выхов.А сами методы яавляються функциями.

//записали свой метод / так не делать лучше т.к не совсем коректно работает
Array.prototype.funPush2 = funPush2
console.log(arr.funPush2([2, 4, 6], 2))//[ 2, 4, 6, 2 ]
//также можно написать и в контексте this

//this
// => fun - this равно родительский элемент
//expr and decl - this на самой функций
