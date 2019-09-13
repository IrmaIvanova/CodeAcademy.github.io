import React from 'react';
import styled from 'styled-components';
import  Logo  from './logo.svg';
import './Navbar.css';
import Link from './Link.js';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;


const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
const MenuLink = styled.a``;
function Header() {
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
          <MenuLink href="#">

          </MenuLink>
          <MenuLink href="#">

          </MenuLink>
          <MenuLink href="#">

          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}
export default Header;