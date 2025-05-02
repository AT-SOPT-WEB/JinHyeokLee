import * as style from './headerStyle';

function Header({ activeTab, onClick }) {
  return (
    <header css={style.headerStyle}>
      <div>
        <h1 css={style.titleStyle}>🔍 GitHub 검색 & 숫자 야구 ⚾</h1>
        <div css={style.buttonContainerStyle}>
          <button
            css={[
              style.buttonStyle,
              activeTab === 'github' && style.activeButton,
            ]}
            onClick={() => onClick('github')}
          >
            깃허브 검색
          </button>

          <button
            css={[
              style.buttonStyle,
              activeTab === 'baseball' && style.activeButton,
            ]}
            onClick={() => onClick('baseball')}
          >
            숫자 야구
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
