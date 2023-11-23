'use strict'


const randomNumber = Math.floor(Math.random() * 101);

const gameBot = (randomNumber) => {
  while (true) {
    let resultUser = prompt('Угадай число от 1 до 100');

    if (resultUser === null) {
      alert('Игра завершена.');
      break;
    }

    const userGuess = Number(resultUser);

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
  };
};
gameBot(randomNumber);
