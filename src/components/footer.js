import React from 'react';
import styled from 'styled-components';
import  Logo  from '../img/logogray.png';
import './Navbar.css';
import Link from './Link.js';
import FaceBook from '../img/facebook.png';
import Twitter from '../img/twitter.png';
import LinkedIn from '../img/linkedIn.png';

const Footer = styled.div`
  background-color: #15141F;
  height: 75px;
  padding: 24px 0px 0 0;
  width: 1900px;

`;


const NavFooter = styled.div`

  display: flex;
  flex-direction: space-around;
  align-items: center;
  margin: 0 auto;
`;

const FooterLeft = styled.div`
  width: 33.333%;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterCenter = styled.div`
  width: 33.333%;
  text-align: center;
  display: flex;
  a{
    color:#a1a1a6;
    margin-right: 15px;
  }
`;

const FooterRight = styled.div`
  width: 33.333%;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  img{
    margin-left: 30px;
  }

`;

function FoFooter() {
  return (
    <Footer>
      <NavFooter>
        <FooterLeft>
        <img className="logo" src={Logo} alt="logo"/>

        </FooterLeft>
        <FooterCenter>
        <Link link="© Codecademy 2019"/>
        <Link link="Jobs"/>
        <Link link="Privacy Policy"/>
        <Link link="Terms of Use"/>
        </FooterCenter>
        
        <FooterRight>
        <img src={FaceBook} alt="logo"/>
        <img src={Twitter} alt="logo"/>
        <img src={LinkedIn} alt="logo"/>

        </FooterRight>

      </NavFooter>
    </Footer>
  );
}
export default FoFooter;




