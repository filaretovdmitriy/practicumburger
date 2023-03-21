import React from "react";
import styles from "./burgeringredients.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";

function BurgerIngredients(props) {
  const bun = props.ingredients[0];

  return (
    <>
      <section className={styles.constructor__elements + " pt-25"}>
        <div className={styles.constructor__elements__item + " pl-6"}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
            key={999}
          />
        </div>
        <div
          className={
            styles.constructor__elements__ingredients + " custom-scroll"
          }
        >
          {props.ingredients.map((ingredient, i) => {
            return (
              <div key={`d` + i} className={styles.constructor__elements__item}>
                <DragIcon key={`c` + i} type="primary" className="mr-2" />
                <ConstructorElement
                  key={i}
                  isLocked={false}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.constructor__elements__item + " pl-6"}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
            key={99999}
          />
        </div>
        <div className={styles.constructor__elements__total}>
          <div className={styles.constructor__elements__total + " mr-10"}>
            <span className="text text_type_main-medium pr-2">610</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={props.showOrderModal}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  );
}

const ingredientPropTypes = PropTypes.shape({
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
});

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
  showOrderModal: PropTypes.func,
};

export default BurgerIngredients;
