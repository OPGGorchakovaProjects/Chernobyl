import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, mediaQueries } from '../UI/Themes';
import styled from 'styled-components';
import Loading from '../UI/Loading';
import ParticlesComponent from '../UI/ParticlesComponent';
import BigTitle from '../UI/BigTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './style.module.css'

const StyledCarousel = styled.div`
  width: 95%;
  max-height: 80%;
  margin: 0 auto; 
  align-items: center;

  .slick-prev::before,
  .slick-next::before {
    color: #242424;
    z-index: 1;
  } 
`;

const CarouselImage = styled.img`
  height: 40vh;
  width: auto;
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
    require('./images/Gomel/1.jpg'),
    require('./images/Gomel/2.jpg'),
    require('./images/Gomel/3.jpg'),
    require('./images/Gomel/4.jpg'),
    require('./images/Gomel/5.jpg'),
    require('./images/Gomel/6.jpg'),
    require('./images/Gomel/7.jpg'),
    require('./images/Gomel/8.jpg'),
    require('./images/Gomel/9.jpg'),
    require('./images/Gomel/10.jpg'),
    require('./images/Gomel/11.jpg'),
    require('./images/Gomel/12.jpg'),
    require('./images/Gomel/13.jpg'),
    require('./images/Gomel/14.jpg'),
    require('./images/Gomel/15.jpg'),
    require('./images/Gomel/16.jpg'),
    require('./images/Gomel/17.jpg'),
    require('./images/Gomel/18.jpg'),
    require('./images/Gomel/19.jpg'),
    require('./images/Gomel/20.jpg'),
    require('./images/Gomel/21.jpg'),
  ];

  const photosHoiniki = [
    require('./images/Hoiniki/1.jpg'),
    require('./images/Hoiniki/2.jpg'),
    require('./images/Hoiniki/4.jpg'),
    require('./images/Hoiniki/5.jpg'),
    require('./images/Hoiniki/6.jpg'),
    require('./images/Hoiniki/7.jpg'),
    require('./images/Hoiniki/8.jpg'),
    require('./images/Hoiniki/9.jpg'),
    require('./images/Hoiniki/10.jpg'),
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <ParticlesComponent theme="light" />
      <Suspense fallback={<Loading />}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.Title}>Гомель</div>
            <SliderWithPhotos photos={photosGomel} />
            <div className={styles.descriptionRight}>

              <img className={styles.qrcode} src={process.env.PUBLIC_URL + "/GomelQR.png"} alt="QR код для Гомеля" />
              <div className={styles.museumTitle}>
                <h2>Гомельский музей Чернобыльской трагедии</h2>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.Title}>Хойники</div>
            <SliderWithPhotos photos={photosHoiniki} />

            <div className={styles.descriptionLeft}>

              <img className={styles.qrcode} src={process.env.PUBLIC_URL + "/HoinikiQR.png"} alt="QR код для Хойников" />
              <div className={styles.museumTitle}>
                <h2>Хойникский музей Чернобыльской трагедии</h2>
              </div>
            </div>
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


