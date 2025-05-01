/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const searchContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const buttonStyle = css`
  width: 5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
    transition: background-color 0.3s ease;
  }
`;

const inputStyle = css`
  width: 40rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

const Search = ({ handleSearchChange, keyword, handleSearch }) => {
  return (
    <form action="">
      <div css={searchContainerStyle}>
        <input
          css={inputStyle}
          type="text"
          value={keyword}
          onChange={handleSearchChange}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit" onClick={handleSearch} css={buttonStyle}>
          검색
        </button>
      </div>
    </form>
  );
};

export default Search;
