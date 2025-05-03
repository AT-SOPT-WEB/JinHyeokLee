import closeIcon from '../../assets/icons/closeIcon.png';
import * as style from './chipStyle';

const Chip = ({ keyword, onDelete, onRetrySearch }) => {
  return (
    <div css={style.chipStyle}>
      <p onClick={() => onRetrySearch(keyword)} css={style.textStyle}>
        {keyword}
      </p>
      <img
        src={closeIcon}
        alt="ChipCloseIcon"
        css={style.closeIconStyle}
        onClick={() => onDelete(keyword)}
      />
    </div>
  );
};

export default Chip;
