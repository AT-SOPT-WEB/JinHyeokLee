import * as style from './roundResultBoxStyle';

const RoundResultBox = ({ result }) => {
  const { input, strike, ball } = result;

  return (
    <div css={style.roundResultStyle}>
      {input} {strike}S {ball}B
    </div>
  );
};

export default RoundResultBox;
