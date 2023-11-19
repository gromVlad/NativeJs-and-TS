//основных типа данных: числа, строки и булевые
5
"Привет, я строка";
true

99 * 123;
12177
"Вот длинная строка".slice(0, 3);
"Вот"
true && false;
false

//операторы
//+, −, *
12345 + 56789;
22 + 33 + 44;
12345 / 250;
1234 + 57 * 3 - 31 / 4;
(15 + 9) * 2;

//переменные
//var 
var nick; //undefined - «значение не определено»
var age = 12;
//менять значения
age = 13;

//верблюжья запись
//numberOfCandies

//Создание новых переменных на основе вычислений
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;//3600

//Инкремент и декремент
var highFives = 0;
++highFives;//1
++highFives;//2

var x = 10;
x = x + 5;//15

var score = 10;
score += 7;//17
score -= 3;//14

var balloons = 100;
balloons *= 2;//200

var balloons = 100;
balloons /= 4;//25

//____Строки____//
"Привет, мир!"
var myAwesomeString = "Что-то ОЧЕНЬ крутое!!!";

var numberNine = 9;
var stringNine = "9";
numberNine + numberNine; //18
stringNine + stringNine; //99

var greeting = "Привет";
var myName = "Ник";
greeting + myName;//"ПриветНик"

"Суперпупердлиннаястрока".length;//23

//Получение отдельного символа строки
var codeWord1 = "обернись";
var codeWord2 = "неужели";
var codeWord3 = "огурцы";
var codeWord4 = "липкие";
var codeWord5 = "?!";
codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];//"беги!"

//срез строки
var longString = "Эта длинная строка такая длинная";
longString.slice(4, 18);//"длинная строка" /  Начальная (4) и конечная (18) 

//заглавный или строчный регистр
"Эй, как дела?".toUpperCase();//"ЭЙ, КАК ДЕЛА?"
"эЙ, кАК деЛа?".toLowerCase();//"эй, как дела?"

//Булевы значения
var javascriptIsCool = true;
javascriptIsCool;//true

//__Логические операции__//

//&& (И)
var hadShower = true;
var hasBackpack = false;
hadShower && hasBackpack;//false

//|| (ИЛИ)
var hasApple = true;
var hasOrange = false;
hasApple || hasOrange;//true

//! (НЕ)
var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday;//false

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower & (hasApple || hasOrange);
shouldGoToSchool;//true

//__Сравнение чисел с помощью булевых значений__//
var height = 155;
var heightRestriction = 150;
height > heightRestriction;//true

var height = 150;
var heightRestriction = 150;
height >= heightRestriction;//true

var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess;//false

//Двойной знак равенства
//через двойное равно, JavaScript первым делом пытается преобразовать их к одному типу
var stringNumber = "5";
var actualNumber = 5;
stringNumber === actualNumber;//false
stringNumber == actualNumber;//true

var age = 11;
var accompanied = true;
age >= 11 && accompanied //true

//__undefined и null__//
//undefined, когда не может найти иногозначения,когда значение не определено
var myVariable;
myVariable;//undefined

//null обычно используется, чтобы явно обозначить —«тут пусто». 
var myNullVariable = null;
myNullVariable;//null

//___МАССИВЫ__//
var dinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр",
  "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"];

//Доступ к элементам массива
dinosaurs[0];//"Тираннозавр"

//Создание и изменение элементов
dinosaurs[0] = "Тираннозавр рекс";
var dinosaurs = [];
dinosaurs[0] = "Тираннозавр";
dinosaurs[1] = "Велоцираптор";
dinosaurs[2] = "Стегозавр";
dinosaurs[3] = "Трицератопс";
dinosaurs[4] = "Брахиозавр";
dinosaurs[5] = "Птеранодон";
dinosaurs[6] = "Апатозавр";
dinosaurs[7] = "Диплодок";
dinosaurs[8] = "Компсогнат";
dinosaurs;//["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс","Брахиозавр", "Птеранодон", "Апатозавр","Диплодок", "Компсогнат”]
dinosaurs[33] = "Филосораптор";
dinosaurs;//["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат", undefined × 24 "Филосораптор"]

