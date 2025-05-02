import closeIcon from '../../assets/icons/closeIcon.png';
import * as style from './chipStyle';

const Chip = ({ name }) => {
  return (
    <div css={style.chipStyle}>
      {name}
      <img src={closeIcon} alt="ChipCloseIcon" css={style.closeIconStyle} />
    </div>
  );
};

export default Chip;
