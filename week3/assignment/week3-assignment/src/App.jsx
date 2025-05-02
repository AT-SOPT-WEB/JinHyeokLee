import { css } from '@emotion/react';
import { useState } from 'react';
import GithubSearch from './components/GithubSearch/GithubSearch';
import Header from './components/Header/Header';

function App() {
  const [activeTab, setActiveTab] = useState('github');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
        <GithubSearch></GithubSearch>
      </main>
    </>
  );
}

export default App;
