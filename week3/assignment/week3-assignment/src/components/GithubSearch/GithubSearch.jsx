import { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../../utils/localStorage.js';
import Card from '../Card/Card.jsx';
import Chip from '../Chip/Chip';
import Input from '../Input/Input';
import * as style from './githubSearchStyle';

const GithubSearch = ({
  userInfo,
  getUserInfo,
  searchKeyword,
  handleSearchKeywordChange,
}) => {
  const [recentSearchList, setRecentSearchList] = useState([]);
  const { status, data } = userInfo;

  const addSearchKeyword = () => {
    let updatedList = [...recentSearchList, searchKeyword];
    setRecentSearchList(updatedList);
    setStorage('recentSearchList', updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo(searchKeyword);
    addSearchKeyword();
  };

  useEffect(() => {
    const storedList = getStorage('recentSearchList');
    if (storedList) {
      setRecentSearchList(storedList);
    }
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div css={style.containerStyle}>
        <Input
          placeholder="GitHub 프로필을 검색하세요"
          value={searchKeyword}
          onChange={handleSearchKeywordChange}
        />
        <p css={style.textStyle}>최근 검색어</p>
        <div css={style.chipContainerStyle}>
          {recentSearchList.map((keyword, index) => (
            <Chip keyword={keyword} key={`${keyword}-${index}`} />
          ))}
        </div>
        {status === 'resolved' && <Card data={data} />}
      </div>
    </form>
  );
};

export default GithubSearch;
