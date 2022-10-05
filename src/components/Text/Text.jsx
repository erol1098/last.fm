import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

const Text = ({
  children,
  textStyle = 'normal',
  size = 'sm',
  color = '#000',
}) => {
  return (
    <p
      className={`${styles.text} ${styles[size]} ${styles[textStyle]}`}
      // style={{ color }}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node,
  textStyle: PropTypes.oneOf(['normal', 'bold', 'italic']),
};

export default Text;
