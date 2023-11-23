'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filterStudents = (arr1, arr2) => {
  const findStudents = arr2;

  for (const student of arr1) {
    let numberIndex = arr2.findIndex(item => item === student)
    findStudents.splice(numberIndex, 1);
  };

  return findStudents;
};

console.log(filterStudents(failedStudents, allStudents));