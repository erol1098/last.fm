import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.css';
const Image = ({ src, alt, size = 'sm' }) => {
  return <img className={styles[size]} src={src} alt={alt} size={size} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Image;
