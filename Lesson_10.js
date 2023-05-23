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
