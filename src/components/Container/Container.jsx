import React from 'react';
import styles from './Container.module.css';

const Container = ({ width = 'base', children }) => {
  return <main className={`${styles.main} ${styles[width]}`}>{children}</main>;
};

export default Container;
