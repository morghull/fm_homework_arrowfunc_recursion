'use strict';

//task1
const power = (num, pow) => {
  if (pow < 0) return 1 / power(num, -pow);
  if (pow === 1) {
    return num;
  }
  return num * power(num, pow - 1);
};

console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, -1));
console.log(power(2, -2));

//task2
const pairBrackets = (num) => {
  if (num < 1) return '()';
  return '(' + pairBrackets(num - 1) + ')';
};

console.log(pairBrackets(-1));
console.log(pairBrackets(0));
console.log(pairBrackets(1));
console.log(pairBrackets(2));
console.log(pairBrackets(3));
console.log(pairBrackets(4));

//task3
const taskArr = [
  2, 5, 6, 7, 8, 9, 123, 546, 87, 234, 123, 9789, -6,
];
const maxValue = Math.max(...taskArr);
const minValue = Math.min(...taskArr);

