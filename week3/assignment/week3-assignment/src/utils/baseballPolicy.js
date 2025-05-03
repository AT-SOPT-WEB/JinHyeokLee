import {
  ERROR_DUPLICATE,
  ERROR_NOT_NUMBER,
  GAME_NUMBER_LENGTH,
  MAX_NUMBER,
  MIN_NUMBER,
} from '../constants/baseball';

export const generateRandomNumbers = () => {
  const randomNumbers = new Set();
  while (randomNumbers.size < GAME_NUMBER_LENGTH) {
    const randomNumber = Math.floor(
      Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER
    );
    randomNumbers.add(randomNumber);
  }
  return Array.from(randomNumbers);
};

export const isStrike = (computer, userNumber, index) => {
  return computer[index] === userNumber;
};

export const isBall = (computerNumbers, userNumbers, index, comNumber) => {
  // user는 array, comNumber는 number
  return (
    userNumbers.includes(comNumber) &&
    computerNumbers[index] !== userNumbers[index]
  );
};

export const isGameEnd = (strikeCount) => {
  return strikeCount === GAME_NUMBER_LENGTH;
};

export const validateUserNumbers = (input) => {
  if (input.some((value) => !Number.isInteger(value))) {
    throw new Error(ERROR_NOT_NUMBER);
  }

  if (input.length !== GAME_NUMBER_LENGTH) {
    throw new Error(
      `입력한 숫자는 반드시 ${GAME_NUMBER_LENGTH}자리여야 합니다.`
    );
  }

  const uniqueNumbers = new Set(input);
  if (uniqueNumbers.size !== GAME_NUMBER_LENGTH) {
    throw new Error(ERROR_DUPLICATE);
  }
};
