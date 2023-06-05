import React from "react";

import styles from "./SubmitBlock.module.scss";
import AppContext from "../../../context";

export const SubmitBlock = ({setStatusOrder}) => {
  const { basketItems, removeCardBasket, setOrders} = React.useContext(AppContext);
  const calcPrice = basketItems.reduce((prev, obj) => prev + obj.price, 0)

    const onClickSubmitOrder = () => {
      if (basketItems.length > 0) {
        setStatusOrder(true);
        addInListOrders();
        clearBasket();
      }
    };
  
    const addInListOrders = () => {
      basketItems.forEach((item) => {
         setOrders(prev => [...prev, item])
      });
    };
    const clearBasket = () => {
      basketItems.forEach((item) => removeCardBasket(item.id));
    };
  return (
    <div className={styles.submitBlock}>
      <div className={styles.total}>
        <p>Итого</p>
        <span>{`${calcPrice} руб.`}</span>
      </div>
      <div className={styles.tax}>
        <p>Налог 5%: </p>
        <span>{`${calcPrice / 100 * 5} руб.`}</span>
      </div>
      <button onClick={onClickSubmitOrder} className={` ${styles.btn} greenButton`}>
        <img src="./img/basket/arrow.svg" alt="arrow" /> Оформить заказ
      </button>
    </div>
  );
};

