import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.css';

const Box = ({ children, direction = 'column' }) => {
  return <div className={`${styles.box} ${styles[direction]}`}>{children}</div>;
};

Box.propTypes = {
  direction: PropTypes.oneOf(['row', 'column', "start"]),
  children: PropTypes.node,
};

export default Box;
