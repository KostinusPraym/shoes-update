import React from "react";

import {Card} from "../Card/Card";
import AppContext from "../../context";
import styles from "./Main.module.scss"

export const Main = ({ currentInput, changeSearchInput, loading }) => {
  const {
    shoes: items,
    basketItems,
    favoritesItems,
  } = React.useContext(AppContext);
  const filterCard = (item) => {
    const itemNameLower = item.name.toLowerCase();
    const inputLower = currentInput.toLowerCase();

    return itemNameLower.includes(inputLower);
  };

  return (
    <main className={styles.contentMain}>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>
          {currentInput
            ? `Поиск по запросу: "${currentInput}"`
            : "Все кроссовки"}
        </h1>
        <label>
          <img src="./img/main/search.svg" alt="" />
          <input
            type="text"
            placeholder="поиск..."
            onChange={changeSearchInput}
            value={currentInput}
          />
        </label>
      </div>
      <div className={styles.cardsBlock}>
        {(loading
          ? [...Array(12)]
          : items.filter((item) => filterCard(item))
        ).map((card, index) => {
          return (
            <Card
              key={index}
              favorite={favoritesItems.some((item) => +item.id === +card.id)}
              inBasket={basketItems.some((item) => +item.id === +card.id)}
              isLoading={loading}
              {...card}
            />
          );
        })}
      </div>
    </main>
  );
};

