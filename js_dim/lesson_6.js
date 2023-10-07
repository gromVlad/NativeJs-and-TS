const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110,
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105,
  },
];

const user = {
  name: "Bob",
  age: 23,
  isMarried: false,
  friends: ["Alex", "Nick", "John"],
};

//https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

//1. Поверхностная копия student
const copyUser = { ...user }; // Object
console.log(user === copyUser);//false
console.log(user.friends === copyUser.friends);//true

//2. Полная (глубокая) копия student
const deepCopyStudent = { ...user, friends: [...user.friends] };
console.log(user === deepCopyStudent);//false
console.log(user.friends === deepCopyStudent.friends);//false

//3. Поверхностная копия students
const copyStudents = [...students];
//slice()
console.log(students === copyStudents);//false
console.log(students[0] === copyStudents[0]);//true

//4*. Полная (глубокая) копия students
const deepCopyStudents = students.map((st) => ({ ...st }));
console.log(students === deepCopyStudents);//false
console.log(students[0] === deepCopyStudents[0]);//false

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
console.log(deepCopyStudents.sort((a, b) => b.scores - a.scores));
/* [
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'Helen', age: 20, isMarried: false, scores: 110 },
  { name: 'Ann', age: 20, isMarried: false, scores: 105 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
  { name: 'Alex', age: 21, isMarried: true, scores: 90 },
  { name: 'Bob', age: 22, isMarried: true, scores: 85 }
] */

//5a. Отсортируйте студентов по алфавиту
function sortByName(a, b) {
  switch (a.name > b.name) {
    case true:
      return 1;
    case false:
      return -1;
    default:
      return 0;
  }
}
// const sortedByName = deepCopyStudents.sort((a, b) => a.name >= b.name ? 1 : -1);
const sortedByName = students.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);
/* [
  { name: 'Alex', age: 21, isMarried: true, scores: 90 },
  { name: 'Ann', age: 20, isMarried: false, scores: 105 },
  { name: 'Bob', age: 22, isMarried: true, scores: 85 },
  { name: 'Helen', age: 20, isMarried: false, scores: 110 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 }
] */

//6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter((st) => st.scores >= 100);
console.log(bestStudents);
/* [
  { name: 'Ann', age: 20, isMarried: false, scores: 105 },
  { name: 'Helen', age: 20, isMarried: false, scores: 110 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 }
] */

//6a.Сформируйте массив из трёх лучших студентов
const topStudents = deepCopyStudents.splice(0, 3);
// console.log(topStudents);
// console.log(deepCopyStudents);

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
const newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents);
/* [
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'Helen', age: 20, isMarried: false, scores: 110 },
  { name: 'Ann', age: 20, isMarried: false, scores: 105 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
  { name: 'Alex', age: 21, isMarried: true, scores: 90 },
  { name: 'Bob', age: 22, isMarried: true, scores: 85 }
] */

//7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter((st) => !st.isMarried);
console.log(notMarriedStudents);
/* [
  { name: 'Ann', age: 20, isMarried: false, scores: 105 },
  { name: 'Helen', age: 20, isMarried: false, scores: 110 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 }
] */

//8. Сформируйте массив имён студентов
const studentsNames = students.map((st) => st.name);
console.log(studentsNames);//[ 'Alex', 'Ann', 'Bob', 'Helen', 'John', 'Nick' ]


//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
const nameWithSpace = studentsNames.join(" ");
console.log(nameWithSpace);//Alex Ann Bob Helen John Nick
const namesWithComma = studentsNames.join(", ");
console.log(namesWithComma);//Alex, Ann, Bob, Helen, John, Nick

//9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map((st) => ({ ...st, isStudent: true }));
console.log(trueStudents); //all students isStudent = true

//10. Nick женился. Выполните преобразование массива students
// let studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : st);
const studentsWithMarriedNick = students.map((st) => {
  if (st.name === "Nick") {
    return { ...st, isMarried: true };
  }
  return st;
});
console.log(studentsWithMarriedNick);
/* [
  { name: 'Alex', age: 21, isMarried: true, scores: 90 },
  { name: 'Ann', age: 20, isMarried: false, scores: 105 },
  { name: 'Bob', age: 22, isMarried: true, scores: 85 },
  { name: 'Helen', age: 20, isMarried: false, scores: 110 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
  { name: 'Nick', age: 20, isMarried: true, scores: 120 }
] */

//11. Найдите Студентку по имени Ann
const ann = students.find((st) => st.name === "Ann");
console.log(ann);
//{ name: 'Ann', age: 20, isMarried: false, scores: 105 }
console.log(students);
/* [
  { name: 'Alex', age: 21, isMarried: true, scores: 90 },
  { name: 'Ann', age: 20, isMarried: false, scores: 105 },
  { name: 'Bob', age: 22, isMarried: true, scores: 85 },
  { name: 'Helen', age: 20, isMarried: false, scores: 110 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 }
] */

//12. Найдите студента с самым высоким баллом
let bestStudent = students.reduce((acc, st) => {
  return acc.scores > st.scores ? acc : st;
});
console.log(bestStudent);
//{ name: 'Nick', age: 20, isMarried: false, scores: 120 }

//12a. Найдите 2 студента с самым высоким баллом 
const sortedStudent = students[0];
let bestStudent2 = students[1];
for (let i = 1; i < students.length; i++) {
  if (sortedStudent.scores > bestStudent2.scores) {
    if (students[i].scores > bestStudent2.scores) {
      bestStudent2 = students[i];
    }
  } else {
    if (students[i].scores > sortedStudent.scores) {
      bestStudent = students[i];
    }
  }

}
let best1 = students[0]
let best2 = students[0]

for (let i = 0; i < students.length; i++) {
  if (students[i].scores > best1.scores) {
    best1 = students[i]

  } else if (students[i].scores > best2.scores) {
    best2 = students[i]
  }

}


//13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, st) => acc + st.scores, 0);
console.log(scoresSum);//610

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

// function addFriends(students) {
//     const studentsNames = students.map(st => st.name)
//     function getFriendsList(student){
//         const friendsList = studentsNames.filter(name => student.name !== name)
//         return friendsList
//     }
//     const studentsWithFriends = students.map(st => {
//         return {...st, friends: getFriendsList(st)}
//     })
//     return studentsWithFriends

// }
const addFriends = (sts) => {
  return sts.map((st) => ({
    ...st,
    friends: sts.map((st) => st.name).filter((name) => name !== st.name),
  }));
};
console.log(addFriends(students));
/* [
  {
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 90,
    friends: [ 'Ann', 'Bob', 'Helen', 'John', 'Nick' ]
  }, ... */