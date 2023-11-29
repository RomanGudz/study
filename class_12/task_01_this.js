'use strict';

const rectangle = {
  width: 5,
  height: 5,
  getAreaRectangle() {
    return `${this.height * this.width}см`;
  },
  getPerimeter() {
    return `${2 * (this.height + this.width)}см`;
  },
  setWidth(number) {
    typeof number === 'number' ?
      this.width = number : console.log('это не число');
  },
  setHeight(number) {
    typeof number === 'number' ?
      this.height = number : console.log('это не число');
  },
};

console.log(rectangle.getAreaRectangle());
console.log(rectangle.getPerimeter());