var dinosaursAndNumbers = [3, "динозавры", ["трицератопс", 
  "стегозавр", 3627.5], 10];
dinosaursAndNumbers[2][0];//"трицератопс"

//Длина массива
var maniacs = ["Якко", "Вакко", "Дот"];
maniacs.length;//3

//получить последний элемент массив
maniacs[maniacs.length - 1];//"Дот"

//Добавление элементов в массив
var animals = [];
animals.push("Кот");
animals.push("Пес");
animals.push("Лама");
animals;//["Кот", "Пес", "Лама"]

//добавить элемент в начало массива
animals.unshift("Мартышка");
animals;//["Мартышка", "Кот", "Пес", "Лама"]

//Удаление элементов массива
//Метод pop делает сразу два дела: удаляет последний элементиз массива и возвращает этот элемент в виде значения
var lastAnimal = animals.pop();//"Лама"
//Метод animals.shift() работает аналогично animals.pop(),но элемент берется из начала массива

//Объединение массивов
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
//["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Год

//С помощью concat можно объединить больше чем два массива.
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var featheredAnimals = ["Ара", "Додо"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;//["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла","Ара", "Додо"]

//Поиск индекса элемента в массиве
//Если элемента нет вернет значение −1.
var colors = ["красный", "зеленый", "синий"];
colors.indexOf("синий");//2

//Превращаем массив в строк
var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join();//"Мартышка,Кот,Рыба,Ящерица"
var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join(" - "); "Мартышка - Кот - Рыба - Ящерица"

//__задача__//
/* 
Поиск дороги домой
Представьте, что ваша подруга побывала у вас в гостях, а теперь хочет
показать вам свой дом. Но вот незадача — вы никогда не бывали у нее
раньше, а путь назад вам предстоит проделать в одиночку.
К счастью, вам в голову приходит хитрый способ решения этой проблемы: по дороге к дому подруги вы будете записывать возможные ориентиры (телефонную будку, вывеску магазина или аптеки, школу и т. д.).
А по дороге назад, двигаясь по списку с конца, вычеркивать каждый
встреченный ориентир — так вы всегда будете знать, куда идти
 */
var landmarks = [];
landmarks.push("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги")
landmarks.pop();//"Дом подруги"
landmarks.pop();//"Моя бывшая школа"
landmarks.pop();//"Приют для кошек"
landmarks.pop();//"Пожарная станция"
landmarks.pop();//"Протекающий гидрант"
landmarks.pop();//"Мигающий фонарь"
landmarks.pop();//"Дорожка к дому"
landmarks.pop();//"Мой дом"
//Среди программистов такой способ работы с элементами называется «стек», — «первым вошел,первым вышел»

//__Случайный выбор__//
//Math.random() - случайное число от 0 до 1
Math.random();//0.89454094576649
//Если вам нужно число побольше, просто умножьте полученное из метода Math.random() значение на подходящий коэффициент
Math.random() * 10 // 7.648027329705656

//Округление с помощью Math.floor()
//округляющий число до ближайшего снизу
Math.floor(3.7463463);//3

// используем оба метода, чтобы получить случайный индекс.
Math.floor(Math.random() * 4);//2  может выпасть 0, 1, 2 или 3 , никогда не вернет 4 или большее число

//Программа случайного выбора вариантов
var phrases = [
  "Звучит неплохо",
  "Да, это определенно надо сделать",
  "Не думаю, что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит нет"
];
phrases[Math.floor(Math.random() * 5)];//"Не думаю, что это хорошая идея"

//Генератор случайных дразнилок
var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = ["У тебя", randomBodyPart, "словно", 
  randomAdjective, randomWord + "!!!"].join(" ");
randomInsult;//"У тебя нос словно дурацкая выдра!!

//__Задача__//
//Как с помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"?
const arrValue = [3, 2, 1].join(' больше, чем ')//'3 больше, чем 2 больше, чем 1'

//____ОБЪЕКТЫ___//

//Создание объектовvar 
//«ключ-значение»
cat = {
  "legs": 3,
  "name": "Гармония",
  "color": "Черепаховый"
};

//если ключ указан в кавычках, пробелы в его имени допустимы
var cat = {
  legs: 3,
  "full name": "Гармония Филомена Уси-Пусечка Морган",
  color: "Черепаховый"
};

//Доступ к значениям внутри объек
var cat = { legs: 3, name: "Гармония", color: "Черепаховый" };
cat["name"];//"Гармония"
cat.name; //"Гармония"

//узнать, какие вообще ключи есть у данного объекта
var dog = {
  name: "Оладушек", age: 6, color: "белый", 
  bark: "Гав тяф тяф!"
};
var cat = { name: "Гармония", age: 8, color: "черепаховый" };
Object.keys(dog);//["name", "age", "color", "bark"]
Object.keys(cat);//["name", "age", "color"]

//Добавление элементов объекта
var cat = {};
cat["legs"] = 3;
cat["name"] = "Гармония";
cat["color"] = "Черепаховый";
cat;//{ color: "Черепаховый", legs: 3, name: "Гармония" }

//JavaScript хранит ключи объектов, не упорядочивая их.

//Добавление ключей через точку
var cat = {};
cat.legs = 3;
cat.name = "Гармония";
cat.color = "Черепаховый";

//Массивы объектов
var dinosaurs = [
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" }
]
dinosaurs[0];//{ name: "Тираннозавр рекс", period: "Верхнемеловой" }
dinosaurs[0]["name"];//"Тираннозавр рекс
dinosaurs[1].period;//"Верхнеюрский"

//Массив друзей
var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };
var friends = [anna, dave, kate];
friends[1];//{ name: "Дэйв", age: 5, luckyNumbers: Array[3] 

