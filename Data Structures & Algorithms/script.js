// Big O_ Intro
//способ математический выяснить какой из код более эффективнго по времени и пространственной сложности его работы. Определения эффективности кода по сложности а точнее по количество операции, с помощью big O измеряем пространтвенную сложность. Сложность - это объем памяти который что-то использует.Но обычно концетрируемся на временной сложности

//-----------------------
//Worst Case
//лучший кейс обозначаеться амего
//средний кейс работы - тэта
//худший кэйс омикрон (Big O) , и когда мы измеряем большое О то мы по умолчанию берем худший случай

//------------------
// O(n)
//пропрционально любому значению если количество итерации 10 то и на выходе то же 10, на графике прямая линия(ось x - n, y - количество операции )
function bigO(n) {
  for (let index = 0; index < n; index++) {
    console.log(index);
  }
}
bigO(10)//0 1 2 3 4 5 6 7 8 9

//------------------
//O(n) с константой
function bigO(n) {
  for (let index = 0; index < n; index++) {
    console.log(index);
  }
  for (let index2 = 0; index2 < n; index2++) {
    console.log(index2);
  }
  
}
bigO(10)//0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
//n + n = 2n - все равно отбрасываем константу (2) хоть 100n и по факту будет O(n)

//---------------------
//O(n2) 
//идет на увелечения количество операции , n растет очень медленно
function bigO(n) {
  for (let index = 0; index < n; index++) {
    for (let index2 = 0; index2 < n; index2++) {
      console.log(index,index2);
    }
  }
}
bigO(9) // 0 01 02 ... 99
//n * n = n2
//можно еще вложить следующий цикл 3 и будет 001 ... 999 , n * n * n = n3. Но все равно принято писать n2
 
//----------------------
//drop non - dominants
function bigO(n) {
  for (let index = 0; index < n; index++) {
    for (let index2 = 0; index2 < n; index2++) {
      console.log(index, index2);
    }
  }

  for (let index3 = 0; index < n; index3++) {
    console.log(index3);
  }
}
bigO(9) // 0 01 02 ... 99 0...9
//O (n2) +  O(n) , n2 являеться доминируещим поэтому n отбрасваеться и сотаеться O (n2)

//-------------------
//0 (1)
//чтобы не было количество операции не меняеться 
//самый эффективный способ, прямая линия по n количество операции минимально
function bigOne(n) {
  console.log(n + n);
  //console.log(n + n + n);
  //console.log(n + n + n + n);
}
bigOne(2)//4
//bigOne(2)//6
//bigOne(2)//8
//независемо от количество операция не меняеться , их не становиться больше

//--------------------
//0(log n)
//log (2) 8 = 3 (2 в 3 = 8)
//техника разделяй и властвуй, когда мы постоянно делим например массив на части пока не найдем необходимое значения
//не так эффективно как O(1) но проходит минимальное число операции

//--------------------
//Различные термины для входных данных
function bigO(a,b) {
  for (let index = 0; index < a; index++) {
    console.log(index);
  }
  for (let index2 = 0; index2 < b; index2++) {
    console.log(index2);
  }
}
bigO(5,9)// 0 1 2 3 4 0 1 2 3 4 5 6 7 8
// O (a + b) = O(14) 

//анологично мы также будет дейстововать и с вложенными друг в друга циклам
function bigO(a,b) {
  for (let index = 0; index < a; index++) {
    for (let index2 = 0; index2 < b; index2++) {
      console.log(index, index2);
    }
  }
}
// O (a * b) = O(45) 

//--------------------
//Array
//[45,98,12] index -> [0,1,2]

//push() и pop() -> O(1) т.к. представляет собой одну операцию сначало добовления конца элемента и потом его удаления

//shift() unshift() -> O(n) приходиться передвигать элементы при добовлении или удалении в начале массива.Придеться индексировать элементы все повторно

//!если ищем по значению то это O(n).
//!если ищем по индексу то это O(1)

//push - O(1) / pop - O(1) / shift - O(n) / unshift - O(n) / insert - O(n) / delete - O(n) / look index - O(1) / look value - O(n)

//-------------------
//Сравнение одно и другой операции
//если n = 100 
//0(1) = 1 (постоянное время)
//o(log n) = 7 (разделяй и властвуй)
//o(n) = 100 (пропорционально)
//o(n2) = 10000 (цикл в цикле)

//https://www.bigocheatsheet.com/ -сайт шпора по алгоритмам

//лучший способ научиться программировать это программировать )))

//-------------------
//Classes
class Cookie {
  constructor(color){
    this.color = color
  }

  getColor(){
    console.log(this.color);
  }

  setColor(color){
    return this.color = color
  }
}

//instance (экземпляр класса)
let cookieOne = new Cookie('blue')
let cookieTwo = new Cookie('green')
cookieOne.getColor()//blue
cookieTwo.getColor()//green
cookieOne.setColor('red')
console.log(cookieOne);//Cookie {color: 'red'}

//------------------------
//pointers

let n1 = 5
let n2 = n1 // делаем число равным 5 в момент объявления переменной, и если мы изменим n1 = 10 все равно n2 будет 5

//указатели на один и тот же объект в памяти
let obj1 = {
  value:11
}
let obj2 = obj1

//---------------------
//___Связанные списки (linked lists)______
//11(push) -> 3 -> 23 -> 7(tail) -> null
//первый элемент head, последний элемент tail - далее выход null

