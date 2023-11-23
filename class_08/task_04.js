'use strict'

{
  const findLeapYears = (value1, value2) => {
    let arrayLeapYears = [];

    for (let i = value1; i <= value2; i++) {
      arrayLeapYears.push(i)
    };

    arrayLeapYears = arrayLeapYears.filter((item) => {
      return item = (item % 4 === 0 && item % 100 !== 0) || (item % 400 === 0)

    })

    return arrayLeapYears
  };

  console.log('findLeapYears: ', findLeapYears(2000, 2023));

}