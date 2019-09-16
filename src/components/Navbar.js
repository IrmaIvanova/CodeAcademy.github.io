import React from 'react';
import styled from 'styled-components';
import  Logo  from './logo.svg';
import SearchImg from '../img/search.svg';
import './Navbar.css';
import Link from './Link.js';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  font-family: 'Nunito Sans', sans-serif;
  position: relative;
  z-index: 2;
  height: 60px;
`;


const NavHeader = styled.div`
  max-width: 1900px;
  width: 100%;
  display: flex;
  flex-direction: space-around;
  align-items: center;
  margin: 0 auto;
  height: 60px;
  
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;

`;

const Button = styled.button`

  background-color: #6400e4;
  border: none;
  color: #fff;
  padding: 6px 16px;
  margin: 6px 16px;
  font-weight: 700;
  font-size: 16px;
  width: 106px;
  height: 38px;

`;

const Search = styled.div`
  width: 110px;
  display: flex;
  justify-content: flex-start;
`


function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
        <img className="logo" src={Logo} alt="logo"/>
        <Link link="Catalog"/>
        <Link link="Pricing"/>
        </NavLeft>
        <NavCenter>

        </NavCenter>
        
        <NavRight>
        <Search className="search"><img  src={SearchImg} alt="search"/></Search>
        <Link link="Log in"/>
        <Button>Sign up</Button>
        </NavRight>

      </NavHeader>
    </Nav>
  );
}
export default Navbar;