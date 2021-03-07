import React, { FC } from 'react';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';

type ArrowsProps = {
  prevSlide: () => void;
  nextSlide: () => void;
};

const Arrows: FC<ArrowsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <div className="Arrows">
      <span className="prev" onClick={prevSlide}>
        <img src={leftArrow} alt="" />
      </span>
      <span className="next" onClick={nextSlide}>
        <img src={rightArrow} alt="" />
      </span>
    </div>
  );
};

export default Arrows;
