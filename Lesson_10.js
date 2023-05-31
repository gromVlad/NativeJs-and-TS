// ________Promise___________
//отровляем запрос далее получаем ответ.
//Axax запросы - тот кто делает запрос это client, тот кто обрабатывает называеться сервером.Спустя некоторое время сервер отечает, ответ получем асинхронно.
const fetch = (url, callbаck) => {
  //..
  //и callback вызовиться когда мы получим данные друг за другом вызываем callback на разные url друг за другом
  if (err) {
    console.log(err);
  } else {
    //....
  }
  if (err) {
    //fetch(...)
  }
  //получили ад callback и чтобы такого не было то мы используем promise и т.д.
};

const alex = {
  getFile() {
    //создаем обещание
    return new Promise(() => {});
  },
};

//У promise 3 состояние - pending (ожидание) | fuilfield (обещание выполнено) | regected (не выполнено с ошибкой)
//чтобы перевести promise в состояние fuilfiel используем функцию resolve. при regected - reject
//абстрактно promise выглядит так
function Promise(executor) {
  const resolve = (result) => {
    return {
      state: "fulfilled",
      result: result,
    };
  };
  const reject = (error) => {
    return {
      state: "regected",
      result: error,
    };
  };

  //возврощает promise всегда в таком порядке все
  executor(resolve, reject);
}

//достаем результат с помощью методов then / catch / finally
//then - подписываемся на если получим положительный результат
const alex1 = {
  getFile() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("get file data");
        //rej("error not get data")
      }, 2000);
    });
  },
};
const prom = alex1.getFile();

//get resolve
prom.then((res) => {
  console.log("then", res);
});

//get catch
prom.catch((err) => {
  console.log("error", err.message);
});

//также можем сразу получить через then resolve reject но обычно так мы не пишем обычно пишем раздельно с catch
prom.then(
  (res) => {
    console.log("then", res);
  },
  (err) => {
    console.log("error", err.message);
  }
);

//попадаем всегда вне зависемости от результата
prom.finally(() => {
  console.log('finally');
})

//!!!Важно что все эти методы генерируют новый promise и можно создавать цепочку promise бесконечно - называеться цепочка promise // цепочка рабоает вся когда мы не получаем по пути ошибок // если попадем на ошибку то цепочка прерываеться. Если мы ничего не возврощает то новый res получит undefined, если что-то возвращает через return тото что мы возвращает перекиниться на новый res
alex1.getFile().then((res) => console.log('hello')).then((res) => 1).then().then()

//работа catch абсолютно идентичная если catch после всех then то он ловит ошибки во всех выше но не ниже
alex.getFile().catch((err) => {console.log('catch',err)}).then((res) => {console.log(res)})

//finally как будто дырявый он всегад как бы возврощаеться какой бы не был результат / когда ест диблириущий код можно кинуть туда
alex.getFile()
  .then(() => console.log('then'))
  .catch((err) => console.log('err'))
  .finally(() => console.log('finally'))

//-------------------------
//создание и работа на практике
const fetchTwo = (url) => {
  return new Promise ((res,rej) => {
    if (url && url.lenght) {
      res()
    } else {
      rej()
    }
  })
}

//вместо адской пирамиды callback 
fetchTwo('http://localhost:3000/vcvc')
  .then((users) => {
    return fetchTwo('http://localhost:3000/1')
  })
  .then((name) => {
    return fetchTwo('http://localhost:3000/vcvc')
  })
  .then((book) => {
    return fetchTwo('http://localhost:3000/book')
  })

//-----------------------------------
// ____Async / await __________
//async await теперь все пишут через них.Функция помеченная как async всегда возврощает promise
//вместо обычного promise
const foo = () => {
  return new Promise ((res) => {
    res(10)
  })
}
//пишем вот так
const foo1 = async() => {
  return 10
}

