import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar.js';
import LandingHeader from './components/Header.js';
import HeaderBackground from './components/HeaderBackgraund.js';
const AppWrapper = styled.div`
  background-color: #fafafa;
`;
function App() {
  return (
    <Fragment>

      <AppWrapper>
        <Navbar />
        <LandingHeader/>
        <HeaderBackground/>
      </AppWrapper>
    </Fragment>
  );
}
export default App;