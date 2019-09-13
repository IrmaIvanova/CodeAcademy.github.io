import React from 'react';
import styled from 'styled-components';
import Link from './Link.js';
import  Logo  from './logo.svg';
import './Header.css';

const Header = styled.div`
  max-width: 1170px;
  height: 120vh;
  align-items: center;
  margin: 0 auto;
`;

const HeaderLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;



const Logotype = styled.h2`
    color: #6400e4;
    font-size: 23px;
    display: flex;
    align-items: center;
    font-weight: 400;
`;
const Span = styled.span`
    align-items: center;
    display: flex;
    font-size: 26px;
    letter-spacing: 0.1em;
`;
const Title = styled.h1`
    font-size: 64px;
    position: relative;
`;



const Paragraf = styled.p`
    font-size: 19px;
    margin: 0 0 32px;
`;

const HeaderRight = styled.div`
  width: 50%;
  text-align: right;
  padding: 26px 20px;
  display: flex;
  flex-diraction: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
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
`;

function LandingHeader() {
  return (

      <Header>
            <Logotype>
               <img className="logotitle" src={Logo} alt=''/> <Span>/PRO</Span>
            </Logotype>

        <HeaderLeft>
            <Title>The <span className='underline'>Easiest </span>Way to Learn to Code</Title>
            <Paragraf> Unlock Codecademy’s premium features and get where you're going, faster.</Paragraf>
            <Button>Upgrade Now</Button>
            <Link link="Codeacademy for Bussines"/>
        </HeaderLeft>

        
        <HeaderRight>

        </HeaderRight>

      </Header>

  );
}
export default LandingHeader;