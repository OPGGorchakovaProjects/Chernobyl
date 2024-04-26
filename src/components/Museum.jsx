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
import styles from '../subComponents/Museum/style.module.css'

const StyledCarousel = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto; 
  align-items: center;

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
    require('../subComponents/Museum/images/Gomel/1.jpg'),
    require('../subComponents/Museum/images/Gomel/2.jpg'),
    require('../subComponents/Museum/images/Gomel/3.jpg'),
    require('../subComponents/Museum/images/Gomel/4.jpg'),
    require('../subComponents/Museum/images/Gomel/5.jpg'),
    require('../subComponents/Museum/images/Gomel/6.jpg'),
    require('../subComponents/Museum/images/Gomel/7.jpg'),
    require('../subComponents/Museum/images/Gomel/8.jpg'),
    require('../subComponents/Museum/images/Gomel/9.jpg'),
    require('../subComponents/Museum/images/Gomel/10.jpg'),
    require('../subComponents/Museum/images/Gomel/11.jpg'),
    require('../subComponents/Museum/images/Gomel/12.jpg'),
    require('../subComponents/Museum/images/Gomel/13.jpg'),
    require('../subComponents/Museum/images/Gomel/14.jpg'),
    require('../subComponents/Museum/images/Gomel/15.jpg'),
    require('../subComponents/Museum/images/Gomel/16.jpg'),
    require('../subComponents/Museum/images/Gomel/17.jpg'),
    require('../subComponents/Museum/images/Gomel/18.jpg'),
    require('../subComponents/Museum/images/Gomel/19.jpg'),
    require('../subComponents/Museum/images/Gomel/20.jpg'),
    require('../subComponents/Museum/images/Gomel/21.jpg'),
  ];

  const photosHoiniki = [
    require('../subComponents/Museum/images/Hoiniki/1.jpg'),
    require('../subComponents/Museum/images/Hoiniki/2.jpg'),
    require('../subComponents/Museum/images/Hoiniki/4.jpg'),
    require('../subComponents/Museum/images/Hoiniki/5.jpg'),
    require('../subComponents/Museum/images/Hoiniki/6.jpg'),
    require('../subComponents/Museum/images/Hoiniki/7.jpg'),
    require('../subComponents/Museum/images/Hoiniki/8.jpg'),
    require('../subComponents/Museum/images/Hoiniki/9.jpg'),
    require('../subComponents/Museum/images/Hoiniki/10.jpg'),
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <ParticlesComponent theme="light" />
      <PowerButton />
      <Suspense fallback={<Loading />}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.Title}>Гомель</div>
            <SliderWithPhotos photos={photosGomel} />
            <img className={styles.qrcode} src={process.env.PUBLIC_URL + "/GomelQR.png"} alt="QR код для Гомеля" />
          </div>
          <div className={styles.box}>
            <div className={styles.Title}>Хойники</div>
            <SliderWithPhotos photos={photosHoiniki} />
            <img className={styles.qrcode} src={process.env.PUBLIC_URL + "/BraginQR.png"} alt="QR код для Брагина" />
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