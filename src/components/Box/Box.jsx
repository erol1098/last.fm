import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './Box.module.css';

const Box = ({ children, direction = 'column' }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div className={`${styles.box} ${styles[direction]} ${styles[mode]}`}>
      {children}
    </div>
  );
};

Box.propTypes = {
  direction: PropTypes.oneOf(['row', 'column', 'start']),
  children: PropTypes.node,
};

export default Box;
