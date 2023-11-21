'use strict'

const exchangeDollarToRub = (value) => {
  let oneDollar = value;

  return oneDollar * 64;
};

const exchangeEuro = (value) => {
  let oneEuro = value;

  return exchangeDollarToRub(oneEuro * 1.2);
};


console.log('exchangeEuro: ', exchangeEuro(2));
