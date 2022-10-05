import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.css';
import Box from '../Box/Box';
const Image = ({ src, alt, size = 'md' }) => {
  return (
    <Box className={styles[size]} direction='column'>
      <img className={styles[size]} src={src} alt={alt} size={size} />
    </Box>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Image;
