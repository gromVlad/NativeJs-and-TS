//алгоритм - набор определенных задач, со строго определенными входными и выходными  данными, они могут быть на разных языках, нам нужно иметь эффективные методы решение задач

//Анализ - оценка времени , объем входных данных,asumpotic notations:big O. omega notation , theta notation

//___Big O Notation___//
//будем определять производительность количеством циклов(итерации)
function sum(n) {
  let sum = 0 //1
  for (let index = 0; index <= n; index++) {
    sum += index //4
  }
  return sum //1
}
//общее количество итераций 4 + 2 (n + 2)
//O(n) -> линейная временная сложность

function sum2(n){
  return (n* (n+1)) / 2
} // O(1) -> постоянная временная сложность

for (let index = 0; index < array.length; index++) {
  for (let index2 = 0; index2 <= index; index2++) {
  }
} //O(n2)

for (let index = 0; index < array.length; index++) {
  for (let index2 = 0; index2 <= index; index2++) {
    for (let index3 = 0; index3 <= 2; index3++) {
    }
  }
} //O(n3)

// O(1) - constant
// o(n) - linear
// o(logn) - logaritmic

//____Objects and Arrays Big-O__//

//Objects
//insert/ remove/ acess - O(1)
//Search - O(n)
//Object.keys() Object.values() Object.entries() - O(n)
const person = {
  firstname:'Bruce',
  lastname: "Wayne"
}

//arrays
//insert / remove end - O(1)
//insert / remove start - O(n)
//acess - O(1) / search - O(n)
//push/ pop - O(1)
//shift / unshift / concat / splice O(n)
//foreach/map/filter/reduce - O(n)
const odd = [1,5,7,9,10,6]

//___Math Algorithms___//

//_Fibonacci Sequence-//
//Числа Фибоначчи - это последовательность чисел, начинающаяся с 0 и 1, где каждое последующее число равно сумме двух предыдущих чисел. Таким образом, первые несколько чисел Фибоначчи выглядят так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 

function fibonacci(n) {
  // создаем начальный массив с первыми двумя числами Фибоначчи
  const fib = [0, 1]
  // начинаем цикл с i = 2, так как первые два числа уже есть в массиве
  for (let i = 2; i <= n; i++) {
    // вычисляем следующее число Фибоначчи как сумму двух предыдущих чисел
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]
//Loop - O(n)

//_Factorial of a Number_//
//Факториал - это математическое понятие, которое обозначает произведение всех целых чисел от 1 до заданного положительного целого числа n. Факториал обычно обозначается символом "!" и вычисляется как:
//n! = n * (n - 1) * (n - 2) * ... * 1
//Например, 5!(читается "факториал 5") равен:
//5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
   // Создаем переменную `result` и устанавливаем её равной 1
  let result = 1   
  // Начинаем цикл с `i = 2`, поскольку факториал 1 равен 1, а факториал 0 равен 1
  for (let i = 2; i <= n; i++) {
    // Умножаем `result` на текущее значение `i`
    result = result * i   
  }
  return result   // Возвращаем результат
}

function factorial(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120
//Loop - O(n)

//_Prime Number_//
//Простое число - это целое положительное число, которое имеет ровно два различных делителя: 1 и само число. Иными словами, простое число - это число, которое делится только на 1 и на само себя.
//Например, числа 2, 3, 5, 7, 11, 13, 17, 19, 23 и 29 являются простыми числами.

function isPrime(n) {
  //// Если `n` меньше 2, то это не простое число
  if (n < 2) {
    return false
  }
  //// Перебираем все возможные делители `i` от 2 до корня из `n` можно и n вместо Math.sqrt(n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    //// Если `n` делится на `i` без остатка, то это не простое число
    if (n % i === 0) {
      return false
    }
  }
  // Если ни один делитель не подошел, то `n` - простое число
  return true
}

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false
//Loop - O(n)

//_Power of Two_//
//Число является степенью двойки, если оно равно 2 в некоторой степени n, где n - целое число.Примеры чисел, являющихся степенями двойки: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 и т.д.
/* Например, для числа 16:
16 не равно 1.
16 делится на 2 без остатка, получаем 8.
8 делится на 2 без остатка, получаем 4.
4 делится на 2 без остатка, получаем 2.
2 делится на 2 без остатка, получаем 1.
1 равно 1, следовательно, 16 является степенью двойки. */

function isPowerOfTwo(n) {
  // // Если `n` меньше 1, то это не степень двойки
  if (n < 1) {
    return false
  }
  //// Пока `n` больше 1, делим его на 2 и проверяем, является ли остаток от деления равным 0
  while (n > 1) {
    //// Если остаток от деления не равен 0, то `n` не является степенью двойки
    if (n % 2 !== 0) {
      return false
    }
    //// Делим `n` на 2
    n = n / 2
  }
  //// Если все деления на 2 прошли успешно, то `n` является степенью двойки
  return true
}

function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}
//O(logn)

function isPowerOfTwoBitWise(n) {
  //// Если `n` меньше 1, то это не степень двойки
  if (n < 1) {
    return false
  }
  //// Используем битовый оператор `&` для проверки, является ли `n` степенью двойки
  return (n & (n - 1)) === 0
}

//битовый оператор
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0
}
//О(1)
/* Например, если мы вызываем функцию isPowerOfTwoBitWise(16), она проверяет, является ли (16 & (16 - 1)) равным 0. 16 - 1 равно 15 (в двоичной системе это 1111), поэтому 16 & 15 равно 0 (в двоичной системе это 0000). Поскольку n & (n-1) равно 0, функция возвращает true, что означает, что 16 является степенью двойки. */

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false

//____Recursion____//
//рекурсия это когда функция вызывает саму себя
//каждая рекурсия должна иметь условие  выхода
function recursiveFibonacci(n) {
  //// Если `n` меньше 2, возвращаем `n`
  if (n < 2) {
    return n
  }
  //// Возвращаем сумму двух предыдущих чисел в последовательности Фибоначчи
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
/* Сначала функция проверяет, является ли n меньше 2. Если n равен 0 или 1, функция возвращает n (первые два числа в последовательности Фибоначчи).
Если n больше 1, функция вызывает саму себя дважды с аргументами n-1 и n-2. Это происходит рекурсивно для каждого из этих аргументов, пока не будут достигнуты базовые случаи (когда n меньше 2). Затем функция возвращает сумму двух чисел, которые были возвращены из рекурсивных вызовов.
Например, если мы вызываем функцию recursiveFibonacci(5), она вызывает себя с аргументами recursiveFibonacci(4) и recursiveFibonacci(3). Затем recursiveFibonacci(4) вызывает себя с аргументами recursiveFibonacci(3) и recursiveFibonacci(2), а recursiveFibonacci(3) вызывает себя с аргументами recursiveFibonacci(2) и recursiveFibonacci(1). Когда мы достигаем базовых случаев (n=0 и n=1), функция начинает возвращать значения из рекурсивных вызовов. Например, recursiveFibonacci(2) возвращает 1, recursiveFibonacci(3) возвращает 2, а recursiveFibonacci(4) возвращает 3. В итоге, recursiveFibonacci(5) возвращает 5, что является пятой цифрой в последовательности Фибоначчи. */

function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(7)) // 8
