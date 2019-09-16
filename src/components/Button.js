import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #6400e4;
  border: none;
  color: #fff;  
  padding: 6px 16px;
  margin:18px 0  47px 0;
  font-weight: 700;
  font-size: 18px;
  width: 332px;
  height: 56px;
  border-radius: 50px;
  font-family: 'Nunito Sans', sans-serif;
`;

class Button extends React.Component{
    render(){
        return (  
            <Btn>{this.props.text}</Btn>
        
        );
    }
  }
  export default Button;


