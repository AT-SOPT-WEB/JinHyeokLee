import { useRef, useState } from 'react';
import {
  GAME_FAIL_MESSAGE,
  GAME_START_MESSAGE,
  GAME_SUCCESS_MESSAGE,
} from '../constants/baseball.js';
import { createGame } from '../utils/baseballGame.js';

export const useBaseballGame = () => {
  const [gameInputValue, setGameInputValue] = useState('');
  const [message, setMessage] = useState(GAME_START_MESSAGE);
  const [resultList, setResultList] = useState([]);

  const gameRef = useRef(createGame());

  const handleInputChange = (e) => setGameInputValue(e.target.value);
  const resetInputValue = () => setGameInputValue('');

  const handleSuccessGame = () => {
    setMessage(GAME_SUCCESS_MESSAGE);
    setTimeout(restartGame, 3000);
  };

  const handleFailGame = () => {
    setMessage(GAME_FAIL_MESSAGE);
    setTimeout(restartGame, 5000);
  };

  const restartGame = () => {
    gameRef.current.start();
    resetInputValue();
    setResultList([]);
    setMessage(GAME_START_MESSAGE);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetInputValue();

    try {
      const inputArray = gameInputValue.split('').map(Number);
      const roundResult = gameRef.current.playRound(inputArray);

      const newResult = {
        input: [...inputArray],
        strike: roundResult.strike,
        ball: roundResult.ball,
      };

      setResultList((prev) => {
        const updated = [...prev, newResult];
        if (updated.length > 10) {
          handleFailGame();
          return prev;
        }
        return updated;
      });

      if (roundResult.isEnd) {
        handleSuccessGame();
      } else {
        setMessage(`${newResult.strike}S ${newResult.ball}B`);
      }
    } catch (e) {
      setMessage(e.message);
    }
  };

  return {
    gameInputValue,
    resultList,
    message,
    handleInputChange,
    handleSubmit,
  };
};
