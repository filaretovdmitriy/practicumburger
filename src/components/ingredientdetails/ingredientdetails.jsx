import React from "react";
import PropTypes from "prop-types";
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

PropTypes.propTypes = {
  ingredientDetail: PropTypes.ingredientPropTypes,
};

export default IngredientDetails;
