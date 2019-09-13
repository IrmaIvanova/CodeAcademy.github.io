import React from 'react';
import styled from 'styled-components';
import Link from './Link.js';


const Header = styled.div`
  max-width: 1170px;

  height: 120vh;
  display: flex;
  flex-direction: space-around;
  align-items: center;
  margin: 0 auto;
  background-color: pink;

`;
const HeaderLeft = styled.div`
  width: 33.333%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const HeaderRight = styled.div`
  width: 33.333%;
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
        <HeaderLeft>
        <Button>Upgrade Now</Button>
        </HeaderLeft>

        
        <HeaderRight>

        </HeaderRight>

      </Header>

  );
}
export default LandingHeader;