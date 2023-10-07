//замыкание, лексичекое окружение, рекурсия

//-----------------------------------------
//Лексическое окружение (lexical environment) - это набор переменных и функций, которые доступны внутри определенного блока кода в языке программирования.Объект внутри которого содержит ссылку который указывает на другой такой же объект.{ } ->. создаеться для функции и блоков кода. Обычный объект не создает лексического окружение

//global { } -> null
let name //{name:undefined}
name = "alex"//{name:"alex" }
name = "hanna" //{name:hanna"}

//работа с переменными эта работа со скрытым объектом лексического окружения


//function declaration она хостица можно вызвать выше чем создана сама функция
function f00() {}

//function expression  - not hosting
const fo = function(){}

//arrow function
const foo = () => {}

//когда мы функцию создаем она сразу в себе создает environment со ссылкой на внешнее окружение
const fo2 = () => { 
    //[Environment ] -> globalle
    //после вызова создаеться свой еnvironment
    //foole {name:Alex } -> globalle
    let name
    name = "hanna"
    name="alex"
}

//сначало движок выполняет внутренний scope а дальше если не найдет ищет выше в следующем объекте, и если ничего не нашли то тогда будет ошибка
//global
const names = "Alex"

const fo3 = () => {
  //env -> global
  //fo3 -> global
  const hello = "hello"
  console.log(hello + " " + names)

  function bar (age) {
    // bar -> fo3
    console.log(hello + " " + names + " " + age)
  }
  bar(23)
}
fo3()
//hello Alex
//hello Alex 23

//----------------------------------
//замыкание -> cпособность запоминать тот лексический вид окружение в котором она была создана
let counterCreator = () => {
  // cсылка остаеться жива на count  
  // counterCreator {count:0}
  let count = 0
  return () => {
    //Env -> counterCreator
    console.log(++count)
  }
}
const counter = counterCreator()
counter()//1
counter()//2
counter()//3

const counter2 = counterCreator()
counter()//1
counter2()//1
counter()//2
counter2()//2

//--------------------------------
//рекурсия 
//тек (stack) - это структура данных, которая управляет порядком выполнения операций в программировании.Стек работает по принципу "последним вошел - первым вышел" (5,4,3,2,1)

//стэк программный -сам реализовал структуру данных в коде. 
const stack = [] 
stack.push(2)

//стэк аппаратный
//Стек аппаратный(hardware stack) - это часть памяти, которая используется для хранения адресов возврата и локальных переменных во время выполнения программы на процессоре.

const pow = (x,n) => {
  if (n === 1){
    return x
  } else {
    return x * pow(x,n-1)
  }
} 
console.log(pow(2,3))//8