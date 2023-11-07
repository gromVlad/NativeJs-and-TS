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
//Node { val ue: 23, next: Node }
//Node {value: 7, next: null}
//value:23
//{value: 7, next: null}

//--------------------
//_____Очередь_______
//Первый зашел первый вышел
// Array - зашел unshift() O(n), вышел pop() O(1)
//Связанный список - зашел unshift() O(1), вышел pop() O(n)
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue() {
    if (this.length === 0) return undefined
    let temp = this.first
    if (this.length === 1) {
      this.last = null
    } else {
      this.first = this.first.next
      temp.next = null
    }
    this.length--
    return temp
  }
}

let myQueue = new Queue(11)
myQueue.enqueue(3)
myQueue.enqueue(23)
myQueue.enqueue(7)

//---------------------
//______Деревья_____

//двоичное дерево 
//Идеальное дерево - это когда в каждой строке есть элемент а не например только справо или слева
//Узел у которого нет дочерних элентов называеться листом
// {
//   value:4,
//   left:null,
//   right:null
// }

//бинарное дерево поиска - в нем элементы которые меньше родительского идут направо и больше налево, и такое ветвление к каждому узлу
//47 -> 21 | 76 -> 21 -> 12 | 27 || 76 -> 52 | 82

//big O для бинарных деревьев поиска
//O (log n) т.к. если дерево их 3 уровней чтобы удалить , добавить и найти потребуеться 3 операции поэтому 2(3 степени), такой поиск эффективен.

//если у нас есть дубликаты в бинарном дереве поиска то тогда просто добовляем в элемент count с количеством дублей этого элемента

//бинарное дерево поиска
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  //добавим элемент
  insert(value) {
    const newNode = new Node(value)

    //если дерево пустое то добавим новый элемент
    if (this.root === null) {
      this.root = newNode
      return this
    }
    //если нет то по умолсанию текущий элемент temp равен root первому элементу
    let temp = this.root

    //цикл будет идти пока не вернем что-то (return)
    while (true) {

      //если есть такое значения то возврощаем undefined
      if (newNode.value === temp.value) return undefined

      //если меньше идем вправо
      if (newNode.value < temp.value) {

        //пошли влево и если нету детей то добовляем наш newNode
        if (temp.left === null) {
          temp.left = newNode
          return this
        }

        //если еще ниже есть ребенок то текущий элемент передвигаем на этого ребенка и повторяем цикл пока не найдем пустое место в дереве
        temp = temp.left

      //больше идем влево
      } else {

        //--//--//--
        if (temp.right === null) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  //поиск
  contains(value) {
    if (this.root === null) return false

    //временная переменная
    let temp = this.root

    //пока temp не равно null 
    while (temp) {
      if (value < temp.value) {
        temp = temp.left
      } else if (value > temp.value) {
        temp = temp.right
      } else {
        //если равно value вернем  true
        return true
      }
    }
    return false
  }
}
let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.contains(47)//true

//------------------------
//______Хэш-таблицы_____
//Объект  ["any_key": 128863] : 2 (ячейка где храниться объект)
//Работают в одну сторону, они детерминированы
//также когда одни объекты идут в ячейку в которой уже что-то храниться это называеться столкновением
//Чтобы исключть столкновения используют зондирование тоесть если элемент есть в ячейки то посмотри если соседняя ячейка пуста то добавь сюда , также можно превратить в связанный список и просто добовлять новый элемент в уже имеюшийся

class HashTable {

  //по умолчанию 7 если не определено
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }

  //приватное свойство определения в какую ячейку запишиться данные
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
    }
    return hash
  }

  set(key, value) {
    //получили адрес ячейки куда будем ложить объекты
    let index = this._hash(key)

    //если маасив не существует в этой ячейки то его создадим
    if (!this.dataMap[index]) this.dataMap[index] = []

    //после создание добовляем наш объект
    this.dataMap[index].push([key, value])
    return this
  }

  //получить значения по ключу
  get(key) {
    let index = this._hash(key)

    //если есть значения по индексу
    if (this.dataMap[index]) {

      //пройдемся по индексу и найдем нужное значения
      for (let i = 0; i < this.dataMap[index].length; i++) {

        //если нашли значения ключа
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1]
        }
      }
    }
    return undefined
  }

  //получить все ключи 
  keys() {
    let allKeys = []

    //проходимся по циклу
    for (let i = 0; i < this.dataMap.length; i++) {

      //если что-то есть в индексе
      if (this.dataMap[i]) {

        //проходимся по индексу и достаем ключи
        for (let j = 0; j < this.dataMap[i].length; j++) {

          //пушим в allKeys
          allKeys.push(this.dataMap[i][j][0])
        }
      }
    }
    return allKeys
  }
}

