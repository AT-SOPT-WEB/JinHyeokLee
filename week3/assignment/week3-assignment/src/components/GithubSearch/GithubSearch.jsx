import Chip from '../Chip/Chip';
import * as style from './githubSearchStyle';

const GithubSearch = () => {
  return (
    <div css={style.containerStyle}>
      <input type="text" css={style.inputStyle} />
      <p css={style.textStyle}>최근 검색어</p>
      <div css={style.chipContainerStyle}>
        {['이진혁', '한수정', '박희선'].map((item) => (
          <Chip name={item}></Chip>
        ))}
      </div>
      <div>card</div>
    </div>
  );
};

export default GithubSearch;
