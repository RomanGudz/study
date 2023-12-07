'use strict';

(() => {
  const evenOrOdd = ['четное', 'нечетное'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const isEven = () => evenOrOdd[Math.floor(Math.random() * evenOrOdd.length)];
  const isEvenPlayer = (number) => {
    if (number % 2 === 0) {
      return evenOrOdd[0];
    } else {
      return evenOrOdd[1];
    }
  };
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomIntInclusiveRSP = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const gameMarble = () => {
    const ballPalayerAndComputer = {
      player: 5,
      computer: 5,
      movePlayerOrBot: true,
      firstMove: '',
      getGameStart() {
        console.log('Старт игры');
        console.log('Количество шариков: \nИгрок: ' + this.player + ',' +
          '\nБот: ' + this.computer);
      },
      getResultRound(value, num, num2) {
        alert('Выйграл ' + value + ',' +
          '\nВариант компьютера:  ' + num +
          '\nВаш вариант:  ' + num2);
      },
      getGameResult(str) {
        alert(str +
          '\nКоличество шариков у игрока: ' +
          this.player + ',' +
          '\nКоличество шариков у компьютера: ' +
          this.computer);
        alert('Ёще раз?');
        this.computer = 5;
        this.player = 5;
        this.firstMove = '';
      },
      getQuantityBalls() {
        console.log('\nКоличество шариков у игрока: ' +
          this.player + ',' +
          '\nКоличество шариков у компьютера: ' +
          this.computer);
      },
      getPlayerLose() {
        if (this.player <= 0) {
          this.player = 0;
          return true;
        }
        return false;
      },
      getBotLose() {
        if (this.computer <= 0) {
          this.computer = 0;
          return true;
        }
        return false;
      },
      playerWon(ball) {
        if (this.player + ball <= 10) {
          this.player += ball;
        } else {
          this.player = 10;
        }

        if (this.computer - ball >= 0) {
          this.computer -= ball;
        } else {
          this.computer = 0;
        }
      },

      botWon(ball) {
        if (this.computer + ball <= 10) {
          this.computer += ball;
        } else {
          this.computer = 10;
        }

        if (this.player - ball >= 0) {
          this.player -= ball;
        } else {
          this.player = 0;
        }
      },
    };

    const validQuantityBalls = (maxQuantity) => {
      const result = prompt(`Загадай число шариков (от 1 до ${maxQuantity}):`);
      const parsedResult = Number(result);
      if (result === null) {
        return null;
      }
      if (parsedResult < 1 ||
        parsedResult > maxQuantity) {
        alert('Пожалуйста, введите корректное числовое значение от 1 до ' +
          maxQuantity);
        return validQuantityBalls(maxQuantity);
      }

      return parsedResult;
    };

    const firstMove = () => {
      const movePlayer = prompt(`${FIGURES_RUS.join()}`);
      const findMovePlayer = () => (movePlayer !== null ?
        FIGURES_RUS.find(el => el.startsWith(movePlayer.toLowerCase())) : null);

      const moveComputer = FIGURES_RUS[getRandomIntInclusiveRSP(0,
        FIGURES_RUS.length)];

      console.log('moveComputer: ', moveComputer);
      console.log('findMovePlayer: ', findMovePlayer());

      if (findMovePlayer() === undefined) {
        findMovePlayer(prompt(`${FIGURES_RUS.join()}`));
      } else {
        if (findMovePlayer() === moveComputer) {
          alert('Вы: ' + findMovePlayer() +
            '\nКомпьютер: ' + moveComputer +
            '\nНичья');
          return firstMove();
        } else {
          if (
            (findMovePlayer() === FIGURES_RUS[0] &&
              moveComputer === FIGURES_RUS[1]) ||
            (findMovePlayer() === FIGURES_RUS[1] &&
              moveComputer === FIGURES_RUS[2]) ||
            (findMovePlayer() === FIGURES_RUS[2] &&
              moveComputer === FIGURES_RUS[0])
          ) {
            return ballPalayerAndComputer.firstMove = true;
          } else {
            return ballPalayerAndComputer.firstMove = false;
          }
        }
      }
    };
    firstMove();
    ballPalayerAndComputer.getGameStart();
    return function start() {
      if (ballPalayerAndComputer.firstMove) {
        console.log('игрок');
        if (ballPalayerAndComputer.movePlayerOrBot) {
          const guessNumberPlayer = validQuantityBalls(
            ballPalayerAndComputer.player);
          const moveBot = isEven();
          if (guessNumberPlayer === null) {
            const questionPlayer = confirm('Точно завершить игру?');
            if (questionPlayer) {
              return alert('Результат ' +
                '\nКоличество шариков у игрока: ' +
                ballPalayerAndComputer.player + ',' +
                '\nКоличество шариков у компьютера: ' +
                ballPalayerAndComputer.computer);
            }
          }

          if (moveBot === isEvenPlayer(guessNumberPlayer)) {
            ballPalayerAndComputer.botWon(guessNumberPlayer);

            ballPalayerAndComputer.getResultRound('компьютер',
              moveBot, guessNumberPlayer);

            if (ballPalayerAndComputer.getPlayerLose()) {
              ballPalayerAndComputer.getGameResult('Компьютер выйграл! ');
              firstMove();
            }
            ballPalayerAndComputer.getQuantityBalls();
          } else {
            ballPalayerAndComputer.playerWon(guessNumberPlayer);

            ballPalayerAndComputer.getResultRound('Игрок',
              moveBot, guessNumberPlayer);

            if (ballPalayerAndComputer.getBotLose()) {
              ballPalayerAndComputer.getGameResult('Игрок выйграл! ');
              firstMove();
            }
            ballPalayerAndComputer.getQuantityBalls();
          }
        } else {
          const guessNumberBot = getRandomIntInclusive(1,
            ballPalayerAndComputer.computer);

          const movePlayer = confirm('Число чётное?');

          if (movePlayer === (guessNumberBot % 2 === 0)) {
            ballPalayerAndComputer.playerWon(guessNumberBot);

            ballPalayerAndComputer.getResultRound('Игрок',
              guessNumberBot, evenOrOdd[1]);

            if (ballPalayerAndComputer.getBotLose()) {
              ballPalayerAndComputer.getGameResult('Игрок выйграл! ');
              firstMove();
            }
            ballPalayerAndComputer.getQuantityBalls();
          } else {
            ballPalayerAndComputer.botWon(guessNumberBot);

            ballPalayerAndComputer.getResultRound('компьютер',
              guessNumberBot, evenOrOdd[0]);

            if (ballPalayerAndComputer.getPlayerLose()) {
              ballPalayerAndComputer.getGameResult('Компьютер выйграл! ');
              firstMove();
            }
            ballPalayerAndComputer.getQuantityBalls();
          }
        }
      } else {
        console.log('bot');
        if (!ballPalayerAndComputer.movePlayerOrBot) {
          const guessNumberPlayer = validQuantityBalls(
            ballPalayerAndComputer.player);
          const moveBot = isEven();

          if (guessNumberPlayer === null) {
            const questionPlayer = confirm('Точно завершить игру?');
            if (questionPlayer) {
              return alert('Результат ' +
                '\nКоличество шариков у игрока: ' +
                ballPalayerAndComputer.player + ',' +
                '\nКоличество шариков у компьютера: ' +
                ballPalayerAndComputer.computer);
            }
          }

          if (moveBot === isEvenPlayer(guessNumberPlayer)) {
            ballPalayerAndComputer.botWon(guessNumberPlayer);

            ballPalayerAndComputer.getResultRound('компьютер',
              moveBot, guessNumberPlayer);

            if (ballPalayerAndComputer.getPlayerLose()) {
              ballPalayerAndComputer.getGameResult('Компьютер выйграл! ');
              firstMove();
            }

            ballPalayerAndComputer.getQuantityBalls();
          } else {
            ballPalayerAndComputer.playerWon(guessNumberPlayer);

            ballPalayerAndComputer.getResultRound('Игрок',
              moveBot, guessNumberPlayer);

            if (ballPalayerAndComputer.getBotLose()) {
              ballPalayerAndComputer.getGameResult('Игрок выйграл! ');
              firstMove();
            }

            ballPalayerAndComputer.getQuantityBalls();
          }
        } else {
          const guessNumberBot = getRandomIntInclusive(1,
            ballPalayerAndComputer.computer);

          const movePlayer = confirm('Число чётное?');

          ballPalayerAndComputer.getQuantityBalls();

          if (movePlayer === (guessNumberBot % 2 === 0)) {
            ballPalayerAndComputer.playerWon(guessNumberBot);

            ballPalayerAndComputer.getResultRound('Игрок',
              guessNumberBot, evenOrOdd[1]);

            if (ballPalayerAndComputer.getBotLose()) {
              ballPalayerAndComputer.getGameResult('Игрок выйграл! ');
              firstMove();
            }

            ballPalayerAndComputer.getQuantityBalls();
          } else {
            ballPalayerAndComputer.botWon(guessNumberBot);

            ballPalayerAndComputer.getResultRound('компьютер',
              guessNumberBot, evenOrOdd[0]);
            if (ballPalayerAndComputer.getPlayerLose()) {
              ballPalayerAndComputer.getGameResult('Компьютер выйграл! ');
              firstMove();
            }
            ballPalayerAndComputer.getQuantityBalls();
          }
        }
      }
      ballPalayerAndComputer.movePlayerOrBot =
        !ballPalayerAndComputer.movePlayerOrBot;
      start();
    };
  };
  window.startGameMarble = gameMarble;
})();
