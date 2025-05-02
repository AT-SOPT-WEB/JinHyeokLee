import * as style from './skeletonStyle';

const Skeleton = ({ width, height }) => {
  return <span css={style.skeletonStyle(width, height)}></span>;
};

export default Skeleton;
