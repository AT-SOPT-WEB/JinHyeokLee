import Card from '../Card/Card.jsx';
import Chip from '../Chip/Chip';
import Input from '../Input/Input';
import * as style from './githubSearchStyle';

const GithubSearch = ({ searchKeyword, handleSearchKeywordChange }) => {
  return (
    <div css={style.containerStyle}>
      <Input
        placeholder="GitHub 프로필을 검색하세요"
        value={searchKeyword}
        onChange={handleSearchKeywordChange}
      />
      <p css={style.textStyle}>최근 검색어</p>
      <div css={style.chipContainerStyle}>
        {['이진혁', '한수정', '박희선'].map((item) => (
          <Chip name={item}></Chip>
        ))}
      </div>
      <Card />
    </div>
  );
};

export default GithubSearch;
