import React from 'react';
import styled from 'styled-components';
import Link from './Link.js';

import './Header.css';




const HeaderLeft = styled.div`
  width: 585px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;



const Title = styled.h1`
    font-size: 64px;
    font-weight: 800;
    position: relative;
    font-family: 'Nunito Sans', sans-serif;
`;



const Paragraf = styled.p`
    font-size: 20px;
    margin: 0 0 32px 0;
    line-height: 1.9em;
    font-family: 'Nunito Sans', sans-serif;
    display: flex;
    width:100%;

`;


const Button = styled.button`
  background-color: #6400e4;
  border: none;
  color: #fff;  
  padding: 6px 16px;
  font-weight: 700;
  font-size: 16px;
  width: 332px;
  height: 56px;
  border-radius: 50px;
  font-family: 'Nunito Sans', sans-serif;
`;

function HeaderLeftColumn() {
  return (


            <HeaderLeft>
                <Title>The <span className='underline'>Easiest </span>Way to Learn to Code</Title>
                <Paragraf> Unlock Codecademy’s premium features and get where you're going, faster.</Paragraf>
                <Paragraf><Button>Upgrade Now</Button></Paragraf>
                <Paragraf>On a team? Explore <Link link="Codeacademy for Bussines"/> </Paragraf>
            </HeaderLeft>




  );
}
export default HeaderLeftColumn;