//добавить в конец списка O(1) , tail = новый элемент
//удалить последний O(n) т.к мы не можем возвращаться в связанном списке назад и поэтому нужно пройтись по нем опять
//добовление в начале O(1) , push = новый элемент
//удаления начального элемента  O(1) т.к. просто передвигаем на позицию выше и удаляем старый элемент
//4 - добавить в середину элемент, пройтись до нужного и вставить элемент 11-> 3 -> 23 -> 4 -> 7 -> null / O(n)
//удаления элемента в середине то же O(n) т.к. нужно пройтись до нужного и удалить
//поиск элемента O(n)

//linked Lists
//push - O(n) / pop - O(n) / shift - O(1) / unshift - O(1) / insert - O(n) / delete - O(n) / look index - O(n) / look value - O(n)

//-------------------------
//связанный список под копотом
//4 -> 7 ...
// head :{
//   value:4,
//   next: {
//     value:7,
//     next: {
//       value:... , 
//       next (tail): null
//     }
//   }
// }

//------------------------
//Конструктор для связанного списка
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    //not element
    if (!this.head) return undefined

    let temp = this.head
    let pre = this.head
    while (temp.next) {

      //остановиться на предпоследнем элементе а дальше не пойдет
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--

    //else not elements
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if (!this.head) return undefined
    let temp = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }

    //обязательно нужно удалить тот элемент который был первый а иначе старый элемент так же вернеться
    temp.next = null
    return temp
  }

  //get on index
  get(index) {
    if (index < 0 || index >= this.length) return undefined

    //указывает на первый элмент
    let temp = this.head
    for (let i = 0; i < index; i++) {

      //перезаписывает temp
      temp = temp.next
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  //вставить нужный элемент до определенного значения
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)

    const newNode = new Node(value)
    const temp = this.get(index - 1)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const before = this.get(index - 1)
    const temp = before.next

    before.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }
}

let myLinkedList = new LinkedList(4)
console.log(myLinkedList);//LinkedList {head: Node, tail: Node, length: 1}
myLinkedList.push(5)
console.log(myLinkedList);
// head: Node { value: 4, next: Node }
// length:2
// tail:Node {next: null , value:5}
myLinkedList.pop()
console.log(myLinkedList);//LinkedList {head: Node, tail: Node, length: 1}
myLinkedList.unshift(8)
// head: Node { value: 8, next: Node }
// length:2
// tail: Node { value: 4, next: null }
myLinkedList.shift()
//LinkedList {head: Node, tail: Node, length: 1}
myLinkedList.push(5)
myLinkedList.push(8)
myLinkedList.get(1)//Node {value: 5, next: Node}
myLinkedList.set(1, 13)//true
myLinkedList.get(2,48)//true
myLinkedList.remove(3)
myLinkedList.reverse()
console.log(myLinkedList);
 
//------------------------
//___Двухсвязанные списки (linked lists)______
// {
//   value:7,
//   next:null,
//   prev:null
// }
 
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined
    let temp = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      temp.prev = null
    }
    this.length--
    return temp
  }

  unshift(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if (this.length === 0) return undefined
    let temp = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      temp.next = null
    }
    this.length--
    return temp
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined

    let temp = this.head

    //если находиться в первой половине списка
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    } else {
      temp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev
      }
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)

    const newNode = new Node(value)
    const before = this.get(index - 1)
    const after = before.next
    before.next = newNode
    newNode.prev = before
    newNode.next = after
    after.prev = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    if (index < 0 || index >= this.length) return undefined

    const temp = this.get(index)

    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.next = null
    temp.prev = null

    this.length--
    return temp
  }
}


let myDoublyLinkedList = new DoublyLinkedList(0)
console.log(myDoublyLinkedList); 
//{head: Node, tail: Node, length: 1}
myDoublyLinkedList.push(3)
console.log(myDoublyLinkedList);
//{head: Node, tail: Node, length: 2}
myDoublyLinkedList.pop()
console.log(myDoublyLinkedList);
//{head: Node, tail: Node, length: 1}
myDoublyLinkedList.unshift(5)
console.log(myDoublyLinkedList);
//{head: Node, tail: Node, length: 2}
myDoublyLinkedList.shift()
console.log(myDoublyLinkedList);
//{head: Node, tail: Node, length: 1}
myDoublyLinkedList.push(6)
myDoublyLinkedList.push(9)
myDoublyLinkedList.get(1)
console.log(myDoublyLinkedList); 
//{head: Node, tail: Node, length: 3}
myDoublyLinkedList.set(14,1)
console.log(myDoublyLinkedList); 
myDoublyLinkedList.insert(2,23)
console.log(myDoublyLinkedList); 
myDoublyLinkedList.remove(2)
console.log(myDoublyLinkedList); 

//-----------------------
//_______Stacks________
//Последний зашел первый вышел
//если собираемся сделать стэк с массивом то всегда его реализовывать с конца а не с начало т.к. ,более эффективнее работает код O(1)
//Когда будем использовать связанные списки в качестве стэка то реализовываем с начало списка т.к. O(1)

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined

    let temp = this.top
    this.top = this.top.next
    temp.next = null

    this.length--
    return temp
  }
}

let myStack = new Stack(7)
myStack.push(23)
myStack.push(24)
myStack.pop()
console.log(myStack);
//Node { value: 23, next: Node }
//Node {value: 7, next: null}
//value:23
//{value: 7, next: null}

//--------------------
//_____Очередь_______
//Первый зашел первый вышел
// Array - зашел unshift() O(n), вышел pop() O(1)
//Связанный список - зашел unshift() O(1), вышел pop() O(n)







  

 

