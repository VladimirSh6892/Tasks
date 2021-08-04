//Задача 1
const findNextSquare = (sq) =>
  Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;

//Задача 2
const deleteVowels = (str) => {
  const del = "эоайяуе";
  return str
    .split("")
    .filter((i) => !del.includes(i.toLowerCase()))
    .join("");
};
// const deleteVowels = (str) => str.replace(/[АОУЭИЙЫЕЁЯЮаоуэийыеёяю]/g, "");
// console.log(deleteVowels("Этот сайт для лузеров ЛОЛ!"));

//Задача 3
const findNumber = (str) => {
  const arr = str.split(' ')
  return [
    Math.max(...arr),
    Math.min(...arr),
  ].join(' ')
};
// console.log(findNumber("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"));

//Задача 4
const accum = (str) =>
  str
    .split("")
    .map(
      (item, index) =>
        (item = item.repeat(index + 1)) &&
        item.charAt(0).toUpperCase() + item.slice(1)
    )
    .join("-");
// console.log(accum("abcd"));

//Задача 5
const correctPin = (str) =>
  str.split("").map((item) => isFinite(item)) &&
  (str.length === 4 || str.length === 6);
// console.log(correctPin("5454"));
// console.log(correctPin("5454666"));

//Задача 6


//Задача 7
const toJadenCase = (str) =>
  str
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

// console.log(toJadenCase("The world is not what we think it is"));

//Задача 8
const findNumbers = (arr) => {
  return [
    Math.min(...arr),
    Math.max(...arr)
  ]
}
// console.log(findNumbers([1, 5, 8, 10, 35, 100]));
// console.log(findNumbers([-5, -7, -2, 5]));

//Задача 9
const simple = (str) => str.split(' ')
  .sort((a, b) => a.length - b.length)
  .slice(0, 1)
  .join().length
// console.log(simple('mazda mitsubishi bmw skoda'))

//Задача 10
const findNeedle = (arr) => `Нашел иголку на позиции ${arr.indexOf('needle')}`;
// console.log(findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]));

//Задача 11
const invert = (arr) => arr.map(item => -item)
// console.log(invert([-1,-2,-4,-5]));
// console.log(invert([1,2,4,5]));
// console.log(invert([1,-2,4,-5]));

//Задача 12
const arrayDiff = (arr1, arr2) =>
  arr1.filter((item) => !arr2.includes(item))
// console.log(arrayDiff([1,2],[1]) );
// console.log(arrayDiff([1,2,2,2,3],[2]));

//Задача 13

let it = (n) => n.split().map((item) => item - 1, 5)

// console.log(it(5))

//Задача 14
const sumMin = (arr) => arr.sort((a, b) => a - b)
  .filter(item => item > 0)
  .slice(0, 2)
  .reduce((a, b) => a + b)
// console.log(sumMin([12,423,54,1235,3,15,2,-1,52]))

//Задача 15
const filterStr = (str) => str
  .split(' ')
  .sort((a, b) => a.split('').filter(item =>
    isFinite(item)) - b.split('').filter(item => isFinite(item)))
  .join(' ');

// console.log(filterStr('is2 Thi1s T4est 3a'));

//Задача 16
const reverse = (str) => str.split(' ')
  .map((item) => item.split('').reverse().join('')).join(' ')

// console.log(reverse('This is an example!'))

//Задача 17
const solution = (str) => str.split(/(?=[A-Z])/)
  .join('_')
  .toLowerCase();
// console.log(solution("redevCourses"));

//Задача 18
const palindrom = (str) => (str.split(',').reverse().join('')) === str
// console.log(palindrom('mom'));

//Задача 19
const countCats = (...arr) => arr.flat(1)
  .filter((item) => item === '^^').length;

// console.log(countCats([0,1,"^^"],[9,"^^",2],["^^",8,7]))

//Задача 20
const factorial = (num) => (num != 1) ?
  num * factorial(num - 1) : 1;
// console.log(factorial(5));
//Задача 21
//Задача 22
//Задача 23


//Задача 24
const isUpperCase = (str, character) => str.charAt(character) === str.charAt(character).toUpperCase();
// console.log(isUpperCase('tasks JavaScript', 6));

//Задача 25
const capitalizeFirstLetter = (str) => str.split()
.map(item => item.charAt(0).toUpperCase() + item.slice(1))
.join('')

// console.log(capitalizeFirstLetter("пример строки"))

//Задача 26


//Задача 27
const replaceAll = (find, replace, str) => str.split(' ')
.map(item => item.replace(find, replace)).join(' ')

// console.log(replaceAll('abc', 'x', 'abc def def lom abc abc def'));

//Задача 28
const removeDuplicate = (str) => str.split(', ')
.filter((item, index) => index === str.split(', ').indexOf(item))

console.log(removeDuplicate("вишня, груша, слива, груша, слива"))

//Задача 29
const unique_letters = (str) => str.split('')
.filter((item, index, arr) => index === arr.indexOf(item))
.join('');

const unique_letters1 = (str) => Array.from(new Set(str.split(''))).join('')

console.log(unique_letters1('anaconda'));

//Задача 30
//Задача 31
//Задача 32
//Задача 33
//Задача 34
//Задача 35
//Задача 36
//Задача 37
let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];

const removeDuplicateAnother = (arr) => arr.filter((item, index) => index === arr.indexOf(item))
// удаляет дубликаты

const removeDuplicates = (arr)=> arr.filter((item, index, array) => array.indexOf(item) === array.lastIndexOf(item))
// оставляет только строки которые не имеют дубликатов

console.log(removeDuplicateAnother(arr));
console.log(removeDuplicates(arr));
//Задача 38
//Задача 39
//Задача 40
//Задача 41
//Задача 42
//Задача 43
//Задача 44
//Задача 45
//Задача 46
//Задача 47
//Задача 48
//Задача 49
//Задача 50
