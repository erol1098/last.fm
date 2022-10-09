import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

const Text = ({ children, textStyle = 'normal', size = 'sm' }) => {
  return (
    <p className={`${styles.text} ${styles[size]} ${styles[textStyle]}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node,
  textStyle: PropTypes.oneOf(['normal', 'bold', 'italic']),
};

export default Text;
