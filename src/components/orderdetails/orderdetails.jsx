import React from "react";
import done from "../../images/done.png";

function OrderDetails(props) {
  return (
    <section className="modal-order-details">
      <p className="modal-order__id text text_type_digits-large mb-8">034536</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={done} alt="Заказ оформлен" className="mb-15" />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default">
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}
export default OrderDetails;
