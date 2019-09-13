import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar.js';

const AppWrapper = styled.div`
  background-color: #fafafa;
`;
function App() {
  return (
    <Fragment>

      <AppWrapper>
        <Navbar />

      </AppWrapper>
    </Fragment>
  );
}
export default App;