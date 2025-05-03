import {
  generateRandomNumbers,
  isBall,
  isGameEnd,
  isStrike,
  validateUserNumbers,
} from './baseballPolicy.js';

export const createGame = () => {
  let computerNumbers = generateRandomNumbers();

  const start = () => {
    computerNumbers = generateRandomNumbers();
  };

  const playRound = (userNumbers) => {
    validateUserNumbers(userNumbers);

    const strikeCount = userNumbers.filter((num, index) =>
      isStrike(computerNumbers, num, index)
    ).length;

    const ballCount = computerNumbers.filter((comNumber, index) =>
      isBall(computerNumbers, userNumbers, index, comNumber)
    ).length;

    return {
      strike: strikeCount,
      ball: ballCount,
      isEnd: isGameEnd(strikeCount),
    };
  };

  return {
    start,
    playRound,
  };
};
