#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import calculateNumbers from '../games/calcgame.js';
import compareAnswers from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

const cycle = () => {
  for (let i = 0; i < 3; i += 1) {
    const questAndRigthAnsw = calculateNumbers();
    if (compareAnswers(car(questAndRigthAnsw), cdr(questAndRigthAnsw)) === 'failure') {
      return 'failure';
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 'Congratulations';
};

cycle();