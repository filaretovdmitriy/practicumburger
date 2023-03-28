import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/prop-types";
import styles from "./burgerconstructor.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredientItem(props) {
  const handleClick = (i) => {
    props.showIngredientModal(props.ingredient);
  };

  return (
    <>
      <div
        className={styles.ingredients__item + " pr-6 mb-8"}
        onClick={handleClick}
      >
        <div className={styles.ingredients__image + " mb-1"}>
          <img src={props.ingredient.image} alt={props.name} />
        </div>
        <div className={styles.ingredients__price + " mb-1"}>
          <CurrencyIcon type="primary" />
          <span className="pl-2"> {props.ingredient.price}</span>
        </div>
        <div className={styles.ingredients__name}>{props.ingredient.name}</div>
      </div>
    </>
  );
}

function BurgerIngredients(props) {
  const ingredients = props.ingredients.filter(
    (ingredient) => ingredient.type === props.type
  );

  return (
    <div className={styles.ingredients__items + " mb-10 pl-4 pr-4"}>
      {ingredients.map((ingredient, i) => {
        return (
          <BurgerIngredientItem
            showIngredientModal={props.showIngredientModal}
            ingredient={ingredient}
            setIngridient={props.setIngridient}
            key={i}
          />
        );
      })}
    </div>
  );
}

function BurgerConstructor(props) {
  const [current, setCurrent] = React.useState("bun");
  const ingredientCategoryRef = React.useRef([]);

  useEffect(() => {
    ingredientCategoryRef.current[current].scrollIntoView({
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className={styles.burger__ingredients + " pt-10"}>
      <h1 className="mb-5 text text_type_main-large">Соберите свой бургер</h1>
      <div
        className={styles.ingredients__tabs + "mb-10"}
        style={{ display: "flex" }}
      >
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div
        className={styles.ingredients__categories + " custom-scroll pl-4 pr-4"}
      >
        <div
          className={styles.ingredients__category + " mb-10"}
          ref={(ref) => (ingredientCategoryRef.current["bun"] = ref)}
        >
          <h2>Булки</h2>
          <BurgerIngredients
            ingredients={props.ingredients}
            type="bun"
            showIngredientModal={props.showIngredientModal}
            setIngridient={props.setIngridient}
          />
        </div>
        <div
          className={styles.ingredients__category + " mb-10"}
          ref={(ref) => (ingredientCategoryRef.current["sauce"] = ref)}
        >
          <h2>Соусы</h2>
          <BurgerIngredients
            ingredients={props.ingredients}
            type="sauce"
            showIngredientModal={props.showIngredientModal}
            setIngridient={props.setIngridient}
          />
        </div>
        <div
          className={styles.ingredients__category + " mb-10"}
          ref={(ref) => (ingredientCategoryRef.current["main"] = ref)}
        >
          <h2>Начинки</h2>
          <BurgerIngredients
            ingredients={props.ingredients}
            type="main"
            showIngredientModal={props.showIngredientModal}
            setIngridient={props.setIngridient}
          />
        </div>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
  showIngredientModal: PropTypes.func,
  setIngridient: PropTypes.func,
};

BurgerIngredients.propTypes = {
  showIngredientModal: PropTypes.func,
  setIngridient: PropTypes.func,
  type: PropTypes.string,
};

BurgerIngredientItem.propTypes = {
  ingredient: ingredientPropTypes,
};

export default BurgerConstructor;
