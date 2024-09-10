// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Header from './Header';
import ReactionPicker from './ReactionPicker'; // Import ReactionPicker

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [modalData, setModalData] = useState(null);

  // Load images from localStorage when the component mounts
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    setImages(savedImages);
  }, []);

  // Save images to localStorage whenever the images state changes
  useEffect(() => {
    localStorage.setItem('uploadedImages', JSON.stringify(images));
  }, [images]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        src: URL.createObjectURL(file),
        alt: `Uploaded Image ${images.length + 1}`,
        reaction: null, // Store the reaction for each image
      };
      setImages((prevImages) => [...prevImages, newImage]);
    }
  };

  const openModal = (index) => {
    setModalData({ index, image: images[index] });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const nextImage = () => {
    setModalData((prev) => ({
      index: (prev.index + 1) % images.length, // Cycle to the next image
      image: images[(prev.index + 1) % images.length],
    }));
  };

  const prevImage = () => {
    setModalData((prev) => ({
      index: (prev.index - 1 + images.length) % images.length, // Cycle to the previous image
      image: images[(prev.index - 1 + images.length) % images.length],
    }));
  };

  // Handle reaction change for images in the gallery and modal
  const handleReactionChange = (newReaction, imageIndex) => {
    setImages((prevImages) =>
      prevImages.map((image, idx) =>
        idx === imageIndex ? { ...image, reaction: newReaction } : image
      )
    );
  };

  return (
    <div className="gallery-container ">
      <Header onImageUpload={handleImageUpload} />

      <div className="w-full bg-slate-200 py-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-4 rounded">
        {images.map((image, index) => (
          <div key={image.id} className="p-2 mb-4 rounded-lg hover:shadow-xl transition-shadow duration-300 inline-block bg-slate-100">
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(index)}
              className="w-full h-auto cursor-pointer rounded-lg"
            />

            {/* Reaction Picker in the gallery, outside the modal */}
            <ReactionPicker 
              selectedReaction={image.reaction || ''} 
              handleReactionChange={(newReaction) => handleReactionChange(newReaction, index)} 
            />
          </div>
        ))}
      </div>

      {modalData && (
        <Modal
          src={modalData.image.src}
          alt={modalData.image.alt}
          currentImageIndex={modalData.index}
          totalImages={images.length}
          onClose={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
          selectedReaction={modalData.image.reaction || ''} // Pass current image reaction
          handleReactionChange={(newReaction) => handleReactionChange(newReaction, modalData.index)} // Pass reaction handler
        />
      )}
    </div>
  );
};

export default Gallery;
