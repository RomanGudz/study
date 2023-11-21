'use strict'

const calculateBasket = (total = 0, quantity = 0, promo = '') => {
  let totalOrder = total;
  let quantityBasket = quantity;
  let promoKod = promo;
  if (quantityBasket > 10) {
    totalOrder = totalOrder * 0.97;
  };

  if (totalOrder > 30000) {
    totalOrder = totalOrder * 0.85;
  };

  if (promoKod.length) {
    totalOrder = searchPromoKod(totalOrder, promoKod)
  }
  return totalOrder.toFixed(2);
};

const searchPromoKod = (value, promo) => {
  let totalOrder = value;
  let promoKod = promo;

  if (promoKod === 'METHED') {
    totalOrder = totalOrder * 0.90;
  };

  if (promoKod === 'G3H2Z1') {
    if (totalOrder > 2000) {
      totalOrder = totalOrder - 500;
    };
    return totalOrder;
  };
  return totalOrder;
};

const resultCalcBasket = calculateBasket(13820, 12, 'GH2Z1');
console.log('resultCalcBasket: ', resultCalcBasket);

