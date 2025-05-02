import { useEffect, useRef, useState } from 'react';
import { getStorage, setStorage } from '../../utils/localStorage.js';
import Card from '../Card/Card.jsx';
import Chip from '../Chip/Chip';
import Input from '../Input/Input';
import Skeleton from '../Skeleton/Skeleton.jsx';
import * as style from './githubSearchStyle';

const GithubSearch = ({
  userInfo,
  getUserInfo,
  searchKeyword,
  handleSearchKeywordChange,
  resetInput,
}) => {
  const [recentSearchList, setRecentSearchList] = useState([]);
  const [isCardOpen, setIsCardOpen] = useState(true);
  const inputRef = useRef(null);
  const { status, data } = userInfo;

  const handleCardClose = () => {
    setIsCardOpen(false);
  };

  const addRecentSearch = () => {
    // 최근 검색어 중복 방지
    if (recentSearchList.includes(searchKeyword)) {
      return;
    }

    let updatedList = [...recentSearchList, searchKeyword];
    setRecentSearchList(updatedList);
    setStorage('recentSearchList', updatedList);
  };

  const deleteRecentSearch = (keyword) => {
    const updateList = recentSearchList.filter((item) => item !== keyword);
    setRecentSearchList(updateList);
    setStorage('recentSearchList', updateList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo(searchKeyword);
    setIsCardOpen(true);
    addRecentSearch();
    resetInput();
  };

  const handleRetrySearch = (keyword) => {
    getUserInfo(keyword);
    setIsCardOpen(true);
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
          ref={inputRef}
          placeholder="GitHub 프로필을 검색하세요"
          value={searchKeyword}
          onChange={handleSearchKeywordChange}
        />
        <p css={style.textStyle}>최근 검색어</p>
        <div css={style.chipContainerStyle}>
          {recentSearchList.map((keyword, index) => (
            <Chip
              keyword={keyword}
              key={`${keyword}-${index}`}
              onDelete={deleteRecentSearch}
              onRetrySearch={handleRetrySearch}
            />
          ))}
        </div>
        {status === 'pending' && <Skeleton width="100%" height="30rem" />}
        {status === 'resolved' && isCardOpen && (
          <Card data={data} handleCardClose={handleCardClose} />
        )}
        {status === 'rejected' && (
          <div css={style.errorStyle}>
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default GithubSearch;
