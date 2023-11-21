'use strict'

function find(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

const num1 = 32;
const num2 = 48;

const resultFind = find(num1, num2);
console.log(`Наибольший общий делитель чисел ${num1} и ${num2} равен: ${resultFind}`);
