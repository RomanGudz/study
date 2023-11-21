'use strict'

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

console.log('reverseString: ', reverseString('Привет мир'));
