import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';

//Components
import { Radiation } from '../UI/AllSvgs';
import Intro from './Intro';
import Loading from '../UI/Loading';
import { mediaQueries } from '../UI/Themes';
import img from '../../assets/Images/bgCher.jpg';

const SocialIcons = lazy(() => import('../UI/SocialIcons'));
const LogoComponent = lazy(() => import('../UI/LogoComponent'));

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 3rem 
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;

    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1.5s ease;
  & > *:first-child {
    animation: ${rotate} infinite 3s linear;
  }
  & > *:last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? '90%' : '50%')};
    left: ${(props) => (props.click ? '90%' : '50%')};
    width: ${(props) => (props.click ? '80px' : '150px')};
    height: ${(props) => (props.click ? '80px' : '150px')};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? '40px' : '150px')};
    height: ${(props) => (props.click ? '40px' : '150px')};
  }
`;

const Docs = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? '0 0 4px #000' : 'none')};
  }
`;

const BLOG = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? '0 0 4px #000' : 'none')};
  }
`;
const Village = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? '0 0 4px #000' : 'none')};
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: -4.5%;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const AppsPage = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  background-color: #000000;
  height: ${(props) => (props.click ? '100%' : '0%')};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState('');
  const [height, setHeight] = useState('55vh');

  React.useEffect(() => {
    if (window.matchMedia('(max-width: 50em)').matches) {
      setHeight('70vh');
    }
    if (window.matchMedia('(max-width: 20em)').matches) {
      setHeight('60vh');
    }
  }, []);

  const handleClick = () => setClick(!click);

  const moveY = {
    y: '-100%',
  };
  const moveX = {
    x: `${path === 'village' ? '100%' : '-100%'}`,
  };
  const mq = window.matchMedia('(max-width: 50em)').matches;

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === 'HronologPage' || path === 'app' ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click} />
        <Container>
          <LogoComponent theme={click ? 'dark' : 'light'} />
          {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme={click ? 'dark' : 'light'} />
          )}
          <Center click={click}>
            {mq ? (
              <Radiation
                onClick={() => handleClick()}
                width={click ? 80 : 150}
                height={click ? 80 : 150}
                fill="black"
              />
            ) : (
              <Radiation
                onClick={() => handleClick()}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="black"
              />
            )}

            <span style={{ color: 'black', fontSize: '2rem' }} >НАЧАТЬ ПУТЕШЕСТВИЕ</span>
          </Center>

          {mq ? (
            <Docs click={+click} onClick={() => setpath('Documents')} to="/Documents">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Документы
              </motion.h2>
            </Docs>
          ) : (
            <Docs click={+false} onClick={() => setpath('Documents')} to="/Documents">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Документы
              </motion.h2>
            </Docs>
          )}

          {mq ? (
            <BLOG click={+click} onClick={() => setpath('blog')} to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Люди
              </motion.h2>
            </BLOG>
          ) : (
            <BLOG click={+false} onClick={() => setpath('blog')} to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Люди
              </motion.h2>
            </BLOG>
          )}

          <Village click={+click} to="/village">
            <motion.h2
              onClick={() => setpath('village')}
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Деревни
            </motion.h2>
          </Village>

          <BottomBar>
            <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/hronolog"
            >
              <motion.h2
                onClick={() => setpath('hronolog')}
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Хронология
              </motion.h2>
            </ABOUT>

            <AppsPage to="/app">
              <motion.h2
                onClick={() => setpath('app')}
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Приложения
              </motion.h2>
            </AppsPage>
          </BottomBar>
        </Container>

        {click ? <Intro height={height} /> : null}
      </MainContainer>
    </Suspense>
  );
};

export default Main;
