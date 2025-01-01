import { add, isOdd, isEven, isPositive, product, square } from "./maths.js";

// sumOf([1, 2, 3, 4]) => 10
const sumOf = (numbers) => numbers.reduce(add, 0);
console.log("1. sum :", sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = (numbers) => numbers.reduce(product, 1);
console.log("2. product :", productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = (numbers) => numbers.reduce(add, 0) / numbers.length;
console.log("3. average :", averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = (numbers) =>
  numbers.reduce((min, num) => Math.min(min, num), Infinity);

console.log("4. minimum value :", minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = (numbers) =>
  numbers.reduce((max, num) => Math.max(max, num), -Infinity);

console.log("5. maximum value :", maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = (numbers) =>
  numbers.filter(isPositive).reduce(add, 0);

console.log("6. sum of positives :", sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = (numbers) => numbers.map(square).reduce(add, 0);
console.log("7. sum of squares :", sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = (numbers) => numbers.filter(isOdd).reduce(add, 0);
console.log("8. sum of odd numbers :", sumOfOddNumbers([1, 2, 3, 4, 5]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = (numbers) =>
  numbers.filter(isEven).map(square).reduce(add, 0);

console.log("9. sum of even squares :", findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((str, word) => str.concat(word), "");
};

console.log(
  "10. concatenated words :",
  concatenateWords(["hello", "beautiful", "world"])
);

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestStr = (str1, str2) => (str1.length > str2.length ? str1 : str2);
const longestWord = (words) => {
  return words.reduce(longestStr, "");
};

console.log(
  "11. longest word :",
  longestWord(["apple", "banana", "cherry", "kiwi"])
);

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestStr = (str1, str2) => (str1.length < str2.length ? str1 : str2);
const shortestWord = (words) => {
  return words.reduce(shortestStr);
};

console.log(
  "12. longest word :",
  shortestWord(["apple", "banana", "cherry", "kiwi"])
);

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = (words) => {
  return words.reduce((str, word) => str.concat("," + word));
};

console.log(
  "13. strings joined with comma :",
  joinWithComma(["apple", "banana", "cherry"])
);

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = (words) => {
  return words.reduce((str, word) => word.concat(" " + str));
};

console.log("14. reversed words :", reverseWords(["hello", "world", "shikha"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = (words) => {
  return words.reduce((str, word) => str.concat(" " + word));
};

console.log(
  "15. strings joined with space :",
  joinWordsWithSpace(["apple", "banana", "cherry"])
);

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return concatenateWords(names);
};

console.log(
  "16. concatenated name :",
  concatenateNames(["John", "Jane", "Doe"])
);

// vowelsInWords(["hello", "world"]) => "eoo"
const isVowel = (char) => "aeiou".includes(char.toLowerCase());

const vowelsInWords = (words) => {
  return [...words.join("")].reduce(
    (vowels, char) => (isVowel(char) ? vowels + char : vowels),
    ""
  );
};

console.log("17. vowels in list of words :", vowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = ([firstWord, ...restWords]) => {
  return restWords.reduce(
    (camelCase, word) =>
      camelCase.concat(word.at(0).toUpperCase() + word.slice(1).toLowerCase()),
    firstWord.toLowerCase()
  );
};

console.log(
  "18. Words in camelCase :",
  makeCamelCase(["Hello", "world", "how", "are", "you"])
);

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = (words) => {
  return words.reduce(
    (reversed, word) => reversed.concat([...word].reverse().join("")),
    ""
  );
};

console.log(
  "19. concated reversed strings :",
  reverseString(["apple", "banana", "cherry"])
);

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = (numbers) => {
  return numbers.reduce((duplicate, num) => [...duplicate, num, num], []);
};

console.log("20. array with duplicate numbers :", duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = (arrays) => {
  return arrays.reduce((concatedArray, e) => [...concatedArray, ...e], []);
};

console.log(
  "21: concatenated array :",
  concatenateArrays([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = (arrays) => {
  return arrays.reduce((flatArray, element) => {
    const e = Array.isArray(element) ? element : [element];
    return [...flatArray, ...e];
  }, []);
};

console.log("22. flatten array :", flattenArray([[1, 2], [3, 4], 5, 6]));

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = (numbers) => {
  return numbers.reduce((u, num) => (u.includes(num) ? u : [...u, num]), []);
};

console.log("23. uniqueNumbers :", uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = (objects) => {
  return objects.reduce((mergedObj, obj) => {
    Object.keys(obj).forEach((key) => {
      mergedObj[key] = (mergedObj[key] || 0) + obj[key];
    });
    return mergedObj;
  }, {});
};

console.log(
  "24. merged objects with sum of values :",
  mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }])
);

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = (keys, values) => {
  return keys.reduce((object, key, index) => {
    object[key] = values[index];
    return object;
  }, {});
};

console.log("25. zip keys to values :", zip(["a", "b", "c"], [1, 2, 3]));

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return zip(keys, values);
};

console.log(
  "26. object from keys and values :",
  makeObject(["city", "country"], ["Paris", "France"])
);

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return zip(values, keys);
};

console.log(
  "27. invert keys to values and vice versa :",
  invertObject({ a: 1, b: 2, c: 3 })
);

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = (pairs) => {
  return pairs.reduce((object, pair) => {
    object[pair[0]] = pair[1];
    return object;
  }, {});
};

console.log(
  "30. flatten array pairs to object :",
  flattenToObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {
  const obj1 = flattenToObject(arr1);
  const obj2 = flattenToObject(arr2);
  return mergeObjects([obj1, obj2]);
};

console.log(
  "31. merged object from arrays of pairs :",
  mergeArrays(
    [
      ["a", 1],
      ["b", 2],
    ],
    [
      ["c", 3],
      ["d", 4],
    ]
  )
);

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = (arr) => {
  return arr.reduce((flatArray, e) => {
    if (Array.isArray(e)) {
      return [...flatArray, ...deepFlatten(e)];
    }
    return [...flatArray, e];
  }, []);
};

console.log(
  "34. deepFlatten array :",
  deepFlatten([[1, 2], [3, 4, [5, 6]], 7])
);

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
const findFirstNonRepeated = (numbers) => {};

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
const findMinMax = (numbers) => {
  return numbers.reduce(
    (obj, num) => {
      obj.min = Math.min(obj.min, num);
      obj.max = Math.max(obj.max, num);
      return obj;
    },
    { min: Infinity, max: -Infinity }
  );
};

console.log("47. min and max values :", findMinMax([1, 2, 3, 4, 5]));

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
