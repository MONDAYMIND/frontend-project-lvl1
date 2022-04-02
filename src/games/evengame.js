import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIfNumberIsEven = () => {
  const maxNumberForEvenCheck = 100;
  const question = generateRandomNumber(maxNumberForEvenCheck);

  let rightAnswer;

  if (question % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, checkIfNumberIsEven);