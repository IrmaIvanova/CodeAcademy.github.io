import React from 'react';
import styled from 'styled-components';
import './Button.css'

const Btn = styled.button`
  background-color: #ffd503;
  color: #333;  
  padding: 12px 20px;
  margin:16px 0 0;
  font-weight: 700;
  font-size: 18px;
  width: 270px;
  height: 52px;
  border-radius: 50px;
  border: none;
  font-family: 'Nunito Sans', sans-serif;
`;

class Button extends React.Component{
    render(){
        return (  
            <Btn className="Yellow">{this.props.text}</Btn>
        
        );
    }
  }
  export default Button;


