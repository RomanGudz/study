'use strict'

{
  const num1 = Number(prompt('напишите первое число', ''));
  const num2 = Number(prompt('напишите второе число', ''));
  const resFindMin = (num1, num2) => {
    return (num1 + num2 - Math.abs(num1 - num2)) / 2;
  };

  console.log(resFindMin(num1, num2),);
}

