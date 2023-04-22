//method sort
//мутирует объект
const names = ["donald",'akex','bob']
names.sort()
console.log(names)//[ 'akex', 'bob', 'donald' ]
//если мы имеем строки то мы можем их легко отсортирвать по алфовиту

//есть таблица символов unicode которые идут определенным образом в зависемости от языка , регистра и т.д.
const names_2 = ["donald", 'akex', 'bob', 'Vlad', 'игорь']
console.log(names_2.sort())//[ 'Vlad', 'akex', 'bob', 'donald', 'игорь' ]

//метод сорт возвращает ссылку на тот же массив. Не создает новых массивов а возвращает тот же просто сортируя массив
console.log(names_2.sort() === names_2) //true

//-----------------------
//numbers
//method sort некоректно сортирует числа / он их сортирует не по умолчанию а используя таблицу unicode /  чтобы работало корректно надо передать функцию сравнение
const num = [99,8,7,6,1000,-3,4]
console.log(num.sort())
/* [-3, 1000, 4,6,    7, 8,99] */

//когда нам надо корректный ответ то мы в return помещаем любое положительное число , а наооборот отрицательное (как true  и false) / положительное значение перестановка
const compFunc = (a,b) => {
  if (a > b){
    return 10 //true
  } else {
    return - 1 //false
  }
}
console.log(num.sort(compFunc))
/* [-3, 4,  6,7, 8, 99,1000 ] */

//сокращенный вариант / также работает если что возвращает положительное то ... / и наооборот
const sortFun = (a,b) => a - b
console.log(num.sort(sortFun))// [-3, 4,  6,7, 8, 99,1000 ] 
console.log(num.sort((a, b) => b - a))
/* [1000, 99, 8,7,  6, 4,-3] */

//также можно сортировать в любую строну а потом вызвать метод reverse()

//----------------------
//Обычно мы метод sort  используем для сортировки массивов
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
    name: "Alex",
    isMarried: true,
    scores: 100
  },
  {
    age: 45,
    name: "kate",
    isMarried: true,
    scores: 100
  },
]

//sort names
// const arrSortFun = (value1,value2) = {
//   if(value1.name.toLowercase() > value2.name.toLowercase()) {
//     return 10
//   } else {
//     return -10
//   }
// }

//также есть готовый метод котрый сравнивает localeCompare
console.log(userArr.sort((a,b) => a.name.localeCompare(b.name)))
/* [
  { age: 45, name: 'Alex', isMarried: true, scores: 100 },
  { age: 89, name: 'Andor', isMarried: false, scores: 120 },
  { age: 20, name: 'Jack', isMarried: true, scores: 250 },
  { age: 45, name: 'kate', isMarried: true, scores: 100 },
  { age: 18, name: 'vlad', isMarried: true, scores: 85 }
] */

//sort age
console.log(userArr.sort((a,b) => a.age - b.age))
/* [
  { age: 18, name: 'vlad', isMarried: true, scores: 85 },
  { age: 20, name: 'Jack', isMarried: true, scores: 250 },
  { age: 45, name: 'Alex', isMarried: true, scores: 100 },
  { age: 45, name: 'kate', isMarried: true, scores: 100 },
  { age: 89, name: 'Andor', isMarried: false, scores: 120 }
] */

//-----------------------------
//сотировка затратная задача и отнимает много ресурсов системы

//buble sort - сортировка пузырьков
const nums_3 = [100,333,77,999,3]

//прогониться один раз и непоменяет весь массив
for (let i = 0; i < nums_3.length-1; i++){
  if (nums_3[i] > nums_3[i+1]){
    let temp = nums_3[i+1]
    nums_3[i+1] = nums_3[i]
    nums_3[i] = temp
  }
}
console.log(nums_3)//[ 100, 77, 333, 3, 999 ]

//теперь все итерации прогнали весь массив
let countIteration = 0
for (let j = 0; j<nums_3.length;j++){
  for (let i = 0; i < nums_3.length; i++) {
    countIteration++
    if (nums_3[i] > nums_3[i + 1]) {
      let temp = nums_3[i + 1]
      nums_3[i + 1] = nums_3[i]
      nums_3[i] = temp
    }
  }
}
console.log(countIteration);//25 iteration
console.log(nums_3)//[ 3, 77, 100, 333, 999 ]

//Алгоритмы с квадротичной сложностью неиспользовать(babel sort  и т.д), линейная  сложность норм (класичечкая схема), когда логорифа это хороший вариант(бинарный поиск - делит на разные части пока не найдет нужный с помощью итерации, работает только на отсортированных массивов).Есть также идеальный вариант когда сколичество элементов не влияет на сложность (будет под конец курса)

//refact code/ удалим последнию итерацию т.к на лишняя по умолчанию последний элемент сам станет на место также будем уменьшать сами итерации т.к с каждым разом их надо будет меньше для сортировки / также добавили отмен прогонов если true
for (let j = 0; j < nums_3.length-1; j++) {
  let isSorted = true
  for (let i = 0; i < nums_3.length-1-j; i++) {
    countIteration++
    if (nums_3[i] > nums_3[i + 1]) {
      [nums_3[i], nums_3[i + 1]] = [nums_3[i + 1], nums_3[i]]
      isSorted = false
    }
    if (isSorted) break
  }
}
console.log(countIteration);//4 iteration
console.log(nums_3)//[ 3, 77, 100, 333, 999 ]