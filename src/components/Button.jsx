import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label = 'Click',
  backgroundColor = 'blue',
  color = 'black',
  handleClick,
}) => {
  return (
    <button style={{ backgroundColor, color }} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
