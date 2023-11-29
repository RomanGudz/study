'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(product, price, count = 1) {
    this.items.push({productName: product, price, count});
    this.increaseCount(count);
    this.calculateItemPrice();
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    this.items.reduce((acc, item) => {
      const sum = acc + item.price * item.count;
      return (this.totalPrice = sum);
    }, 0);
    if (this.discount > 0) {
      return this.totalPrice = (this.totalPrice * (100 - this.discount) / 100);
    }
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items)),
    console.log(JSON.stringify(this.totalPrice));
  },
  setDiscount(promokod) {
    if (promokod === 'METHED') {
      this.discount = 15;
      this.calculateItemPrice();
    }
    if (promokod === 'NEWYEAR') {
      this.discount = 21;
      this.calculateItemPrice();
    }
  },
};

console.log(cart.totalPrice);
cart.add('phone', 1500, 2);
cart.add('phone', 100, 4);
cart.add('phone', 150, 4);
console.log(cart.totalPrice);
cart.setDiscount('METHED');
console.log(cart.totalPrice);

