import React from 'react';
import { Village } from './Village';
import { faqList } from './faqList';
import styled from 'styled-components';
import bgVillage from '../../assets/Images/bgVillage.jpg';
import { mediaQueries } from '../UI/Themes';

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
  font-family: Pacifico, cursive;
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
      <Village faqList={faqList} />;
    </BackVilage>
  );
};
export default VillagePage;
