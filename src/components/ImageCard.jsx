// ImageCard.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img src={src} alt={alt} className="relative w-full h-auto object-cover rounded-lg" />
    </div>
  );
};

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
