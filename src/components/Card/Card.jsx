import React from 'react';
import { PrimaryBtn } from '../../stories/Button.stories';
import styles from './Card.module.css';
import Image from '../Image/Image';

const Card = ({ data, direction = 'row' }) => {
  return (
    <section className={`${styles.card} ${styles[direction]}`}>
      <Image src={data?.image[2]['#text']} alt={data?.name} size='md' />
      <p>{data.name}</p>
      {/* <PrimaryBtn variant='primary' children={'Detail'} /> */}
      <p>afas</p>
    </section>
  );
};

export default Card;
