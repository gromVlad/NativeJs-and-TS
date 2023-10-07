/* Модульный паттерн (Module Pattern) - этот паттерн позволяет организовать код в модули, каждый из которых содержит набор функций и переменных. Это позволяет инкапсулировать код и защитить его от внешнего доступа.

Фабричный паттерн (Factory Pattern) - этот паттерн используется для создания объектов с помощью фабричных методов. Фабричный метод предоставляет интерфейс для создания объектов, но сам не определяет их классы.

Паттерн Одиночка (Singleton Pattern) - этот паттерн гарантирует, что класс имеет только один экземпляр, и предоставляет глобальную точку доступа к этому экземпляру.

Наблюдатель (Observer Pattern) - этот паттерн используется, когда объект должен уведомлять другие объекты об изменениях своего состояния. Это достигается через регистрацию наблюдателей, которые получают уведомления об изменениях.

Паттерн Адаптер (Adapter Pattern) - этот паттерн используется, когда необходимо преобразовать интерфейс одного класса в интерфейс другого класса.

Паттерн Декоратор (Decorator Pattern) - этот паттерн позволяет добавлять дополнительное поведение к объекту, не изменяя его класса.

Цепочка обязанностей (Chain of Responsibility Pattern) - этот паттерн используется, когда необходимо передавать запросы по цепочке объектов, пока один из объектов не обработает запрос.

Паттерн Стратегия (Strategy Pattern) - этот паттерн позволяет определять семейство алгоритмов, инкапсулировать каждый из них и делать их взаимозаменяемыми.

Паттерн Фасад (Facade Pattern) - этот паттерн скрывает сложность системы, предоставляя упрощенный интерфейс для взаимодействия с ней.

Паттерн Итератор (Iterator Pattern) - этот паттерн используется для последовательного доступа к элементам коллекции, не раскрывая ее внутреннего устройства. */

//______модульный паттерн______//
var myModule = (function () {
  // Приватные переменные и функции
  var privateVar = 'Hello World';

  function privateFunction() {
    console.log(privateVar);
  }

  // Возвращаемый объект, содержащий публичные методы
  return {
    publicMethod: function () {
      privateFunction();
    },
    publicVar: 'I am a public variable'
  };
})();
/* В этом примере мы создаем модуль, который содержит приватные переменные и функции, а также публичные методы и переменные, которые можно использовать в другом коде. Код модуля обернут в самовызывающуюся функцию, чтобы создать приватную область видимости для переменных и функций, которые не должны быть доступны вне модуля.

Для создания модуля мы используем объект, который содержит наши публичные методы и переменные, и возвращаем этот объект из функции. Также мы можем использовать приватные переменные и функции внутри модуля, но они не будут доступны за его пределами.

В примере мы вызываем myModule.publicMethod() и console.log(myModule.publicVar) для демонстрации использования публичных методов и переменных модуля. Обратите внимание, что мы не можем использовать приватные переменные и функции за пределами модуля. */

// Использование модуля
myModule.publicMethod(); // Выводит 'Hello World'
console.log(myModule.publicVar); // Выводит 'I am a public variable'

//____фабричный паттерн_____//
// Определяем фабрику
function createCar(model, year, color) {
  // Приватные переменные и методы
  var engineStarted = false;

  function startEngine() {
    engineStarted = true;
    console.log('Engine started');
  }

  function stopEngine() {
    engineStarted = false;
    console.log('Engine stopped');
  }

  // Возвращаемый объект, содержащий публичные методы
  return {
    getModel: function () {
      return model;
    },
    getYear: function () {
      return year;
    },
    getColor: function () {
      return color;
    },
    start: function () {
      startEngine();
    },
    stop: function () {
      stopEngine();
    }
  };
}

// Используем фабрику для создания объектов
var car1 = createCar('Tesla Model S', 2021, 'Red');
var car2 = createCar('Toyota Camry', 2022, 'Black');

