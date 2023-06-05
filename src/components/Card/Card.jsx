import React from "react";
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

import styles from "./Card.module.scss";

export const Card = ({ name, price, img, id, favorite, inBasket, isLoading }) => {
  const { onAddToBasket, onAddToFavorite } = React.useContext(AppContext);

  React.useEffect(() => {
    setIsAdded(inBasket);
    setFavorite(favorite);
  }, [inBasket, favorite]);

  const [isAdded, setIsAdded] = React.useState(inBasket);
  const [isFavorite, setFavorite] = React.useState(favorite);

  const onClickPlus = () => {
    onAddToBasket({ name, price, img, id });
  };
  const onClickFavorite = () => {
    onAddToFavorite({ name, price, img, id });
  };

  return (
    <div className={styles.cardProduct}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="207" rx="5" ry="5" width="80" height="15" />
          <rect x="124" y="193" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <img
            className={styles.imgFavorite}
            src={
              isFavorite
                ? "./img/main/favorite.svg"
                : "./img/main/unfavorite.svg"
            }
            alt="favotite"
            onClick={onClickFavorite}
          />

          <img className={styles.imgShoes} src={img} alt={`shoes${id}`} />
          <p className={styles.name}>{name}</p>
          <div className={styles.priceBlock}>
            <div>
              <span>Цена</span>
              <strong
                className={styles.price}
              >{`${price} руб.`}</strong>
            </div>
            <button>
              <img
                className={styles.imgAdd}
                src={isAdded ? "./img/main/added.svg" : "./img/main/add.svg"}
                alt="buy"
                onClick={onClickPlus}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
