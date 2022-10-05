import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import styles from './Card.module.css';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Box from '../Box/Box';

const Card = ({ data, direction = 'row', variant = 'artist' }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data?.name}`);
  };

  return (
    <section className={`${styles.card} ${styles[direction]}`}>
      <Image src={data?.image[1]['#text']} alt={data?.name} size='md' />
      <Text textStyle='bold' size='md'>
        {data?.name}
      </Text>
      <Box direction='column'>
        {variant === 'artist' && (
          <>
            <Text textStyle='normal' size='sm'>
              Listeners: {data?.listeners}
            </Text>
            <Text textStyle='normal' size='sm'>
              Playcount: {data?.playcount}
            </Text>
            <Button
              variant='primary'
              children={'Detail'}
              onClick={handleClick}
            />
          </>
        )}
        {variant === 'album' && (
          <>
            <Text textStyle='normal' size='sm'>
              {data?.playcount} plays
            </Text>
          </>
        )}
        {variant === 'track' && (
          <>
            <Text textStyle='normal' size='sm'>
              {data?.listeners} listeners
            </Text>
            <Text textStyle='normal' size='sm'>
              {data?.playcount} plays
            </Text>
          </>
        )}
      </Box>
    </section>
  );
};

Card.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
};

export default Card;
