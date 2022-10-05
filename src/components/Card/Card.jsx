import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';

import styles from './Card.module.css';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Box from '../Box/Box';

const Card = ({ data, loading, direction = 'row', variant = 'artist' }) => {
  const mode = useSelector((state) => state.mode.mode);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data?.name}`);
  };
  if (loading)
    return (
      <section
        className={`${styles.card} ${styles[direction]} ${styles[mode]}`}
        style={{ justifyContent: 'center' }}
      >
        <SpinnerCircular size={100} color='#D22000' />
      </section>
    );
  return (
    <section className={`${styles.card} ${styles[direction]} ${styles[mode]}`}>
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
