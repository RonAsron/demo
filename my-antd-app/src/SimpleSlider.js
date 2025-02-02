import React, { useState } from 'react';
const SimpleSlider = () => {
  const image = ['/image/1.jpg', '/image/2.jpg', '/image/3.jpg']; 
  const [currentIndex, setCurrentIndex] = useState(0); 


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length); 
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length); 
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Cat Club</h2>
      <div>
        <img src={image[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '100%', maxWidth: '75%', height: 'auto' }} />
      </div>
      <div>
        <button onClick={prevSlide} style={{ padding: '5px', margin: '5px' }}>Previous</button>
        <button onClick={nextSlide} style={{ padding: '5px', margin: '5px' }}>Next</button>
      </div>
    </div>
  );
};

export default SimpleSlider;
