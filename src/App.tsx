import React, { Fragment } from 'react';
import Slider from './components/Slider/Slider';
import sliderImages from './assets/SliderImages';

const App = () => {
  return (
    <Fragment>
      <Slider sliderImage={sliderImages} autoPlay={3} />
    </Fragment>
  );
};

export default App;
