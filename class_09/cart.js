'use strict'

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(product, price, count = 1) {
    cart.items.push({ productName: product, price: price, count: count });
    cart.increaseCount(count);
    cart.calculateItemPrice();
  },
  increaseCount(num) { this.count += num },
  calculateItemPrice() {
    cart.items.reduce(function (acc, item) {
      const sum = acc + (item.price * item.count);
      console.log(acc);
      return cart.totalPrice = sum;
    }, 0);
  },
  clear() { this.items = []; this.totalPrice = 0; this.count = 0; },
  print() { console.log(JSON.stringify(this.items)), console.log(JSON.stringify(this.totalPrice)); },
};
