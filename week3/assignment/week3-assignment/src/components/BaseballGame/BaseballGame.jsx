import { useBaseballGame } from '../../hooks/useBaseballGame.js';
import RoundResultBox from '../RoundResultBox/RoundResultBox';
import Input from '../shared/Input/Input.jsx';
import * as style from './baseballGameStyle';

const BaseballGame = () => {
  const {
    gameInputValue,
    resultList,
    message,
    handleInputChange,
    handleSubmit,
  } = useBaseballGame();

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div css={style.containerStyle}>
        <Input
          value={gameInputValue}
          onChange={handleInputChange}
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
