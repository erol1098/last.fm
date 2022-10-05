import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Image from '../Image/Image';
import Text from '../Text/Text';
// import Button from '../Button/Button';

const Card = ({ data, direction = 'row' }) => {
  return (
    <section className={`${styles.card} ${styles[direction]}`}>
      <Image src={data?.image[1]['#text']} alt={data?.name} size='md' />

      {/* <Button variant='primary' children={'Detail'} /> */}
      <Text variant='title' textStyle='bold' size='md'>
        {data?.name}
      </Text>
      <div>
        <Text variant='title' textStyle='normal' size='sm'>
          Listeners: {data?.playcount}
        </Text>
        <Text variant='title' textStyle='normal' size='sm'>
          Playcount: {data?.listeners}
        </Text>
      </div>
    </section>
  );
};

Card.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
};

export default Card;
