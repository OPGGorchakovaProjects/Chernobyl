import React from 'react';
import { Village } from './Village';
import { faqList } from './faqList';
import styled from 'styled-components';
import bgVillage from '../../assets/Images/village.png';
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
  background-size: cover;
  background-repeat: no-repeat;
`;
const BackVilage = styled.div`
  background-color: #15181d;
`;
const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  
  position: absolute;
  bottom: 10px;
  left:50px;

  color: #000;
  color: rgb(228, 228, 228);
  //text-shadow: 2px 2px 2px #fa6d1b;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 2em;
    text-align: left;
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
