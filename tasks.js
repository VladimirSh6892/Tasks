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
      Math.min(...arr),
      Math.max(...arr)
  ]    
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
.sort((a, b)=> a.length - b.length)
.slice(0, 1)
.join().length
// console.log(simple('mazda mitsubishi bmw skoda'))

//Задача 10
const findNeedle = (arr) => `Нашел иголку на позиции ${arr.indexOf('needle')}`;
// console.log(findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]));

//Задача 11
const invert = (arr) => arr.map(item=> -item)
// console.log(invert([-1,-2,-4,-5]));
// console.log(invert([1,2,4,5]));
// console.log(invert([1,-2,4,-5]));

//Задача 12
const arrayDiff = (arr1, arr2) => 
arr1.filter((item)=> !arr2.includes(item))
// console.log(arrayDiff([1,2],[1]) );
// console.log(arrayDiff([1,2,2,2,3],[2]));

//Задача 13
//Задача 14
//Задача 15
//Задача 16
//Задача 17
//Задача 18
//Задача 19
//Задача 20
//Задача 21
//Задача 22
//Задача 23
//Задача 24
//Задача 25
//Задача 26
//Задача 27
//Задача 28
//Задача 29
//Задача 30
//Задача 31
//Задача 32
//Задача 33
//Задача 34
//Задача 35
//Задача 36
//Задача 37
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
