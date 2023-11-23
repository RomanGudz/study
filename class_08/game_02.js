'use strict'

const resultvalue1 = Number(prompt('Укажите первое число'));
const resultvalue2 = Number(prompt('Укажите второе число'));
const allResultUser = [];

const validResultUser = (value) => {
  console.log('allResultUser: ', allResultUser);
  const isValidNumber = allResultUser.some((item) => item == value);
  if (isValidNumber) {
    alert(`число ${value} уже было`);
  } else {
    allResultUser.push(value);
  };
};

const gameBot = (result1, result2) => {
  const max = Math.max(result1, result2);
  const min = Math.min(result1, result2);
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  const numberOfAttempts = (max - min + 1) * 0.3;

  console.log('numberOfAttempts: ', numberOfAttempts);
  while (true) {
    let resultUser = prompt(`Угадай число в диапазоне от ${min} до ${max}`);
    const userGuess = Number(resultUser);
    validResultUser(resultUser);
    if (resultUser === null) {
      alert('Игра завершена.');
      break;
    };

    if (isNaN(userGuess)) {
      alert('Введи число!');
    } else if (userGuess > randomNumber) {
      alert('Меньше!');
    } else if (userGuess < randomNumber) {
      alert('Больше!');
    } else {
      alert('Правильно!');
      break;
    };

    if (allResultUser.length == numberOfAttempts) {
      alert('Игра окончена у вас закончились попытки');
      break;
    };
  };

};
gameBot(resultvalue1, resultvalue2);
