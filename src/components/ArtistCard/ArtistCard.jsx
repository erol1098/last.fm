import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistCard.module.css';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Box from '../Box/Box';
import { useNavigate } from 'react-router-dom';
const Card = ({ data, direction = 'row' }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data?.name}`);
  };

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
        <Button variant='primary' children={'Detail'} onClick={handleClick} />
      </Box>
    </section>
  );
};

Card.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
};

export default Card;
