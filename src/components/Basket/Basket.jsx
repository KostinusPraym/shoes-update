import React from 'react'
import styles from "./Basket.module.scss";

import AppContext from '../../context';

import {Info} from "../Info/Info";
import {SubmitBlock} from "./SubmitBlock/SubmitBlock";
import CardBasket from "./CardBasket/CardBasket";

export const Basket = ({ basketItems = [], statusBasket}) => {
  const {onClose, removeCardBasket} = React.useContext(AppContext)
  
  const [statusOrder, setStatusOrder] = React.useState(false)


 
  return (
    <div className={`${styles.overlay} ${statusBasket ? styles.overlayVisible : ''} `}>
      <div className={styles.basket}>
        <div className={styles.titleWrap}>
          <h3 className={styles.title}>Корзина</h3>
          <img
            width={32}
            height={32}
            src="./img/basket/close.svg"
            alt="close"
            className={styles.onCloseIcon}
            onClick={onClose}
          />
        </div>
        <div className={styles.cards}>
          {basketItems.length > 0 ? (
            basketItems.map((card) => {
              return (
                <CardBasket
                  key={card.id}
                  {...card}
                  removeCardBasket={removeCardBasket}
                />
              );
            })
          ) : (
            <Info title={ statusOrder ? "Заказ оформлен!" : "Корзина пустая" } description={ statusOrder ? "Ваш заказ скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." } textButton={ statusOrder ? "Вернуться назад" : 'Вернуться назад' } img={ statusOrder ? "./img/basket/orderIsDone.png" :'./img/basket/basket.png' }/>
          )}
        </div>
        <SubmitBlock setStatusOrder={setStatusOrder} />
      </div>
    </div>
  );
};

const handleEscape = (e) => {
  if(e.code === "Escape"){
    alert("hello")
  }
}

document.addEventListener('keydown' ,handleEscape)