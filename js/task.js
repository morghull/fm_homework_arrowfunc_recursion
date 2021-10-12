'use strict';

const power = (num, pow) => {
  if (pow < 0) return 1 / power(num, -pow);
  if (pow === 1) {
    return num;
  }
  return num * power(num, pow - 1);
};

console.log(power(2,2));
console.log(power(2,3));
console.log(power(2,-1));
console.log(power(2,-2));