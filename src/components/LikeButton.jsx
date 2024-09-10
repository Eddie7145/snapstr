// LikeButton.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = ({ likes, onLike }) => {
  return (
    <button
      className="flex items-center text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
      onClick={onLike}
    >
      <span className="mr-2">&#9829;</span> {/* Heart icon */}
      {likes}
    </button>
  );
};

LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default LikeButton;
