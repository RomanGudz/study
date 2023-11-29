'use strict';

const resultvalue1 = Number(prompt('Укажите первое число'));
const resultvalue2 = Number(prompt('Укажите второе число'));
const allResultUser = [];
const max = Math.max(resultvalue1, resultvalue2);
const min = Math.min(resultvalue1, resultvalue2);
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

const MathNumberOfAttempts = (max - min + 1) * 0.3;

const validResultUser = (value) => {
  console.log('allResultUser: ', allResultUser);
  const isValidNumber = allResultUser.some((item) => item === value);
  if (isValidNumber) {
    alert(`число ${value} уже было`);
  } else {
    allResultUser.push(value);
  }
};

const gameBot = (num) => {
  const numberOfAttempts = num;
  const resultUser = prompt(`Угадай число в диапазоне от ${min} до ${max}`);
  const userGuess = Number(resultUser);

  validResultUser(resultUser);

  console.log('numberOfAttempts: ', numberOfAttempts);

  if (resultUser === null) {
    return alert('Игра завершена.');
  }

  if (randomNumber === userGuess) {
    alert('Правильно!');
  } else {
    if (MathNumberOfAttempts > allResultUser.length) {
      if (isNaN(userGuess)) {
        alert('Введи число!');
      } else if (userGuess > randomNumber) {
        alert('Меньше!');
      } else if (userGuess < randomNumber) {
        alert('Больше!');
      }
      gameBot(numberOfAttempts);
    } else {
      alert('Игра окончена у вас закончились попытки');
    }
  }
};

gameBot(MathNumberOfAttempts);
