import React, { FC } from 'react';

type SliderContentProps = {
  activeIndex: number;
  sliderImage: {
    description: string;
    title: string;
    url: string;
  }[];
  handleTouchStart: (event: React.TouchEvent) => void;
  handleTouchMove: (event: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  handleMouseDown: (event: React.MouseEvent) => void;
  handleMouseMove: (event: React.MouseEvent) => void;
  handleMouseUp: () => void;
};

const SliderContent: FC<SliderContentProps> = ({
  activeIndex,
  sliderImage,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
}) => {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <img
            draggable="false"
            className="slide-image"
            src={slide.url}
            alt="slide-image"
          />
          <h3 className="slide-title">
            <span>{slide.title}</span>{' '}
          </h3>
          <p className="slide-text">
            <span>{slide.description}</span>
          </p>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
