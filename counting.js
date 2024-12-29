// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce((count, num) => (num < 0 ? count + 1 : count), 0);
};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = (strings) =>
  strings.reduce((frequencies, string) => {
    frequencies[string] = (frequencies[string] || 0) + 1;
    return frequencies;
  }, {});

const _countOccurrences = (strings) => {
  return strings.reduce((frequencies, string) => {
    const newElement = string in frequencies ? frequencies[string] + 1 : 1;
    return { ...frequencies, [string]: newElement };
  }, {});
};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const isVowel = function (char) {
  return "aeiou".includes(char.toLowerCase());
};

const countVowels = function (words) {
  return countOccurrences([...words.join("")].filter(isVowel));
};
