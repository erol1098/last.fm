import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Container.module.css';

const Container = ({ width = 'base', children }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div className={`${styles.main} ${styles[width]} ${styles[mode]}`}>
      {children}
    </div>
  );
};

export default Container;
