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

  console.log(userInfo);

  return (
    <>
      <Header activeTab={activeTab} onClick={handleTabClick} />
      <button onClick={() => getUserInfo('m2na7')}>dd</button>
      <main
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <GithubSearch
          searchKeyword={searchKeyword}
          handleSearchKeywordChange={handleSearchKeywordChange}
        />
      </main>
    </>
  );
}

export default App;
