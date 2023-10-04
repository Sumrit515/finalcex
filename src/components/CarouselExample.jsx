import React, { useState }  from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselExample = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel 
        className='text-black
        
        
        '
        activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className='
      
          '>
           <Image

           className='mx-auto'
           src="/images/testimonials/elonmusk.gif"
           alt="Logo"
           width={500}
           height={500}
           />
            {/* <Carousel.Caption className='
           
            '>
              <h3 className='
              text-black
              '>First slide label</h3>
              <p className='
              text-black
              '>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <Image
          className='
          mx-auto
          '
           src="/images/testimonials/mark.gif"
           alt="Logo"
           width={500}
           height={500}
           />
            {/* <Carousel.Caption>
              <h3
              className='
              text-black
              '
              >Second slide label</h3>
              <p
              className='
              text-black
              '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <Image
          className='
          mx-auto
          '
           src="/images/testimonials/ambani.gif"
           alt="Logo"
           width={500}
           height={500}
           />
            {/* <Carousel.Caption>
              <h3
              className='
              text-black
              '
              >Third slide label</h3>
              <p
              
              className='
              text-black
              '
              >
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      );
}

export default CarouselExample