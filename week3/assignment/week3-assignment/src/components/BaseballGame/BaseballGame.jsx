import { useRef, useState } from 'react';
import {
  GAME_FAIL_MESSAGE,
  GAME_START_MESSAGE,
  GAME_SUCCESS_MESSAGE,
} from '../../constants/baseball.js';
import { createGame } from '../../utils/baseballGame.js';
import RoundResultBox from '../RoundResultBox/RoundResultBox';
import Input from '../shared/Input/Input.jsx';
import * as style from './baseballGameStyle';

const BaseballGame = () => {
  const [gameInputValue, setGameInputValue] = useState('');
  const [message, setMessage] = useState(GAME_START_MESSAGE);
  const [resultList, setResultList] = useState([]);

  const gameRef = useRef(createGame());

  const handleGameValueChange = (e) => {
    setGameInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setGameInputValue('');
  };

  const restartGame = () => {
    gameRef.current.start();
    resetInputValue();
    setResultList([]);
    setMessage(GAME_START_MESSAGE);
  };

  const handleSuccessGame = () => {
    setMessage(GAME_SUCCESS_MESSAGE);
    setTimeout(() => {
      restartGame();
    }, 3000);
  };

  const handleFailGame = () => {
    setMessage(GAME_FAIL_MESSAGE);
    setTimeout(() => {
      restartGame();
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetInputValue(); // input 초기화

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

        // 10회 초과 시 게임 패배
        if (updated.length > 10) {
          handleFailGame();
          return prev;
        }

        return updated;
      });

      // 정답 맞히면 게임 성공
      if (roundResult.isEnd) {
        handleSuccessGame();
      }

      setMessage(`${newResult.strike}S ${newResult.ball}B`);
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
          placeholder="3자리 숫자를 입력하세요"
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
