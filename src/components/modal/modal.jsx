import React, { useState, useEffect, useRef, createRef } from "react";
import ReactDOM from "react-dom";
import Modaloverlay from "../modaloverlay/modaloverlay";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {
  const [state, setState] = useState({
    modalopen: false,
  });

  const toggleOpen = () => {
    setState({
      ...state,
      modalopen: props.toggleopen,
    });
  };

  useEffect(() => {
    toggleOpen();
  }, [props.toggleopen]);

  const node = document.getElementById("react-modals");
  const overlayRef = createRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") props.onClose();
  };

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.focus();
    }
  }, [overlayRef]);

  if (!state.modalopen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal pt-10 pr-10 pb-15 pl-10">
        <div className="modal-header">
          <div className="modal__title text text_type_main-large">
            {props.title && props.title}
          </div>
          <div className="modal__close">
            <CloseIcon type="primary" onClick={props.onClose} />
          </div>
        </div>
        <div className="modal-wrapper">{props.children}</div>
      </div>
      <Modaloverlay
        tabIndex={0}
        ref={overlayRef}
        handleKeyPress={handleKeyPress}
        onClose={props.onClose}
      />
    </>,
    node
  );
}

Modal.propTypes = {
  toggleopen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Modal;
