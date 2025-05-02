import * as style from './cardStyle.js';

const Card = ({ data }) => {
  const { name, login, followers, following, avatar_url, html_url, bio } = data;

  return (
    <div css={style.containerStyle}>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <img
          css={style.profileImageStyle}
          alt="프로필 이미지"
          src={avatar_url}
        />
      </a>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <p css={style.nameStyle}>{name}</p>
      </a>
      <p css={style.nicknameStyle}>{login}</p>
      <p css={style.nicknameStyle}>{bio}</p>
      <div css={style.followContainerStyle}>
        <div css={style.followStyle}>
          <p>Follower</p>
          <p>{followers}</p>
        </div>
        <div css={style.followStyle}>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
