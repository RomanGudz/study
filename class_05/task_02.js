'use strict'

const modString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

console.log('modString: ', modString('привет Мир'));

