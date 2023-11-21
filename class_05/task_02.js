'use strict'

const isPrime = (value) => {
  for (let i = value; i % i; i = i) {
    return console.log(i)
  }
}

isPrime(2)