//Хранение информации о фильмах
var movies = {
  "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", 
      "Александр Гоулд"],
    format: "DVD"
  },
  "Звездные войны: Эпизод VI — Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD"
  },
  "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
    format: "Blu-ray"
  }
};
var findingNemo = movies["В поисках Немо"];
findingNemo.duration;//100
findingNemo.format;//"DVD"

//добавить новые фильм
var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
  format: "Blu-ray"
};
movies["Тачки"] = cars;

//задача
/* Как одной строкой JavaScript-кода извлечь из этого объекта
число 123 */
var myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
};
myCrazyObject["some array"][2].number//123

//____ОСНОВЫ HTML___//
//html -> head -> title
//html -> body -> ...

//__УСЛОВИЯ И ЦИКЛЫ__//
var name = "Николай";
console.log("Привет, " + name);
//Конструкция if проверяет, истинно ли условие
if (name.length > 6) {
  console.log("Ну и длиннющее же у вас имя!");
} else {
  console.log("Имя у вас не из длинных.");
}

//Цепочка из конструкций if... else
var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
  console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
  console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
  console.log("Ладно, закажу свинину.");
} else {
  console.log("Что ж, остается рис с яйцом.");
}

//Цикл while
//если условие никогда не даст false,цикл будет повторяться бесконечно
//Это условие проверяется при каждом повторе цикла
while (condition) {
  /* 
  Код, который будет выполняться снова и снова,
до тех пор, пока условие дает true
(что-то в этом коде должно влиять на условие,
чтобы в какой-то момент оно дало false)
*/
  console.log("Делаем что-то");
  i++;
}

//Считаем овец с помощью цикла while
var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("Посчитано овец: " + sheepCounted + "!");
  sheepCounted++;
}
console.log("Хрррррррррр-псссс");
/* 
Посчитано овец: 0!
Посчитано овец: 1!
Посчитано овец: 2!
Посчитано овец: 3!
Посчитано овец: 4!
Посчитано овец: 5!
Посчитано овец: 6!
Посчитано овец: 7!
Посчитано овец: 8!
Посчитано овец: 9!
Хрррррррррр-псссс
*/

//Цикл for
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("Посчитано овец: " + sheepCounted + "!");
}
console.log("Хрррррррррр-псссс");

//Цикл for, массивы и строки
var animals = ["лев", "фламинго", "белый медведь", "удав"];
for (var i = 0; i < animals.length; i++) {
  console.log("В этом зоопарке есть " + animals[i] + ".");
}
/* 
В этом зоопарке есть лев.
В этом зоопарке есть фламинго.
В этом зоопарке есть белый медведь.
В этом зоопарке есть удав
*/

