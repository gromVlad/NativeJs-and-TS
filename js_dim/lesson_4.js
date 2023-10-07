//lesson 4
// ____1_____
// в дальнейшем будем маштабировать проект и добовлять и удалять сами туда листы
const id_1 = "qw-23"
const id_2 = "qw-24"

const todolist2 = [
  {
    id:id_1,
    title:'hello',
    filter:'all',
    tasks:[
      {id:1,title:'html',isDone:false},
      {id:2,title:'css',isDone:false},
      {id:3,title:'js',isDone:false},
    ]
  },
  {
    id:id_2,
    title:'hello',
    filter:'all',
    tasks:[
      {id:1,title:'html',isDone:false},
      {id:2,title:'css',isDone:false},
      {id:3,title:'js',isDone:false},
    ]
  },
]

//Когда много тудулистов и мы опять будем копировать все листы  добовлять или удалять последующие. Это будет сильно влиять на производительность. Поэтому нам надо по другому сделать структуру наших данных
//связываем массив через id чтобы не получить совпадения
const todolist = [
  {
    id: id_1,
    title: 'lern',
    filter: 'all',
  },
  {
    id: id_2,
    title: 'lern_two',
    filter: 'all',
  },
]

//ассоциотивный массив -> абстрактный вид данных / по факту такого нету / это концепция применения массива с фичами объекта (хотя по факту любой объект это ассоциотивный массив(типо все исходило из массива))
const task = {
  //[] -> взяли id вне зависемости о значения переменной т.к оно будет меняться / т.к используем в качестве ключа - даем понять что это не строка а переменная!!!
  [id_1]: [
    { id: 1, title: 'html', isDone: false },
    { id: 2, title: 'css', isDone: false },
    { id: 3, title: 'js', isDone: false },],
  
  [id_2]: [
    { id: 1, title: 'html', isDone: false },
    { id: 2, title: 'css', isDone: false },
    { id: 3, title: 'js', isDone: false },],
}

//get task
console.log(task[id_1])
/* [
  { id: 1, title: 'html', isDone: false },
  { id: 2, title: 'css', isDone: false },
  { id: 3, title: 'js', isDone: false }
] */

//del 
console.log(task[id_1].filter(t => t.id !== 2 ))
/* [
  { id: 1, title: 'html', isDone: false },
  { id: 3, title: 'js', isDone: false }
] */

//add new task
console.log([...task[id_1], { id: 4, title: 'ts', isDone: true }])
/* [
  { id: 1, title: 'html', isDone: false },
  { id: 2, title: 'css', isDone: false },
  { id: 3, title: 'js', isDone: false },
  { id: 4, title: 'ts', isDone: true }
] */

//add new todolist
const addTodolist = (title) => {
  const td_id = 'jh-34'
  const newTodo = {
    id:td_id,
    title:'title',
    filter:'all'
  }
  //add new todolist
  const updateTodolist = [...todolist,newTodo]
  console.log("upt", updateTodolist)

  //add new task
  //coздаем копию добовляя новою таску
  // const copyTask = {...task}
  // copyTask[td_id] = []
  const copyTask = {...task, [td_id]:[]}
  console.log(copyTask)
}
addTodolist("leant two")
/* [
  { id: 'qw-23', title: 'lern', filter: 'all' },
  { id: 'qw-24', title: 'lern_two', filter: 'all' },
  { id: 'jh-34', title: 'title', filter: 'all' }
] */

/* {
  'qw-23': [
    { id: 1, title: 'html', isDone: false },
    { id: 2, title: 'css', isDone: false },
    { id: 3, title: 'js', isDone: false }
  ],
  'qw-24': [
    { id: 1, title: 'html', isDone: false },
    { id: 2, title: 'css', isDone: false },
    { id: 3, title: 'js', isDone: false }
  ],
  'jh-34': []
} */

//порядок значение не определен но нормативной документации нету у разных браузеров свои порядок

// ____2____
//metod reduce
//Не меняет исходный массив

const num = [1,2,3,4,5]
const a = num.reduce((acc,el) => acc += el,0)
console.log(a)//15

const max = num.reduce( (acc,el) => 
// {
//   if (acc >= el) {
//     return acc
//   }else {
//     return el
//   }
//}
acc >= el ? acc : el
)
console.log(max)//5

//-------------------------
const users = [
  {
    id: 1,
    name: "vlad",
    isstudent: true,
  },
  {
    id: 2,
    name: "Andor",
    isstudent: false,
  },
  {
    id: 3,
    name: "Jack",
    isstudent: true,
  }
]

//with reduce
const names = users.reduce((newArr, el) => {
  newArr.push(el.name)
  return newArr
},[])
console.log(names)//[ 'vlad', 'Andor', 'Jack' ]
