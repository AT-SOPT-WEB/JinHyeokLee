import closeIcon from '../../assets/icons/closeIcon.png';
import * as style from './chipStyle';

const Chip = ({ keyword }) => {
  return (
    <div css={style.chipStyle}>
      {keyword}
      <img src={closeIcon} alt="ChipCloseIcon" css={style.closeIconStyle} />
    </div>
  );
};

export default Chip;
