// ReactionsPicker.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ReactionPicker = ({ selectedReaction, handleReactionChange }) => {
  const reactions = ['👍', '❤️', '😂', '😮', '😢', '😡'];

  return (
    <div className=" flex gap-2 items-center justify-center sm:justify-start mt-2">
      {reactions.map((reaction) => (
        <button
          key={reaction}
          onClick={() => handleReactionChange(reaction)}
          className={`text-2xl p-2 ${selectedReaction === reaction ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-full focus:outline-none `}
        >
          {reaction}
        </button>
      ))}
    </div>
  );
};

ReactionPicker.propTypes = {
  selectedReaction: PropTypes.string.isRequired,
  handleReactionChange: PropTypes.func.isRequired,
};

export default ReactionPicker;
