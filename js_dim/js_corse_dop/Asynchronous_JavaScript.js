//js являетьтья синхронным сверху вниз, последуйющий процесс не начнеться пока не закончиться текущий, однопоточный - есть только один поток. Для асихнорный действий мы используем web brouser  он обеспечивает асинхронные процессы не блокируя основной поток

//___Timeouts_Interval___//
setTimeout(() => {
  console.log('hello')
}, 2000);//'hello')

//with parametrs
function greet(params) {
  console.log(params)
}
setTimeout(greet, 2000, "Vlad");//Vlad

//with clear id
function greet2() {
  console.log("hello")
}
const timeid = setTimeout(greet2, 2000)
clearTimeout(timeid)

//with setInterval the same!!!
//таймеры и интервалы не являеться частью js. Время указано минимальное когда функция начнет работать но это может занять больше времени

//также можно сделать рекурсию из интервала setTimeout и сделать из него интервал .Преимущество такого интервала в том что можем указывать в интервале различное время его работы после каждого прохода.
setTimeout(function run() {
  console.log('hello')
  setTimeout(run,100)
}, 100);

//____СallBacks___//
//функция явл. объектами первого класса поэтому мы их можем использовать в других функциях и т.д.
function hell(name) {
  console.log('hello' + " " + name)
}

//фуекция более высого порядка
function hellCall(fn) {
  const names = 'vlad'
  fn(names)
}
hellCall(hell)//hello vlad

//_синхронные обратные вызовы которые выполянються немедленно как выше по коду или например:
let numbers = [1,2,3,4,5,6]
numbers.sort((a,b) => a - b)

//_асинхронный обратный вызов - обратный вызов для продолжения или возобновления в определенный период времени
function greet(params) {
  console.log(params)
}
setTimeout(greet, 2000, "Vlad");//Vlad

function callback(){
  document.getElementById('demo').innerHTML = 'hello'
}
document.getElementById('btn').addEventListener('click',callback)

//каждая предыдудуща я функция зависит друг от друга и мы получаем callback hell

//___Promise___//
//обещание которое далее может быть выполенно , если не выполннено получим отказ (ошибку)
//Объект в js котрый находиться в 3 сотсояниях pending (ожидание), fullfield(выполено), reject (не выполено)
const promise = new Promise((res,rej)=>{
  setTimeout(() => {
    res('yes')
  }, 5000);
})
const promise2 = new Promise((res,rej)=>{
  setTimeout(() => {
    rej('no')
  }, 5000);
})

const resultComplited = (re) => {
  console.log(re)
  console.log('get')
}
const resultNotComplited = (rj) => {
  console.log(rj)
  console.log('not get')
}

promise.then(resultComplited)
//'yes'
//  'get'
promise2.catch(resultNotComplited)
//'no'
// 'not get'

//цепочка обещаний -> методы then и catch возврощают новые обещание можно оптимизировать код callback hell

//также есть разные методы как PromiseAll и т.д.

//___async await____//
//асинхронные функции которые всегда возврощают обещание
//await - работает внутри async
async function getAsung(){
  const promise4 = new Promise((res, rej) => {
    setTimeout(() => {
      res('hello ')
    }, 5000);
  })
  let res = await promise4
  console.log(res)//hello
}
getAsung()

//___Event Loop___//
//Web brouser помогает сделать асихронное програмирование, движок состоит из памяти и стека вызова.
//Среда выполнения состоит :
//Движок -> rод помещаеться в стек а потом удаляеться из него.Втрорая часть это web API - это функции в браузере к которы js имеет доступ. Третье часть очередь (callback queue/task queue).Event loop -> вставляет элементы из очереди в стек по определенной логике.

//_при синхронном вызове они будут выполняться по очереди
console.log('first')
console.log('second')
console.log('third')
//'first' 'second' 'third'

//_асинхронный вызов
console.log('first')

//передаються в web API из стека, стек его удаляет
setTimeout(() => {
  console.log('second')
}, 2000);

console.log('third')
//'first' 'third' /через 2с web api  помещает setTimeout в очередь обратного вызова и цикл событий постоянно проверяет пуст ли стек вызова и еслии он пуст он помещает элемент в стек и далее setTimeout внутри себя вызывает console.log() и после выполения console.log() он удаляеться и далее удаляеться и сам setTimeout
//'first' 'third' 'second'

//при setTimeout = 0с ему придеться должаться пока цикл опустеет

//_async promise
console.log('first')

const promise5 = fetch('https://www.google.by/?hl=ru')
promise5.then(value => console.log('promise' + value))

console.log('second')

//При этом примере нам нужно еще дополнительно добавить память и очередь микро задач
//'first' ,fetch передаеться web APi который являеться функции браузера, и он остовляет объект обещание в памяти js, далее получает ответ который также из web APi  переходит в объект в web APi fetch удаляеться , далее  идет 'second'. После плучение ответ идет в очередь микро задач , если стек пуст то ответ  помещаеться в стек для выполнения -> далее оператор console.log() promise  выполняеться и удаляеться из стека, а после и сама функция обратного вызова завершаеться.
//'first' 'second' 'promise value'

//_ex
setTimeout(() => {
  console.log('first')
}, 0);

const promise6 = fetch('https://www.google.by/?hl=ru')
promise5.then(value => console.log('promise' + value))

for (let i = 0;i<1000000000;i++) {}

console.log('second')

//'seconds' 'promise' 'first'