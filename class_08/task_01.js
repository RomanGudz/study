'use strict'

{
  const arrayLength = 10

  const fooRandomNumder = (value) => {
    let arrayRandom = new Array(value).fill().map((item) => {
      return item = Math.floor(Math.random() * 101);
    })
    return arrayRandom;
  };

  console.log(fooRandomNumder(arrayLength))
}