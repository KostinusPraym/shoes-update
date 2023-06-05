import React from "react";

import AppContext from "../../context";

import styles from "./Favorites.module.scss";
import {Card} from "../Card/Card";
import {Info} from "../Info/Info";

export const Favorites = () => {
  const store = React.useContext(AppContext);
  const { favoritesItems: items, basketItems } = store;
  return (
    <>
      {items.length > 0 ? (
        <div className={styles.content}>
          <h1 className={styles.title}>Мои закладки</h1>
          <div className={styles.cards}>
            {items.map((item) => {
              return (
                <Card
                  {...item}
                  key={item.id}
                  favorite={true}
                  inBasket={basketItems.some((card) => +card.id === +item.id)}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Info
          title="Закладок нет :("
          description="Вы ничего не добавляли в закладки"
          textButton="Вернуться назад"
          img="./img/emptyFavorites.png"
        />
      )}
    </>
  );
};