//#2. Генератор случайных стро
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let newStr = ''
for (let index = 0; index < 6; index++) {
  newStr += alphabet[Math.floor(Math.random() *
    alphabet.length)]
}
console.log(newStr);//квёаъш

//h4ck3r sp34k
//Переведите англоязычный текст на «хакерский язык» (h4ck3rsp34k)
var input = "javascript is awesome";
var output = "";
for (let index = 0; index < input.length; index++) {
  if (input[index] === 'a') {
    output += '4'
  } else if (input[index] === 'e') {
    output += '3'
  } else if (input[index] === 'i') {
    output += '1'
  } else if (input[index] === 'o') {
    output += '0'
  } else {
    output += input[index]
  }
}
console.log(output);//j4v4scr1pt 1s 4w3s0m3

//____ПИШЕМ ИГРУ ВИСЕЛИЦА__//
/* 
«Виселица» — игра на угадывание слов. Один игрок выбирает слово,
а второй пытается его отгадать. Например, если первый игрок загадал
слово КАПУСТА, он изобразит семь «пустых мест», по одному на каждую
букву слова: _ _ _ _ _ _

Второй игрок старается отгадать это слово, называя буквы. Каждый
раз, когда он угадывает букву, первый игрок заполняет пустоты, вписывая ее везде, где она встречается. Например, если второй игрок назвал
букву «А», первый должен вписать все «А» для слова КАПУСТА, вот так: _ A _ _ _ _ A

Если второй игрок назовет букву, которой нет в слове, у него отнимается очко, а первый игрок рисует руку, ногу или другую часть тела
человечка. Если первый игрок закончит рисовать человечка раньше, чем
второй угадает все буквы, второй игрок проиграл.
В нашем варианте «Виселицы» JavaScript будет выбирать слово,
а игрок-человек — отгадывать буквы. И рисовать человечка наша программа не будет, поскольку мы пока не знаем, как это делается

Нам нужно, чтобы программа умела выполнять следующие действия:
1. Случайным образом выбирать слово.
2. Запрашивать у игрока вариант ответа (букву).
3. Завершать игру по желанию игрока.
4. Проверять, является ли введенный ответ буквой.
5. Вести учет угаданных букв.
6. Показывать игроку, сколько букв он угадал и сколько еще предстоит угадать.
7. Завершать игру, если слово отгадано.
*/

//Создаем диалоговое окно
var name = prompt("Как вас зовут?");
//Используем confirm, чтобы получить ответ «да» или «нет»
var likesCats = confirm("Тебе нравятся кошки?");
//Используем alert для выдачи информации
alert("JavaScript это здорово!");

//Используем псевдокод для проектирования игры
//Псевдокод — удобный инструмент, который программисты часто используют при проектировании программ
/* 
Выбрать случайное слово
Пока слово не угадано {
 Показать игроку текущее состояние игры
 Запросить у игрока вариант ответа
 Если игрок хочет выйти из игры {
 Выйти из игры
 }
 Иначе Если вариант ответа — не одиночная буква {
 Сообщить игроку, что он должен ввести букву
 }
 Иначе {
 Если такая буква есть в слове {
 Обновить состояние игры, подставив новую букву
 }
 }
}
Поздравить игрока с победой — слово угадано

["_", "_", "_", "_"]
["_", "ы", "_", "_"]
["р", "ы", "б", "а"]
*/

//Выбираем случайное слово
var words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек"
];
var word = words[Math.floor(Math.random() * words.length)];

//Создаем итоговый массив

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;

//_Программируем игровой цикл
//Отображение состояния игры
alert(answerArray.join(" "));

//Обработка введенного ответ
var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
if (guess === null) {
  break;
  /* Ключевое слово break можно использовать для немедленного выхода
  из любого цикла, независимо от того, где именно внутри цикла это происходит */
} else if (guess.length !== 1) {
  alert("Пожалуйста, введите только одну букву.");
} else {
  // Обновляем состояние игры
}

