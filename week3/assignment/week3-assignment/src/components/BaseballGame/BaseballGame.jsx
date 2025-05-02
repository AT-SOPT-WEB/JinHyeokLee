import { useRef, useState } from 'react';
import {
  GAME_END_MESSAGE,
  GAME_START_MESSAGE,
} from '../../constants/baseball.js';
import { createGame } from '../../utils/baseballGame.js';
import Input from '../Input/Input';
import RoundResultBox from '../RoundResultBox/RoundResultBox';
import * as style from './baseballGameStyle';

const BaseballGame = () => {
  const [gameInputValue, setGameInputValue] = useState('');
  const [message, setMessage] = useState(GAME_START_MESSAGE);
  const [resultList, setResultList] = useState([]);

  const gameRef = useRef(createGame());

  const handleGameValueChange = (e) => {
    setGameInputValue(e.target.value);
  };

  const restartGame = () => {
    setMessage(GAME_END_MESSAGE);

    setTimeout(() => {
      gameRef.current.start();
      setGameInputValue('');
      setResultList([]);
      setMessage(GAME_START_MESSAGE);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const inputArray = gameInputValue.split('').map(Number);
      const roundResult = gameRef.current.playRound(inputArray);

      const newResult = {
        input: [...inputArray],
        strike: roundResult.strike,
        ball: roundResult.ball,
      };

      setResultList((prev) => [...prev, newResult]);
      setMessage(`${newResult.strike}S ${newResult.ball}B`);

      if (roundResult.isEnd) {
        restartGame();
      }
    } catch (e) {
      setMessage(e.message);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div css={style.containerStyle}>
        <Input
          value={gameInputValue}
          onChange={handleGameValueChange}
          onSubmit={handleSubmit}
        />
        <p css={style.textStyle}>{message}</p>
        <div css={style.roundResultContainerStyle}>
          {resultList.map((result, index) => (
            <RoundResultBox key={index} result={result} />
          ))}
        </div>
      </div>
    </form>
  );
};

export default BaseballGame;
