import React, { useEffect, useState, useCallback, useMemo } from "react";

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => {
    const imgs = [];
    for (let i = 1; i <= 9; i++) {
      imgs.push(`/imgs/images/image${i}.jpg`);
    }
    return imgs;
  }, []);

  const extendedImages = useMemo(() => [...images, ...images], [images]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedImages.length - 4 ? 0 : prevIndex + 1
    );
  }, [extendedImages]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedImages.length - 4 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="slider-container">
      <button className="img-slider-prev-btn" onClick={prevSlide}>
        &lt;
      </button>
      <div className="img-slider-image-container">
        {extendedImages
          .slice(currentIndex, currentIndex + 3)
          .map((image, index) => (
            <div key={index} className="img-slide">
              <img
                src={image}
                alt={`slide-${currentIndex + index}`}
                className="sliding-image"
              />
            </div>
          ))}
      </div>
      <button className="img-slider-next-btn" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}
