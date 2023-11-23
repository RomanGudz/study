'use strict'

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (value, prefix) => {
  let prefixName = [];
  for (const firstName of value) {
    prefixName.push(`${prefix} ${firstName}`)
  }
  return prefixName
};


console.log(addPrefix(names, 'Mr'));