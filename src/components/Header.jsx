// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onImageUpload }) => {
    
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-3">
        {/* Logo Section */}
        <div className="logo gap-3 flex items-center">
            <img className="w-12 h-12" src="/assets/camera-svgrepo-com.svg" alt="Logo Image" />
            <h1 className="inline-block text-transparent bg-clip-text text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-orange-400">Snapstr</h1>
            
        </div>
        <p className="text-gray-400 text-center max-2xl:text-xl max-sm:text-sm">You can simply upload pictures and stay connected</p>
        {/* Image Upload Button */}
        <div className="relative border-dashed border-2 w-4/6 h-40 flex items-center justify-center rounded">
            <input
                type="file"
                accept="image/*"
                className="hidden"
                id="imageUpload"
                onChange={onImageUpload}
            />
            <label htmlFor="imageUpload" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2 hover:bg-blue-600">
            <img src="/assets/image-add.svg" alt="Add-image icon" />Upload Image
            </label>
        </div>
    </div>
  )
}

Header.propTypes = {
    onImageUpload: PropTypes.func.isRequired,
}

export default Header