//Обновление состояния игры
for (var j = 0; j < word.length; j++) {
  if (word[j] === guess && answerArray[j] === '_') {
    answerArray[j] = guess;
    remainingLetters--;
  }
}

//Конец игры
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);


//___ФУНКЦИИ___//
var ourFirstFunction = function () {
  console.log("Привет, мир!");
};
ourFirstFunction()//Привет, мир!
//Функция всегда будет возвращать undefined, если в теле функции нет указания вернуть что-нибудь другое.

//Передача в функцию нескольких аргументов
var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};
printMultipleTimes(5, "=^.^=");//0 =^.^= ...

//Возврат значения из функции
var double = function (number) {
  return number * 2;
};
double(3);//6

//Вызов функции в качестве значения
double(5) + double(6);//22
//Также вызов функции можно указать в качестве аргумента другой функции, при вызове которой в аргумент попадет значение, возвращенное первой функцией
double(double(3));//12 -> 3 * 2 = 6 / 6 * 2 = 12

//Делаем генератор дразнилок функцией
var generateRandomInsult = function () {
  var randomBodyParts = ["глаз", "нос", "череп"];
  var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
  var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
  // Соединяем случайные строки в предложение:
  var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
  return randomString;
};
generateRandomInsult() //"У тебя череп словно унылая дубина!!!"

//Ранний выход из функции по return
//Как только JavaScript, выполняя код функции, встречает оператор return, он завершает функцию, даже если после return еще остался какой-нибудь код.
var fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }
  return "Пятая буква вашего имени: " + name[4] + ".";
};
fifthLetter("Николай")//"Пятая буква вашего имени: л."

//Многократное использование return вместо конструкции if... el
var medalForScore = function (score) {
  if (score < 3) {
    return "Бронзовая";
  }
  if (score < 7) {
    return "Серебряная";
  }
  return "Золотая";
};

//____Продвинутый  JavaScript_____//

//___DOM И JQUERY__//
//DOM — это средство, позволяющее JavaScript-коду взаимодействовать с содержимым веб-страниц

//Поиск элемента с помощью getElementById
//<h1 id="main-heading">Привет, мир!</h1>
var headingElement = document.getElementById("main-heading")
headingElement.innerHTML;//Привет, мир!

//jQuery — это набор инструментов (в основном функций), которые сильно упрощают работу с DOM-элементами
<script src="https://code.jquery.com/jquery-2.1.0.js"></script>
//<h1 id="main-heading">Привет, мир!</h1>
var newHeadingText = prompt("Введите новый заголовок:");
$("#main-heading").text(newHeadingText);

//Анимация элементов
$("h1").fadeOut(3000);//запускаем затухание заголовка до полного его исчезновения

//Цепной вызов
$("h1").text("Этот текст скоро исчезнет").fadeOut(3000);
$("h1").slideUp(1000).slideDown(1000);//скрыли его с эффектом уплывания вверх в течение одной секунды, а затем показали снова, опустив сверху вниз за одну секунду

//-----------------------------
//___ИНТЕРАКТИВНОЕ ПРОГРАММИРОВАНИЕ__//
//Функция, которую надо выполнить через timeout миллисекунд, Сколько миллисекунд ждать перед запуском функции
setTimeout(func, timeout)
var timeUp = function () {
  alert("Время вышло!");
};
setTimeout(timeUp, 3000);

//Отмена действия таймера
var doHomeworkAlarm = function () {
  alert("Эй! Пора делать домашку!");
};
//сохранили ID таймера
var timeoutId = setTimeout(doHomeworkAlarm, 60000);
clearTimeout(timeoutId);

//Многократный запуск кода и setInterval
var counter = 1;
var printMessage = function () {
  console.log("Ты смотришь в консоль уже " + counter + " сек");
  counter++;
};
var intervalId = setInterval(printMessage, 1000);
/* Ты смотришь в консоль уже 1 сек
Ты смотришь в консоль уже 2 сек
Ты смотришь в консоль уже 3 сек
Ты смотришь в консоль уже 4 сек
Ты смотришь в консоль уже 5 сек
Ты смотришь в консоль уже 6 сек */
clearInterval(intervalId);

