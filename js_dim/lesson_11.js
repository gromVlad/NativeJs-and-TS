// __Event Loop__
//Event Loop - это механизм в JavaScript, который позволяет обрабатывать асинхронный код и события в едином потоке выполнения.
//Компилятор - это программа, которая принимает исходный код на языке программирования и преобразует его в машинный код, который может быть непосредственно выполнен на целевой аппаратуре.
//Интерпретатор - это программа, которая выполняет исходный код на языке программирования непосредственно во время выполнения. Интерпретатор считывает исходный код по одной инструкции за раз, переводит ее в машинный код и выполняет ее. Интерпретация выполняется во время выполненияпрограммы. Интерпретируемые программы, как правило, работают медленнее, чем компилируемые программы, так как каждая инструкция должна быть переведена в машинный код во время выполнения.
//После перевода в машинный код система создает процесс программы -> есть участок памяти где находиться в памяти наш файл, есть стэк где вызывают функции, есть куча.
//Когда у нас программа рабоатет с одни стэком то этот код являеться однопоточным.
/* как работает Event Loop в JavaScript.

Когда код на JavaScript запускается, он начинает выполняться в главном потоке выполнения программы, который называется Call Stack (стек вызовов). В Call Stack помещаются функции, которые необходимо выполнить. Каждая функция помещается в стек вызовов, когда она вызывается, и удаляется из стека вызовов, когда она завершается. Выполнение кода происходит последовательно, построчно.

Когда встречается асинхронный код, такой как setTimeout или запрос на сервер, он не блокирует выполнение кода, а передается в Web API (браузерный API или Node.js API), который обеспечивает выполнение асинхронных операций. После того, как операция завершится, Web API помещает соответствующую функцию обратного вызова (callback) в очередь событий (Event Queue).

Event Queue - это очередь,в которой хранятся функции обратного вызова (callback), которые должны быть выполнены после завершения асинхронных операций. Event Queue обрабатывается в порядке очереди, то есть первый добавленный элемент будет первым выполнен.

Когда Call Stack пуст, Event Loop начинает проверять Event Queue на наличие функций обратного вызова (callback). Если в очереди есть функции обратного вызова, Event Loop извлекает первую функцию из очереди и помещает ее в Call Stack для выполнения.

Функция обратного вызова выполняется в Call Stack, после чего она удаляется из стека вызовов. Если в функции обратного вызова есть другие асинхронные операции, то процесс повторяется с шага 2.

Этот процесс продолжается до тех пор, пока в Event Queue не останется функций обратного вызова.Важно отметить, что Event Loop может обрабатывать только одну задачу за раз. */
console.log('Start'); // Задача 1

setTimeout(function () {
  console.log('Timeout'); // Задача 3
}, 0);

Promise.resolve().then(function () {
  console.log('Promise'); // Задача 2
});

console.log('End'); // Задача 4
/* 
Start
End
Promise
Timeout */

//в микротасках находяться promise/ в макротасках находиться все остальное касательно асинхронных задач / очередь рендеринга (Render Queue) содержит задания, связанные с отображением графического интерфейса пользователя (GUI), такие как перерисовка элементов DOM или изменение стилей. Микротакси самые приоритетные, далее рендеринг, а далее уже макро задачи.

//__очереди примеры
setTimeout(function () {
  console.log('1'); 
}, 4000);

setTimeout(function () {
  console.log('2'); 
}, 1000);

setTimeout(function () {
  console.log('3'); 
}, 1000);

new Promise ((res) => {
  console.log(4)
  res()
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)
// 4, 5, 7, 6, 2, 3, 1.

// - - -
console.log(1);

setTimeout(function () {
  console.log('2');
}, 2);

let p = new Promise(function(res){
  console.log(3)
  res()
}) 

p.then(function(){
  console.log(4)
})

console.log(5);
//1 3 5 4 2

// - - -
setTimeout(function () {
  console.log('s1');
}, 1);

setTimeout(function () {
  console.log('s2');
}, 1000);

new Promise(function (res){
  console.log('p1')
  res()
  console.log('p2')
}).then(function (){
  console.log('p3')
})

console.log('w1')

async function test1(){
  console.log('a1')
  //await аналог then 
  await test2()
  console.log('a2')
  console.log('lala')
}

async function test1() {
  console.log('a3')
}

test1()

console.log('w2')
//p1 p2 w1 a1 a3 w2 p3 a2 lala s1 s2

// - - -
console.log(1)

setTimeout(function () {
  console.log('2');
}, 1000);

Promise.resolve().then(() => console.log(3))

Promise.resolve()
  .then (() => setTimeout(() => {
    console.log(4)
  }, timeout))
  .then(() => console.log(5))

Promise.resolve().then(() => console.log(6))

Promise.resolve().then(() => console.log(7))

setTimeout(function () {
  console.log('8');
}, 2000);

console.log(9)
//1 9 3 6 7 5 4 2 8

// - - -
Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4))

Promise.resolve()
  .then(() => console.log(5))
  .then(() => console.log(6))
  .then(() => console.log(7))
  .then(() => console.log(8))
//1 5 2 6 3 7 4 8

// - - -
console.log(1)

setTimeout(function () {
  console.log(2)
  Promise.resolve()
    .then(() => {
      console.log(3)
    })
}, 2000);

new Promise((res) => {
  console.log(4)
  res(5)
}).then((data) => {
  console.log(data)

  Promise.resolve()
    .then(() => {
      console.log(6)
    } )
      .then(() => {
        console.log(7)

        setTimeout(function () {
          console.log('8');
        }, 100);

      } )
})

setTimeout(function () {
  console.log('9');
}, 2000);

console.log(10)
//1 4 10 5 6 7 8 2 3