import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  autoSlideInterval?: number;
  type?: 'vertical' | 'horizontal';
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  autoSlideInterval = 3000,
  type = 'vertical'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [totalDots, setTotalDots] = useState(2); // Default is 2 for desktop

  useEffect(() => {
    const updateSliderSettings = () => {
      // Update number of visible slides based on screen width
      if (window.innerWidth <= 640) {
        setVisibleSlides(1); // 1 slide on small screens
        setTotalDots(1); // 1 dot on small screens
      } else if (window.innerWidth <= 768) {
        setVisibleSlides(2); // 2 slides on medium screens
        setTotalDots(2); // 2 dots on medium screens
      } else {
        setVisibleSlides(3); // 3 slides on larger screens
        setTotalDots(2); // 2 dots on larger screens
      }
    };

    // Call the function on resize
    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);

    // Clear the event listener on cleanup
    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (images.length - visibleSlides + 1)
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval, visibleSlides]);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalDots; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`w-2 h-2 rounded-full transition-colors ${
            i === currentIndex ? 'bg-white' : 'bg-white/50'
          }`}
        />
      );
    }
    return dots;
  };

  if (type === 'horizontal') {
    return (
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            width: `${(images.length * 100) / visibleSlides}%`
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="px-4"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {renderDots()}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index >= currentIndex && index < currentIndex + visibleSlides ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {renderDots()}
      </div>
    </div>
  );
};

export default ImageSlider;
