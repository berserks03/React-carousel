import React, { FC, useEffect, useState } from 'react';
import Arrows from '../Arrows/Arrows';
import Dots from '../Dots/Dots';
import SliderContent from '../SliderContent/SliderContent';
import './Slider.scss';

type SliderProps = {
  sliderImage: {
    description: string;
    title: string;
    url: string;
  }[];
  autoPlay: number;
};

const Slider: FC<SliderProps> = ({ sliderImage, autoPlay }) => {
  const len = sliderImage.length - 1;

  window.oncontextmenu = function (event: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const touchStartHandler = (event: React.TouchEvent) => {
    setTouchStart(event.touches[0].clientX);
  };

  const touchMovehandler = (event: React.TouchEvent) => {
    setTouchEnd(event.touches[0].clientX);
  };

  const mouseStartHandler = (event: React.MouseEvent) => {
    setTouchStart(event.clientX);
  };

  const mouseMoveHandler = (event: React.MouseEvent) => {
    setTouchEnd(event.clientX);
  };

  const touchEndHandler = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  };

  if (autoPlay > 0) {
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, autoPlay * 1000);
      return () => clearInterval(interval);
    }, [activeIndex]);
  }

  return (
    <div className="slider-container">
      <SliderContent
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        handleTouchStart={touchStartHandler}
        handleTouchMove={touchMovehandler}
        handleTouchEnd={touchEndHandler}
        handleMouseDown={mouseStartHandler}
        handleMouseMove={mouseMoveHandler}
        handleMouseUp={touchEndHandler}
      />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots
        sliderImage={sliderImage}
        activeIndex={activeIndex}
        onDotClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
