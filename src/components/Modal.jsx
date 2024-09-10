// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactionPicker from './ReactionPicker';
import { useSwipeable } from 'react-swipeable';

const Modal = ({
  src, alt, onClose, prevImage, nextImage, currentImageIndex, totalImages,
  selectedReaction, handleReactionChange
}) => {

  // Handle keyboard events for arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage]);

  // Set up swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextImage, // Swipe left to go to next image
    onSwipedRight: prevImage // Swipe right to go to previous image
  });

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" 
      onClick={onClose} 
      {...handlers} // Adding swipe handlers here
    >
      <div className="relative max-w-3xl max-h-[80vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="w-full h-full object-contain rounded-lg bg-black bg-opacity-70" />

        {/* Pagination Buttons */}
        <div className="absolute bottom-0 flex items-center justify-between px-3 py-3 bg-white bg-opacity-15 w-full rounded-lg">
          {currentImageIndex > 0 && (
            <button className="bg-slate-500 focus:outline-none hover:border-none hover:bg-slate-600 p-2 rounded-full max-sm:hidden" onClick={prevImage}>
              &#8592;
            </button>
          )}
          {currentImageIndex < totalImages - 1 && (
            <button className="bg-slate-900 focus:outline-none hover:border-none hover:bg-slate-600 p-2 rounded-full max-sm:hidden" onClick={nextImage}>
              &#8594;
            </button>
          )}
        </div>

        {/* Close button */}
        <button className="absolute top-4 right-4 text-white text-xl" onClick={onClose}>
          &times;
        </button>

        {/* Reactions inside the modal */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <ReactionPicker 
            selectedReaction={selectedReaction} 
            handleReactionChange={handleReactionChange} 
          />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
  selectedReaction: PropTypes.string.isRequired, // Reaction prop
  handleReactionChange: PropTypes.func.isRequired, // Reaction handler
};

export default Modal;
