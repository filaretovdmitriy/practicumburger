import React from "react";
import styles from "./burgeringredients.module.css";
import ingredientPropTypes from "../../utils/prop-types";
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
            text={bun.name + " верх"}
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
            text={bun.name + " низ"}
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

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  showOrderModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;
