'use strict';
const array = [];

const foo = (arr) => {
  const mathRandom = Math.floor(Math.random() * 11);
  arr.push(mathRandom);
  const sumArray = arr.reduce((acc, item) => acc + item, 0);
  if (sumArray > 50) {
    return arr;
  } else {
    return foo(arr);
  }
};

console.log('foo(): ', foo(array));
