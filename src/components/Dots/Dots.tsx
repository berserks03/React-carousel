import React, { FC } from 'react';

type DotsProps = {
  activeIndex: number;
  onDotClick: (i: number) => void;
  sliderImage: {
    description: string;
    title: string;
    url: string;
  }[];
};

const Dots: FC<DotsProps> = ({ activeIndex, onDotClick, sliderImage }) => {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
          onClick={() => onDotClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