//await ,будет стоять на этой точке пока не resolve promise
//вместо этого
fetchTwo('http://localhost:3000/vcvc')
  .then((users) => {
    return fetchTwo('http://localhost:3000/1')
  })
  .then((name) => {
    return fetchTwo('http://localhost:3000/vcvc')
  })
  .then((book) => {
    return fetchTwo('http://localhost:3000/book')
  })

//пишем так / как обычный синхронный код выглядит
const foo2 = async () => {
  сonst users = await fetchTwo('http://localhost:3000/1')
  сonst name = await fetchTwo('http://localhost:3000/vcvc')
  сonst book = await fetchTwo('http://localhost:3000/book')
}

//с asunc await используем try catch для отлова ошибок, и также finally также работает

//------------------------------
//Axios
//пример запроса с библиотекой axios / данные в поле data всегда находяться
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

//c async await
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

//-----------------------
//методы Promise
//также  есть разные методы с promise посмотреть на MDN
//например Promise.resolve() сразу вернет результат, также и с Promise.reject(). Promise.all - дожидаеться пока все promise выполняться, должны быть положительные результаты
const promise1 = Promise.resolve('Hello');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});
const promise3 = fetch('https://api.example.com/data');

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  })
  .catch(error => {
    console.error(error);
  });
//метод allSettled возвращает массив объектов, каждый из которых представляет результат выполнения соответствующего Promise-объекта, можно получить информацию о результате каждой из них, независимо от того, была ли операция выполнена успешно или нет.
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });
//Promise.any() -возврощает первый успешный
//Promise.race(iterable) возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится первый из переданных промисов, со значением или причиной отклонения этого промиса.

// __Practice__
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const myPromise = new Promise((resolve, reject) => {
  console.log("Promise is created");
  // здесь намеренно не вызываем ни resolve, ни reject
});

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const funReturnPromiseOnlyPending = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello my frinds')
    }, 3000);
  })
}
const myPromise2 = funReturnPromiseOnlyPending()
myPromise.then(resolve => console.log(resolve))//hello my frinds

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const funReturnPromiseOnlyRejected = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 3000);
  })
}
const myPromise3 = funReturnPromiseOnlyRejected()
myPromise.catch(error => console.log(error))//'Error'

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const funReturnPromiseResolvedReturnText = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Data')
    }, 3000);
  })
}
const myPromise4 = funReturnPromiseResolvedReturnText()
myPromise.then(resolve => console.log(resolve))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
//html
/* <button id="create-promise-btn">Create</button>
  <button id="resolve-promise-btn">Resolve</button>
  <button id="reject-promise-btn">Reject</button> */
const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess: function (paramName) {
    console.log(`Promise is resolved with data: ${paramName}`);
  },
  onError: function (paramName) {
    console.log(`Promise is rejected with error: ${paramName}`);
  }
};

const createPromiseBtn = document.querySelector('#create-promise-btn');
createPromiseBtn.addEventListener('click', function () {
  handlePromise.promise = new Promise((resolve, reject) => {
    handlePromise.resolve = resolve;
    handlePromise.reject = reject;
  });
});//promise: Promise {<pending>} 

const resolvePromiseBtn = document.querySelector('#resolve-promise-btn');
resolvePromiseBtn.addEventListener('click', function () {
  handlePromise.resolve('resolved data');
  handlePromise.onSuccess('resolved data');
});//resolve : Promise {<fulfilled>: 'resolved data'}

const rejectPromiseBtn = document.querySelector('#reject-promise-btn');
rejectPromiseBtn.addEventListener('click', function () {
  handlePromise.reject('error message');
  handlePromise.onError('error message');
});//promise: Promise {<rejected>: 'error message'}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
const newPromis = () => {
  return new Promise((res, rej) => {
    res("My name is")
  })
}
const onSuccess = (text) => {
  return text + " Vlad"
}

