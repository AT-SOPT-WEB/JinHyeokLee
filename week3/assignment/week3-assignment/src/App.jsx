import { css } from '@emotion/react';
import { useState } from 'react';
import GithubSearch from './components/GithubSearch/GithubSearch';
import Header from './components/Header/Header';

function App() {
  const [activeTab, setActiveTab] = useState('github');
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const resetInput = () => {
    setSearchKeyword('');
  };

  const getUserInfo = async (user) => {
    setUserInfo({ status: 'pending', data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setUserInfo({ status: 'resolved', data });
    } catch {
      setUserInfo({ status: 'rejected', data: null });
    }
  };

  return (
    <>
      <Header activeTab={activeTab} onClick={handleTabClick} />
      <main
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <GithubSearch
          userInfo={userInfo}
          getUserInfo={getUserInfo}
          searchKeyword={searchKeyword}
          handleSearchKeywordChange={handleSearchKeywordChange}
          resetInput={resetInput}
        />
      </main>
    </>
  );
}

export default App;
