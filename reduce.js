import { add, isOdd, isEven, isPositive, product, square } from "./maths.js";

// sumOf([1, 2, 3, 4]) => 10
const sumOf = (numbers) => numbers.reduce(add, 0);
console.log("sum :", sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = (numbers) => numbers.reduce(product, 1);
console.log("product :", productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = (numbers) => numbers.reduce(add, 0) / numbers.length;
console.log("average :", averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = (numbers) =>
  numbers.reduce((min, num) => Math.min(min, num), Infinity);

console.log("minimum value :", minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = (numbers) =>
  numbers.reduce((max, num) => Math.max(max, num), -Infinity);

console.log("maximum value :", maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = (numbers) =>
  numbers.filter(isPositive).reduce(add, 0);

console.log("sum of positives :", sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = (numbers) => numbers.map(square).reduce(add, 0);
console.log("sum of squares :", sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = (numbers) => numbers.filter(isOdd).reduce(add, 0);
console.log("sum of odd numbers :", sumOfOddNumbers([1, 2, 3, 4, 5]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = (numbers) =>
  numbers.filter(isEven).map(square).reduce(add, 0);

console.log("sum of even squares :", findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((str, word) => str.concat(word), "");
};

console.log(
  "concatenated words :",
  concatenateWords(["hello", "beautiful", "world"])
);

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestStr = (str1, str2) => (str1.length > str2.length ? str1 : str2);
const longestWord = (words) => {
  return words.reduce(longestStr, "");
};

console.log(
  "longest word :",
  longestWord(["apple", "banana", "cherry", "kiwi"])
);

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestStr = (str1, str2) => (str1.length < str2.length ? str1 : str2);
const shortestWord = (words) => {
  return words.reduce(shortestStr);
};

console.log(
  "longest word :",
  shortestWord(["apple", "banana", "cherry", "kiwi"])
);

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {};

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return concatenateWords(names);
};

console.log("concatenated name :", concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) {};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {};

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flat = (flatArray, array) => {
  array.forEach((element) => flatArray.push(element));
  return flatArray;
};

const flattenArray = function (arrays) {
  return arrays.reduce(flat, []);
};

console.log(
  "flatten array :",
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce((u, num) => (u.includes(num) ? u : [...u, num]), []);
};

console.log("uniqueNumbers :", uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"

// const longestString = function (strings) {
//   return strings.reduce(
//     (longestStr, string) =>
//       string.length > longestStr.length ? string : longestStr,
//     ""
//   );
// };

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  return numbers.reduce(
    (obj, num) => {
      obj.min = Math.min(obj.min, num);
      obj.max = Math.max(obj.max, num);
      return obj;
    },
    { min: Infinity, max: -Infinity }
  );
};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {};

// ********************************** TESTING **********************************

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every(function (element, index) {
    return element === array2[index];
  });
}

function testAllFunctions(functionName, argument, expected, failed) {
  const actual = functionName(argument);

  if (actual !== expected) {
    failed.push([expected, actual]);
  }
}

const displayFailed = function (failed) {
  if (failed.length === 0) {
    console.log("All Tests Passed!");
    return;
  }

  console.table(failed);
};

const testAll = function () {
  const failed = [];

  testAllFunctions(sumOf, [1, 2, 3, 4], 10, failed);
  testAllFunctions(sumOf, [1], 1, failed);
  testAllFunctions(sumOf, [], 0, failed);

  testAllFunctions(productOf, [1, 2, 3, 4], 24, failed);
  testAllFunctions(productOf, [2], 2, failed);
  testAllFunctions(productOf, [], 1, failed);

  testAllFunctions(averageOf, [1, 2, 3, 4, 5], 3, failed);
  testAllFunctions(averageOf, [2], 2, failed);
  testAllFunctions(averageOf, [], NaN, failed);

  testAllFunctions(minOf, [3, 1, 4, 1, 5, 9, 2], 1, failed);
  testAllFunctions(minOf, [2], 2, failed);
  testAllFunctions(minOf, [], Infinity, failed);

  testAllFunctions(maxOf, [3, 1, 4, 1, 5, 9, 2], 9, failed);
  testAllFunctions(maxOf, [2], 2, failed);
  testAllFunctions(maxOf, [], -Infinity, failed);

  testAllFunctions(sumPositiveNumbers, [1, -2, 3, -4], 4, failed);
  testAllFunctions(sumPositiveNumbers, [2, 4], 6, failed);
  testAllFunctions(sumPositiveNumbers, [-2, -4], 0, failed);
  testAllFunctions(sumPositiveNumbers, [], 0, failed);

  displayFailed(failed);
};

// testAll();
