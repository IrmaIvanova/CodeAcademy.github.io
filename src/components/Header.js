import React from 'react';
import styled from 'styled-components';
import  Logo  from './logo.svg';
import './Header.css';
import HeaderRightColumn from './HeaderRight.js';
import HeaderLeftColumn from './HeaderLeft.js';




const Header = styled.div`
  max-width: 1170px;
  height: 75vh;
  margin: 0 auto 50px;
  font-family: 'Nunito Sans', sans-serif;
`;
const HeaderContent = styled.div`
    display:flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
`;

const Logotype = styled.h2`
    color: #6400e4;
    font-size: 23px;
    display: flex;
    align-self: center;
    font-weight: 400;    

`;
const Span = styled.span`
    align-items: center;
    display: flex;
    font-size: 26px;
    letter-spacing: 0.1em;
`;

function LandingHeader() {
  return (

        <Header>
            <Logotype>
               <img className="logotitle" src={Logo} alt=''/> <Span>/PRO</Span>
            </Logotype>
        <HeaderContent className="BackImg">
            <HeaderLeftColumn/>
            <HeaderRightColumn/>
        </HeaderContent>


      </Header>

  );
}
export default LandingHeader;