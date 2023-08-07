//this - контекст вызова

//
function hey() {
   console.log(this.age)
} 
hey()//undefined window.hey()

//
let object1 = {
  name: 'Vlad',
  hey() {
    console.log(this.name);
  }
};

object1.hey(); // Output: Vlad

//
let object2 = {
  name: 'Vlad',
  //там где стрелочная функция cоздаеться тому и будет равен this 
  hop: () => {
    console.log(this.name);
  }
};

object2.hop(); // Output: undefined (since arrow functions do not bind their own `this`)

//
let object3 = {
  name: 'Vlad',
  hep() {
    const het = () => {
      console.log(this.name);
    }
    het();
  }
};

object3.hep(); // Output: Vlad

let object4 = {
  name: 'Vlad',
  hep2() {
    const het2 = () => {
      console.log(this.name);
    }
    return het2();
  }
};
//когда стрелочная фукнкция мы не смотрим от чего имени она вызваеться а смотрим момент ее создание чему ровнялся this
var yo = object4.hep2();
yo(); // Output: Vlad

let object5 = {
  name: 'Vlad',
  hip2() {
    //любой обработчик который мы передаем кнопке будь то функция и т.д ее this будет равен всегда этому элементу, в примере мы привязали кнопке обработчик с this но он будет указывать не на name объекта а на this самой кнопке -> типо button.hop2()
    document.querySelector('.button').addEventListener('click', this.hop2);//чтобы не терять this надо bind -> this.hop.bind(man)
  },
  hop2() {
    console.log(this.name);
  }
};
object5.hip2();

//
let object6 = {
  name: 'Vlad',
  hip3() {
    document.querySelector('.button').addEventListener('click', console.log(this.name));
  }
};
object6.hip3();//button.this

let object7 = {
  name: 'Vlad',
  hip3() {
    document.querySelector('.button').addEventListener('click',() => console.log(this.name));
  }
};
object7.hip3();//vlad

//
let object8 = {
  name: 'Vlad',
  hip4() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

object8.hip4();//Vlad
//вызвался hip4 от button 
document.querySelector('.button').addEventListener('click', object8.hip4);// button.this

//
let object9 = {
  name: 'Vlad',
  hip4() {
    //this - object9
    setTimeout(function() {
      console.log(this.name);//window
    }, 1000);
  }
};
let btn = document.querySelector('.button')
btn.addEventListener('click', object9.hip4);// button.this

//
let object10 = {
  name: 'Vlad',
  hip4() {
    console.log(this)//button
    setTimeout(() =>  {
      console.log(this.name);//button
    }, 1000);
  }
};
let btn2 = document.querySelector('.button')
btn.addEventListener('click', object10.hip4);// button.this

//
let object11 = {
  name: 'Vlad',
  hip4() {
    console.log(this)//props
    setTimeout(() => {
      console.log(this.name);//props
    }, 1000);
  }
};
function User(props){
  //вызываеться от имени props 
  props.hip()
}
User({hip:object11.hip4})

//
let object12 = {
  name: 'Vlad',
  hip4() {
    var that = this //props
    console.log(this) //props
    setTimeout(function(){
      console.log(this);// window
      console.log(that) //props
    }, 1000);
  }
};

function User(props) {
  props.hip()
}
User({ hip: object12.hip4 })

//
function User(props) {
  console.log(this)
}
//тут не создаем а вызываем User()
let a1 = User()//window
//создаем новый объект c помощью new User()
let a2 = new User() // new {}

//
class Students {
  name = 'anonym'
  hip(){
    console.log(this.name)
  }
  //this в стрелочной функции вызываеться не как в objects он не выпрыгивает из него а указывает на class. работаем со стрелочными функциями чтобы обезапосить себя от того что this потеряем
  hop = () => {
    console.log(this.name)
  }
  render(){
    btn.onClick = this.hip //btn this
    btn2.onClick = this.hop // 'anonym'
  }
}
let st1 = new Students()
st1.hip()//'anonym'
st1.hop()//'anonym'
let btn3 = document.querySelector('.button')
btn3.addEventListener('click', st1.hip);//btn this
btn3.addEventListener('click', st1.hop); //'anonym'
st1.render() 



