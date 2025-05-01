import style from './Card.module.css';

const Card = ({ name, engName, github }) => {
  return (
    <div className={style.card}>
      <p>{name}</p>
      <p>{github}</p>
      <p>{engName}</p>
    </div>
  );
};

export default Card;