let myHashTable = new HashTable()
myHashTable.set('bolts', 1400)
myHashTable.set('washers', 50)

//поиск в хэш таблице из=за того что данные распределены по ячейкам  то обычно используем одну операцию поэтому O(1)

//Interview Question
//если есть хоть одно одинаковое значения то равно true по умолчанию даны 2 массива
function itemInCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true
    }
  }
  return false
}
let array1 = [1, 3, 5]
let array2 = [2, 4, 5]
itemInCommon(array1, array2)//true
//неэффективный код (0 n2)

function itemInCommon(arr1, arr2) {

  //создаем объект со значением
  //{1:true, 3:true ...}
  let obj = {}
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true
  }

  //если есть ключ такого объекта то возврощаем true
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true
  }
  return false
}
let array1 = [1, 3, 5]
let array2 = [2, 4, 5]
itemInCommon(array1, array2)
//O(2n) -> O(n)

//---------------------------
//________Граффы________
//Граффы (вершина узла)
//Между собой соединяються, могут подключены к обеим вершинам, нет ограничений сколько вершин будет подлючено. По графам мы ходим, они предостовляют выбор маршрутов перехода, используеться в картах геолокации и т.д.
//если есть двунапрвленноые ребра то они обозначаються без стрелок (двунаправленые тоесть например я дружу с петей а петя дружит со мной , двунаправленная связь)
//также есть одноноправленые то есть типо подписка на знаменитость и т.д.
//сзвязанный список и бинарные деревья являються графамми

//Матрицы смежности. На основании связи строиться матрица связей и если данные по диагонали семетричны то и матрица семетрична
//A -> B -> C -> D -> E -> опять A получили робм
//матрица
// _ A B C D E
// A 0 1 0 0 1
// B 1 0 1 0 0
// C 0 1 0 1 0
// D 0 0 1 0 1
// E 1 0 0 1 0
//Где они соединяються там 1 где нет то, видим что идет полоса по диагонали симитрична
//При однонапрвленной связи в некторый участакх было бы по другому - т.к. связь работала только в одну сторону

//Список смежности. В виде объектов
//A -> B -> C -> D -> E -> опять A получили робм
//Вершина ключ а ее ребра это массив
//{ A:["B","E"] , B:["A","C"]...}

//Big O в граффах. 
//Матрица смежности неэффективна с точки зрения пространственной сложности O(|V|2), временная сложность  O(|V|2, добавить новую связь 0(1), удаление O(1) т.к просто удалим 1 и впишем 0
//Список смежности O (|V| + |E|),временная сложность О(1),добавить новую связь 0(1),удаление O(|E|) т.к. надо пройтись по объекту и в нужный местах удалить вершины
//По факту все таки список смежности более эффективен т.к. матрица хранитт очень много 0 и 1 что при масштабировании неприемлемо с точки зрения эффективности

//
class Graph {
  constructor() {
    this.adjacencyList = {}
  }


  //создаем вершины
  addVertex(vertex) {

    //если нет то создаем
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }

  //добовляем связи
  addEdge(vertex1, vertex2) {

    //проверяем что вершины существуют
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

      //добовлем из в ребра
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }
    return false
  }

  removeEdge(vertex1, vertex2) {

    //проверяем что вершины существуют
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

      //фильтруем их чтобы удалить необходимые ребра из массива
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
        .filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
        .filter(v => v !== vertex1)
      return true
    }
    return false
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined

    //пока вершина которую мы удаляем имеет ребра то цикл продолжает работать и удалять все связи
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, temp)
    }

    //дальше удаляем саму вершину
    delete this.adjacencyList[vertex]
    return this
  }
}
let myGraph = new Graph()
myGraph.addVertex("A")
myGraph.addVertex("B")
myGraph.addVertex("C")
myGraph.addVertex("D")
myGraph.addEdge("A", "B")
myGraph.addEdge("A", "C")
myGraph.addEdge("A", "D")
myGraph.addEdge("B", "D")
myGraph.addEdge("C", "D")


