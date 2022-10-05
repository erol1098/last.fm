import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

const Text = ({
  variant = 'content',
  children,
  bold = 'normal',
  size = 'sm',
}) => {
  return (
    <p className={`${styles[size]} ${styles[bold]} ${styles[variant]}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf(['content', 'title']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node,
  bold: PropTypes.oneOf(['normal', 'bold']),
};

export default Text;
