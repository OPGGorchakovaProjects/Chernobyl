import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { mediaQueries } from './Themes';
import { NavLink } from 'react-router-dom';
import gasMask from '../assets/Images/gasMask.png';

const Box = styled(motion.div)`
  width: 55vw;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;
    flex-direction:column;
    justify-content:space-between;
  `};

  ${mediaQueries(40)`
    width: 60vw;
  `};

  ${mediaQueries(30)`
    width: 70vw;
  `};

  ${mediaQueries(20)`
    width: 60vw;
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }

  //height:55vh;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const Text = styled(motion.div)`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;


  ${mediaQueries(40)`
        font-size: calc(1rem + 1.5vw);
  `};
  ${mediaQueries(20)`
         padding: 1rem;
  `};
`;

const Link = styled(NavLink)`
  color: #fff;
  text-decoration: underline;
  z-index: 1;
  margin-top: 5%;
`;

const Intro = () => {
  const [height, setHeight] = useState('55vh');

  useEffect(() => {
    if (window.matchMedia('(max-width: 50em)').matches) {
      setHeight('70vh');
    }
    if (window.matchMedia('(max-width: 20em)').matches) {
      setHeight('60vh');
    }
  }, []);

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>1986</h1>
          <h3>Чернобыль</h3>
          <h6>Авария на ЧАЭС</h6>
          <Link to="/history">
            <text>История</text>
          </Link>
          <Link to="/museum">
            <text>Музеи</text>
          </Link>
        </Text>
      </SubBox>
      <SubBox>
        <NavLink to="/photoalbum">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="pic"
            style={{ width: '100%', height: '100%' }}
          >
            <img src={gasMask} alt="Choto" style={{ width: '100%', height: '100%' }} />
          </motion.div>
        </NavLink>
      </SubBox>
    </Box >
  );
};

export default Intro;