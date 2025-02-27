import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const BannersCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} className='w-100 d-block'>
      <Carousel.Item interval={5000}>
        <img src='./banner1.png' alt="First slide" className='d-block w-100' />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src='./banner2.png' alt="Second slide" className='d-block w-100' />
      </Carousel.Item>
    </Carousel>
  );
};
