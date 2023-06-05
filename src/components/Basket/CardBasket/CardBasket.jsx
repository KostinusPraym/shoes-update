import styles from "./CardBasket.module.scss";
const CardBasket = ({ name, price, img, id, removeCardBasket }) => {
  
  const handleClick = () => {
    removeCardBasket(id)
  }
  return (
    <div className={styles.drawer__card}>
      <img
        width={70}
        height={70}
        src={img}
        alt="shoes"
        className={styles.drawer__img}
      />
      <div className={styles.drawer__info}>
        <p>{name}</p>
        <strong>{`${price} руб.`}</strong>
      </div>
      <img
        width={32}
        height={32}
        src="./img/basket/close.svg"
        alt="close"
        className={styles.drawer__icon}
        onClick={handleClick}
      />
    </div>
  );
};
export default CardBasket;