//Реакция на клики
var clickHandler = function (event) {
  console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);
//. Каждая из строк оканчивается двумя числами: x- и y-координатами клика.
/* 
Клик! 88 43
Клик! 63 53
Клик! 24 53
Клик! 121 46
Клик! 93 55
Клик! 103 48
 */

//Событие mousemove
//куда бы вы ни передвинули мышь, заголовок будет следовать за ней
$("html").mousemove(function (event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY
  });
});

//-------------------------------
//____ПИШЕМ ИГРУ «НАЙДИ КЛАД!»___//
//1.Создать страницу игры с картинкой (картой сокровищ) и местом, куда будут. Игра «Найди клад!» выводиться сообщения для игрока.
//2. Выбрать на карте случайную точку, где спрятан кл
//3. Создать обработчик кликов:
// Увеличить счетчик кликов на 1.
// • Вычислить, насколько далеко место клика от места, где
// спрятан клад.
// • Отобразить на странице сообщение для игрока — «горячо»
// или «холодно».
// • Поздравить игрока, если он кликнул по кладу или вблизи
// него, и сообщить, сколько кликов ушло на поиски.

//Создаем веб-страницу с HTML-кодом
/* 
<h1 id="heading">Найди клад!</h1>
<img id="map" width=400 height=400 src="http://nostarch.com/images/treasuremap.png">
<p id="distance"></p> 
*/

//Получение случайных значений
var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};
getRandomNumber(400) //0 - 399

//Задаем координаты клада
var width = 400;
var height = 400;
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

//Обработчик кликов
$("#map").click(function (event) {
  // Здесь будет код обработчика
});

//Подсчет кликов
var clicks = 0;

//Вычисляем расстояние от клика до клада
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  //Используем теорему Пифагора
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
/* 
В функции getDistance переменная diffX — это длина горизонтальной стороны треугольника, а diffY — длина вертикальной стороны.
Найти нужное нам расстояние — значит найти длину гипотенузы, зная длины diffX и diffY. 
 */

//Сообщаем игроку, насколько он близок к цели
var getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Обожжешься!";
  } else if (distance < 20) {
    return "Очень горячо";
  } else if (distance < 40) {
    return "Горячо";
  } else if (distance < 80) {
    return "Тепло";
  } else if (distance < 160) {
    return "Холодно";
  } else if (distance < 320) {
    return "Очень холодно";
  } else {
    return "Замерзнешь!";
  }
}
var distanceHint = getDistanceHint(distance);

//Проверка на выигрыш
if (distance < 8) {
  alert("Клад найден! Сделано кликов: " + clicks);
}

//__Объектно-оринтированное програмирование__//
//пары «ключ-значение»
var dog = {
  name: "Оладушек",
  legs: 4,
  isAwesome: true
};

//обращаться через точечную нотацию
dog.name;//"Оладушек

// добавлять объекту новые свойств
dog.age = 6;

//Добавление к объектам новых методов
dog.bark = function () {
  console.log("Гав-гав! Меня зовут " + this.name + "!");
};
dog.bark();

//Ключевое слово this
//ключевое слово this ссылается на объект, для которого метод был вызван
var speak = function () {
  console.log(this.sound + "! Меня зовут " + this.name + "!");
};

var cat = {
  sound: "Мяу",
  name: "Варежка",
  speak: speak
};
cat.speak();//Мяу! Меня зовут Варежка!

var pig = {
  sound: "Хрю",
  name: "Чарли",
  speak: speak
};
pig.speak();//Хрю! Меня зовут Чарли!

//_Создание объектов с помощью конструкторов
//конструктор — это функция, которая создает объекты,давая им набор заранее определенных свойств и методов
var Car = function (x, y) {
  this.x = x;
  this.y = y;
};
var tesla = new Car(10, 20);//tesla

//Рисуем машины
var Car = function (x, y) {
  this.x = x;
  this.y = y;
};

var drawCar = function (car) {
  var carHtml = '<img src="http://nostarch.com/images/car.png">';

  var carElement = $(carHtml);

  carElement.css({
    position: "absolute",
    left: car.x,
    top: car.y
  });

  $("body").append(carElement);
};
var tesla = new Car(20, 20);
drawCar(tesla);

