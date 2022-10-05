import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Box from '../Box/Box';

const Card = ({ data, direction = 'row' }) => {
  return (
    <section className={`${styles.card} ${styles[direction]}`}>
      <Image src={data?.image[1]['#text']} alt={data?.name} size='md' />
      <Text variant='title' textStyle='bold' size='md'>
        {data?.name}
      </Text>
      <Box direction='column'>
        <Text variant='title' textStyle='normal' size='sm'>
          Listeners: {data?.playcount}
        </Text>
        <Text variant='title' textStyle='normal' size='sm'>
          Playcount: {data?.listeners}
        </Text>
        <Button variant='primary' children={'Detail'} />
      </Box>
    </section>
  );
};

Card.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
};

export default Card;
