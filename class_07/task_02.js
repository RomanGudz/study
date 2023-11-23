'use strict'

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (value) => {
  let sumCashAllDay = 0;
  for (let i = 0; i < value.length; i++) {
    sumCashAllDay += value[i];
  };

  return Math.floor(sumCashAllDay / value.length);

};

console.log(getAverageValue(allСashbox));