//__Настройка объектов через прототипы
//У всех конструкторов есть свойство prototype, к которому можнодобавлять методы; любой метод, добавленный к свойству prototype,будет доступен всем объектам, которые созданы с помощью этого конструктора
Car.prototype.draw = function () {
  // Тело метода
}

var Car = function (x, y) {
  this.x = x;
  this.y = y;
};
Car.prototype.draw = function () {
  var carHtml = '<img src="http://nostarch.com/images/car.png">';

  this.carElement = $(carHtml);

  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });

  $("body").append(this.carElement);
};
var tesla = new Car(20, 20);
var nissan = new Car(100, 200);

//Таким образом, draw станет частью всех объектов, созданных конструктором Car.

//несколько методов для перемещения машин по экрану
Car.prototype.moveRight = function () {
  this.x += 5;
  this.carElement.css({
    left: this.x,
    top: this.y
  });
};
tesla.moveRight();

//___ЭЛЕМЕНТ CANVAS__//
//<canvas id="canvas" width="200" height="200"></canvas>

var canvas = document.getElementById("canvas");
/* . Контекст рисования — это JavaScript-объект, обладающий методами и свойствами, при помощи которых
можно рисовать на «холсте». Чтобы получить этот объект,
мы вызываем для canvas метод getContext, передавая
ему строку "2d", — это означает, что мы собираемся формировать на «холсте» двухмерное изображение. */
var ctx = canvas.getContext("2d");
//Рисуем квадрат
ctx.fillRect(0, 0, 10, 10);
//Выбор цвета
ctx.fillStyle = "Red";

//Рисование контуров прямоугольников
ctx.strokeRect(10, 10, 100, 20);

// задать толщину линии
ctx.lineWidth = 4;

//Рисование линий или путей
//начало рисования нового пути
ctx.beginPath();
//moveTo c двумя аргументами — координатамиx и y — приводит к тому, что наше виртуальное JavaScript-перо отрывается от «холста» и, не оставляя за собой следа, перемещается в точку с этими координатами
//lineTo с координатами x и y. В результате виртуальное перо опускается на «холст» и, двигаясь к заданным координатам, чертит за собой линию
ctx.moveTo(10, 10);
ctx.lineTo(60, 60);
ctx.moveTo(60, 10);
ctx.lineTo(10, 60);

//Заливка путей цветом
//Если вам нужно заполнить замкнутый путь цветом, а не просто обвести его, используйте fill вместо stroke. 
ctx.fill();

//Рисование дуг и окружностей
//Ее центр — в точке (150, 50), а радиус равен 20 пикселям. / рисуем эту окружность, начиная с углав 0 радиан и заканчивая углом в Math.PI * 2
ctx.arc(150, 50, 20, 0, Math.PI * 2, false);

//Рисование нескольких окружностей 
var circle = function (x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.stroke();
}
ctx.lineWidth = 4;
ctx.strokeStyle = "Red";
circle(100, 100, 10);
ctx.strokeStyle = "Orange";
circle(100, 100, 20);
ctx.strokeStyle = "Yellow";

//_анимация
//Вызов ctx.clearRect(0, 0, 200, 200) очищает квадрат 200 × 200 пикселей, начиная с верхнего левого угла «холста»
//изобразить квадрат со стороной 20 пикселей в точке (position, 0)
setInterval(function () {
  ctx.clearRect(0, 0, 200, 200);
  ctx.fillRect(position, 0, 20, 20);
  position++;
  if (position > 200) {
    position = 0;
  }
}, 30);

//Изменение размера квадрата
ctx.fillRect(0, 0, size, size);

//___Змейка игра___//
// Настройка «холста»
 var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// Получаем ширину и высоту элемента canvas
var width = canvas.width;
var height = canvas.height;
// Вычисляем ширину и высоту в ячейках
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;
// Устанавливаем счет 0
var score = 0;

