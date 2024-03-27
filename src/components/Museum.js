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

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
    flex-direction: column;  
    padding: 8rem 0;
    height: auto;
    & > *:nth-child(5){
      margin-bottom: 5rem;
    }   
  `};

  ${mediaQueries(30)`
    & > *:nth-child(5){
      margin-bottom: 4rem;
    }
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: #fff;
  padding-top: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  align-items: center;

  ${mediaQueries(60)`
    height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
  `};

  font-family: 'Ubuntu Mono', monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem;
  `};

  ${mediaQueries(30)`
    font-size: calc(1em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size: calc(0.8em + 1vw);
    svg {
      width: 30px;
      height: 30px;
    }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const QRImage = styled.img`
  width: 40%; 
  height: auto; 
`;

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
        <Box>
          <Main>
            <Title>Гомель</Title>
            <SliderWithPhotos photos={photosGomel} />
            <QRImage src={process.env.PUBLIC_URL + "/GomelQR.png"} alt="QR код для Гомеля" />
          </Main>
          <Main>
            <Title>Брагин</Title>
            <SliderWithPhotos photos={photosBragin} />
            <QRImage src={process.env.PUBLIC_URL + "/BraginQR.png"} alt="QR код для Брагина" />
          </Main>
          <Suspense fallback={<div>Loading...</div>}>
            <BigTitle text="Музеи" top="80%" right="36%" />
          </Suspense>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default Museum;
