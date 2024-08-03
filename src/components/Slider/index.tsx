'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import Image from 'next/image';

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    if (startX !== 0 && endX !== 0) {
      if (startX - endX > 50) {
        nextSlide();
      } else if (endX - startX > 50) {
        prevSlide();
      }
      setStartX(0);
      setEndX(0);
    }
  }, [endX]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setEndX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setEndX(e.changedTouches[0].clientX);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles['slider-wrapper']}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={styles['slider-slide']} key={index}>
            <Image
              key={`Slide ${index}`}
              alt={`Slide ${index}`}
              src={image}
              width={64}
              height={64}
              layout="responsive"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
