'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissros', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const INTERFACE_ENG = ['Result:', '\nYou: ', '\nComputer: ',
    'Finish the game exactly?', '\nDraw', '\nYou won', '\nThe computer won'];

  const INTERFACE_RUS = ['Результат:', '\nВы: ', '\nКоппьютер: ',
    'Точно завершить игру?', '\nНичья',
    '\nВы выиграли', '\nПобедил компьютер'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const game = (language) => {
    const langIterface = language === 'EN' ||
      language === 'ENG' ? INTERFACE_ENG : INTERFACE_RUS;
    const lang = language === 'EN' ||
      language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    const resultGame = {
      player: 0,
      computer: 0,
      getResult() {
        alert(
          langIterface[0] +
          langIterface[1] + resultGame.player + ',' +
          langIterface[2] + resultGame.computer);
      },
    };

    return function start() {
      const movePlayer = prompt(`${lang.join()}`);

      const findMovePlayer = () => (movePlayer !== null ?
        lang.find(el => el.startsWith(movePlayer.toLowerCase())) : null);

      const moveComputer = lang[getRandomIntInclusive(0, lang.length)];
      // console.log('moveComputer: ', moveComputer);
      // console.log('findMovePlayer: ', findMovePlayer());

      if (findMovePlayer() === null) {
        const questionPlayer = confirm(langIterface[3]);
        if (questionPlayer) {
          return resultGame.getResult();
        } else {
          start();
        }
      } else if (findMovePlayer() === undefined) {
        findMovePlayer(prompt(`${lang.join()}`));
        start();
      } else {
        if (findMovePlayer() === moveComputer) {
          alert(langIterface[1] + findMovePlayer() +
            langIterface[2] + moveComputer +
            langIterface[4]);
        } else {
          if (
            (findMovePlayer() === lang[0] && moveComputer === lang[1]) ||
            (findMovePlayer() === lang[1] && moveComputer === lang[2]) ||
            (findMovePlayer() === lang[2] && moveComputer === lang[0])
          ) {
            alert(langIterface[1] + findMovePlayer() +
              langIterface[2] + moveComputer +
              langIterface[5]);
            resultGame.player++;
          } else {
            alert(langIterface[1] + findMovePlayer() +
              langIterface[2] + moveComputer +
              langIterface[6]);
            resultGame.computer++;
          }
          // console.log(resultGame);
        }
        start();
      }
    };
  };
  window.rockPaperScissros = game;
})();
