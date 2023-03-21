import React, { useEffect, forwardRef, useRef } from "react";
import PropTypes from "prop-types";
const Modaloverlay = forwardRef((props, ref) => {
  return (
    <div
      className="overlay"
      onKeyDown={props.handleKeyPress}
      onMouseDown={props.onClose}
      ref={ref}
      tabIndex={"-1"}
    ></div>
  );
});

Modaloverlay.propTypes = {
  handleKeyPress: PropTypes.func,
  onMouseDown: PropTypes.func,
};

export default Modaloverlay;
