//___javascript class oop solid___//
//01 - создание однотипных объектов
//02 - ООП принципы: инкапсуляция, наследование,полиморфизм
//читаем книжку шаблоны - стоян стефанов
//классы это синтаксический сахар над функции конструктора который возвращают нам новый объект

function DeletUserAction(userId) {
  this.type = "delete-user";
  this.pauload = {
    userId: userId,
  };
}
//неявно возврощаем функцию конструктор без return (т.к с new вызываем)
const action = new DeletUserAction(121545);
const action2 = new DeletUserAction(333);
console.log(action); //DeletUserAction { type: 'delete-user', pauload: { userId: 121545 } }
console.log(action2); //DeletUserAction { type: 'delete-user', pauload: { userId: 333 } }

//------------
//любой объект создан с помощью функции контсруктор
console.log(action.constructor.name); //DeletUserAction

const a = [];
console.log(a.constructor.name); //Array

//---------------
class DeleteUserClass {
  //то что делали раньше в сомой функции делаем теперь в конструкторе отдельно
  constructor() {
    this.type = "delete-user";
    this.pauload = {
      userId:13,
    };
  }
}

//-------------------------
//_____1_____
const User = (name) => {
  const user = {
    name:name,
    site:'it-kam',
    dataBitth: new Date(1994,1,2),
    hello(){
      console.log(`I am ${this.name} from ${this.site}`)
    }
  }
  return user
}
const U1 = User('vlad')
console.log(U1)
/* {
  name: 'vlad',
  site: 'it-kam',
  dataBitth: 1994-02-01T22:00:00.000Z,
  hello: [Function: hello]
} */
U1.hello()//I am vlad from it-kam

//____2_____
function User2(name,site,dob){
  this.name = name
  this.site = site
  this.dateBirth = dob
}

User2.prototype.hello = function () {
  console.log(`I am ${this.name} from ${this.site}`)
}

const U2 = new User2('Dim','google.com',new Date(1989,18,12))
U2.hello()//I am Dim from google.com

//______3______
//class это инструкция и спецификация которая позволяет нам создавать однотипные объекты
class User3 {
  #name = ""

  constructor(name, site, dob){
    //инкапсуляция - сокрытие деталей
    this.#name = name
    this._site = site

    this.dateBirth = dob
    this.counter = 0
  }

  hello() {
    this.counter++
    console.log(`I am ${this.#name} from ${this._site}`)
  }

  getname (){
    console.log(this.#name)
    return this
  }

  setName(nameNew){
    this.#name = nameNew
    return this
  }

  //при таком синтаксисе можно обращаться к методам как к свойству
  get site(){
    console.log(this._site)
  }

  set site(value){
    this._site = value
  }

}
const U3 = new User3("nika", 'hell.com', new Date(1997, 25, 12))
U3.hello()//I am nika from hell.com
console.log(U3.hello === User3.prototype.hello);//true

U3.setName('vlad').getname()//vlad

U3.site = 'com.com.)' //set
U3.site//com.com.)  // get

//-------------------------
//наследование - внутри цепочка прототипов
//расширяем класс
class Coder extends User3 {
  constructor(name, site, dob,tech){
    super(name, site, dob)
    this.tech = tech
  }

  code(){
    console.log(`here ${this.tech} this my code:functions(){}`)
  }

  hello(){
    super.hello()
    console.log('go away((');
  }
}
const coder1 = new Coder("jake", 'jake.com', new Date(1990, 8, 12),'js')
coder1.hello()//I am jake from jake.com / go away((
coder1.code()//here js this my code: functions(){ }

class Hacker extends Coder {
  constructor(a,b,c,d){
    super()
    this.tech = 'xxx'
  }
  code(){
    console.log('i am hack every')
  }
}

const hack1 = new Hacker(("[[[", '_.com', new Date(172, 8, 12), 'js'))
hack1.code()//i am hack every

//--------------------
// полиморфизм - когда мы реализовали разных наследников с одним общим класом которые мы можем вызывать
let users = [U3,coder1,hack1]
users.forEach( u => u.hello())
/* I am vlad from com.com.)
I am jake from jake.com
go away((
I am undefined from undefined
go away(( */

//---------------------
// in react
class Profile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return 'It -kamasutra subscribe'
  }
}
/* 
<Profile age={1} >
const comp1 = new profile ({age:1})
comp1.render()
jsx => html
comp1.componentDidMount()*/
