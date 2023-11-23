'use strict'

{
  const arrayLength = 10;
  let evenAndOdd = 'even';

  const fooRandomNumder = (value, n, m, number = '') => {
    let min = Math.min(n, m);
    let max = Math.max(n, m);

    let arrayRandom = new Array(value).fill()
      .map((item) => {
        return item = Math.floor(Math.random() * (max - min + 1)) + min;
      })
      .filter(function (item) {
        if (number === 'even') {
          return !(item % 2);
        };

        if (number === 'odd') {
          return item % 2;
        }
        return item;
      });

    return arrayRandom;
  };

  console.log(fooRandomNumder(arrayLength, 10, 30, evenAndOdd))
}