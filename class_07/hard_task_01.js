'use strict'

const allСash = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (value) => {
  let averagePrice = 0;
  let sumCash = 0;
  let sumProduct = 0;

  for (let i = 0; i < value.length; i++) {
    let [x, y] = value[i];
    sumProduct += x;
    sumCash += y;
  }
  averagePrice = Math.round(sumCash / sumProduct);
  return averagePrice
};


console.log(getAveragePriceGoods(allСash));