//-----------------------
//____Рекурсия_____
//Функция которая вызывает саму себя
//Каждый раз когда мы вызываем функцию она должна решать все меньшую и меньшую проблему
//Есть базовый вариант когда  if будет true и вернет этот самый базовый вариант или функция будет вызываться снова (базовый вариант нужен обязательно т.к. без него рекурсия будет работать вечно... пока не переполнит стэк)

//Call Stack
//Первый вошел первый вышел
function funcThree() {
  console.log('Three')
}

function funcTwo() {
  funcThree()
  console.log('Two')
}

function funcOne() {
  funcTwo()
  console.log('One')
}
funcOne()
//Stack : funcOne <- funcTwo <- funcThree
//На верху будет фнукция 3
//'Three'
//'Two'
//'One'

//factorial
//4 * 3 * 2 * 1
//4!
//4 * 3!
//    3 * 2!
//        2 * 1!
//            1 (как только дойдем до 1 прекратиться разбивка)
function factorial(n) {
  if (n === 1) return 1
  return n * factorial(n - 1)
}
factorial(4)//24
//Stack : 1! <- 2! <- 3! <- 4!
//factorial(4)
//return 4 * factorial(3)
//return 3 * factorial(2)
//return 2 * factorial(1)
//return 1
// дальше мы вернули число которое возврощаеться и подстовляеться в функцию вызова 
// 1 -> return 2 * 1 = 2 (получили два дальше идем и возврощаем то что получили и т.д.)
// 2 -> return 3 * 2 = 6
// 6 -> return 4 * 6 = 24

//--------------------
//______Algorithms_ Basic Sorts_____

//Bubble Sort
//поэлементно сравниваем все элементы, берем массив [1,4,3,2,6,5] проходим по каждому элементу например 4 и сравниваем с каждым элментом а массиве и в зависемости < || > размещаем наш элемент в нужном положений
function bubbleSort(array) {

  //последний элемент убираем т.к последний сам автоматический займет свое место,сначало будем проходить до 5 срвнений, 4 , 3 , 2, 1
  for (let i = array.length - 1; i > 0; i--) {

    for (let j = 0; j < i; j++) {

      //первый элемент сравниваем со вторым и если первый больше то меняем его местами
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
bubbleSort([4, 2, 6, 5, 1, 3])//[1, 2, 3, 4, 5, 6]

//Selection Sort
//Сортировка происходит по индексу, стартовое значения 0 элемент масссива, далее сравниваем элементы и находим минимальный из предложенных сохраняем его индекс и переносим на первую строчку далее проделывает со второй и т.д.

function selectionSort(array) {
  //array.length - 1 т.к последний сам отсортируеться
  for (let i = 0; i < array.length - 1; i++) {
    let min = i 
    for (let j = i + 1; j < array.length; j++) {

      //проходиться по массиву сравнивая с минимальным значением по умолчанию и если есть меньше то перезаписывает его
      if (array[j] < array[min]) {
        min = j
      }
    }

    //и если не равны то меняем местами
    if (i !== min) {
      let temp = array[i]
      array[i] = array[min]
      array[min] = temp
    }
  }
  return array
}
selectionSort([4, 2, 6, 5, 1, 3])//[1, 2, 3, 4, 5, 6]

//Insertion Sort
//там где нужно по условию меняем местами элементы между собой

function insertionSort(array) {
  let temp
  for (let i = 1; i < array.length; i++) {
    temp = array[i]

    //во втором цикле мы останемся при условий что J > temp и должно быть больше чем -1,var j чтобы можно было обратиться вне цикла
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = temp
  }
  return array
}
insertionSort([4, 2, 6, 5, 1, 3])

//--------------------
//______Merge Sort______









 









  

 

