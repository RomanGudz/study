'use strict'

{
  const arrayLength = 10;

  const fooRandomNumder = (value, n, m) => {
    let min = Math.min(n, m);
    let max = Math.max(n, m);

    let arrayRandom = new Array(value).fill().map((item) => {
      return item = Math.floor(Math.random() * (max - min + 1)) + min;
    })
    return arrayRandom;
  };

  console.log(fooRandomNumder(arrayLength, -5, 5))
}