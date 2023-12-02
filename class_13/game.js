'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissros', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  // const getFigure = (language) => {  };

  const game = (language) => {
    const resultGame = {
      player: 0,
      computer: 0,
      getResult() {
        alert(
          'Результат:' +
          '\nВы ' + resultGame.player + ',' +
          '\nКоппьютер ' + resultGame.computer);
      },
    };


    const lang = language === 'EN' ||
      language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const movePlayer = prompt(`${lang.join()}`);

      const findMovePlayer = () => (movePlayer !== null ?
        lang.find(el => el.startsWith(movePlayer.toLowerCase())) : null);

      const moveComputer = lang[getRandomIntInclusive(0, lang.length)];
      // console.log('moveComputer: ', moveComputer);
      // console.log('findMovePlayer: ', findMovePlayer());

      if (findMovePlayer() === null) {
        const questionPlayer = confirm('Точно завершить игру?');
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
          alert('Вы: ' + findMovePlayer() +
            '\nКомпьютер: ' + moveComputer +
            '\nНичья');
        } else {
          if (
            (findMovePlayer() === lang[0] && moveComputer === lang[1]) ||
            (findMovePlayer() === lang[1] && moveComputer === lang[2]) ||
            (findMovePlayer() === lang[2] && moveComputer === lang[0])
          ) {
            alert('Вы: ' + findMovePlayer() +
              '\nКомпьютер: ' + moveComputer +
              '\nВы выиграли');
            resultGame.player++;
          } else {
            alert('Вы: ' + findMovePlayer() +
              '\nКомпьютер: ' + moveComputer +
              '\nПобедил компьютер');
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