// Используем объекты
console.log(car1.getModel()); // Выводит 'Tesla Model S'
car2.start(); // Выводит 'Engine started'
car1.stop(); // Выводит 'Engine stopped'
/* В этом примере мы определяем фабрику, которая создает объекты автомобилей с помощью фабричных методов createCar(). Фабричный метод принимает параметры модели, года и цвета автомобиля, и возвращает объект, который содержит публичные методы для доступа к свойствам и методам автомобиля.

Обратите внимание, что объекты автомобилей содержат приватные переменные и методы, такие как engineStarted, startEngine() и stopEngine(). Они не могут быть доступны за пределами объекта и инкапсулированы внутри объекта.

Для создания объектов мы используем фабрику, вызывая метод createCar() с нужными параметрами. Затем мы используем методы объектов для доступа к их свойствам и методам.

В примере мы вызываем console.log(car1.getModel()), чтобы получить модель первого автомобиля, а также car2.start() и car1.stop(), чтобы запустить и остановить двигатель второго и первого автомобилей соответственно. */

//_____паттерн Одиночка_____//
// Определяем класс-одиночку
var Singleton = (function () {
  // Приватные переменные и методы
  var instance;
  function init() {
    // Код инициализации
    return {
      publicMethod: function () {
        console.log('Hello World');
      },
      publicVar: 'I am a public variable'
    };
  }

  // Возвращаемый объект, содержащий публичные методы
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// Использование класса-одиночки
var singleton1 = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // Выводит 'true'
singleton1.publicMethod(); // Выводит 'Hello World'
console.log(singleton1.publicVar); // Выводит 'I am a public variable'
/* В этом примере мы определяем фабрику, которая создает объекты автомобилей с помощью фабричных методов createCar(). Фабричный метод принимает параметры модели, года и цвета автомобиля, и возвращает объект, который содержит публичные методы для доступа к свойствам и методам автомобиля.

Обратите внимание, что объекты автомобилей содержат приватные переменные и методы, такие как engineStarted, startEngine() и stopEngine(). Они не могут быть доступны за пределами объекта и инкапсулированы внутри объекта.

Для создания объектов мы используем фабрику, вызывая метод createCar() с нужными параметрами. Затем мы используем методы объектов для доступа к их свойствам и методам.

В примере мы вызываем console.log(car1.getModel()), чтобы получить модель первого автомобиля, а также car2.start() и car1.stop(), чтобы запустить и остановить двигатель второго и первого автомобилей соответственно. */

//____Наблюдатель (Observer)____//
// Определяем издателя
function Publisher() {
  // Список подписчиков
  this.subscribers = [];
}

Publisher.prototype = {
  // Метод для добавления подписчиков
  subscribe: function (subscriber) {
    this.subscribers.push(subscriber);
  },

  // Метод для удаления подписчиков
  unsubscribe: function (subscriber) {
    var index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
      this.subscribers.splice(index, 1);
    }
  },

  // Метод для оповещения подписчиков
  notify: function (data) {
    this.subscribers.forEach(function (subscriber) {
      subscriber.update(data);
    });
  }
};

// Определяем подписчика
function Subscriber() {
  // Метод для обновления данных
  this.update = function (data) {
    console.log('Data updated: ' + data);
  };
}

// Используем издателя и подписчиков
var publisher = new Publisher();
var subscriber1 = new Subscriber();
var subscriber2 = new Subscriber();

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

publisher.notify('Hello World'); // Выводит 'Data updated: Hello World'

publisher.unsubscribe(subscriber2);

publisher.notify('Goodbye World'); // Выводит 'Data updated: Goodbye World' (только для подписчика 1)
/* В этом примере мы определяем издателя (Publisher) и подписчика (Subscriber). Издатель содержит список подписчиков (subscribers) и методы для добавления (subscribe), удаления (unsubscribe) и оповещения (notify) подписчиков.

Подписчик содержит метод update, который вызывается издателем при обновлении данных.

Для использования издателя и подписчиков мы создаем объекты publisher, subscriber1 и subscriber2. Затем мы добавляем подписчиков в список подписчиков издателя с помощью метода subscribe(). Затем мы вызываем метод notify() издателя, чтобы оповестить подписчиков об обновлении данных. Мы также вызываем метод unsubscribe() издателя, чтобы удалить одного из подписчиков из списка. Затем мы снова вызываем метод notify(), чтобы оповестить остальных подписчиков об обновлении данных.

В примере при вызове publisher.notify('Goodbye World') будет вызван метод update() только у subscriber1, так как subscriber2 был удален из списка подписчиков. */

//_____Адаптер (Adapter)____//
// Интерфейс источника данных
function DataSource() {
  this.getData = function () {
    return 'Data from the source';
  };
}

// Интерфейс потребителя данных
function DataConsumer() {
  this.consumeData = function (data) {
    console.log('Consumed data: ' + data);
  };
}

// Адаптер, преобразующий данные из источника для потребителя
function DataAdapter(dataSource) {
  this.dataSource = dataSource;

  this.getData = function () {
    var sourceData = this.dataSource.getData();
    return 'Data adapted from the source: ' + sourceData;
  };
}

// Используем адаптер для подключения источника к потребителю
var source = new DataSource();
var consumer = new DataConsumer();

var adapter = new DataAdapter(source);
var adaptedData = adapter.getData();

consumer.consumeData(adaptedData); // Выводит 'Consumed data: Data adapted from the source: Data from the source'
/* В этом примере мы имеем два интерфейса: DataSource для источника данных и DataConsumer для потребителя данных. У каждого интерфейса есть свои методы, getData() и consumeData() соответственно.

Затем мы создаем адаптер DataAdapter, который преобразует данные из источника данных в формат, который может быть использован потребителем данных. Адаптер принимает в конструкторе экземпляр источника данных dataSource, и содержит метод getData(), который вызывает метод getData() у источника данных, а затем преобразует полученные данные.

Наконец, мы используем адаптер, чтобы подключить источник данных к потребителю данных. Мы создаем экземпляры источника данных source и потребителя данных consumer, затем создаем экземпляр адаптера adapter, передавая ему источник данных. Мы вызываем метод getData() у адаптера, чтобы получить адаптированные данные, и затем передаем эти данные методу consumeData() у потребителя данных.

В примере при вызове consumer.consumeData(adaptedData) будет вызван метод consumeData() у потребителя данных, который выведет сообщение в консоль, содержащее адаптированные данные. */

//____паттерн Декоратор (Decorator)__//
// Интерфейс компонента
function Component() {
  this.operation = function () {
    return 'Component operation';
  };
}

// Базовый декоратор
function Decorator(component) {
  this.component = component;

  this.operation = function () {
    return this.component.operation();
  };
}

// Дополнительный декоратор
function ExtraDecorator(component) {
  Decorator.call(this, component);

  this.operation = function () {
    return this.component.operation() + ' with extra functionality';
  };
}

// Используем декораторы для дополнительной функциональности компонента
var component = new Component();
var decoratedComponent = new ExtraDecorator(new Decorator(component));

console.log(decoratedComponent.operation()); // Выводит 'Component operation with extra functionality'
/* В этом примере мы имеем интерфейс Component, который определяет метод operation(). Затем мы определяем базовый декоратор Decorator, который принимает в конструкторе экземпляр компонента component. Декоратор также имеет метод operation(), который вызывает метод operation() у компонента.

Затем мы определяем дополнительный декоратор ExtraDecorator, который также принимает в конструкторе экземпляр компонента component. Дополнительный декоратор вызывает конструктор базового декоратора Decorator.call(this, component) и переопределяет метод operation(), добавляя к результату строки ' with extra functionality'.

Наконец, мы используем декораторы для дополнительной функциональности компонента. Мы создаем экземпляр компонента component, затем создаем экземпляр базового декоратора, передавая ему компонент. Затем мы создаем экземпляр дополнительного декоратора, передавая ему базовый декоратор. Мы вызываем метод operation() у декорированного компонента, который вызывает метод operation() у дополнительного декоратора и возвращает результат с добавленной строкой.

В примере при вызове decoratedComponent.operation() будет вызван метод operation() у дополнительного декоратора, который вызовет метод operation() у базового декоратора, который в свою очередь вызовет метод operation() у компонента и вернет результат с добавленной строкой. */

//_____Паттерн Итератор___//
// Коллекция элементов
function Collection() {
  this.items = [];

  this.addItem = function (item) {
    this.items.push(item);
  };

  // Возвращает объект-итератор для перебора элементов
  this.createIterator = function () {
    return new Iterator(this.items);
  };
}

// Объект-итератор для перебора элементов
function Iterator(items) {
  this.index = 0;
  this.items = items;

  this.hasNext = function () {
    return this.index < this.items.length;
  };

  this.next = function () {
    return this.items[this.index++];
  };
}

// Используем итератор для перебора элементов коллекции
var collection = new Collection();
collection.addItem('Item 1');
collection.addItem('Item 2');
collection.addItem('Item 3');

var iterator = collection.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
/* В этом примере мы имеем коллекцию элементов Collection, которая содержит массив items и методы addItem() для добавления элементов и createIterator() для создания объекта-итератора для перебора элементов.

Затем мы определяем объект-итератор Iterator, который принимает в конструкторе массив items. Итератор имеет свойства index для отслеживания текущего индекса элемента и items для хранения массива элементов. Итератор также имеет методы hasNext(), который возвращает true, если есть следующий элемент для перебора, и next(), который возвращает следующий элемент из массива элементов и увеличивает текущий индекс.

Наконец, мы используем итератор для перебора элементов коллекции. Мы создаем экземпляр коллекции collection и вызываем методы addItem() для добавления элементов. Затем мы создаем экземпляр итератора с помощью метода createIterator() у коллекции. Мы используем цикл while и методы hasNext() и next() у итератора, чтобы перебрать элементы коллекции и вывести их в консоль.

В примере при вызове цикла while с помощью итератора будут выведены в консоль все элементы коллекции. */

//____Цепочка обязанностей____//
// Обработчик запроса
function RequestHandler(name) {
  this.name = name;
  this.nextHandler = null;

  this.setNextHandler = function (handler) {
    this.nextHandler = handler;
  };

  this.handleRequest = function (request) {
    if (this.canHandle(request)) {
      console.log('Request handled by ' + this.name);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log('Unable to handle request');
    }
  };

  this.canHandle = function (request) {
    return false;
  };
}

// Обработчик запроса для первой категории
function Category1Handler() {
  RequestHandler.call(this, 'Category 1 Handler');

  this.canHandle = function (request) {
    return request.category === 1;
  };
}

// Обработчик запроса для второй категории
function Category2Handler() {
  RequestHandler.call(this, 'Category 2 Handler');

  this.canHandle = function (request) {
    return request.category === 2;
  };
}

// Обработчик запроса для третьей категории
function Category3Handler() {
  RequestHandler.call(this, 'Category 3 Handler');

  this.canHandle = function (request) {
    return request.category === 3;
  };
}

// Используем цепочку обязанностей для обработки запросов
var handler1 = new Category1Handler();
var handler2 = new Category2Handler();
var handler3 = new Category3Handler();

handler1.setNextHandler(handler2);
handler2.setNextHandler(handler3);

var request1 = { category: 1 };
var request2 = { category: 2 };
var request3 = { category: 3 };

handler1.handleRequest(request1); // Выводит 'Request handled by Category 1 Handler'
handler1.handleRequest(request2); // Выводит 'Request handled by Category 2 Handler'
handler1.handleRequest(request3); // Выводит 'Request handled by Category 3 Handler'
/* В этом примере мы имеем базовый класс RequestHandler, который представляет обработчик запроса. Класс имеет свойства name для имени обработчика и nextHandler для следующего обработчика в цепочке. Класс также имеет методы setNextHandler() для установки следующего обработчика и handleRequest() для обработки запроса. Метод canHandle() проверяет, может ли обработчик обработать данный запрос.

Затем мы определяем классы обработчиков запросов Category1Handler, Category2Handler и Category3Handler, которые наследуются от RequestHandler. Каждый класс переопределяет метод canHandle(), чтобы проверить, может ли он обработать запрос своей категории.

Наконец, мы используем цепочку обязанностей для обработки запросов. Мы создаем экземпляры обработчиков запросов handler1, handler2 и handler3. Затем мы устанавливаем следующий обработчик для каждого обработчика в цепочке с помощью метода setNextHandler(). Мы создаем три запроса request1, request2 и request3, каждый со своей категорией. Мы вызываем метод handleRequest() у первого обработчика в цепочке для каждого запроса, и обработчики в цепочке будут проверять, может ли они обработать запрос, и передавать его следующему обработчику в цепочке, если не могут обработать его.

В примере при вызове handleRequest() для каждого запроса будут вызываться методы canHandle() у каждого обработчика в цепочке до тех пор, пока не будет найден обработчик, который может обработать запрос. Если не будет найден ни один обработчик, который может обработать запрос, будет выведено сообщение 'Unable to handle request'. */

//_____Паттерн Стратегия (Strategy)____//
// Контекст, который использует стратегию
function Context(strategy) {
  this.strategy = strategy;

  this.executeStrategy = function () {
    return this.strategy.execute();
  };
}

// Интерфейс стратегии
function Strategy() {
  this.execute = function () { };
}

// Конкретная стратегия 1
function ConcreteStrategy1() {
  Strategy.call(this);

  this.execute = function () {
    return 'Concrete strategy 1';
  };
}

// Конкретная стратегия 2
function ConcreteStrategy2() {
  Strategy.call(this);

  this.execute = function () {
    return 'Concrete strategy 2';
  };
}

// Используем стратегию для выполнения различных действий
var context1 = new Context(new ConcreteStrategy1());
var context2 = new Context(new ConcreteStrategy2());

console.log(context1.executeStrategy()); // Выводит 'Concrete strategy 1'
console.log(context2.executeStrategy()); // Выводит 'Concrete strategy 2'
/* В этом примере мы имеем контекст Context, который использует стратегию для выполнения различных действий. Контекст имеет свойство strategy для хранения стратегии и метод executeStrategy() для выполнения стратегии.

Затем мы определяем интерфейс стратегии Strategy, который определяет метод execute(). Метод execute() должен быть переопределен в каждой конкретной стратегии.

Мы также определяем две конкретные стратегии ConcreteStrategy1 и ConcreteStrategy2, которые наследуются от Strategy. Каждая конкретная стратегия переопределяет метод execute(), чтобы выполнить свою уникальную функцию.

Наконец, мы используем стратегию для выполнения различных действий. Мы создаем экземпляры контекста context1 и context2, каждый с различной стратегией. Мы вызываем метод executeStrategy() у каждого контекста, который вызывает метод execute() у соответствующей стратегии и возвращает результат.

В примере при вызове executeStrategy() у каждого контекста будут выполнены соответствующие стратегии и будет возвращен их результат. */

//_______Паттерн Фасад _____//
// Сложная система
function ComplexSystem() {
  this.operation1 = function () {
    console.log('Operation 1');
  };

  this.operation2 = function () {
    console.log('Operation 2');
  };

  this.operation3 = function () {
    console.log('Operation 3');
  };
}

// Фасад для упрощения использования сложной системы
function Facade() {
  var system = new ComplexSystem();

  this.doSomething = function () {
    system.operation1();
    system.operation2();
  };

  this.doSomethingElse = function () {
    system.operation3();
  };
}

// Используем фасад для упрощения использования сложной системы
var facade = new Facade();

facade.doSomething(); // Выводит 'Operation 1' и 'Operation 2'
facade.doSomethingElse(); // Выводит 'Operation 3'
/* В этом примере мы имеем сложную систему ComplexSystem, которая содержит три операции operation1(), operation2() и operation3(). Эти операции могут быть сложными и трудными для использования напрямую.

Затем мы определяем фасад Facade, который предоставляет упрощенный интерфейс для использования сложной системы. Фасад создает экземпляр сложной системы и определяет методы doSomething() и doSomethingElse(), которые вызывают соответствующие операции в сложной системе.

Мы также можем использовать паттерн Фасад для скрытия сложной логики и простого предоставления упрощенного интерфейса для внешних пользователей.

Наконец, мы используем фасад для упрощения использования сложной системы. Мы создаем экземпляр фасада facade и вызываем его методы doSomething() и doSomethingElse() для выполнения соответствующих операций в сложной системе.

В примере при вызове методов doSomething() и doSomethingElse() у фасада будут вызываться соответствующие операции в сложной системе, и их результат будет выведен в консоль. */