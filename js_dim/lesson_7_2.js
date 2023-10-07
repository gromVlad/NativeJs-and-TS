//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatFun = (str,number,del) => {
  return (str +del).repeat(3)
}
const a = repeatFun("hello",4,",")
console.log(a)//hello,hello,hello,

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
const checkStartString =  (str,startStr) => {
  let sliceSTR = str.toLowerCase().slice(0, startStr.length)
  if (sliceSTR === startStr.toLowerCase()) {
    return true
  } else {
    return false
  }
}
console.log(checkStartString("Incubator", "inc"))//true
console.log(checkStartString("Incubator", "yo"))//false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const sliceString = (str,num) => {
  return str.slice(0,num) + "..."
}
console.log(sliceString("Всем студентам инкубатора желаю удачи!", 10))//Всем студе...

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord = (str) => {
  if (!str.trim()) {
    return null;
  }
  return words = str.split(" ").reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  });
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!")); // "Всем"
console.log(getMinLengthWord("")); // null


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const funcalc = (str) => {
  return str.toLowerCase().split(" ").map(el => el[0].toUpperCase()+ el.slice(1,)).join(" ")
}
console.log(funcalc("всем стУдентам инкуБатора Желаю удачИ!"))//Всем Студентам Инкубатора Желаю Удачи!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true
const isIncludes = (str, substr) => {
  const strChars = str.toLowerCase().split("");
  const substrChars = substr.toLowerCase().split("");

  for (let i = 0; i < substrChars.length; i++) {
    const index = strChars.indexOf(substrChars[i]);
    if (index === -1) {
      return false;
    }
    strChars.splice(index, 1);
  }

  return true;
}

console.log(isIncludes("Incubator", "Cut")); // true
console.log(isIncludes("Incubator", "table")); // false
console.log(isIncludes("Incubator", "inbba")); // true
console.log(isIncludes("Incubator", "inba")); // true
console.log(isIncludes("Incubator", "Incubatorrr")); // true