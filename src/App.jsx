import React, { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/appheader/appheader";
import BurgerConstructor from "./components/burgerconstructor/burgerconstructor";
import BurgerIngredients from "./components/burgeringredients/burgeringredients";
import IngredientDetails from "./components/ingredientdetails/ingredientdetails";
import Modal from "./components/modal/modal";
import OrderDetails from "./components/orderdetails/orderdetails";

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

function App() {
  const [state, setState] = useState({
    ingredients: null,
    loading: true,
    showOrderPopup: false,
    showIngredientPopup: false,
    activeIngredient: null,
    ingredient: null,
    ingredientDetail: null,
  });

  const url = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    const getIngredients = async () => {
      setState({ ...state, loading: true });
      const res = await fetch(url).catch((error) => {
        console.log("Ошибка в API: " + error);
      });
      if (res.ok) {
        const data = await res.json();
        setState({ ...state, ingredients: data.data, loading: false });
      } else console.log("Неверный код ответа от сервера  " + res.status);
    };
    getIngredients();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setState({ ...state, showOrderPopup: false });
    }
  };

  const handleMouseDown = () => {
    setState({ ...state, showOrderPopup: false });
  };

  const showOrderModal = () => {
    setState({ ...state, showOrderPopup: true });
  };

  const showIngredientModal = (ingredientDetail) => {
    setState({
      ...state,
      showIngredientPopup: true,
      ingredientDetail: ingredientDetail,
    });
  };

  return (
    <div className="App">
      <AppHeader />
      <main>
        {!state.loading && (
          <BurgerConstructor
            setIngridient={(i) => {}}
            ingredients={state.ingredients}
            showIngredient={(ing) => setState({ ...state, ingredient: ing })}
            showIngredientModal={showIngredientModal}
          />
        )}
        {!state.loading && (
          <BurgerIngredients
            ingredients={state.ingredients}
            showOrderModal={showOrderModal}
            activeIngredient={state.activeIngredient}
          />
        )}
      </main>
      <Modal
        toggleopen={state.showOrderPopup}
        onClose={() => setState({ ...state, showOrderPopup: false })}
        handleKeyPress={handleKeyPress}
        handleMouseDown={handleMouseDown}
        title={null}
      >
        <OrderDetails />
      </Modal>

      <Modal
        toggleopen={state.showIngredientPopup}
        onClose={() => setState({ ...state, showIngredientPopup: false })}
        handleKeyPress={handleKeyPress}
        handleMouseDown={handleMouseDown}
        title="Детали ингридиента"
      >
        <IngredientDetails ingredientDetail={state.ingredientDetail} />
      </Modal>

      <div id="react-modals"></div>
    </div>
  );
}

export default App;
