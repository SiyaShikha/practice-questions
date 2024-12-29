const groupBy = (list, func) => {
  return list.reduce((group, element) => {
    const existingGroup = group[func(element)] || [];
    group[func(element)] = [...existingGroup, element];
    return group;
  }, {});
};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple"], 6: ["banana", "cherry"], 4: ["date"] }
const lengthOfString = (string) => string.length;
const groupByLength = (strings) => groupBy(strings, lengthOfString);

console.log(
  groupByLength("group by length :", ["apple", "banana", "cherry", "date"])
);

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const typeOfElement = (element) => typeof element;
const groupByType = (array) => groupBy(array, typeOfElement);

console.log("group by type", groupByType([1, "a", 2, false, "c", 4, true]));

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const firstLetter = (word) => word.at(0);
const groupByFirstLetter = (words) => groupBy(words, firstLetter);

console.log(
  "group by first letter :",
  groupByFirstLetter(["apple", "banana", "cherry", "date", "amla"])
);

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};