var drawBorder = function () {
  ctx.fillStyle = "Gray";
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

// Выводим счет игры в левом верхнем углу
var drawScore = function () {
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Счет: " + score, blockSize, blockSize);
};
// Отменяем действие setInterval и печатаем сообщение «Конец игры»
var gameOver = function () {
  clearInterval(intervalId);
  ctx.font = "60px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Конец игры", width / 2, height / 2);
};
// Рисуем окружность (используя функцию из главы 14)
var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};
   // Задаем конструктор Block (ячейка)
    var Block = function (col, row) {
  this.col = col;
  this.row = row;
};
// Рисуем квадрат в позиции ячейки
Block.prototype.drawSquare = function (color) {
  var x = this.col * blockSize;
  var y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
};

// Рисуем круг в позиции ячейки
Block.prototype.drawCircle = function (color) {
  var centerX = this.col * blockSize + blockSize / 2;
  var centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
};
// Проверяем, находится ли эта ячейка в той же позиции, что и ячейка
// otherBlock
Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

// Задаем конструктор Snake (змейка)
var Snake = function () {
  this.segments = [
    new Block(7, 5),
    new Block(6, 5),
    new Block(5, 5)
  ];
  this.direction = "right";
  this.nextDirection = "right";
};

// Рисуем квадратик для каждого сегмента тела змейки
Snake.prototype.draw = function () {
  for (var i = 0; i < this.segments.length; i++) {
    this.segments[i].drawSquare("Blue");
  }
};
// Создаем новую голову и добавляем ее к началу змейки,
// чтобы передвинуть змейку в текущем направлении
Snake.prototype.move = function () {
  var head = this.segments[0];
  var newHead;
  this.direction = this.nextDirection;
  if (this.direction === "right") {
    newHead = new Block(head.col + 1, head.row);
  } else if (this.direction === "down") {
    newHead = new Block(head.col, head.row + 1);
  } else if (this.direction === "left") {
    newHead = new Block(head.col - 1, head.row);
  } else if (this.direction === "up") {
    newHead = new Block(head.col, head.row - 1);
  }
  if (this.checkCollision(newHead)) {
    gameOver();
    return;
  }
  this.segments.unshift(newHead);
  if (newHead.equal(apple.position)) {
    score++;
    apple.move();
  } else {
    this.segments.pop();
  }
};

// Проверяем, не столкнулась ли змейка со стеной или собственным
// телом
Snake.prototype.checkCollision = function (head) {
  var leftCollision = (head.col === 0);
  var topCollision = (head.row === 0);
  var rightCollision = (head.col === widthInBlocks - 1);
  var bottomCollision = (head.row === heightInBlocks - 1);
  var wallCollision = leftCollision || topCollision || 
    rightCollision || bottomCollision;
  var selfCollision = false;

  for (var i = 0; i < this.segments.length; i++) {
    if (head.equal(this.segments[i])) {
      selfCollision = true;
    }
  }
  return wallCollision || selfCollision;
};
// Задаем следующее направление движения змейки на основе нажатой
// клавиши
Snake.prototype.setDirection = function (newDirection) {
  if (this.direction === "up" && newDirection === "down") {
    return;
  } else if (this.direction === "right" && newDirection === "left") {
    return;
  } else if (this.direction === "down" && newDirection === "up") {
    return;
  } else if (this.direction === "left" && newDirection === "right") {
    return;
  }
  this.nextDirection = newDirection;
};

// Задаем конструктор Apple (яблоко)
var Apple = function () {
  this.position = new Block(10, 10);
};

// Рисуем кружок в позиции яблока
Apple.prototype.draw = function () {
  this.position.drawCircle("LimeGreen");
};
// Перемещаем яблоко в случайную позицию
Apple.prototype.move = function () {
  var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
  var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};

// Создаем объект-змейку и объект-яблоко
var snake = new Snake();
var apple = new Apple();
// Запускаем функцию анимации через setInterval
var intervalId = setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  snake.move();
  snake.draw();
  apple.draw();
  drawBorder();
}, 100);

// Преобразуем коды клавиш в направления
var directions = {
  37: "left",
  38: "up",
  39: "right",
  40: "down"
}

// Задаем обработчик события keydown (клавиши-стрелки)
$("body").keydown(function (event) {
  var newDirection = directions[event.keyCode];
  if (newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
});
