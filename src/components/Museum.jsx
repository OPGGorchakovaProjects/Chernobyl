import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, mediaQueries } from './Themes';
import styled from 'styled-components';
import Loading from '../subComponents/Loading';
import ParticlesComponent from '../subComponents/ParticlesComponent';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import '../subComponents/Museum/style.css'

const StyledCarousel = styled.div`
  width: 80%;
  height: auto;

  .slick-prev::before,
  .slick-next::before {
    color: #242424;
  } 
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
`;

const SliderWithPhotos = ({ photos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <StyledCarousel>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <CarouselImage key={index} src={photo} alt={`Slide ${index}`} />
        ))}
      </Slider>
    </StyledCarousel>
  );
};

const Museum = () => {
  const photosGomel = [
    require('../albumComponents/beforeAfter/img/leftSide/15.jpg'),
    require('../albumComponents/beforeAfter/img/leftSide/13.jpg'),
    require('../albumComponents/beforeAfter/img/leftSide/18.jpg'),
  ];

  const photosBragin = [
    require('../albumComponents/beforeAfter/img/rightSide/16.jpg'),
    require('../albumComponents/beforeAfter/img/rightSide/14.jpg'),
    require('../albumComponents/beforeAfter/img/rightSide/11.jpg'),
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <ParticlesComponent theme="light" />
      <PowerButton />
      <Suspense fallback={<Loading />}>
        <div className='container'>
          <div className='box'>
            <div className='Title'>Гомель</div>
            <SliderWithPhotos photos={photosGomel} />
            <img className='qrcode ' src={process.env.PUBLIC_URL + "/GomelQR.png"} alt="QR код для Гомеля" />
          </div>
          <div className='box'>
            <div className='Title'>Брагин</div>
            <SliderWithPhotos photos={photosBragin} />
            <img className='qrcode' src={process.env.PUBLIC_URL + "/BraginQR.png"} alt="QR код для Брагина" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <BigTitle text="Музеи" top="80%" right="36%" />
          </Suspense>
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default Museum;