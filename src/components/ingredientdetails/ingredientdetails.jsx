import React from "react";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/prop-types";
function IngredientDetails(props) {
  return (
    <section className="modal-ingredient-details">
      <img
        className="modal-ingredient__image mb-4"
        src={props.ingredientDetail.image_large}
        alt={props.ingredientDetail.name}
      />
      <div className="mb-8 text text_type_main-medium">
        {props.ingredientDetail.name}
      </div>
      <div className="modal-ingredient-nutrition-facts">
        <div className="modal-ingredient-nutrition-fact__item mr-5">
          <p className="text text_type_main-small mb-2">Калории,ккал</p>
          <p className="text text_type_digits-default">
            {props.ingredientDetail.calories}
          </p>
        </div>
        <div className="modal-ingredient-nutrition-fact__item mr-5">
          <p className="text text_type_main-small mb-2">Белки, г</p>
          <p className="text text_type_digits-default">
            {props.ingredientDetail.proteins}
          </p>
        </div>
        <div className="modal-ingredient-nutrition-fact__item mr-5">
          <p className="text text_type_main-small mb-2">Жиры, г</p>
          <p className="text text_type_digits-default">
            {props.ingredientDetail.fat}
          </p>
        </div>
        <div className="modal-ingredient-nutrition-fact__item mr-5">
          <p className="text text_type_main-small mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default">
            {props.ingredientDetail.carbohydrates}
          </p>
        </div>
      </div>
    </section>
  );
}

PropTypes.propTypes = {
  ingredientDetail: PropTypes.ingredientPropTypes,
};

export default IngredientDetails;
