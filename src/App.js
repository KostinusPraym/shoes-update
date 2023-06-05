import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import AppContext from "./context";

import { Head } from "./components/Head/Head";
import { Basket } from "./components/Basket/Basket";
import { Main } from "./components/Main/Main";
import { Favorites } from "./components/Favorites/Favorites";
import { Orders } from "./components/Orders/Orders";

export function App() {
  // Карточки кроссовок
  const [shoes, setShoes] = useState([]);
  // Карточки в корзине
  const [basketItems, setBasketItems] = useState([]);
  // Карточки в избранных
  const [favoritesItems, setFavoritesItems] = useState([]);
  // Карточки в заказах
  const [orders, setOrders] = useState([]);
  // Поиск по названию
  const [currentInput, setCurrentInput] = useState("");
  // Статус загрузки карточек
  const [loading, SetLoading] = useState(true);
  // Состояние корзины(откр/закр)
  const [statusBasket, setStatusBasket] = useState(false);

  //Запрос всех карточек с сервера
  React.useEffect(() => {
    // Искуственная задержка .3с
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const basketResponse = await axios.get(
            "http://localhost:3001/basket"
          );

          const favoritesResponse = await axios.get(
            "http://localhost:3001/favorites"
          );

          const ordersResponse = await axios.get(
            "http://localhost:3001/orders"
          );

          const shoesResponse = await axios.get("http://localhost:3001/shoes");

          setBasketItems(basketResponse.data);
          setFavoritesItems(favoritesResponse.data);
          setOrders(ordersResponse.data);
          setShoes(shoesResponse.data);
          SetLoading(false);
        } catch (error) {
          alert("Error");
        }
      };

      fetchData();
    }, 300);
  }, []);

  const onAddToBasket = (obj) => {
    try {
      if (basketItems.find((item) => +item.id === +obj.id)) {
        axios.delete(`http://localhost:3001/basket/${obj.id}`);
        setBasketItems((prev) => prev.filter((item) => +item.id !== +obj.id));
      } else {
        axios.post("http://localhost:3001/basket", obj);
        setBasketItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Ошибка при попытке добавления");
    }
  };

  const removeCardBasket = (id) => {
    try {
      axios.delete(`http://localhost:3001/basket/${id}`);
      setBasketItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Ошибка при попытке удаления");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favoritesItems.find((item) => item.id === obj.id)) {
        axios.delete(`http://localhost:3001/favorites/${obj.id}`);
        setFavoritesItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        axios.post("http://localhost:3001/favorites", obj);
        setFavoritesItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Ошибка при добавлении в избранное");
    }
  };

  const changeSearchInput = (event) => {
    setCurrentInput(event.target.value);
  };

  const onClose = () => {
    setStatusBasket(false);
  };

  return (
    <AppContext.Provider
      value={{
        shoes,
        basketItems,
        favoritesItems,
        orders,
        onClose,
        setBasketItems,
        removeCardBasket,
        onAddToBasket,
        onAddToFavorite,
        setOrders,
      }}
    >
      <div className="container-wrapper">
        <Basket basketItems={basketItems} statusBasket={statusBasket} />
        <Head
          showBasket={() => setStatusBasket(true)}
          basketItems={basketItems}
        />
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/"
            element={
              <Main
                currentInput={currentInput}
                changeSearchInput={changeSearchInput}
                loading={loading}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}


