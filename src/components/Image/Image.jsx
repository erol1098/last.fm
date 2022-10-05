import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loading from '../../assets/img/loading.gif';
import styles from './Image.module.css';
import Box from '../Box/Box';

const Image = ({ src, alt, size = 'md' }) => {
  const [loaded, setLoaded] = useState(false);
  const onImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <Box className={styles[size]} direction='column'>
      <img
        className={styles[size]}
        src={loaded ? src : Loading}
        alt={alt}
        size={size}
        onLoad={onImageLoaded}
      />
    </Box>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Image;
