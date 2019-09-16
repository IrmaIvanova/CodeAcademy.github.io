import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
font-size: 48px;
margin-bottom: 0;

`

class TitleH2 extends React.Component {
  render(){
    return (
      <div><H2>{this.props.text}</H2></div>

    );
  }
}
export default TitleH2;