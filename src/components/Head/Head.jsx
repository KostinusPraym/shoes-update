import React from "react";
import { Link } from "react-router-dom";

import styles from "./Head.module.scss";

export const Head = ({ showBasket, basketItems }) => {

  const calcPrice = basketItems.reduce((prev, obj) => prev + obj.price, 0)

  return (
    <header className={styles.contentHeader}>
      <Link to="/">
        <div className={styles.leftInfo}>
          <img className={styles.logo}
            src="img/header/logo.png"
            alt="logotype"
          />
          <div>
            <h3 className={styles.title}>React Kostya shoes</h3>
            <p className={styles.descriptions}>
              store the best shoes from Kostya
            </p>
          </div>
        </div>
      </Link>
      <div className={styles.rightInfo}>
        <Link className={styles.wrap} onClick={showBasket}>
          <img
            src="./img/header/basket.svg"
            alt="basket"
          />
          <p className={styles.price}> {basketItems.length === 0 ? 'BASKET' : `${calcPrice} руб.`} </p>
        </Link>
        <Link className={styles.wrap} to="favorites">
          <img
            src="./img/header/tabs.svg"
            alt="favorites"
          />
          <p>FAVORITES</p>
        </Link>
        <Link to="/orders" className={`${styles.orders} ${styles.wrap}`}>
          <img
            src="./img/header/my-orders.svg"
            alt="orders"
          />
          <p>MY ORDERS</p>
        </Link>
      </div>
    </header>
  );
};


