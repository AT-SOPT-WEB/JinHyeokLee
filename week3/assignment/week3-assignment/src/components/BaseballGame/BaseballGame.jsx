import { useState } from 'react';
import Input from '../Input/Input';
import RoundResultBox from '../RoundResultBox/RoundResultBox';
import * as style from './baseballGameStyle';

const BaseballGame = () => {
  const [gameInputValue, setGameInputValue] = useState('');

  const handleGameValueChange = (e) => {
    setGameInputValue(e.target.value);
  };

  return (
    <div css={style.containerStyle}>
      <Input value={gameInputValue} onChange={handleGameValueChange} />
      <p css={style.textStyle}>정답입니다!</p>
      <div css={style.roundResultContainerStyle}>
        <RoundResultBox />
      </div>
    </div>
  );
};

export default BaseballGame;
