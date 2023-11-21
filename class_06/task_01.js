'use strict'

for (let i = 1; i < 11; i++) {
  console.log('--------');
  for (let y = 1; y < 11; y++) {
    console.log(`${i} x ${y} = ${y ** i}`)
  }
}