import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 19px;
    line-height: 1.5em;
    font-family: 'Nunito Sans', sans-serif;
    width: 326px;
`;

class Paragraf extends React.Component{
    render(){
        return (  
            <Text>{this.props.text}
           </Text>
        
        );
    }
  }
  export default Paragraf;