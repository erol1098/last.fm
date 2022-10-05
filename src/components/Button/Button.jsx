import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', children, ...rest }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
