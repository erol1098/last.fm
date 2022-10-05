import React from 'react';
import styles from './Container.module.css';

const Container = ({ width = 'base', children }) => {
  return <div className={`${styles.main} ${styles[width]}`}>{children}</div>;
};

export default Container;
