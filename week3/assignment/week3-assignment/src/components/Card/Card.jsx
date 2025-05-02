import * as style from './cardStyle.js';

const Card = () => {
  return (
    <div css={style.containerStyle}>
      <img css={style.profileImageStyle} alt="프로필 이미지" />
      <p css={style.nameStyle}>이진혁</p>
      <p css={style.nicknameStyle}>constantly-dev</p>
      <div css={style.followContainerStyle}>
        <div css={style.followStyle}>
          <p css={style.followTextStyle}>Follower</p>
          <p>100</p>
        </div>
        <div css={style.followStyle}>
          <p css={style.followTextStyle}>Following</p>
          <p>200</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
