import React from "react";
import styles from "../Card/Card.module.scss";

export const CardOrder = ({ name, price, img }) => {
  return (
    <div className={styles.cardProduct}>
          <img className={styles.imgShoes} src={img} alt="shoes01" />
          <p className={styles.name}>{name}</p>
          <div className={styles.priceBlock}>
            <div>
              <span>Цена</span>
              <strong
                className={styles.price}
              >{`${price} руб.`}</strong>
            </div>
          </div>
    </div>
  );
};


