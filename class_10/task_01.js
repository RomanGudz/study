'use strict'

const cart = {
  items: [],
  get totalPrice() { return this.calculateItemPrice() },
  count: 0,
  add(product, price, count = 1) {
    cart.items.push({ productName: product, price: price, count: count });
    cart.increaseCount(count);
    cart.calculateItemPrice();
  },
  increaseCount(num) { this.count += num },
  calculateItemPrice() {
    const sumTotal = cart.items.reduce(function (acc, item) {
      const sum = acc + (item.price * item.count);
      return sum;
    }, 0);
    return sumTotal
  },
  clear() { this.items = []; this.totalPrice = 0; this.count = 0; },
  print() { console.log(JSON.stringify(this.items)), console.log(JSON.stringify(this.totalPrice)); },
};

cart.add('phone', 1500, 4)
cart.add('phone', 150, 4)
cart.add('phone', 100, 4)

console.log(cart.items);

console.log(cart.totalPrice);
cart.print()