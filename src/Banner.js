import React from 'react';
import './Banner.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className='carousel'
      >
        <div>
          <img loading='lazy' src='https://links.papareact.com/6ff' alt='' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/gi1' alt='' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/7ma' alt='' />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
