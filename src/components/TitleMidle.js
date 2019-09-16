import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
font-size: 28px;
margin-bottom: 10px;
font-family: 'Nunito Sans', sans-serif;

`

class TitleMidle extends React.Component {
  render(){
    return (
      <div><H2>{this.props.text}</H2></div>

    );
  }
}
export default TitleMidle;