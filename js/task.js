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

console.log('Task array:', taskArr);
console.log('Max value:', maxValue);
console.log('Min value:', minValue);

//task4
const powerWithArrow = (...args) => {
  return args.reduce((prev, curr) => prev * curr);
};

console.log('1*2*3*4*5=', powerWithArrow(1, 2, 3, 4, 5));
console.log('2*3=', powerWithArrow(2, 3));