const printFun = (value) => {
  return console.log(value)
}
const name = newPromis().then(res => onSuccess(res)).then(res => printFun(res)) //My name is Vlad

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
const promiseReturnAnna = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ name: "Anna" })
    }, 2000);
  })
}

const promiseReturnAge = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ age: 16 })
    }, 3000);
  })
}

const promiseReturnCity = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ city: 'Minsk' })
    }, 4000);
  })
}
Promise.all([promiseReturnAnna(), promiseReturnAge(), promiseReturnCity()])
  .then((values) => {
    const [obj1, obj2, obj3] = values;
    const result = { ...obj1, ...obj2, ...obj3 };
    console.log(result);
  })
  .catch((error) => console.log(error));
//{name: 'Anna', age: 16, city: 'Minsk'}

//___eventLoop___
console.log(1)
console.log(2)
let pr = new Promise((res) => {
  console.log(2.1)
  //асинхронный кад который выпопляет после основого кода
  setTimeout(() => {
    res()
  }, 3000);
  console.log(2.2);
})
//микротаска после 3с res получит и сработает
pr.then(res => console.log(4))
console.log(3)
//1
//2
//2.1
//2.2
//3
//4

// --Dimch lesson promise --
//Promise объект который возврощает обещание, когда запрос пройдет оно выполниться корректно или с ошибкой.У promise нету свойст а только методы.

//Метод then() выполняеться после состояние pendind, как подписка, слушает когда обещание выполниться resolve.
axios.get("http://google.com").then(res => console.log(res.data))

//Подписываемся сразу и не ждем когда получим pending.Метод catch () ловит ошибки reject.
axios.get("http://google.com").catch(error => console.log(error.message))

//В цепочке 
axios.get("http://google.com").then(res => console.log(res.data)).catch(error => console.log(error.message))

//также есть метод finish - в любом случае показываеться
axios.get("http://google.com").then(res => console.log(res.data)).catch(error => console.log(error.message)).finally(() => console.log('finish'))

//___Promise методы 
//Promise All - при reject ответе останавливаеться дальше не идет
const otherPromise = Promise.all([promise1,promise2])
//в result мы получим массив объектов результатов [promise1,promise2]
otherPromise.then((result) => {
  console.log(result[0],result[1])
}).catch((err) => {
  console.log(error)
});

//allSettled можно обрабатывать и resolve  и reject 
const otherPromise2 = Promise.allSettled([promise1, promise2])
//в result мы получим массив результатов [promise1,promise2] только со строкой в объекте status  и также поле value там результат promise, если ошибка то будет строка называться reason 
otherPromise.then((result) => {
  console.log(result)//[{status:"",value:{}},{}]
  const data = res[0].status === 'fulfilled' ? result[0].value : {data:{vacans:null}}
  const data2 = res[0].status === 'fulfilled' ? result[0].value : {name:result[1].reason}

})

//Cразу resolve получить - можно сделать заглушку пока не получили доступ к серверу
const resolvePromise = Promise.resolve([{name:"v"},{name:"A"}])
resolvePromise.then(data => console.log(data)).catch(error => console.log(error))

//Cразу reject получить - можно сделать заглушку пока не получили доступ к серверу
const rejectPromise = Promise.reject([{mes:"some error"}])
rejectPromis.then(data => console.log(data)).catch(error => console.log(error))

const userApi = {
  getuser(){
    return Promise.resolve([{ name: "v" }, { name: "A" }])
  },
  login(login,password) {
    if (login !== 123 && password !== "123"){
      return Promise.reject([{ mes: "some error" }])
    } else {
      return Promise.resolve([{ name: "v" }, { name: "A" }])
    }
  }
}

userApi.getuser().then(user => console.log(user))
userApi.login("123",'4254').then((result) => console.log(result)).catch((err) => console.log(err));

//цепочка методов , каждый раз при вызове then() возврощает новый promise. При return мы получаем в новый promise значение что возврощали