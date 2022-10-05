import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

const Text = ({
  variant = 'content',
  children,
  textStyle = 'normal',
  size = 'sm',
}) => {
  return (
    <p className={`${styles[size]} ${styles[textStyle]} ${styles[variant]}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf(['content', 'title', 'desc']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node,
  textStyle: PropTypes.oneOf(['normal', 'bold', 'italic']),
};

export default Text;
