import React from 'react';
import { lazy } from 'react';
import { Village } from '../subComponents/Village/Village';
import { faqList } from '../subComponents/Village/faqList';
import styled from 'styled-components';
import bgVillage from '../assets/Images/bgVillage.jpg';
import { mediaQueries } from './Themes';
const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const MainContainer = styled.div`
  background-image: url(${bgVillage});
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
const BackVilage = styled.div`
  background-color: #15181d;
`;
const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  margin-right: 1000px;
  margin-top: 500px;
  color: #000;
  text-shadow: 2px 2px 2px #fa6d1b;
  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
    margin-right: 0px;
    margin-top: 0px;
  }
`;

const VillagePage = () => {
  return (
    <BackVilage>
      <MainContainer>
        <Title>Заброшенные деревни Чернобыля</Title>
      </MainContainer>
      <PowerButton />
      <Village faqList={faqList} />;
    </BackVilage>
  );
};
// font-family: 'Karla', sans-serif;
export default VillagePage;
