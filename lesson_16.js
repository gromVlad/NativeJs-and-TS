//Vanilla JS, Lesson - 16, Observer, Publisher-Subscriber 
//паттерн - общий подход решение проблем (типо flux и т.д.), готовое решение архитектурная типовых проблем
//Vanilla JS, Lesson - 16, Observer, Publisher-Subscriber {{sc_91_10}} 2023-03-03
//Observer -без посредников
//Publisher-Subscriber - с посредниками
//subscribe - подписка
store.subscribe(function subscribe() {});//state изменился, на изменение store мы подписались
button.addEventListener("click", function subscribe() { }); //клик произошел, подписываемся на событие клик
setTimeout(() => {
  function subscribe() {}
}, timeout);//секунда прошла
promise.then(function subscribe() {}) //promise resolve

//<Custom onchange = {() => {}}/> // что то изменилось по клику
app.post('/users', function subscribe() {}) // произошел запрос на адрес

//subscribe === Listener === Observer === watcher === handler

//создание переиспользуемых модулей
//"solid" обычно относится к пяти принципам объектно-ориентированного дизайна (SOLID principles), которые помогают создавать гибкие, расширяемые и легко поддерживаемые программные системы. Эти принципы включают в себя: единство ответственности (Single Responsibility Principle), открытость/закрытость (Open/Closed Principle), подстановка Барбары Лисков (Liskov Substitution Principle), разделение интерфейса (Interface Segregation Principle) и инверсия зависимостей (Dependency Inversion Principle).

//--------------------
const store = {
  //храним подписчиков
  _subscribers:[],
  //вызываем подписчиков
  dispatch (action){
    this.retusers.forEach(element => element())
    this._subscribers.forEach(element => element())
  },
  //добовляем в []
  subscribe (Subscriber){
    this._subscribers.push(subscriber)
  },
}

const store2 = {
  _subscribers:{
    "click":[],
    "change":[]
  },
  click() {
    this._subscribers["click"].forEach(s => s(new Event('click',{x:1,y:2})))
  },
  change() {
    this._subscribers["change"].forEach(s => s(new Event('click',{x:1,y:2})))
  },
  addEventListener(eventName, subscriber){
    this._subscribers[eventName].push(subscriber)
  }
}
button.addEventListener("click", () => {})
button.addEventListener("change", () => {})

//---------------
//useSelector 
useSelector = (selector) => {
  const [version,setVersion] = useState(0)
  _prevState
  store.subscribe(function rerderComponents() {
    const state = store.getstate()
    const partState =  selector(state)
    if (partState !== _prevState){
      setVersion(version + 1)
    }
  })
  return partState
}

//рекция события на изменения

//------------------
//генерация событий
const EventEmitter = require('events')
const eventEm = new EventEmitter()
//подписка на событие
eventEm.on('money fin',(data) => {
  console.log(data)
})
//уведомление о сработке событтие
eventEm.emit('money fin', { money: -20, date: new Date() })

class Store extends EventEmitter {
  constructor(){
    super()
    this.state={counter:1}
  }
  increase(){
    this.state.counter++
    this.emit('state-change')
  }
  decrease(){
    this.state.counter--
    this.emit('state-change')
  }
  getState(){
    return this.state
  }
  subscribe(){
    this.on('state-change',callback)
  }
}
const store3 = new Store()
store.subscribe(() => console.log(store.getState()))
store.increase()//{ counter: 2 }
store.decrease()//{counter:1}
store.increase()//{counter:2}

//_
// Создаем новый объект EventTarget
const eventTarget = new EventTarget();

// Добавляем обработчик события "myEvent"
eventTarget.addEventListener('myEvent', (event) => {
  console.log('Событие myEvent произошло', event);
});

// Генерируем событие "myEvent"
const myEvent = new Event('myEvent');
eventTarget.dispatchEvent(myEvent);

//можно почитать по патерны refactoring.guru
