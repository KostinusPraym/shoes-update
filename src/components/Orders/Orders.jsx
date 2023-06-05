import React from "react";

import AppContext from "../../context";

import {CardOrder} from "../Orders/CardOrder";
import {Info} from "../Info/Info";
import styles from "./Orders.module.scss";

export const Orders = () => {
  const { orders} = React.useContext(AppContext);

  return (
    <div>
      {orders.length > 0 ? (
        <div className={styles.content}>
          <h1 className={styles.title}>Мои заказы</h1>
          <div className={styles.cards}>
            {orders.map((item) => {
              return (
                <CardOrder
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Info
          title="У вас нет заказов"
          description="Добавьте хотя бы один заказ."
          textButton="Вернуться назад"
          img="./img/emptyOrders.png"
        />
      )}
    </div>
  );
};


