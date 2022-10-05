import React from 'react';
import styles from './Container.module.css';

const Container = ({ direction = 'row', children, ...rest }) => {
  return (
    <main className={`${styles.main}`} {...rest}>
      {children}
    </main>
  );
};

export default Container;
