import * as style from './cardStyle.js';

const Card = ({ data }) => {
  const { name, login, followers, following, avatar_url } = data;

  return (
    <div css={style.containerStyle}>
      <img css={style.profileImageStyle} alt="프로필 이미지" src={avatar_url} />
      <p css={style.nameStyle}>{name}</p>
      <p css={style.nicknameStyle}>{login}</p>
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
