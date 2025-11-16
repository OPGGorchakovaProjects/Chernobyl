import { motion } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { lazy, Suspense } from 'react';
import { lightTheme, mediaQueries } from '../UI/Themes';
import { NavLink } from 'react-router-dom';

import { Android, Site, QrCode, SiteTestQR } from '../UI/AllSvgs';
import Loading from '../UI/Loading';

const SocialIcons = lazy(() => import('../UI/SocialIcons'));
const PowerButton = lazy(() => import('../UI/PowerButton'));
const LogoComponent = lazy(() => import('../UI/LogoComponent'));
const ParticlesComponent = lazy(() => import('../UI/ParticlesComponent'));
const BigTitle = lazy(() => import('../UI/BigTitle'));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
    flex-direction:column;  
    padding:8rem 0;
    height:auto;
    &>*:nth-child(5){ margin-bottom:5rem; }
  `};

  ${mediaQueries(30)`
    &>*:nth-child(5){ margin-bottom:4rem; }           
  `};

`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

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

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 2vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);
    svg{
      width:30px;
      height:30px;
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

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const apkClick = () => {
  window.open(
    'https://drive.google.com/file/d/1-MxwEUOQDxBa1KJbGJX6DoDHNcDfqw0w/view?usp=drive_link',
    '_blank'
  );
};

const GameClick = () => {
  window.open(
    'https://secrets-of-chernobyl.vercel.app/',
    '_blank'
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;

  &:hover {
    color: white;
  }
`;

const AppsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          style={{marginTop:"10%"}}
	  	>
          <LogoComponent theme="light" />
          <PowerButton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />

          <Main onClick={GameClick}>
            <Title>
              <Site width={60} height={60} /> WEB игра "Secrets of Chernobyl"
            </Title>
            <Description>
            	WEB игра для компьтеров и телефонов 
            </Description>
            
            <Description>
            
  			  	<img src="/GameCode.gif" width="50%" border="0" title="QR код"/>
	  		
	  		</Description>
          </Main>


          <Main onClick={apkClick}>
            <Title>
              <Android width={40} height={40} /> APK игра "Lost-Zone"
            </Title>
            <Description>
              Мобильная игра для операционной ситемы Андройд
            </Description>
            <Description>
              <strong>Требования:</strong> <br />
              <ul>
                <li>Устройство с операционной системой Андройд</li>
              </ul>
            </Description>
            <Description>
              <QrCode width="30%"/>
            </Description>
          </Main>

          <Main>
            <StyledNavLink to="/ChernobylTests">
              <>
                <Title>
                  <Site width={40} height={40} /> Тестовые вопросы
                </Title>
                <Description>по теме "Чернобыль"</Description>

                <Description>
                  <strong>Описание:</strong> <br />
                  <p>Благодаря данному тесту вы можете проверить уровень знаний о чернобыле</p> 
	  			</Description>
				
	  			<SiteTestQR width={"30%"} style={{marginTop:10}}/>


              </>
            </StyledNavLink>
          </Main>

          <BigTitle text="ПРИЛОЖЕНИЯ" top="80%" right="30%" />
        </Box>
	  	


	  	<Box style={{marginTop: 30}}>
	  		<video src="/Gameplay/SeretsOfChernobyl.mp4" width="30%" controls style={{paddingBottom:30}}/>
	  		<video src="/Gameplay/Escape.mp4" width="30%" height="20%" controls style={{paddingBottom:30}}/>
	  		<video src="/Gameplay/Test.mp4" width="30%" controls style={{paddingBottom:30}}/>
	    </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AppsPage;
