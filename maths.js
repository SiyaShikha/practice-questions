const invert = (fn) => {
  return function (...args) {
    return !fn(...args);
  };
};

export const add = (a, b) => a + b;
export const product = (a, b) => a * b;
export const isPositive = (num) => num > 0;
export const square = (num) => num * num;
export const isOdd = (num) => num & (1 === 1);
export const isEven = invert(isOdd);
